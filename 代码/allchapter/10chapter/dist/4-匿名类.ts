// 1.装饰器
function LoggerClassDecorator<T extends new(...args: any) => any>(tagetClass: T) {
  // 直接返回一个匿名类
  console.info('我是一个匿名类');
  return class extends tagetClass { 
    constructor(...args: any){
      super(...args);
      console.log('日志信息...tagetClass', (tagetClass as any).name);
    }
  }
  // return LoggerSonClass
}

// 2.目标类
@LoggerClassDecorator
class CustomerService {
  username: string 
  constructor() {
    this.username = 'ppgo'
  }
}

export {}