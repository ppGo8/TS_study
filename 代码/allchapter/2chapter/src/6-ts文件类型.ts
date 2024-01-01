// 交叉类型
type obj1 = { username: string};
type obj2 = { age: number};
const obj: obj1 & obj2 = {
  username: '张三',
  age: 46
}
// 不是任意类型都可以交叉的 胡来就会变成never
let str: string & number = 23