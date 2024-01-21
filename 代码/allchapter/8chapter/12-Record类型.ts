// Record是object类型的一个升级

// 1.object场景1 基本对象变量类型
// 定义一个变量为object类型时, 没办法使用点语法获取属性
// 所以一般不使用object定义一个变量类型
let obj1: object =  {
  name: 'pp',
  age: 24,
}
obj1.name // 报错: 类型“object”上不存在属性“name”

// 2.object场景2 函数参数
// 函数参数传递对象时,经常使用objcet
function addObj(obj: object) {
  // 函数体中无法使用点语法访问属性
  // object类型对属性名也没有限制
  console.info(obj);
}
addObj({  name: 'pp',age: 24,})


// 解决方案：1.使用接口 2.Record
function test(obj: Record<'name'| 'age' | 'addr', string | number> ) {
  console.info(obj.name);
}
test({ name: 'pp',age: 24, addr: '广东广东'})




export {}