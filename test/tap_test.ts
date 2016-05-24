/// <reference path="../typings/main.d.ts" />

require('../src');

import ChainableClass from './support/ChainableClass';

const { expect } = require('chai');

describe('Object.prototype.tap<T>(() => T): T', function () {
  it('is defined', function () {
    expect(Object.prototype.tap).to.be.a('function');
  });
  
  it('returns the same value as its entry point in the method chain', function () {
    const testClass = new ChainableClass();
    
    expect(
      testClass
        .set(1)
        .set(2)
        .tap<ChainableClass>(obj => obj.set(5))
        .get()
    ).to.equal(2);
  });
});