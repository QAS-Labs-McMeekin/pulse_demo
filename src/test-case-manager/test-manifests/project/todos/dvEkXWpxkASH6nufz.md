Create a big blue button
-----------

Id: dvEkXWpxkASH6nufz

Componenents: Back End,
Tags: ABC, 

Test Steps:
=============
1. Load our page
2. Big blue button under header
3. Button is clickable
> See the QJ Logo
> Button is present, and blue
> See the animation


Test Script:
=============

Inputs: Test Run, Done

```javascript
  describe('Create a big blue button', function(Inputs) {
    
      it('should Load our page', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('See the QJ Logo');
        Done();
      });
    
      it('should Big blue button under header', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('Button is present, and blue');
        Done();
      });
    
      it('should Button is clickable', function(Done) {
        expect(Inputs['Test Run']['3'].result).to.eql('See the animation');
        Done();
      });
    
  });
```

