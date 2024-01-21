"use strict";
// 不含参数装饰器
// 首次调用时执行||后面的函数; 二次调用时,直接使用this.__decorate
var __decorate = (this && this.__decorate)  
|| function (decorators, target, key, desc) {
    // c: arguments.length, 
    // 作用：根据长度判断装饰器修饰的目标是什么,可以获取目标哪些信息
    // arguments.length == 2, 修饰类或构造器参数
    // arguments.length == 3, 修饰方法参数或属性
    // arguments.length == 4, 修饰方法
    var c = arguments.length 
    // r: targetInfo, arguments.length == 2时 r为被修饰的类
    // r: targetInfo, arguments.length == 3时 r为被undefined 不做任何处理
    // r: targetInfo, arguments.length == 4时 r为被修饰方法的所有数据属性
    var r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    // decorators形参 整个装饰器数组
    // decorate变量 用来保存装饰器数组中的每一个元素,逐步迭代 
    // if中内容 元数据信息
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else {
      // 装饰器倒着循环,说明一个目标上有多个装饰器,执行顺序【从后面开始执行】
      for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) { 
          // r: targetInfo 
          // c (arguments.length) == 2, decorate为 类装饰器或构造函数装饰器 执行该decorate(targetInfo) => 就是将这个类传进当前装饰器
          // c (arguments.length) == 3, decorate为 方法参数或属性装饰器, 执行
          // c (arguments.length) == 4, decorate为 方法装饰器, 执行
          // 返回值：当c==2时,若d(r)装饰器函数若没有写return, 此时进入 || r,返回r即被修饰的目标
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
      }
    }
    // 修饰目标为方法
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
    // __decorate函数可以接受4个参数decorators, target, key, desc
    // 第一个参数：装饰器数组。因为可能被多个装饰器修饰,所以为数组
    // 第二个参数：此处为被修饰的类
    // 第三个参数：修饰类时为空
    // 第四个参数：修饰类时为空 
    // 返回值：若装饰类函数没有写return,此时返回值就是他自己
    CustomerService = __decorate([
        FirstClassDecorator,
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());
