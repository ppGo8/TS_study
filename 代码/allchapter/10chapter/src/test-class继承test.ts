class Animal {
  name: string;

  constructor(name: string) {
      this.name = name;
  }

  makeSound(): void {
      console.log("Some generic sound");
  }
}
// 形参传递这里破坏继承关系
// 修改原数据类型会破坏继承关系
let tagetClass: any
class Dog extends tagetClass {
  bark(): void {
      console.log("Woof! Woof!");
  }
}

// 父类构造函数类型
let AnimalConstructor: new (name: string) => Animal = Animal;
// 子类构造函数类型
let DogConstructor: new (name: string) => Dog = Dog;
// 赋值
AnimalConstructor = DogConstructor;

export {}