"use strict";
class People {
    constructor(_name) {
        this._age = 0;
        this.name = _name;
    }
    get age() {
        return this._age; // 注意get和set提供给外界其后面的标识符;
    }
    set age(val) {
        if (val <= 100 && val >= 0) {
            this._age = val;
        }
        else {
            throw new Error('年龄不在合适范围内');
        }
    }
}
const p1 = new People('pp');
p1.age = 66;
const p2 = new People('pp2');
p2.age = 101;
