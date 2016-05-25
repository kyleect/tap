/// <reference path="../typings/main.d.ts" />

require('../src');

import ChainableClass from './support/ChainableClass';

const { expect } = require('chai');

describe('Object.prototype.tap<T>((value: T) => void): T', function () {
  it('is defined', function () {
    expect(Object.prototype.tap).to.be.a('function');
  });
  
  it('returns the same value as its entry point in the method chain', function () {
    const testClass = new ChainableClass();
    
    expect(
      testClass
        .set(1)
        .set(2)
        .tap<ChainableClass>(obj => 10)
        .get()
    ).to.equal(2);
  });
  
  it('throws exception if object is modified in tap function', function () {
    const testClass = new ChainableClass();
    
    expect(() => {
      testClass
        .set(1)
        .set(2)
        .tap<ChainableClass>(obj => obj.set(5))
        .get();
    }).to.throw(`Cannot assign to read only property 'value' of object '#<ChainableClass>'`);
  });
});