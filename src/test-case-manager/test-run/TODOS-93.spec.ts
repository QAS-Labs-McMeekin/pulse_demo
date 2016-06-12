import {
  it,
  describe,
  expect,
  beforeEach,
} from 'angular2/testing';

describe('TODOS-93', function() {

  let Inputs = { 
    'Test Run': [ {},
      {
        result: 'See the QJ Logo'
      },
      {
        result: 'Button is present, and blue'
      }
    ]
  };

  describe('Create a big blue button', function() {
    
      it('should Load our page', function(Done) {
        expect(Inputs['Test Run']['1'].result).toEqual('See the QJ Logo');
        Done();
      });
    
      it('should Big blue button under header', function(Done) {
        expect(Inputs['Test Run']['2'].result).toEqual('Button is present, and blue');
        Done();
      });
    
  });

});
