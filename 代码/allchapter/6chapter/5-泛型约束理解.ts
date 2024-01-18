type objType = {name: string, age: number}
// 以下三种写法基本等价
// type objKeysType<K> = K extends keyof objType ? K : never  // 属性名泛型
// type objKeysType<T extends object, K> = K extends keyof T ? K : never // 类型和属性名两个泛型,只有类型具有泛型约束
type objKeysType<T extends object, K extends keyof T> = K ; // 类型和属性名链各个泛型,且均具有泛型约束
type testObjKeysType = objKeysType<objType, 'age'>