
      describe('Login to the Kitsune UI', function(Inputs) {
        
      it('should Login to UI', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Login is successful');
        Done();
      });
    
      it('should Click on feature button', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Feature works');
        Done();
      });
    
      });    
    