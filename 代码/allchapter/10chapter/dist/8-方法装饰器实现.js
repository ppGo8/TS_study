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
/**
 * 方法装饰器
 * @param targetClassPrototype 类的原型[RoleService.prototype]
 * @param methodname 方法名
 * @param methodDecri 方法的数据属性
 */
function MyMethodDecorator(targetClassPrototype, methodname, methodDecri) {
    console.log('targetClassPrototype:', targetClassPrototype);
    console.log('key:', methodname);
    console.log('methodDecri:', methodDecri);
}
// 目标类
var RoleService = /** @class */ (function () {
    function RoleService() {
        this.roleName = '管理员';
    }
    // 调用方法拦截器
    RoleService.prototype.DistributeRoles = function () {
        console.info('分配角色中');
    };
    __decorate([
        MyMethodDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RoleService.prototype, "DistributeRoles", null);
    return RoleService;
}());
