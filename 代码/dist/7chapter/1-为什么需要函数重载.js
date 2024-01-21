"use strict";
// 现有如下数据
var MessageType;
(function (MessageType) {
    MessageType["Audio"] = "Audio";
    MessageType["Image"] = "Image";
})(MessageType || (MessageType = {}));
let messageInfo = [
    {
        id: 1,
        type: MessageType.Image,
        message: 'hello'
    },
    {
        id: 2,
        type: MessageType.Image,
        message: 'pp'
    },
    {
        id: 3,
        type: MessageType.Audio,
        message: 'pp'
    },
    {
        id: 4,
        type: MessageType.Audio,
        message: 'pp'
    }
];
// 需求：根据id或者type来搜索messageInfo中符合条件的数据
// id唯一，所以id返回的一定是对象
// type不唯一,所以id返回的一定是数组对象
// 一般做法
function findMesaage(condition) {
    if (typeof condition === 'number') {
        return messageInfo.find(item => item.id === condition);
    }
    else {
        return messageInfo.filter(item => item.type === condition);
    }
}
// 此时有以下缺陷
// 1.鼠标悬浮在findMesaage函数调用处,提示的类型为函数调用处的全部返回值类型 而不是具体的实际的需要的返回值类型
// 2.函数调用后使用点语法 无法提示该类型下的正确属性 (自己手写使用也会报错)
console.info(findMesaage(1));
console.info(findMesaage(MessageType.Audio));
// 如果想只用某个类型下的属性和方法： 类型断言
console.info(findMesaage(1).message);
console.info(findMesaage(MessageType.Audio)[0]);
