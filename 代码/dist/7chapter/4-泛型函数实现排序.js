"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.strSort = exports.isChinese = exports.chineseSort = void 0;
// 数字、字符串数组排序
const _3_____1 = __importDefault(require("../7chapter/3-\u6CDB\u578B\u51FD\u6570"));
/**
 * 一个泛型函数: 实现字符串自排序、中文数组排序、数字数组排序、字符串数组排序(同时对元素内容进行自排序)
 * @param data
 * @returns
 */
function sort(data) {
    if (typeof data === 'string') {
        return strSort(data);
    }
    else if (data instanceof Array) {
        if (isChinese(data)) {
            return chineseSort(data);
        }
        const newArr = data.map((item) => {
            return typeof item === "string" ? strSort(item) : item;
        });
        return (0, _3_____1.default)(data);
    }
    throw new Error(`data must be string or array. ${data}`);
}
// 现在使用点语法,只能访问string和数组的公共方法
// 但是我们明确知道传入string就会返回string,传入Array就会返回Array，因此可以继续使用函数重载优化
console.info(sort('cba'));
console.info(sort(['张三', '李四', '王五']));
console.info(sort(['321', '456', '987']));
// 准备工作
/**
 * 中文数组排序
 * @param arr
 * @returns
 */
// 该函数的参数返回值类型为确定的string[],另外一个sort函数中调用此函数且return了该函数的返回值
// 因此sort的返回值就需要写一个 string[]；
// 而上面我们看到sort处已经有了一个Array<T>,因此改造这个函数传入传出的值都为泛型的形式
// function chineseSort(arr: Array<string>): string[] { 
//   return arr.sort((first, second) => {
//       return first.localeCompare(second, 'zh-CN') 
//   })
// }
function chineseSort(arr) {
    return arr.sort((first, second) => {
        // 在函数声明处,first和sencond的类型为T,所以编译器会报错没有localeCompare方法;所以要进行类型断言
        // 为as any 或者 string;
        // 因此在函数传入参数处不如直接写string
        return first.localeCompare(second, 'zh-CN');
    });
}
exports.chineseSort = chineseSort;
/**
 * 正则表达式，判断是否是中文数组
 * @param arr
 * @returns
 */
function isChinese(arr) {
    const pattern = /[\u4e00-\u9fa5]+/g;
    return arr.some((item) => {
        return pattern.test(item);
    });
}
exports.isChinese = isChinese;
/**
 * 字符串自排序
 * @param str
 * @returns
 */
function strSort(str) {
    const strArr = str.split('');
    return (0, _3_____1.default)(strArr).join('');
}
exports.strSort = strSort;
