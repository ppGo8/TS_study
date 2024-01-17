"use strict";
// ts中的写法
class MyClassTS {
    constructor(name_) {
        this.name = name_;
        MyClassTS.count++;
    }
    getName() {
        return this.name;
    }
    // 静态方法
    static getCount() {
        return MyClassTS.count;
    }
}
MyClassTS.count = 0; // 静态属性
const n1 = new MyClassTS('pp');
console.info(n1.getName());
console.info(MyClassTS.getCount());
const n2 = new MyClassTS('test');
console.info(n2.getName());
console.info(MyClassTS.getCount());
