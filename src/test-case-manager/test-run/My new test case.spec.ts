
      describe('My new test case', function(Inputs) {
        
      it('should Step Description Text', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Step Excepted result Text');
        Done();
      });
    
      it('should Step Description Text', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Step Excepted result Text');
        Done();
      });
    
      it('should Step Description Text', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Step Excepted result Text');
        Done();
      });
    
      });    
    