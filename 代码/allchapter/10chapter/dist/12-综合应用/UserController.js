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
var Inject_1 = require("./Inject");
var Get_1 = require("./Get");
var Controller_1 = require("./Controller");
var UserService_1 = require("./UserService");
// 当一个请求发送时，会经过控制器类
// 装饰器执行顺序：
//   属性装饰器、方法参数装饰器、方法装饰器、类装饰器 
// 控制类
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.login = function () {
        // let peopleServiceInstance = 
    };
    __decorate([
        (0, Inject_1.Inject)('userService'),
        __metadata("design:type", UserService_1.UserService)
    ], UserController.prototype, "userService", void 0);
    __decorate([
        (0, Get_1.Get)('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "login", null);
    UserController = __decorate([
        (0, Controller_1.Controller)('/')
    ], UserController);
    return UserController;
}());
