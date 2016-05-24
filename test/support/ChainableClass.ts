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