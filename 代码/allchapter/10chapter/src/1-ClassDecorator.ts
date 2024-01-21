// 不带参数的类装饰器

// tagetClass就是class本身
// 类装饰器：就是把这个类交给装饰器
function FirstClassDecorator(tagetClass: any) {
  let tagetClassObj = new tagetClass();
  tagetClassObj.buy();
  console.log('tagetClass.name',tagetClass.name)
}

// 这是一个不带参数的装饰器
// 是否传递参数不是看装饰器函数中是否有参数
@FirstClassDecorator
class CustomerService {
  name: string = 'pp'

  constructor() {

  }

  buy() {
    console.log(this.name + '购买');
  }
}

export {}