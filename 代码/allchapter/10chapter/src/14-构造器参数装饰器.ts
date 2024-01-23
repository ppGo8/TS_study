import { UserService } from "./12-综合应用/UserService";
import "reflect-metadata"

type myParamDecorator = (target: object, paramname: string | symbol | undefined, index: number) => void
export function InjectConstructor(injectid?: string): myParamDecorator{
  // 第一个参数不再是原型,而是一个类
  return (targetClass, paramname, paramindex) => {
    console.info(targetClass)
    console.info(paramname)
    console.info(paramindex)
    // 获取该构造函数上所有参数的类型
    let paramArr = Reflect.getMetadata('design:paramtypes', targetClass)
    console.info(paramArr);
    // 获取被修饰的参数的类型, 它是一个类,因此可以执行new
    let constrParamArrobj = new paramArr[paramindex]();
  }
}

class UserController {
  constructor(@InjectConstructor('userService')
    userService: UserService, private count: number) {
  }
  public login():void {
      // let peopleServiceInstance = 
  }
}