"use strict";
// 通用交叉方法作用：
// 通过这个方法，可以接受外部数量不确定的对象，然后将这些对象合并得到交叉类型
Object.defineProperty(exports, "__esModule", { value: true });
let p1 = { a: 123, b: 456 };
let p2 = { c: 'pp', d: '24' };
function cross(obj1, obj2) {
    // {}和Objectshi 除了null和undeined的 根类型
    // 类型断言只要有 父/子关系的类就可以断言 不报错
    // 因此,{}可以断言成除了null和undeined的任何类型
    const combine = {};
    // 合并操作
    // combine[k]报错是因为: k属性不存在与Object类型上,所以在调用的时候会报错；因此使用断言强制转换为any类型
    // for (let k in obj1) (combine  as any)[k] = obj1[k]; 
    // for (let k in obj2) (combine  as any)[k] = obj2[k]; 
    union(combine, obj1);
    union(combine, obj2);
    return combine;
}
// 写函数解决冗余代码
function union(combine, curobj) {
    for (let i in curobj)
        combine[i] = curobj[i];
    return combine;
}
console.info(cross(p1, p2));
