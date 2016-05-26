# Tap

[![Build Status](https://travis-ci.org/maexsoftware/tap.svg?branch=master)](https://travis-ci.org/maexsoftware/tap)

A typescript implementation of Ruby's tap.

## Usage

If you want to get started right away then you can extend `TappableClass`. This
will give you a basic implementation of the tap method.

```ts
class BasicExampleClass extends TappableClass {
  public value:number = 0;
  
  public get ():number {
    return this.value;
  }
  
  public set (value:number):this {
    this.value = value;
    return this;
  }
}

const example = new BasicExampleClass();

example
  .set(10)
  .set(20)
  .tap(value => console.log(value)) // 20
  .set(30)
  .get(); // 30
```

If you want more control over the tap method implementation for your class then
you can simply implement `ITappableClass` with your own implementation.

```ts
class ExampleClass implements ITappableClass {
  tap (fn: (value: this) => void): this {
    const clone:this = Object.assign({ __proto__: Object.getPrototypeOf(this) }, this);
    const froze:this = Object.freeze(clone);
    fn.call(null, froze);
    return this;
  }
}
```