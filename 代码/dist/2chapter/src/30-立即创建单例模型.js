"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DateUtil {
    // 私有化构造函数,这样这个构造函数只能在类内部被调用,
    // 即只能在类内部new,在类外部new会报错
    constructor() { }
    ;
    // 工具方法写成实例方法
    formateDate() {
        console.info('formateDate');
    }
    ;
    diffDateByDay() {
        console.info('diffDateByDay');
    }
    ;
}
DateUtil.dateUtil = new DateUtil();
exports.default = DateUtil;
const dateUtil1 = DateUtil.dateUtil;
const dateUtil2 = DateUtil.dateUtil;
console.info(dateUtil1 === dateUtil2);
dateUtil1.formateDate();
dateUtil1.diffDateByDay();
