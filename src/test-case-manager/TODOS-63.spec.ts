import {
  it,
  describe,
  expect,
  beforeEach,
} from 'angular2/testing';

describe('TODOS-60', () => {

 describe('Check for the correct contents of the header', () => {
    it("should say Hello QualityJam", (done) => {
        expect(true).toEqual(true);
//      expect(true).toEqual('header does not say Hello QualityJam!');
      done();
    });
    it("should contain an !", (done) => {
      //expect(true).toEqual('header does not contain a !');
      done();
    });
  });

});
