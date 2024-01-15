// es5
function MyClassES5(name) {
  this.name = name // 实例属性
  MyClassES5.count ++;// 调用静态属性
};
// 实例方法 右侧为匿名函数
MyClassES5.prototype.getName = function() {
  return this.name
}

// 静态属性
MyClassES5.count = 0;
// 静态方法
MyClassES5.getCount = function() {
  return MyClassES5.count;
}

const n1 = new MyClassES5('pp');
console.info(MyClassES5.getCount())
const n2 = new MyClassES5('test')
console.info(MyClassES5.getCount())

