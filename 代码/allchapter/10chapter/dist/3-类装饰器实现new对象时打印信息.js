"use strict";
/*
* 需求: 在任何一个类new一个对象的时候,打印相关信息
* 思路：
  1.【错误】直接修改这个类的构造函数；这是一个死方法如果要该很多类每个都要写一遍,大量重复代码
  2.【装饰器】装饰器可以在不修改原类的情况下增加功能
    2.1 带参、不带参数的装饰器在程序执行的时候会立即执行函数体中的内容，而不会等到new一个对象
    2.2 应该想办法拿到、使用、改造构造函数；
       2.2.1 方法1：拿到构造函数,改造后,只返回构造函数；不能修改目标类其他方法  【没听过】
       2.2.2 方法2：通过继承调用拿到父类的构造函数,改造构造函数;继承会自动包含目标类上的方法;回子类给原来的类变量【正解】
               思想：获取了他所在区域的全部
* 解决方案：
  1. 目标类作为父类,继承得到子类
  2. 在子类的构造函数中使用super调用父类构造函数,且新增需要的业务逻辑代码
  3. 返回子类
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 1. 完成日志信息的装饰器类
// 传递类,必须使用泛型约束告诉ts编译器传进来变量T是一个构造函数类型
function LoggerClassDecorator(tagetClass) {
    // tagetClass: any子类的类型为自己：typeof CustomerService === new(...arg: any) => CustomerService
    // tagetClass: 虽然继承了,但是类型没继承到哇；在类型上还是不可以的,因此要把父类的类型变成自身真实的类型而不是any
    // 如果不是通过参数传递的继承,而是在同一个作用域两个类型之间的继承,直接就可以赋值；
    // 参数传递主要是传递过程中的类型发生了强制变化/修改，破坏了继承关系中的类型
    var LoggerSonClass = /** @class */ (function (_super) {
        __extends(LoggerSonClass, _super);
        function LoggerSonClass() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            console.log('日志信息...tagetClass', tagetClass.name);
            return _this;
        }
        return LoggerSonClass;
    }(tagetClass));
    // 一定要搞清: 将一个函数return 返回值赋值给调用函数的变量
    //             1.接收处的变量类型和返回变量类型的兼容关系
    //             2.return返回变量不用考虑自己函数类中的类型,因为这只在自己的局部作用域中有效
    // 函数被调用,返回给目标类变量类型为: typeof CustomerService === new(...arg: any) => CustomerService
    // 而在调用该函数的函数中的**接受变量,即目标类** typeof tagetClass类型, 而不是形参的any类型
    return LoggerSonClass;
}
// 2.目标类
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.username = 'ppgo';
    }
    CustomerService = __decorate([
        LoggerClassDecorator,
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());
