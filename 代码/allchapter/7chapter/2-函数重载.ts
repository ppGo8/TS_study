// 现有如下数据
enum MessageType {
  Audio = 'Audio',
  Image = 'Image',
} 
type Message = {
  id: number,
  type: MessageType,
  message: string
}
let messageInfo: Message[] = [
  {
    id: 1,
    type: MessageType.Image,
    message: 'hello'
  },
  {
    id: 2,
    type: MessageType.Image,
    message: 'pp'
  },
  {
    id: 3,
    type: MessageType.Audio,
    message: 'pp'
  },
  {
    id: 4,
    type: MessageType.Audio,
    message: 'pp'
  }
]
// 需求：根据id或者type来搜索messageInfo中符合条件的数据
// id唯一，所以id返回的一定是对象
// type不唯一,所以id返回的一定是数组对象

function findMesaage(condition: number): Message | undefined
function findMesaage(condition: MessageType): Message[]
function findMesaage(condition: number | MessageType): Message | undefined | Message[]  {
  if(typeof condition === 'number') {
    return messageInfo.find( item => item.id === condition )
  } else {
    return messageInfo.filter( item => item.type === condition)
  }
}

console.info(findMesaage(1)?.id)
console.info(findMesaage(MessageType.Audio).length)


export {}