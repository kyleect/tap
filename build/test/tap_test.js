/// <reference path="../typings/main.d.ts" />
"use strict";
require('../src');
const ChainableClass_1 = require('./support/ChainableClass');
const { expect } = require('chai');
describe('Object.prototype.tap<T>(() => T): T', function () {
    it('is defined', function () {
        expect(Object.prototype.tap).to.be.a('function');
    });
    it('returns the same value as its entry point in the method chain', function () {
        const testClass = new ChainableClass_1.default();
        expect(testClass
            .set(1)
            .set(2)
            .tap(obj => obj.set(5))
            .get()).to.equal(2);
    });
});
//# sourceMappingURL=tap_test.js.map