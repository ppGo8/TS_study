// 数字、字符串数组排序
import quickSort from '../7chapter/3-泛型函数' 

/**
 * 一个泛型函数: 实现字符串自排序、中文数组排序、数字数组排序、字符串数组排序(同时对元素内容进行自排序)
 * @param data 
 * @returns 
 */
function sort<T>(data: string | Array<T>): string | Array<T> {
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
export function chineseSort<T>(arr: Array<T>): T[] {
  return arr.sort((first, second) => {
         // 在函数声明处,first和sencond的类型为T,所以编译器会报错没有localeCompare方法;所以要进行类型断言
         // 为as any 或者 string;
         // 因此在函数传入参数处不如直接写string
      return (first as any).localeCompare(second, 'zh-CN')  
  })
}
/**
 * 正则表达式，判断是否是中文数组
 * @param arr 
 * @returns 
 */
export function isChinese<T>(arr: Array<T>): boolean {
  const pattern = /[\u4e00-\u9fa5]+/g;
  return arr.some((item: any) => {
      return pattern.test(item)
  })
}
/**
 * 字符串自排序
 * @param str 
 * @returns 
 */
export function strSort(str: string):string {
  const strArr = str.split('');
  return quickSort(strArr).join('');
}
