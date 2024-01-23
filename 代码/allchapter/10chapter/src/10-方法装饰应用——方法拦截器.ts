/**
 * 带参数的方法装饰器
 * @param targetClassPrototype 类的原型[RoleService.prototype]
 * @param methodname 方法名
 * @param methodDecri 方法的数据属性
 */
function MyMethodDecorator(params: any){
  return function(targetClassPrototype: any, methodname:string, dataProps: PropertyDescriptor) {
    const targetMethod = dataProps.value;
    dataProps.value = function(...args: any[]) {
      console.info('前置拦截...');
      console.info(...args);
      // 注意:这里由于由嵌套了一层,所以要在此处调用;
      // 原方法：真正的执行
      targetMethod.apply(this, args);
      console.info('后置拦截...');
    }
    dataProps.enumerable = false;
  }
}

// 目标类
class RoleService {
  public roleName: string = '管理员'
  constructor (){
  }
  // 调用方法拦截器
  @MyMethodDecorator('**带参数的方法装饰器**')
  DistributeRoles(name: string, age: number) {
    console.info('分配角色中...');
  }
}

const testInstance = new RoleService();
// 调用这个方法
testInstance.DistributeRoles('pp', 22);
console.info(Object.getOwnPropertyDescriptor(RoleService.prototype, 'DistributeRoles'))
export {}

