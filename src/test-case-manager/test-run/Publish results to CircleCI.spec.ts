
      describe('Publish results to CircleCI', function(Inputs) {
        
      it('should Flag a work item for execution', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Work Item enters execution state');
        Done();
      });
    
      it('should Start execution', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Execution Started');
        Done();
      });
    
      it('should Fail execution', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Trigger Failed Build Result in CircleCI');
        Done();
      });
    
      it('should ', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('');
        Done();
      });
    
      });
    