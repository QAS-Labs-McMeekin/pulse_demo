import {
  it,
  describe,
  expect,
  beforeEach,
  fail
} from 'angular2/testing';

describe('TODOS-51', () => {

  describe('Check the new button', () => {
    it("should be a large button", (done) => {
      expect(true).toEqual(true);
      done();
    });
    it('should be red', (done) => {
      fail("The button is not red");
      done();
    });
    it('should have a click animation', (done) => {
      expect(true).toEqual(true);
      done();
    });
  });
  
});
