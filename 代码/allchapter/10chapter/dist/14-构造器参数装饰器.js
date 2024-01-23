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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectConstructor = void 0;
var UserService_1 = require("./12-\u7EFC\u5408\u5E94\u7528/UserService");
require("reflect-metadata");
function InjectConstructor(injectid) {
    // 第一个参数不再是原型,而是一个类
    return function (targetClass, paramname, paramindex) {
        console.info(targetClass);
        console.info(paramname);
        console.info(paramindex);
        // 获取该构造函数上所有参数的类型
        var paramArr = Reflect.getMetadata('design:paramtypes', targetClass);
        console.info(paramArr);
        // 获取被修饰的参数的类型, 它是一个类,因此可以执行new
        var constrParamArrobj = new paramArr[paramindex]();
    };
}
exports.InjectConstructor = InjectConstructor;
var UserController = /** @class */ (function () {
    function UserController(userService, count) {
        this.count = count;
    }
    UserController.prototype.login = function () {
        // let peopleServiceInstance = 
    };
    UserController = __decorate([
        __param(0, InjectConstructor('userService')),
        __metadata("design:paramtypes", [UserService_1.UserService, Number])
    ], UserController);
    return UserController;
}());
