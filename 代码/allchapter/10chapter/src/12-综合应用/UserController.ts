import { Inject } from "./Inject";
import { Get } from "./Get";
import { Controller } from "./Controller";
import { UserService } from './UserService';

// 当一个请求发送时，会经过控制器类
// 装饰器执行顺序：
//   属性装饰器、方法参数装饰器、方法装饰器、类装饰器 
// 控制类
@Controller('/')
class UserController {

  // 依赖注入 创建和使用分类
  @Inject('userService')
  private userService?: UserService

  @Get('/login')
  public login():void {
      // let peopleServiceInstance = 
  }
}