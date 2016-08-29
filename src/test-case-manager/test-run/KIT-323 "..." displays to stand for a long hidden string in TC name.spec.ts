
      describe('KIT-323 "..." displays to stand for a long hidden string in TC name', function(Inputs) {
        
      it('should Open an existing test case or create a new one', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('n/a');
        Done();
      });
    
      it('should Input a long name and click outside of name', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('The input name display some first characters only and "..." displays right after to stand for hidden characters');
        Done();
      });
    
      });
    