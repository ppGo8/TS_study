interface Customer {
  name: string,
  money: number,
}

// 【场景1】：满足条件就拿到infer后的类型
type CusFtnType = (params: Customer) => string;
// 需求：拿到CusFtn类型中 参数/返回值的类型
// 1.1 拿到参数类型
type CusParaType = CusFtnType extends (params: infer T) => string ? T : never  // 满足?前条件语句,返回推断出来的参数类型T
type CusParaType2 = CusFtnType extends (params: infer T) => number ? T : never // 不满足?前条件语句,返回never
// 1.2 拿到返回值类型
type CusRetuType = CusFtnType extends (params: Customer) => infer T ? T : never // 返回推断出来的类型T
type CusRetuType3 = CusFtnType extends (params: any) => infer T ? T : never // 返回推断出来的类型T
type CusRetuType2 = CusFtnType extends (params: Customer) => infer T ? T : never //返回never
// 1.3 语法练习：同时拿到上述两种类型
type CusALLType = CusFtnType extends (params: infer P) => infer R ? P | R : never

// 【场景2】：infer应用在泛型上,得到通用代码
type ParamsType<T> =  T extends (Params: infer P) => any ? P : never
type cusParamsType = ParamsType<CusFtnType>

type arrayType<E> = E extends (Array<infer P>) ? P : never
type arrayString =  arrayType<Array<string>>  // 注意里面需要写的完整的数组类型

export {}
