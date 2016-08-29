
      describe('KIT-318 - Adding users to an organization', function(Inputs) {
        
      it('should Create a new organization or editing an existing one', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('n/a');
        Done();
      });
    
      it('should Add a user into the organizaton', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('User display right after added');
        Done();
      });
    
      it('should Click Save button', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Organize list display and the user shows in the list for the organization');
        Done();
      });
    
      it('should Deactivate a member in an organization', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('member is hidden  from the organization in Organization list');
        Done();
      });
    
      it('should Reactivate it again', function(Done) {
        expect(Inputs['Test Run']['5'].result).to.eql('member display for the organization in Organization list again');
        Done();
      });
    
      it('should Deactivate some users in an organization but cancel it', function(Done) {
        expect(Inputs['Test Run']['6'].result).to.eql('The users still display in organization list');
        Done();
      });
    
      });
    