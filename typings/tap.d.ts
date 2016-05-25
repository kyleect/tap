declare interface Object {
  tap<T> (fn: (t: T) => void): T
}

declare interface String {
  tap (fn: (t: string) => void): string
}

declare interface Array<T> {
  tap (fn: (t: T[]) => void): T[]
}

declare interface Number {
  tap (fn: (t: number) => void): number
}