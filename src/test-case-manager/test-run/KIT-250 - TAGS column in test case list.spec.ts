
      describe('KIT-250 - TAGS column in test case list', function(Inputs) {
        
      it('should Click on [Test Case Library]  in the top navigation', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Sub-tab 'Test Case' under [Test Case Library] is selected to be displayed by default');
        Done();
      });
    
      it('should Verify TAGS column in Test Case', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('TAGS column is added to Test Case list');
        Done();
      });
    
      it('should Add a new test case and specify one ore more tags for it then save it', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('the input tags displays in the TAGS column correclty');
        Done();
      });
    
      it('should Edit an existing test case by adding/removing one more more tags then save it', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('TAGS column is updated to display the changes correctly');
        Done();
      });
    
      it('should Edit an existing test case by adding/removing one more more tags then close it without saving', function(Done) {
        expect(Inputs['Test Run']['5'].result).to.eql('TAGS column keeps display as before');
        Done();
      });
    
      });
    