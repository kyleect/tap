/// <reference path="../typings/main.d.ts" />

const { expect } = require(`chai`);
const { spy } = require('sinon');

import TestClass from './support/TestClass';

describe('TappableClass', () => {
  let testClass;
  
  beforeEach(() => {
    testClass = new TestClass();
  });
  
  it('should pass the same instance as its entry point in the method chain', () => {
    expect(testClass.tap(v => v)).to.equal(testClass);
  });
  
  it('should call the function passed in to tap', () => {
    const spyFn = spy();
    testClass.tap(spyFn);
    expect(spyFn.calledOnce).to.be.true;
  });
  
  it('should pass instance as value to tap function', () => {
    testClass.tap(value => expect(value).to.equal(testClass));
  });
});