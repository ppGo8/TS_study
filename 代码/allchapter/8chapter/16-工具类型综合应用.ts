interface Todo {
  title: string
  completed: boolean
  description: string
  add(): number
  del(): number
  upt(): number
}

// 接口应用场景:
// 1.对象变量的类型
// 2.implements声明一个类


// 需求: 
// 获取接口中的所有方法,不需要属性;
// 并且有可能修改属性名,比如在前面加do

// 1.获取Todo中的函数
// type Degere<T> = {
//   [P in keyof T as T[P] extends Function ? P: never]: T[P]
// }
// type DegereTodo = Degere<Todo>

// 2.给所有属性名添加do
type Degere<T> = {
  // as: P要显示要同时满足as前面和后面的条件
  // ${ P & string }这种写法才能正常在模板字符串中使用泛型
  // Capitalize 将首字母大写
  [P in keyof T as T[P] extends Function ? `do${ Capitalize<P&string> }`: never]: T[P] 
}
type DegereTodo = Degere<Todo> // {    doAdd: () => number; doDel: () => number; doUpt: () => number;}

export {}