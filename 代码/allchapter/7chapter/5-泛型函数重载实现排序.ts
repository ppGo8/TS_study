import quickSort from '../7chapter/3-泛型函数' 
import {chineseSort, isChinese, strSort} from '../7chapter/4-泛型函数实现排序'

/**
 * 实现字符串自排序、中文数组排序、数字数组排序、字符串数组排序(同时对元素内容进行自排序)
 * 且在调用函数时能够精确的输出返回内容的数据类型;而方便使用点语法
 * @param data 
 * @returns 
 */
function sort(data: string): string
function sort<T>(data: Array<T>): Array<T>
// 下面两种实现签名都可以,一种是全部写any(包括泛型);一种是把所有支持的参数类型写成联合类型的方式
// function sort<T>(data: string | Array<T>): string | Array<T> {
function sort(data: any): any {
  if (typeof data === 'string') {
    return strSort(data);
  } else if(data instanceof Array) {
    if (isChinese(data)) {
      return chineseSort(data)
    }
    const newArr = data.map((item) => {
      return typeof item === "string" ? strSort(item) : item
    })
    return quickSort(data)
  }
  throw new Error(`data must be string or array. ${data}`);
}

// 再使用点语法时或鼠标悬浮在调用函数处时,就可以精确显示返回值类型和它的属性和方法了
console.info(sort('cba'));
console.info(sort(['张三', '李四', '王五']));
console.info(sort(['321', '456', '987']));
