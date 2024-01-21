"use strict";
/**
 * 判断传入引用类型为对象还是数组
 * @param data
 * @returns {boolean} true:对象 false:数组
 */
function isObject(data) {
    return Object.prototype.toString.call(data) === "[object Object]";
}
function deepCopy(data) {
    if (isObject(data)) {
        if (Array.isArray(data)) {
            return data.map(item => deepCopy(item));
        }
        const copy = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                copy[key] = deepCopy(data[key]);
            }
        }
        return copy;
    }
    else {
        return data;
    }
}
const originalObject = {
    name: 'John',
    age: 30,
    nested: {
        city: 'New York',
        country: 'USA',
    },
    hobbies: ['reading', 'traveling'],
};
const copiedObject = deepCopy(originalObject);
originalObject.nested.city = 'pp狗';
console.log(originalObject);
console.log(copiedObject);
