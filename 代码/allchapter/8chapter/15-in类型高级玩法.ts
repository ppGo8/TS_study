interface Person {
  name: string,
  age: number,
  height: number,
  weight: number,
}

type SubPerson2 = Omit<Person, 'name'>
// 手动实现Omit
// type Omit<T, K extends keyof T> = {
//   // as的作用: 每次执行完一次as前的遍历,就会执行一次as后的判断条件
//   [P in keyof T as P extends K ? never : P]: T[P]
// }
type Omit<T, K extends keyof T> = {
  // as的作用: 每次执行完一次as前的遍历,就会执行一次as后的判断条件
  [P in keyof T as Exclude<P,K>]: T[P]
}
type SubPerson3 = Omit<Person, 'name'>

export {}