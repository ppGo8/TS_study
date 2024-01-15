// ts中的写法
class MyClassTS {
  // 新增功能：实例属性的类型注释
  name: string;
  static count: number = 0; // 静态属性
  constructor (name_: string) {
    this.name = name_;
    MyClassTS.count++;
  }
  getName():string {
    return this.name;
  }
  
  // 静态方法
  static getCount():number {
    return MyClassTS.count;
  }
}

const n1 = new MyClassTS('pp');
console.info(n1.getName());
console.info(MyClassTS.getCount());
const n2 = new MyClassTS('test');
console.info(n2.getName());
console.info(MyClassTS.getCount());
