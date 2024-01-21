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
// let instanceBank: ConstructorBankType = new Bank('pp') // 这样是错的,因为实例变量的类型为这个类名Bank,而不是构造函数的类型
let cbInstance = Bank; // 构造函数
// 此时new cbInstance和Bank是一样的效果;已经没有区别了
console.log(new cbInstance('pp1'));
console.log(new Bank('pp2'));
