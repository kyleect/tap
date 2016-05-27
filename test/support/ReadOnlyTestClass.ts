import ReadOnlyTappableClass from '../../src/ReadOnlyTappableClass';

export default class ReadOnlyTestClass extends ReadOnlyTappableClass {
  private value:number = 0;
  
  public get ():number {
    return this.value;
  }
  
  public set (value:number):this {
    this.value = value;
    return this;
  }
}