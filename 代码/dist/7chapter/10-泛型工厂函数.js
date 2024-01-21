"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(_name) {
        this.name = '硅谷银行';
        this.name = _name;
    }
    loan() {
        console.log(this.name + '已放贷...');
    }
}
Bank.count = 100;
// 需求: 创建任意一个类的实例化对象时, 页面上输出内容
// 方法1：在所有类的构造函数中手动写 【不现实】
// 方法2：泛型工厂函数 【推荐】
// 以下三种写法等价
// function createFactorConstructor(Constructor: new (...args: any) => any) {
// function createFactorConstructor(Constructor: bankCtorType) {
function createFactorConstructor(Constructor, ...args) {
    console.log('创建对象...');
    return new Constructor(args.join(','));
}
const ppInstance = createFactorConstructor(Bank, '花花');
console.info(ppInstance);
