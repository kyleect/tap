/// <reference path="../typings/main.d.ts" />

declare interface Object {
  tap<T> (fn: (t: T) => void): T
}

Object.prototype.tap = function tap<T> (fn: (t: T) => void): T {
  const clone: T = Object.assign({ __proto__: this.__proto__ }, this);
  fn.call(null, clone);
  return this;
};
