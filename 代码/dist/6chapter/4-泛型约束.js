"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    printOrd() { }
    ;
    static getCount() { }
    ;
}
// 可以通过赋值的方式来变相的查看keyof 获取得到的类型
let p1 = 'orderId'; // 在赋值号右侧写东西的时候，会提示出具体可选择的内容是什么，即orderId、orderName、printOrd
let p2 = 'orderId';
let p3 = 'orderId';
