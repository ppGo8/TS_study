class Bank {
  public name: string = '硅谷银行';
  static count : number = 100;

  constructor(_name: string) {
    this.name = _name;
  }

  loan():void {
    console.log(this.name + '已放贷...')
  }
}
// 以下type和Interface的写法是已知的
type bankCtorType = new (...args: any) => any;
interface bankCtorInter{ // 泛型工厂函数类型还可以用接口的方式表示
  new (...agrs: any): any
}

// 需求: 创建任意一个类的实例化对象时, 页面上输出内容
// 方法1：在所有类的构造函数中手动写 【不现实】
// 方法2：泛型工厂函数 【推荐】
// 以下三种写法等价
// function createFactorConstructor(Constructor: new (...args: any) => any) {
// function createFactorConstructor(Constructor: bankCtorType) {
function createFactorConstructor(Constructor: bankCtorInter, ...args: any) {
  console.log('创建对象...');
  return new Constructor(args.join(','));
}
const ppInstance = createFactorConstructor(Bank, '花花');
console.info(ppInstance)
export {}
