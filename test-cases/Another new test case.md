Another new test case
-----------

Id: undefined
Description
=============
> Something

Componenents:
Tags: stub, 

Test Steps:
=============
1. Another
2. Test
3. Results
* new
* Case
* Ok


Test Script:
=============

Inputs: Test Run, Done

```javascript
  describe('Another new test case', function(Inputs) {
    
      it('should Another', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('new');
        Done();
      });
    
      it('should Test', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Case');
        Done();
      });
    
      it('should Results', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('Ok');
        Done();
      });
    
  });
```
