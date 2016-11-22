
      describe('Some interesting test case', function(Inputs) {
        
      it('should Click on login', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Login works');
        Done();
      });
    
      it('should Click on feature button', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Feature works');
        Done();
      });
    
      it('should ', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('');
        Done();
      });
    
      });
    