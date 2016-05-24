/// <reference path="../typings/main.d.ts" />
Object.prototype.tap = function tap(fn) {
    const clone = Object.assign({ __proto__: this.__proto__ }, this);
    fn.call(null, clone);
    return this;
};
//# sourceMappingURL=index.js.map