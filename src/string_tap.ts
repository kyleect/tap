/// <reference path="../typings/main.d.ts" />

Object.defineProperty(String.prototype, 'tap', {
  value: function stringTap (fn: (t: string) => void): string {
    fn.call(null, String(this));
    return String(this);
  }
});