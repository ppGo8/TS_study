"use strict";
// 参数装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    // c: 参数个数
    // r: targetInfo
    // c == 3 执行desc r值为undefined
    // c == 4 执行desc r值为undefined
    var c = arguments.length
    var r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else {
      for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) {
          // c == 3 执行d(target, key) 若装饰器没写return, => 则 r = r 还是undefined
          // c == 4 执行d(target, key, r===undefined) 若装饰器没写return, => 则 r = r 还是undefined
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
      }
    }
    // c == 3 第一个条件就终止
    // c == 4 第二个条件就终止 r为undefined
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function loginProperty(attrValue) {
    return function (targetPrototype, attrName) {
        console.log(targetPrototype);
        console.log(attrName);
        targetPrototype.constructor.custLevelDescri = function () {
            console.log('消费500升级svip');
        };
        console.log(targetPrototype.custLevelDescri);
    };
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = "pp";
    }
    /**
     * 此处有4个或3个参数
     * 1. 装饰器数组
     * 2. 属性所在原型对象
     * 3. 属性名
     * 4. 根据控制台编译命令不同, 
     *    第四个参数可能为void 0, 或者没有第4个参数;
     *    但是二者的运行结果都是一样的,在代码中做了处理
     */
    __decorate([
        loginProperty('顾客等级'),
        __metadata("design:type", String)
    ], Person.prototype, "degree", void 0);
    return Person;
}());
