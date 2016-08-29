
      describe('KIT-320 Long test step content display full of information', function(Inputs) {
        
      it('should Open an existing test case or create a new one', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('n/a');
        Done();
      });
    
      it('should Add steps to the test case', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('n/a');
        Done();
      });
    
      it('should Input a long desc and expected result with multi-lines', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Desc and Expected result fields are automatically expanded to show full of input information');
        Done();
      });
    
      it('should Save and open the test case again', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('Desc and Expected result fields are automatically expanded to show full of information');
        Done();
      });
    
      });
    