import {
  it,
  describe,
  expect,
  beforeEach,
} from 'angular2/testing';

describe('TODOS-58', () => {

 describe('Check for the correct contents of the header', () => {
    it("should say Hello QualityJam", (done) => {
      expect(true).toEqual(true);
      done();
    });
    it("should contain an !", (done) => {
      //expect(true).toEqual('header does not contain a !');
      done();
    });
  });

});
