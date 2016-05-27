/// <reference path="../typings/main.d.ts" />

const { expect } = require(`chai`);
const { spy } = require('sinon');

import ReadOnlyTestClass from './support/ReadOnlyTestClass';

describe('ReadOnlyTappableClass', () => {
  let testClass;
  
  beforeEach(() => {
    testClass = new ReadOnlyTestClass();
  });
  
  it('should pass the same instance as its entry point in the method chain', () => {
    expect(testClass.tap(v => v)).to.equal(testClass);
  });
  
  it('should call the function passed in to tap', () => {
    const spyFn = spy();
    testClass.tap(spyFn);
    expect(spyFn.calledOnce).to.be.true;
  });
  
  it('should pass a clone of the instance as value to tap function', () => {
    testClass.tap(value => expect(value).to.eql(testClass));
  });
  
  it('should pass a clone of the instance to the tap function', () => {
    expect(testClass.tap(instance => instance.set(5)).get()).to.equal(0);
  })
});