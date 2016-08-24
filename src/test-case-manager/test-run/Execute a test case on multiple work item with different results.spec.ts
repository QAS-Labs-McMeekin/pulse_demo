
      describe('Execute a test case on multiple work item with different results', function(Inputs) {
        
      it('should Create a new work item (WI A)', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Step Excepted result');
        Done();
      });
    
      it('should Create a new test case which links to that work item', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Step Excepted result');
        Done();
      });
    
      it('should Approve then execute the test case', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Step Excepted result');
        Done();
      });
    
      it('should Mark test case result as passed', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('See the passed test case result in WI A');
        Done();
      });
    
      it('should Create another work item (WI B)', function(Done) {
        expect(Inputs['Test Run']['5'].result).to.eql('Step Excepted result');
        Done();
      });
    
      it('should Search & link the above test case to the WI B', function(Done) {
        expect(Inputs['Test Run']['6'].result).to.eql('Step Excepted result');
        Done();
      });
    
      it('should Execute the test case in the context of WI B', function(Done) {
        expect(Inputs['Test Run']['7'].result).to.eql('Step Excepted result');
        Done();
      });
    
      it('should Mark result as failed', function(Done) {
        expect(Inputs['Test Run']['8'].result).to.eql('See the failed result in WI B, see the passed result in WI A');
        Done();
      });
    
      });
    