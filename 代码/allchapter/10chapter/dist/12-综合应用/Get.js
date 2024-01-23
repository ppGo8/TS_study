"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = void 0;
require("reflect-metadata");
function Get(reqPath) {
    return function (targetClassPrototype, methodName, PropertyDescriptor) {
        console.info('———————————方法装饰器——————————');
        // 添加元数据
        Reflect.defineMetadata("path", reqPath, targetClassPrototype, methodName);
    };
}
exports.Get = Get;
