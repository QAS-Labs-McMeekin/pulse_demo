Some interesting test case
-----------

Id: undefined

Componenents:
Tags: login, api, 

Test Steps:
=============
1. Click on login
2. Click on feature button
* Login works
* Feature works


Test Script:
=============

Inputs: Test Run, Done

```javascript
  describe('Some interesting test case', function(Inputs) {
    
      it('should Click on login', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Login works');
        Done();
      });
    
      it('should Click on feature button', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Feature works');
        Done();
      });
    
  });
```
