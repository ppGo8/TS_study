/**
 * 带参数的方法装饰器
 * @param targetClassPrototype 类的原型[RoleService.prototype]
 * @param methodname 方法名
 * @param methodDecri 方法的数据属性
 */
function MyMethodDecorator(params: any){
  console.log('传递进来的参数', params);
  return function(targetClassPrototype: any, methodname:string, methodDescriptor: PropertyDescriptor) {
    console.log('targetClassPrototype:',targetClassPrototype)
    console.log('methodname:',methodname)
    console.log('methodDecri:',methodDescriptor)
    // 可以直接在执行器中执行原方法;
    methodDescriptor.value();
  }
}

// 目标类
class RoleService {
  public roleName: string = '管理员'
  constructor (){
  }
  // 调用方法拦截器
  @MyMethodDecorator('哈哈')
  DistributeRoles() {
    console.info('分配角色中');
  }
}

export {}

