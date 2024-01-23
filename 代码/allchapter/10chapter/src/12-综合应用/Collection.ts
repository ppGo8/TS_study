export class Collection<T = any> {
  // 立即创建单件设计模式
  static collection: Collection = new Collection();
  private constructor() {}
  private containerMap = new Map<string | symbol, any>();

  public set(id:string | symbol, value: T) {
    this.containerMap.set(id, value);
  }
  public get(id:string | symbol) {
    return this.containerMap.get(id);
  }
  public has(id:string | symbol) {
    return this.containerMap.has(id);
  }
}
export default Collection.collection;