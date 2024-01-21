"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _3_____1 = __importDefault(require("../7chapter/3-\u6CDB\u578B\u51FD\u6570"));
const _4_________1 = require("../7chapter/4-\u6CDB\u578B\u51FD\u6570\u5B9E\u73B0\u6392\u5E8F");
// 下面两种实现签名都可以,一种是全部写any(包括泛型);一种是把所有支持的参数类型写成联合类型的方式
// function sort<T>(data: string | Array<T>): string | Array<T> {
function sort(data) {
    if (typeof data === 'string') {
        return (0, _4_________1.strSort)(data);
    }
    else if (data instanceof Array) {
        if ((0, _4_________1.isChinese)(data)) {
            return (0, _4_________1.chineseSort)(data);
        }
        const newArr = data.map((item) => {
            return typeof item === "string" ? (0, _4_________1.strSort)(item) : item;
        });
        return (0, _3_____1.default)(data);
    }
    throw new Error(`data must be string or array. ${data}`);
}
// 再使用点语法时或鼠标悬浮在调用函数处时,就可以精确显示返回值类型和它的属性和方法了
console.info(sort('cba'));
console.info(sort(['张三', '李四', '王五']));
console.info(sort(['321', '456', '987']));
