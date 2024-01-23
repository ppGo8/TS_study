"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 在对象和对象属性上使用元数据
require("reflect-metadata");
var obj = {
    name: 'pp',
    age: 24,
    info: function () {
        console.log('信息:', name);
    }
};
// 1.在对象上 定义和获取元数据
Reflect.defineMetadata('ppMeta', '我是对象元数据', obj);
console.log(Reflect.getMetadata('ppMeta', obj));
// 2.在对象属性上 定义和获取元数据
Reflect.defineMetadata('ppMeta2', '对象属性元数据', obj, 'age');
console.info(Reflect.getMetadata('ppMeta2', obj, 'age'));
// 注意在对象属性上定义元数据
//   不会修改对象属性的value值
//   不会修改getOwnPropertyDescriptor的数据
// 总结：只能通过 'reflect-metadata' 包提供的方法获取
console.info(obj);
console.info(Object.getOwnPropertyDescriptor(obj, 'name'));
// 查看是否存在元数据,返回Boolean
console.info(Reflect.hasMetadata('ppMeta2', obj));
console.info(Reflect.hasMetadata('ppMeta2', obj, 'age'));
