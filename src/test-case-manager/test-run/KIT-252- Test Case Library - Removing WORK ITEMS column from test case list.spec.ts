
      describe('KIT-252- Test Case Library - Removing WORK ITEMS column from test case list', function(Inputs) {
        
      it('should Select [Test Case Library] on top navigation', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('N/A');
        Done();
      });
    
      it('should Select sub-tab 'Test Case'', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('N/A');
        Done();
      });
    
      it('should Verify WORK ITEMS column in test case list', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('WORK ITEMS column is removed from test case list');
        Done();
      });
    
      });
    