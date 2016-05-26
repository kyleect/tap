/// <reference path="../typings/main.d.ts" />

const { expect } = require(`chai`);

import TestClass from './support/TestClass';

describe('TappableClass', () => {
  let testClass;
  
  beforeEach(() => {
    testClass = new TestClass();
  });
  
  it('should pass the same instance as its entry point in the method chain', () => {
    expect(testClass.tap(v => v)).to.equal(testClass);
  });
});