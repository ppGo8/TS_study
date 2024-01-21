interface Todo {
  title: string
  completed: boolean
  description: string
  add(): number
  del(): number
  upt(): number
}

// 优化： 
// 1.只允许泛型接受对象类型：T extends Record<string, any>
//    Record<string, any>允许接受对象和数组,**没办法禁止传递数组进来**； **允许对象必将允许数组**
// 2.允许接受数组,但是返回空对象
//   判断一个类型是否继承数组类型: T extends Array<any>，这个可以只接受数组
//   解决方法: 传入数组时,返回空对象
type Degere<T extends Record<string, any>> = {
  [P in keyof T as T extends Array<any> ? never : T[P] extends Function ? `do${ Capitalize<P&string> }`: never]: T[P] 
}
type DegereTodo = Degere<Array<any>> 

export {}