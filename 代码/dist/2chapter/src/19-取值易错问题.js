"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 易错点1：访问一个指定结构的对象,确定的属性名
let obj = {
    username: 'pp',
    age: 24
};
// 1.通过key字面量访问对象属性值,正常
let myname = obj['username'];
// 2.通过变量访问对象属性值,异常
// 原因：这个变量是可变的，而上述对象中的属性是固定的
// 用可变的去访问固定的,为了安全起见ts不允许
let nameKey = 'username';
let myname2 = obj[nameKey];
// 2的解决方法：使用const常量
const nameConst = 'username';
let myname3 = obj[nameConst];
// 易错点2：访问一个object类型的对象,属性名不确定 即可以有任何属性名
let obj2 = {
    username: 'pp',
    age: 24
};
