"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
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
function findMesaage(condition) {
    if (typeof condition === 'number') {
        return messageInfo.find(item => item.id === condition);
    }
    else {
        return messageInfo.filter(item => item.type === condition);
    }
}
console.info((_a = findMesaage(1)) === null || _a === void 0 ? void 0 : _a.id);
console.info(findMesaage(MessageType.Audio).length);
