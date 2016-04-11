FROM qasymphony/http-server:0.9.0
MAINTAINER Vu Bui

ADD dist/. /dist

ENTRYPOINT http-server /dist
