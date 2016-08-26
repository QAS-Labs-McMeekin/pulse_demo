
      describe('KIT-206 - Test Case Library - Filters Pull Out Menu', function(Inputs) {
        
      it('should Click on [Test Case Library]  option on top navigation', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('[Test Case Library]  page displays and sub-tab 'Test Case' is selected by default');
        Done();
      });
    
      it('should Verify Filter icon on top left corner of test case list', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Filter icon is added to top left corner of test case list');
        Done();
      });
    
      it('should Click on Filter icon', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Filters Menu is pulled out');
        Done();
      });
    
      it('should Verify filters on the menu', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('The menu has some filters:
- "PROJECT".  It's a dropdown and lists the available projects of the current organization
- "STATUS":  dropdown, lists 5 options New, In_progress, Baselined, Approved and All
- "ASSIGNED": dropdown, lists all available users in the organization
- "TAG":  dropdown, lists all available tags in the organization
- Work Item Status:  dropdown, lists 4 options Pending, Planning, Execute and Completed
- Work Item content: search box, empty by default');
        Done();
      });
    
      });
    