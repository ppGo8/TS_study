// 可变元组
const customers: [string, number, number, ...any[]] = 
['pp', 170, 55, '广东省广州市', '暨南大学']

// 如何解构获得各个元素
const [name, height, weight, ...rest]: [string, number, number, ...any[]] = 
['pp', 170, 55, '广东省广州市', '暨南大学']
console.info(rest)

export {}