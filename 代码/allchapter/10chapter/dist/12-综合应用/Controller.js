"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
function Controller(rootPath) {
    return function (targetClass) {
        console.info('———————————类装饰器——————————');
        console.log('targetClass:', targetClass);
        // 在类装饰器上获取方法装饰器上定义的 属性名为path的属性
        Object.keys(targetClass.prototype).forEach(function (methodname) {
            console.info(Reflect.getMetadata("path", targetClass.prototype, methodname));
        });
    };
}
exports.Controller = Controller;
