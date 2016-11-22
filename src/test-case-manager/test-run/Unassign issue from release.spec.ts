
      describe('Unassign issue from release', function(Inputs) {
        
      it('should Open Release', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('View Release Results');
        Done();
      });
    
      it('should Remove association from release', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Release association removed');
        Done();
      });
    
      it('should ', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('');
        Done();
      });
    
      });
    