# Tap

A typescript implementation of Ruby's tap.

## Arrays
```ts
[1,2,3].tap(a => [4,5,6]) === [1,2,3]
```

## Strings

```ts
"test".tap(s => "changed") === "test"
```

## Numbers

```typescript
(100).tap(n => 0) === 100
```

## Objects

```ts
export default class ChainableClass {
  private value:number = 0;
  
  public set (value:number):ChainableClass {
    this.value = value;
    return this;
  }
  
  public get ():number {
    return this.value;
  }
}

const testClass = new ChainableClass();

testClass
  .set(1)
  .set(2)
  .tap<ChainableClass>(obj => 10)
  .get() === 2
```

## Immutability

Values can not be modified from the function passed in to tap. For objects and arrays it will throw an error if mutation is attempted.