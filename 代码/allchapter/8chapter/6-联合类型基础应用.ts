// 该函数使用泛型约束限制传入的参数为object类型
// 泛型约束写在前括号<>中
function cross<T extends object,U  extends object>(obj1: T , obj2: U): T & U {
  return {} as T & U;  // 业务逻辑 pass
}
// 需求：只修改一处代码实现 规定传入类型为Array,即动态判断类型
// 解决方法: 使用条件类型代替泛型约束
type ConType<T> = T extends Array<any>?  T : never // 【重点】只需要修改extends关键字后的内容即可规定传入参数的类型
function cross2<T,U>(obj1: ConType<T> , obj2: ConType<U>): T & U {
  return {} as T & U;  // 业务逻辑 pass
}

// **`extends`关键字可以用的地方**
// - 类继承，子类继承父类
// - 类型约束，规定该泛型必须满足的条件，**要写在定义类型的尖括号中**
// - 条件约束，和条件`?`一起使用
//   如果不适用条件`?`或者尖括号，单独使用`extends`会报错

export {}