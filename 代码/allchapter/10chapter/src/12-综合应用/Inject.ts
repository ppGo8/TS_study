import 'reflect-metadata'
type MyInject = (targetClassPrototype: any, propertyKey: string | symbol) => void
export function Inject(injectid: string): MyInject {
  return (targetClassPrototype, propertyKey) => {
    console.info('———————————属性装饰器——————————');
    // 借助第三方包,获取属性修饰器修饰的属性的类型
    // PropClass === UserService
    let PropClass = Reflect.getMetadata("design:type", targetClassPrototype, propertyKey);
    new PropClass();

  }
}

/* 函数是否手动写返回值类型：
*  1.如果手动写了返回值,那么return语句的内容就不用显示写类型,如函数的参数处就不用写
*  2.如果外层函数没有手动写返回值类型,
*    2.1 return返回函数,则必须定义声明参数类型；此时外层函数会自动推导返回值类型
*    2.2 return返回基本类型,外层函数也会自动推导
*/
// export function Inject(injectid: string) {
  // return function(targetClassPrototype: any, propertyKey: string | symbol){
  // }
// }
export {}