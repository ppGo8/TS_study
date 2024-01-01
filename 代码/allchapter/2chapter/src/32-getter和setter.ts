class People {
  name: string;
  _age: number = 0;
  constructor(_name: string) {
    this.name = _name;
  }
  get age() {
    return this._age; // 注意get和set提供给外界其后面的标识符;
  }
  set age(val: number) {
    if(val <= 100 && val >= 0) {
      this._age = val;
    } else {
      throw new Error('年龄不在合适范围内')
    }
  }
}

const p1 = new People('pp');
p1.age = 66;
const p2 = new People('pp2');
p2.age = 101;