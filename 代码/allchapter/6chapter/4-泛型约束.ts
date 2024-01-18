class Order {
  orderId?: boolean;
  orderName?: string;
  static count: number;
  printOrd() {};
  static getCount() {};
}

// 索引访问类型 在接口和类上都可以使用
type orderidType = Order['orderId']

// 需求1：获取类中所有实例属性/方法代表类型的字符串组成的联合类型
type OrderAllType1 = keyof Order // 鼠标放在获取的类型上,并不会提示具体定义类型是什么，即不提示orderId、orderName、printOrd
// 可以通过赋值的方式来变相的查看keyof 获取得到的类型
let p1: OrderAllType1 = 'orderId' // 在赋值号右侧写东西的时候，会提示出具体可选择的内容是什么，即orderId、orderName、printOrd

// 需求2: 获取任意一个类的实例属性/方法的类型字符串的联合类型；而不是一个司名称
type InstancePropKeys2<T> = keyof T 
type OrderAllType2 = InstancePropKeys2<Order>
let p2: OrderAllType2 = 'orderId'

// 需求2完善：上述的T可以传任何类型,如字符串、数字;但我们只需要**类**
// 解决方法：类本身是对象object的一个子类，因此
type InstancePropKeys3<T extends object> = keyof T 
type OrderAllType3 = InstancePropKeys3<Order> // 这里现在只能传递对象类型 functin arr object class等;传递基本类型会报错
let p3: OrderAllType3 = 'orderId'


export {}
