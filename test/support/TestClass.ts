import TappableClass from '../../src/TappableClass';

export default class TestClass extends TappableClass {
  private value:number = 0;
  
  public get ():number {
    return this.value;
  }
  
  public set (value:number):this {
    this.value = value;
    return this;
  }
}