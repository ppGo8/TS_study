"use strict";
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
// 类上使用元数据
require("reflect-metadata");
// 1.类上定义元数据
// 可以直接使用@Reflect.metadata语法
// 不用写define,且只需要指定key和value
var People = /** @class */ (function () {
    function People() {
        this.username = 'pp';
    }
    People.prototype.eat = function () {
    };
    __decorate([
        Reflect.metadata('shuxing', '名字'),
        __metadata("design:type", String)
    ], People.prototype, "username", void 0);
    __decorate([
        Reflect.metadata('fangfa', '吃泰餐'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], People.prototype, "eat", null);
    People = __decorate([
        Reflect.metadata('lei', '地球人')
    ], People);
    return People;
}());
var ChinesePeople = /** @class */ (function (_super) {
    __extends(ChinesePeople, _super);
    function ChinesePeople() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ChinesePeople;
}(People));
// 2.获取类上定义的元数据
console.info(Reflect.getMetadata('lei', People));
console.info(Reflect.getMetadata('shuxing', People.prototype, 'username'));
console.info(Reflect.getMetadata('fangfa', People.prototype, 'eat'));
// 3.判断类上是否包含某个元数据(包含继承)
console.info(Reflect.hasMetadata('lei', People));
console.info(Reflect.hasMetadata('shuxing', People.prototype, 'username'));
console.info(Reflect.hasMetadata('fangfa', People.prototype, 'eat'));
// 4.判断是否为自有元数据
console.info(Reflect.hasMetadata('fangfa', ChinesePeople.prototype, 'eat'));
console.info(Reflect.hasOwnMetadata('fangfa', ChinesePeople.prototype, 'eat'));
