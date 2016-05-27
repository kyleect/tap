import {ITappableClass} from './ITappableClass';

export default class ReadOnlyTappableClass implements ITappableClass {
  tap (fn: (value: this) => void): this {
    const clone:this = Object.assign({ __proto__: Object.getPrototypeOf(this) }, this);
    fn.call(null, clone);
    return this;
  }
}