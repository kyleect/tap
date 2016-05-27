import ReadOnlyStrictTappableClass from '../../src/ReadOnlyStrictTappableClass';

export default class ReadOnlyStrictTestClass extends ReadOnlyStrictTappableClass {
  private value:number = 0;
  
  public get ():number {
    return this.value;
  }
  
  public set (value:number):this {
    this.value = value;
    return this;
  }
}