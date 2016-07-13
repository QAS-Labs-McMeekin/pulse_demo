
      describe('Test login on some new feature', function(Inputs) {
        
      it('should Login to the UI', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Login successful');
        Done();
      });
    
      it('should Step Description Text', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Step Excepted result Text');
        Done();
      });
    
      });    
    