
      describe('KIT-323 - Tooltip displays when hovering on TC name', function(Inputs) {
        
      it('should Open an existing or creating a new test', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('n/a');
        Done();
      });
    
      it('should Input a long name for the case', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('n/a');
        Done();
      });
    
      it('should Hover on test case name', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Tooltip appears right under pointer and shows full test case name');
        Done();
      });
    
      it('should Update test case name by inputting another name for it', function(Done) {
        expect(Inputs['Test Run']['4'].result).to.eql('n/a');
        Done();
      });
    
      it('should Hover on TC name', function(Done) {
        expect(Inputs['Test Run']['5'].result).to.eql('Tooltip is udpated to show the new name');
        Done();
      });
    
      it('should Click on TC name', function(Done) {
        expect(Inputs['Test Run']['6'].result).to.eql('Tooltip does not display');
        Done();
      });
    
      });
    