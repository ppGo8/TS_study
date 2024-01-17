"use strict";
const obj = {
    username: '张三',
    age: 46
};
// 不是任意类型都可以交叉的 胡来就会变成never
let str = 23;
