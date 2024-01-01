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
enum Week {
  Monday = "myMonday",
  Thuesday = "myThuesday",
  Wensday = "myWensday",
  Thirsday = "myThirsday",
  Firday = "myFirday",
}

const a = Week.Monday;
const b = Week["Monday"];
console.info(a, b);