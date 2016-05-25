/// <reference path="../typings/main.d.ts" />

Object.defineProperty(Number.prototype, 'tap', {
  value: function numberTap (fn: (t: number) => void): number {
    fn.call(null, this.valueOf());
    return this.valueOf();
  }
});