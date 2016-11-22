
      describe('Create a release', function(Inputs) {
        
      it('should Create a release', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('release created');
        Done();
      });
    
      it('should ', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('');
        Done();
      });
    
      });
    