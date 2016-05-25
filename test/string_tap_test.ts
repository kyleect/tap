/// <reference path="../typings/main.d.ts" />

require('../src');

import ChainableClass from './support/ChainableClass';

const { expect } = require('chai');

describe('String.prototype.tap((value:string) => void): string', () => {
  it('is defined', function () {
    expect(String.prototype.tap).to.be.a('function');
  });
  
  it('returns the same value as its entry point in the method chain', () => {
    expect("test".tap(obj => "changed")).to.equal("test");
  });
});