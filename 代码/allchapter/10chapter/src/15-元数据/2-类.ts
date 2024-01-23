// 类上使用元数据
import 'reflect-metadata'

// 1.类上定义元数据
// 可以直接使用@Reflect.metadata语法
// 不用写define,且只需要指定key和value
@Reflect.metadata('lei', '地球人')
class People {
  @Reflect.metadata('shuxing', '名字')
  username: string = 'pp'
  @Reflect.metadata('fangfa', '吃泰餐')
  eat() {

  }
}
class ChinesePeople extends People {

}
// 2.获取类上定义的元数据
console.info(Reflect.getMetadata('lei',People))
console.info(Reflect.getMetadata('shuxing',People.prototype,'username'))
console.info(Reflect.getMetadata('fangfa',People.prototype,'eat'))

// 3.判断类上是否包含某个元数据(包含继承)
console.info(Reflect.hasMetadata('lei',People))
console.info(Reflect.hasMetadata('shuxing',People.prototype,'username'))
console.info(Reflect.hasMetadata('fangfa',People.prototype,'eat'))

// 4.判断是否为自有元数据
console.info(Reflect.hasMetadata('fangfa',ChinesePeople.prototype,'eat'))
console.info(Reflect.hasOwnMetadata('fangfa',ChinesePeople.prototype,'eat'))
