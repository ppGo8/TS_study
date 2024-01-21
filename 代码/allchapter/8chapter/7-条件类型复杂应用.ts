// 需求：给下面的接口动态追加属性,满足未来的使用
interface Person {
  name: string,
  age: number
}

// 给类型T追加K: V
// 只考虑传入字符串属性名的形式
type AddAttrToIner<T, K extends string, V> = {
  // P in ((keyof T) | K)
  [P in keyof T | K]: P extends keyof T ? T[P] : V 
}

type Test = AddAttrToIner<Person, 'addr', string>