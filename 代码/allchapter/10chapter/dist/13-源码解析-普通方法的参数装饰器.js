"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length
    console.info('c', c)
    var r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    console.info('r', r); // r的值为修饰参数所在的方法
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    // 执行 d(target, key), 即执行__param函数
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    // 返回r，r为被修饰属性所在的方法的数据属性
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// __param(0, UrlParma('参数具体信息'))
// 第一个参数: 装饰器修饰的参数位置, 由于闭包该paramIndex参数不会被释放
// 第二个参数：传递进来的真正的装饰器函数(在外部定义好了 目标原型、方法名、位置)
// 返回值：重新返回装饰器函数,只需要传递目标和方法名
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function UrlParma(params) {
    return function (targetClassPrototype, methodaname, paramindex) {
        console.info(targetClassPrototype);
        console.info(methodaname);
        console.info(paramindex); // 修饰的参数是第几个参数,从0开始
        targetClassPrototype.info = params;
    };
}
var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.eat = function (name, addr) {
        console.log(name, addr);
    };
    // 4个参数
    // 第一个参数比其他装饰器多一个环节： 
    //   1.带参的装饰器, 整个装饰器函数执行,返回值为真正的装饰器函数,交给__param
    //   2.执行__param
    __decorate([
        __param(0, UrlParma('参数具体信息')),
        __param(1, UrlParma('参数具体信息')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], People.prototype, "eat", null);
    return People;
}());
