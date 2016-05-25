/// <reference path="../typings/main.d.ts" />

require('../src');

const { expect } = require('chai');

describe('Number.prototype.tap((value:number) => void): number', () => {
  it('is defined', function () {
    expect(Number.prototype.tap).to.be.a('function');
  });
  
  it('returns the same value as its entry point in the method chain', () => {
    expect((1).tap(obj => 5)).to.equal(1);
  });
});