
      describe('Search test case in work item modal', function(Inputs) {
        
      it('should See search test case button in work item modal', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Step Excepted result');
        Done();
      });
    
      it('should Click on the button to open search test case modal', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Step Excepted result');
        Done();
      });
    
      });
    