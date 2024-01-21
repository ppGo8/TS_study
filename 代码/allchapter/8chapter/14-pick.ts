// 1.获取接口属性
interface Book {
  ISBN: string,
  name: string,
  price: number,
  publisher: string,
}

type SubBook = Pick<Book, 'ISBN'| 'name'> // type SubBook = { ISBN: string; name: string; }

// 2.获取类
class Person {
  name!: string
  age!: number
}
type SubPerson = Pick<Person,'name' | 'age'> // type SubPerson = { name: string; age: number;}

export{}