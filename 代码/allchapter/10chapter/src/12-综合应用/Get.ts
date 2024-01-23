import 'reflect-metadata'
type MyRequestMethodDecorator= (targetClassPrototype: any, methodName: string, propData: PropertyDescriptor) => void
export function Get(reqPath: string): MyRequestMethodDecorator {
  return (targetClassPrototype, methodName, PropertyDescriptor) => {
    console.info('———————————方法装饰器——————————');
    // 添加元数据
    Reflect.defineMetadata("path", reqPath, targetClassPrototype, methodName)
  }
}