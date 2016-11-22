The TODO header should say "Exciting"
-----------

Id: undefined

Componenents:
Tags: todos, header, html, 

Test Steps:
=============
1. Open the todos page
2. View the H3 header
* Todos page rendered
* H3 Header should say "Exciting"


Test Script:
=============

Inputs: Test Run, Done

```javascript
  describe('The TODO header should say "Exciting"', function(Inputs) {
    
      it('should Open the todos page', function(Done) {
        expect(Inputs['Test Run']['1'].result).to.eql('Todos page rendered');
        Done();
      });
    
      it('should View the H3 header', function(Done) {
        expect(Inputs['Test Run']['2'].result).to.eql('H3 Header should say "Exciting"');
        Done();
      });
    
  });
```
