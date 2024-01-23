"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
var Collection = /** @class */ (function () {
    function Collection() {
        this.containerMap = new Map();
    }
    Collection.prototype.set = function (id, value) {
        this.containerMap.set(id, value);
    };
    Collection.prototype.get = function (id) {
        return this.containerMap.get(id);
    };
    Collection.prototype.has = function (id) {
        return this.containerMap.has(id);
    };
    // 立即创建单件设计模式
    Collection.collection = new Collection();
    return Collection;
}());
exports.Collection = Collection;
exports.default = Collection.collection;
