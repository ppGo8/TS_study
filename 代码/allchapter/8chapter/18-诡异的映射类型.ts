// 现有如下两个对象类型
type MouseEvent = { event: 'click', x: number, y: number,}
type KeyEvent = { event: 'KeyUp', key: number}
// 需求：得到如{ click: (event: MouseEvent) => any;  KeyUp: (event: KeyEvent) => any;}形式的类型
// 分析: 待求的类型中：使用了属性值click/KeyUp, 使用了类型名MouseEvent/KeyEvent 复杂
// 怪异之处：
//   1. 传给泛型Events的 是一个MouseEvent和KeyEvent联合类型;
//      泛型在处理来联合类型时，是逐个对每个处理的。
//   2. 对象类型的联合类型的结果值为： 二者共有属性名,属性值为相同属性名下属性值的联合类型
//      MouseEvent | KeyEvent = { event: 'click' | 'KeyUp' 
//   3.一般来说,in 语句后只能接string/number/symbol类型
//     但是可以使用as语句规避ts编译错误
// 解决方法：
//   1. 使用as规避ts编译错误,允许in语句遍历 元素为类型的联合类型,这样遍历得到的值就为某个类型；
//      (从何获得了单个类型的类型名,还可以使用点语法获得下面的属性)
//   2. 实际运行逻辑：
//      2.1 as规避编译报错,运行时in后不是规定类型,所以执行到了as,
//      2.2 执行到as后发现必须知道Event是什么,因此重新返回in将强制映射联合类型
//         (可以理解为将其作为字符串联合类型,不过后面它还可以使用点语法)
//      2.3 使用[]语法访问每一个遍历得到的类型下的属性
type EventFunction<Events extends Record<string,any>, EvnetKey extends keyof Events> = {
  // 下面两种写法等价
  // [Event in Events as Event extends Events ? Event[EvnetKey]: never]: ( event : Event) => any
  [Event in Events as Event[EvnetKey]]: ( event : Event) => any
}
type Test = EventFunction< MouseEvent| KeyEvent, 'event' >  // 条件要求


export {}