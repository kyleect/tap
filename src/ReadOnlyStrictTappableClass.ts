import {ITappableClass} from './ITappableClass';

export default class ReadOnlyStrictTappableClass implements ITappableClass {
  tap (fn: (value: this) => void): this {
    const clone:this = Object.assign({ __proto__: Object.getPrototypeOf(this) }, this);
    const froze:this = Object.freeze(clone);
    fn.call(null, froze);
    return this;
  }
}