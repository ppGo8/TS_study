"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 模拟arrayList,支持add和get方法
class ArrayList {
    constructor() {
        this.index = 0;
        this.arr = [];
    }
    get(index) {
        return this.arr[index];
    }
    add(ele) {
        this.arr.push(ele);
    }
}
const p1 = new ArrayList();
p1.add('123');
console.info(p1.get(0));
const p2 = new ArrayList();
p2.add({ name: 'pp', age: 123 });
console.info(p2.get(0));
