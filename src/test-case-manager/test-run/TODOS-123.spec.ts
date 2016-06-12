import {
  it,
  describe,
  expect,
  beforeEach,
} from 'angular2/testing';

describe('TODOS-123', function() {

  let Inputs = { 
    'Test Run': [ {},
      {
        result: 'false'
      },
      {
        result: 'false'
      }
    ]
  };

  describe('A new test case for my feature', function() {
    
      it('should Login to the app with credentials', function(Done) {
        expect(Inputs['Test Run']['1'].result).toEqual('Successful login');
        Done();
      });
    
      it('should Execute new feature', function(Done) {
        expect(Inputs['Test Run']['2'].result).toEqual('New feature works correctly');
        Done();
      });
    
  });

});
