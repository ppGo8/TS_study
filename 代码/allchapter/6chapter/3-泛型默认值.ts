// 模拟arrayList,支持add和get方法
class ArrayList<T=any>{ // 如果不传递给泛型值,那么就会采用等号后的默认值;
  arr: Array<T>;
  index: number = 0;
  constructor() {
    this.arr = [];
  }
  get(index: number) {
    return this.arr[index];
  }
  add(ele: T){
    this.arr.push(ele);
  }
}

const p1 = new ArrayList<string>();
p1.add('123');
console.info(p1.get(0));


const p2 = new ArrayList<{name: string, age: number}>();
p2.add({name: 'pp', age: 123})
console.info(p2.get(0))

export {}