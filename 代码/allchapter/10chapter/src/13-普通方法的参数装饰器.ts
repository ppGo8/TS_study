function UrlParma(params:string){
  return function(targetClassPrototype: any, methodaname: string, paramindex: number) {
    console.info(targetClassPrototype)
    console.info(methodaname)
    console.info(paramindex) // 修饰的参数是第几个参数,从0开始
    targetClassPrototype.info = params;
  }
}

class People {
  eat(@UrlParma('参数具体信息') name: string, @UrlParma('参数具体信息') addr: string) {
    console.log(name,addr)
  }
}