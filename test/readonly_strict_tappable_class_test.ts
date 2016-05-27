/// <reference path="../typings/main.d.ts" />

const { expect } = require(`chai`);
const { spy } = require('sinon');

import ReadOnlyStrictTestClass from './support/ReadOnlyStrictTestClass';

describe('ReadOnlyStrictTappableClass', () => {
  let testClass;
  
  beforeEach(() => {
    testClass = new ReadOnlyStrictTestClass();
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
  
  it('should throw an error if instance is mutated inside tap function', () => {
    expect(() => {
      testClass.tap(instance => instance.set(5))
    }).to.throw(`Cannot assign to read only property 'value' of object '#<ReadOnlyStrictTestClass>'`);
  })
});