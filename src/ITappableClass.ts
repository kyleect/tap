export interface ITappableClass {
  tap (fn: (value: ITappableClass) => void): ITappableClass
}