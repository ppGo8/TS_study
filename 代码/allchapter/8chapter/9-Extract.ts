// extract类型：条件类型的简写
type TestExtract = Extract<String, String | number>
// 联合类型逐个比较,哪个满足返回哪个;实际是因为底层应用到了泛型,泛型的联合类型就是逐个比较
type TestExtract2 = Extract<String | boolean, String | number> // String



// 应用场景 8chapter-6
function cross<T extends object,U  extends object>(obj1: T , obj2: U): T & U {
  return {} as T & U;  // 业务逻辑 pass
}
// 【优化】 使用extract
type ConType<T> = Extract<T,object> 
function cross2<T,U>(obj1: ConType<T> , obj2: ConType<U>): T & U {
  return {} as T & U;  // 业务逻辑 pass
}
export {}
