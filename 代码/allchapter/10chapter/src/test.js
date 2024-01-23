function test() {
  return function(){console.info(123)}
}
const a = test()