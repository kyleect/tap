declare interface Object {
  tap<T> (fn: (t: T) => void): T
}