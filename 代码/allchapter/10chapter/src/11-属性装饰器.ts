function loginProperty(attrValue: any) {
  return function(targetPrototype: any, attrName: string | symbol) {
    console.log(targetPrototype);
    console.log(attrName);
    targetPrototype.constructor.custLevelDescri = function() {
      console.log('消费500升级svip');
    }
    console.log( targetPrototype.constructor.custLevelDescri());
  }
}


class Person {
  public name: string = "pp"
  @loginProperty('顾客等级')
  public degree!:string 
  constructor() {
  }
}