"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function loginProperty(attrValue) {
    return function (targetPrototype, attrName) {
        console.log(targetPrototype);
        console.log(attrName);
        targetPrototype.constructor.custLevelDescri = function () {
            console.log('消费500升级svip');
        };
        console.log(targetPrototype.constructor.custLevelDescri());
    };
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = "pp";
    }
    __decorate([
        loginProperty('顾客等级'),
        __metadata("design:type", String)
    ], Person.prototype, "degree", void 0);
    return Person;
}());
