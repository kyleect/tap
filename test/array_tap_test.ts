/// <reference path="../typings/main.d.ts" />

require('../src');

import ChainableClass from './support/ChainableClass';

const { expect } = require('chai');

describe('Array<T>.prototype.tap((value: T) => void): T', function () {
  it('is defined', function () {
    expect(Array.prototype.tap).to.be.a('function');
  });
  
  it('returns the same value as its entry point in the method chain', () => {
    expect([1,2,3].tap(obj => [4,5,6])).to.eql([1,2,3]);
  });
});