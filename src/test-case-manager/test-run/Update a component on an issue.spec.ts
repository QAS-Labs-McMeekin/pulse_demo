
      describe('Update a component on an issue', function(Inputs) {
        
      it('should Open a new work item', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Work item created');
        Done();
      });
    
      it('should Add a component to the work item', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Component saved successfully');
        Done();
      });
    
      });
    