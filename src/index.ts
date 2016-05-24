/// <reference path="../typings/main.d.ts" />

declare interface Object {
  tap<T> (fn: (t: T) => void): T
}

/**
 * Tap in to a method call chain, call function and continue call chain
 * @memberof Object
 * @param {function} fn - Function called
 * @returns {any} Call chain entry point value
 */
Object.prototype.tap = function tap<T> (fn: (t: T) => void): T {
  const clone: T = Object.assign({ __proto__: this.__proto__ }, this);
  fn.call(null, clone);
  return this;
};
