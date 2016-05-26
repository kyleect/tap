declare interface IChainableClass {
  tap (fn: (value: IChainableClass) => void): IChainableClass
}

declare class ChainableClass {
  tap (fn: (value: IChainableClass) => void): IChainableClass
}