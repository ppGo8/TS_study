let str: string = 'abc';
console.info('@', str);

// 问题: 不同的ts文件中不能声明两个相同名称的变量
// 原因：ts会默认将所有ts文件的变量放在一个全局作用域下,而不是自己文件的作用域下
// 解决方法：使用export {}改变变量的作用域为当前文件
export {}