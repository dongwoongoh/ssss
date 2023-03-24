type CustomPickType<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]: T[P]
}