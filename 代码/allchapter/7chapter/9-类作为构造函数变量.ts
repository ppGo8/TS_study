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


// 所有类的构造函数类型
type ConstructorAllType = new (...args: any) => any
// Bank类的构造函数类型
type ConstructorBankType = new (...args: any) => Bank // 在类型处,使用new代表构造函数

// let instanceBank: ConstructorBankType = new Bank('pp') // 这样是错的,因为实例变量的类型为这个类名Bank,而不是构造函数的类型
let cbInstance: ConstructorBankType = Bank // 构造函数
// 此时new cbInstance和Bank是一样的效果;已经没有区别了
console.log(new cbInstance('pp1')) 
console.log(new Bank('pp2'))

export {}
