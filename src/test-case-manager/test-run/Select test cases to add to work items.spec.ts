
      describe('Select test cases to add to work items', function(Inputs) {
        
      it('should Be able to select test case in the data table', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Step Excepted result');
        Done();
      });
    
      it('should Be able to remove added test cases', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Step Excepted result');
        Done();
      });
    
      it('should Click to add test cases to the work item', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Test cases are added to the work item');
        Done();
      });
    
      });
    