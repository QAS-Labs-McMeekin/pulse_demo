
      describe('KIT-206 - Test Case Library - Filters Pull Out Menu - Filtering test cases by Status', function(Inputs) {
        
      it('should Open test case list by navigating Test Case Library  -> Test Case', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('N/A');
        Done();
      });
    
      it('should Clicking on Filter icon', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Filter Pull Out Menu display');
        Done();
      });
    
      it('should - Leave Status with default value 'All'
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('All test cases available in system display in test case list no matter what status they have');
        Done();
      });
    
      it('should - Set Status = "New"
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('Test cases having status "New" display in the list only');
        Done();
      });
    
      it('should - Set Status = "In_progress"
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['5'].result).to.eql('Test cases having status "In_progress" display in the list only');
        Done();
      });
    
      it('should - Set Status = "Baselined"
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['6'].result).to.eql('Test cases having status "Baselined" display in the list only');
        Done();
      });
    
      it('should - Set Status = "Approved"
- Verify test cases in the list', function(Done) {
        expect(Inputs['Test Run']['7'].result).to.eql('Test cases having status "Approved" display in the list only');
        Done();
      });
    
      });
    