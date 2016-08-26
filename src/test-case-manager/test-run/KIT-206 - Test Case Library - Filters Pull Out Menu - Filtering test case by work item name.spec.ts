
      describe('KIT-206 - Test Case Library - Filters Pull Out Menu - Filtering test case by work item name', function(Inputs) {
        
      it('should Open Test Case list', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('n/a');
        Done();
      });
    
      it('should Click on Filter icon', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Filter Pull Out menu display');
        Done();
      });
    
      it('should - Input an ID or keyword into Work Item ID or text and hit Enter or click Search button
- Verify test case in the list', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Test cases belonging to the work item whose ID/name contain the specified text in the filter display in the list');
        Done();
      });
    
      it('should - Clear Work Item  ID or text and hit Enter or click Search button
- Verify test case in the list', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('All test cases belonging to any work items display in the list');
        Done();
      });
    
      });
    