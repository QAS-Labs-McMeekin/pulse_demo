
      describe('Remove a release', function(Inputs) {
        
      it('should Open a release', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Viewed Release');
        Done();
      });
    
      it('should Remove Release', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Release association removed from component');
        Done();
      });
    
      });
    