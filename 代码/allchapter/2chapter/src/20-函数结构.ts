type InfoType = {
  name: string,
  age: number,
}

function getInfo(info: InfoType) {
  // 函数体中只需要使用name
  console.info(info.name);
} 
// 修改点：函数解构
function getSubInfo({ name }: InfoType) { 
  console.info(name)
}
let objInfo = {
  name: 'pp',
  age: 24,
}
getInfo(objInfo);
getSubInfo(objInfo);