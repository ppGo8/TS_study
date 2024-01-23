"use strict";
// 不带参数的类装饰器
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
// tagetClass就是class本身
// 类装饰器：就是把这个类交给装饰器
function FirstClassDecorator(tagetClass) {
    var tagetClassObj = new tagetClass();
    tagetClassObj.buy();
    console.log('tagetClass.name', tagetClass.name);
}
// 这是一个不带参数的装饰器
// 是否传递参数不是看装饰器函数中是否有参数
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.name = 'pp';
    }
    CustomerService.prototype.buy = function () {
        console.log(this.name + '购买');
    };
    CustomerService = __decorate([
        FirstClassDecorator,
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());
