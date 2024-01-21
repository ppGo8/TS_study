// 条件类型：进阶语法的根基
// 之前已经用过了 ? :

// 1.写死的条件类型
// 可以匹配
type TestType = string extends string | number ? string : never
// 不能匹配 返回never 
type TestType2 = string | boolean extends string | number ? string : never


// 2.使用泛型的条件类型
type ConType<T> = T extends string | number ? T : never
type ConType1= ConType<string>
// 不能匹配,与1返回结果不同，返回string
type ConType2= ConType<string | boolean> 

// 结论：二者匹配的方式不同
// 第一种方法直接写死联合类型,会用整个联合类型和后面比较
// 第二种方法泛型传入联合类型，会使用联合类型的每一个单独进行比较，而不是作为一个整体比较