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
/**
 * 带参数的方法装饰器
 * @param targetClassPrototype 类的原型[RoleService.prototype]
 * @param methodname 方法名
 * @param methodDecri 方法的数据属性
 */
function MyMethodDecorator(params) {
    return function (targetClassPrototype, methodname, dataProps) {
        var targetMethod = dataProps.value;
        dataProps.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.info('前置拦截...');
            console.info.apply(console, args);
            // 注意:这里由于由嵌套了一层,所以要在此处调用;
            // 原方法：真正的执行
            targetMethod.apply(this, args);
            console.info('后置拦截...');
        };
        dataProps.enumerable = false;
    };
}
// 目标类
var RoleService = /** @class */ (function () {
    function RoleService() {
        this.roleName = '管理员';
    }
    // 调用方法拦截器
    RoleService.prototype.DistributeRoles = function (name, age) {
        console.info('分配角色中...');
    };
    __decorate([
        MyMethodDecorator('**带参数的方法装饰器**'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", void 0)
    ], RoleService.prototype, "DistributeRoles", null);
    return RoleService;
}());
var testInstance = new RoleService();
// 调用这个方法
testInstance.DistributeRoles('pp', 22);
console.info(Object.getOwnPropertyDescriptor(RoleService.prototype, 'DistributeRoles'));
