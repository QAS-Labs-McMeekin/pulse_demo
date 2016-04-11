#!/bin/bash

# variables
ENV=$1
IMG=$2
SHA=$3
EB_APP=todos
EB_ENV=$EB_APP-$ENV
EB_REGION=ap-northeast-1
DOCKERRUN_FILE=$SHA-Dockerrun.aws.json

# create eb definition file
sed "s/<IMG>/${IMG//\//\\/}:$SHA/; s/<S3_BUCKET>/$S3_BUCKET/" < Dockerrun.aws.json.template > $DOCKERRUN_FILE

# configure ec2 instance
aws configure set default.region $EB_REGION
# push definition file to s3
aws s3 cp $DOCKERRUN_FILE s3://$S3_BUCKET/$DOCKERRUN_FILE
# deploy the docker image
aws elasticbeanstalk create-application-version --application-name $EB_APP --version-label $SHA --source-bundle S3Bucket=$S3_BUCKET,S3Key=$DOCKERRUN_FILE
# Update Elastic Beanstalk environment to new version
aws elasticbeanstalk update-environment --environment-name $EB_ENV --version-label $SHA
