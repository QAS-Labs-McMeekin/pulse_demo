
      describe('A test case for yet another story', function(Inputs) {
        
      it('should Login to the UI', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Login works');
        Done();
      });
    
      it('should Click on new feature', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('New feature works');
        Done();
      });
    
      });    
    