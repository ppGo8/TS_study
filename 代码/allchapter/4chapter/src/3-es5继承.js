// 父类
function Vechile(brand, price) {
  console.log('Vechile', this);
  this.brand = brand;
  this.price = price;
}
Vechile.prototype.sale = function() {
  console.log(this + '销售');
}

// 子类
function Bus(brand, price, seatNo) {
  // 继承点1： 父类构造函数中的属性
  Vechile.call(this, brand, price);
  this.seatNo = seatNo;
}
// 继承点2: 子类的原型对象和父类的原对象建立联系
function myExtends (parentClass, sonClass) {
  function middleClass() {
    this.constructor = sonClass;
  }
  middleClass.prototype = parentClass.prototype;
  sonClass.prototype = new middleClass();
}
myExtends(Vechile, Bus);

let bus = new Bus('大巴', 20, 64)
bus.sale();
console.info('bus', bus);