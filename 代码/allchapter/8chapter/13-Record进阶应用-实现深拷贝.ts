/**
 * 判断传入引用类型为对象还是数组
 * @param data 
 * @returns {boolean} true:对象 false:数组
 */
function isObject(data: Record<string, any> | baseType) { // Record<string, any> 可以接受数组和对象
  return Object.prototype.toString.call(data) === "[object Object]"
}

/**
 * 遍历实现实现深拷贝
 */
type baseType = string | number | symbol; 
function deepCopy(data: Record<string, any> | baseType): any {
  if(isObject(data)) {
    if(Array.isArray(data)){
      return data.map(item => deepCopy(item));
    }
    const copy: Record<string, any>  = {};
    for (const key in data as Record<string, any> ) {
      if(Object.prototype.hasOwnProperty.call(data, key)) {
        copy[key] = deepCopy((data as Record<string, any>)[key]);
      }
    }
    return copy;
  } else {
    return data
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
