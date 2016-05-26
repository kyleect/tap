import {ITappableClass} from './ITappableClass';

export default class TappableClass implements ITappableClass {
  tap (fn: (value: this) => void): this {
    fn.call(null, this);
    return this;
  }
}