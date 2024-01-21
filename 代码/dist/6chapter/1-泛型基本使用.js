"use strict";
// 需求：下面的value可能是string/number或其他各种类型
// 失败的方法：写成any，因为any不进行类型检测后面写的时候没有提示
let ref = {
    value: 'pp'
};
let ref2 = {
    value: {
        name: 'pp',
        age: 123
    }
};
// 此时再调用时 就有了提示
ref2.value.name;
