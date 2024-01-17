"use strict";
// // 数字枚举
// enum Week {
//   Monday = 1,
//   Thuesday,
//   Wensday,
//   Thirsday,
//   Firday
// }
// const a = Week.Monday;
// const b = Week[1];
// console.info(a, b);
// 字符串枚举
var Week;
(function (Week) {
    Week["Monday"] = "myMonday";
    Week["Thuesday"] = "myThuesday";
    Week["Wensday"] = "myWensday";
    Week["Thirsday"] = "myThirsday";
    Week["Firday"] = "myFirday";
})(Week || (Week = {}));
const a = Week.Monday;
const b = Week["Monday"];
console.info(a, b);
