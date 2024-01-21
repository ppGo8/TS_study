"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// 带参数的类装饰器
function FirstClassDecorator(params) {
    console.log(params);
    return function (tagetClass) {
        var tagetClassObj = new tagetClass();
        tagetClassObj.buy();
        console.log('tagetClass.name', tagetClass.name);
    };
}
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.name = 'pp';
    }
    CustomerService.prototype.buy = function () {
        console.log(this.name + '购买');
    };
    CustomerService = __decorate([
        // 带参数的装饰器：和不带参数的装饰器只有这里有区别
        // 拿到带参数的装饰器后,会首先在这里首先执行一边, 等待执行完毕
        // 执行完毕后,拿到返回值,将返回值(函数)作为放在这个数组中
        // 等待所有都执行完毕和返回值参数后, 执行__decorate
        // 最终的装饰器就是：return后返回的函数
        FirstClassDecorator('我是用来修饰CustomerService类的装饰器参数'),
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());
