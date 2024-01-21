interface Person {
  name: string,
  age: number,
  addr: string,
}

type keyType = keyof Person; // 直接获取keyof鼠标悬浮显示 keyof Person

type getKeyofType<T> = T extends any ? T : never // 借助泛型和条件,泛型处理联合类型是逐个处理,逐个返回,因此可以看到
type keySeenType = getKeyofType<keyof Person> // 鼠标悬浮 "name" | "age" | "addr"