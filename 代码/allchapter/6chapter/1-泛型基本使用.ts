// 需求：下面的value可能是string/number或其他各种类型
// 失败的方法：写成any，因为any不进行类型检测后面写的时候没有提示

/* 
interface Ref{
  value: any,
}

let ref:Ref= {
  value: {
    name: 'pp',
    age: 24
  }
}
// 使用any类型虽然可以接受任何乐行
// 但是继续向下面写,就没有编译器的提示了
ref.value.
*/

// 使用<>表示泛型
interface Ref<V>{
  value: V
}
let ref:Ref<string> = { // 使用时给泛型传入具体化类型
  value: 'pp'
}

type Student = { name: string, age: number};
let ref2:Ref<Student> = {
  value: {
    name: 'pp',
    age: 123
  }
}
// 此时再调用时 就有了提示
ref2.value.name