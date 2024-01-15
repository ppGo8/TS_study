class People {
  name: string;
  age: number;
  addr: string;
  static count: number = 0;
  constructor(_name:string, _age: number, _addr: string){
    this.name = _name;
    this.age = _age;
    this.addr = _addr;
  }
  // 需求:希望在doEat调用前去做一些事情
  doEat(who: string, where: string){
    console.info(`who:${who}, where: ${where}`);
  };
  doDrink() {

  };
}

const dateProp = Object.getOwnPropertyDescriptor(People.prototype, 'doEat');
const targeMethod = dateProp!.value;
// const dateProp2 = Object.getOwnPropertyDescriptor(People.prototype, 'doEat');
// console.log(dateProp === dateProp2); // fasle;每次都是开辟新的空间
// console.log(People);
// console.log(People.prototype); // nodejs环境下为空,浏览器环境下不为空
console.log(dateProp);

// 修改dateProp.value并没有修改class中原型上的方法
// 因为dataProp是返回的一个新的对象
dateProp!.value = function(...args: any[]) {
  console.info('前置拦截');
  targeMethod.apply(this,args); // apply传递数组
  // targeMethod.call(this,args[0], args[1]); // call传递逗号分割的参数列表
  console.info('后置拦截');
}
// dateProp!.value('pp', 'beijing'); // 直接调用未通过实例


// 实际使用是通过实例调用实例方法
// 需要用定义的新方法覆盖原型链上的方法
Object.defineProperty(People.prototype, 'doEat', dateProp!);
let p = new People('pp', 24, '广州');
p.doEat(p.name, p.addr);
export {}