"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = void 0;
require("reflect-metadata");
function Inject(injectid) {
    return function (targetClassPrototype, propertyKey) {
        console.info('———————————属性装饰器——————————');
        // 借助第三方包,获取属性修饰器修饰的属性的类型
        // PropClass === UserService
        var PropClass = Reflect.getMetadata("design:type", targetClassPrototype, propertyKey);
        new PropClass();
    };
}
exports.Inject = Inject;
