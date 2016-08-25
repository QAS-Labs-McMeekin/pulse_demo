
      describe('Delete a component on an issue', function(Inputs) {
        
      it('should Open Edit work item', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Show edit work item screen');
        Done();
      });
    
      it('should Remove a component from the work item', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Work Item updated with removed component');
        Done();
      });
    
      });
    