// 带参数的类装饰器
function FirstClassDecorator(params: any) {
  console.log(params);
  return function (tagetClass: any) {
    let tagetClassObj = new tagetClass();
    tagetClassObj.buy();
    console.log('tagetClass.name',tagetClass.name)
  }
}

@FirstClassDecorator('我是用来修饰CustomerService类的装饰器参数')
class CustomerService {
  name: string = 'pp'

  constructor() {

  }

  buy() {
    console.log(this.name + '购买');
  }
}

export {}