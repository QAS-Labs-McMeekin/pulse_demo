Stub Test Case
-----------

Id: undefined

Componenents:
Tags: stub, 

Test Steps:
=============
1. Stub
2. Test
> This
> Case


Test Script:
=============

Inputs: Test Run, Done

```javascript
  describe('Stub Test Case', function(Inputs) {
    
      it('should Stub', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('This');
        Done();
      });
    
      it('should Test', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Case');
        Done();
      });
    
  });
```
