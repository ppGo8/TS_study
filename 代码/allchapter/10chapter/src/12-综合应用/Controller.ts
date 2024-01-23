import 'reflect-metadata'
export function Controller(rootPath: string) {
  return function<T extends new (...arg: any) => any>(targetClass: T) {
    console.info('———————————类装饰器——————————');
    console.log('targetClass:',targetClass);
    // 在类装饰器上获取方法装饰器上定义的 属性名为path的属性
    Object.keys(targetClass.prototype).forEach((methodname)=> {
      console.info(Reflect.getMetadata("path", targetClass.prototype, methodname))
    })
  }
}

export {}