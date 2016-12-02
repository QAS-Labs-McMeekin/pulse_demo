
      describe('Login to the UI and Press Component Butotn', function(Inputs) {
        
      it('should Login to UI', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('UI Login Successful');
        Done();
      });
    
      it('should Press component button', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Component Rendered');
        Done();
      });
    
      it('should ', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('');
        Done();
      });
    
      });
    