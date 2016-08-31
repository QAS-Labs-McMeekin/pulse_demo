
      describe('KIT-317 - Not showing NaN for Effort on work item', function(Inputs) {
        
      it('should Create a new work item', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('n/a');
        Done();
      });
    
      it('should Import some test to the current organization', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Default effort of imported test case is zero');
        Done();
      });
    
      it('should Verify Effort on the work item', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Effort shows '0' instead of 'NaN'');
        Done();
      });
    
      it('should Update effort for the test cases', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('n/a');
        Done();
      });
    
      it('should Verify effort on work item', function(Done) {
        expect(Inputs['Test Run']['5'].result).to.eql('Effort on work item shows correctly and rounded to 2 digit in decimail part');
        Done();
      });
    
      });
    