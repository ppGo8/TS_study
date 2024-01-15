// interface Car {
//   [key: number]: any;
//   [key: symbol]: any;
//   [key: string]: string;
// }

// type CarNumberValueType = Car[number]; // 数字类型键对应的值类型
// type CarSymbolValueType = Car[symbol]; // Symbol 类型键对应的值类型
// type CarStringValueType = Car[string]; // 字符串类型键对应的值类型

// const sym = Symbol('不哈哈了');
// interface Person {
//   sex: '男' | '哈哈哈'| '不是' ,
//   age: '女' | '哈哈哈'| '不是' ,
//   [name: string] : '女' | '男' | '哈哈哈'| '不是' ,
//   [bt: symbol]: '不是' | '哈哈哈',
//   [sym]: '不是',
// }
// type a = Person[string] 
// type b = Person[string] 

// let a = 3; // interface不能使用let声明的变量
const b = '6';
const symid = Symbol('aaa');
interface Test {
  name: '张三',
  [b]: number | '哈哈哈',
  [symid]: number | '嗨嗨嗨',
}
type name1 = Test['name']
type b1 = Test[typeof b]
type b2 = Test['6']
type c1 = Test[typeof symid];
// 在 TypeScript 中，直接使用常量 b 作为接口属性名，TypeScript 会将其解释为字面量类型而不是变量
// 而使用const 类型推导得到的值由是原始赋值
// Test[typeof b] 中的 typeof b 将得到字面量类型 6，而不是变量 b 所代表的值。


export {}