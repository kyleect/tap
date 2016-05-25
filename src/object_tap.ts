/// <reference path="../typings/main.d.ts" />

/**
 * Tap in to a method call chain, call function and continue call chain
 * @memberof Object
 * @param {function} fn - Function called
 * @returns {any} Call chain entry point value
 */
Object.prototype.tap = function objectTap<T> (fn: (t: T) => void): T {
  const clone: T = Object.assign({ __proto__: this.__proto__ }, this);
  const froze: T = Object.freeze(clone);
  fn.call(null, froze);
  return this;
};