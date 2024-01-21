interface Person {
  name: string,
  age: number,
}

// for ... in 遍历获取对象变量中的所有key
// xxx ... in keyof 遍历获得对象类型的所有key

// 以下三种方法类型等价
type PerKeyValsType = {
  [p in keyof Person]: Person[p];
}

type PerKeyValsType2 = {
  [p2 in 'name' | 'age']: Person[p2]
}
type PerKeyValsType3 = {
  ['name']: string,
  ['age']: number
}

type PerKeyValsComType<T> = {
  [p in keyof T]: T[p];
}
type PerKeyValsPersonType = PerKeyValsComType<Person>