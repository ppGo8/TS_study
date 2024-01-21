// 需求：得到路由规则下所有"父模块/子模块"的字面量,即"menu/setMenu" | "menu/setMenuList" | "tabs/setTab" | "tabs/setTabList"
type Modules = {
  menu : {
    setMenu: (index: string) => string,
    setMenuList: (index: string) => string,
  },
  tabs: {
    setTab: (index: string) => void,
    setTabList: (index: string) => void,
  }
}
// 1.模板字符类型
// 【问题】 模板中不能出现普通的泛型,会报错 【解决方法】 &string
type MB<T, U> = `${T & string }/${ U & string}` // 【重要】如果传入联合类型是逐个处理的；字符串常量类型
type TestMB = MB<'menu' | 'tab', 'create' | 'list' > // "menu/create" | "menu/list" 

// 2.拿到父模块的属性名
type moduleParnetKeys<T> = {
  [Key in keyof T]: Key
}

// 3.父模块和子模块 属性名
type moduleConnectKeys<T> = {
  [Key in keyof T]: MB<Key, keyof T[Key]>
}[keyof T]// 在一个对象类型后写[keyof T]作用：删除key,所有的值形成新的联合类型

// 验证
type ModulesType_ = moduleConnectKeys<Modules> 
// 写了[keyof T] "menu/setMenu" | "menu/setMenuList" | "tabs/setTab" | "tabs/setTabList"
// 不写[keyof T]  { menu: "menu/setMenu" | "menu/setMenuList"; tabs: "tabs/setTab" | "tabs/setTabList";}