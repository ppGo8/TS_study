class DateUtil {
  static dateUtil: DateUtil;
  static getInstance() {
    // 静态方法中的this指向类本身
    if(!this.dateUtil) {
      this.dateUtil = new DateUtil();// 只会调用一次构造函数
    }
    return this.dateUtil; // 如果已经创建了就返回旧的
  }  
  private constructor() {
    console.info('...创建对象');
  }
  // 工具类方法仍然是实例方法
  formateDate() {
    console.info('formateDate');
  };
  diffDateByDay() {
    console.info('diffDateByDay');
  };
}
const dateUtil1 = DateUtil.getInstance();
const dateUtil2 = DateUtil.getInstance();
dateUtil1.formateDate();
console.info(dateUtil1 === dateUtil2);
export { }
