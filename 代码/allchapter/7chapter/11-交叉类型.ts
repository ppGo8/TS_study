// 1.交叉两个对象类型返回两个对象类型的并集
type P1 = {a: number, b: number};
type P2 = {c: string, d: string};
type P3 = P1 & P2;
// 只能在使用时ts报错 查看交叉效果
let p3:P3 = {
  a: 123,
  b: 456,
  c: '123',
  d: '456'
}

// 以下并集没有实际意义
type S = string[] & string; // 面试可能会问
type S2= string & number;

export {}