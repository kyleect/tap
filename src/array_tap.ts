/// <reference path="../typings/main.d.ts" />

Object.defineProperty(Array.prototype, 'tap', {
  value: function arrayTap<T> (fn: (t: T[]) => void): T[] {
    const froze: T[] = Object.freeze(this);
    fn.call(null, froze);
    return this;
  }
});