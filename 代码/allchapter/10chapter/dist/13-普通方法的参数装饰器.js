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
    __decorate([
        __param(0, UrlParma('参数具体信息')),
        __param(1, UrlParma('参数具体信息')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], People.prototype, "eat", null);
    return People;
}());
