// es6
class MyClassES6 {
  constructor(name) {
    this.name = name // 实例属性
    MyClassES6.count++;// 调用静态属性
  }
  // 实例方法
  getName() {
    return this.name
  }
  // 静态属性
  static count = 0;
  // 静态方法
  static getCount() {
    return MyClassES6.count;
  }

}
const n1 = new MyClassES6('pp');
console.info(n1.getName());
console.info(MyClassES6.getCount())
const n2 = new MyClassES6('test')
console.info(n2.getName());
console.info(MyClassES6.getCount())
