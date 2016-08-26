
      describe('KIT-206 - Test Case Library - Filters Pull Out Menu - Filtering test cases by Project', function(Inputs) {
        
      it('should Open test case list by navigating Test Case Library -> Test Case', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('N/A');
        Done();
      });
    
      it('should Click on Filter button', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Filter Pull Out menu display');
        Done();
      });
    
      it('should - Leave Project default value
- Verify test case in test case list', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Test cases belonging to the default project display in the list only');
        Done();
      });
    
      it('should - Set Project another option in the dropdown
- Verify test case in test case list', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('Test cases belonging to the select project display in the list only');
        Done();
      });
    
      });
    