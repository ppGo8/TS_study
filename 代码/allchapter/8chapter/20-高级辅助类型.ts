interface Todo {
  readonly title: string
  completed: boolean
  description: string,
  // 可选类型
  date?: Date,
  publisher?: string,
}

// 需求: 
// 1.不改变原接口的情况把可选属性变为必选属性 -? Required
// 2.不改变原接口的情况把所有属性变为可选属性 ? Partial
// type TodoMust = Required<Todo>
// type TodoSelected = Partial<Todo>

// 底层实现
type Required<T> = {
  [P in keyof T]-?: T[P]
} 
type Partial<T> = {
  [P in keyof T]?: T[P]
} 
type TodoMust = Required<Todo>
type TodoSelected = Partial<Todo>
export {}

// 3.属性全部设置为只读 readonly
// type TodoReadonly = Readonly<Todo>
// 底层
type Readonly<T> = {
  readonly[P in keyof T]?: T[P]
}
type TodoReadonly = Readonly<Todo>

// 4.属性全部设置为不只读 -readonly