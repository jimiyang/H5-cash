"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Parent = /** @class */ (function () {
    function Parent(type) {
        this.type = type;
    }
    Parent.prototype.getType = function () {
        return this.type;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(type, username) {
        var _this = _super.call(this, type) || this;
        _this.username = username;
        return _this;
    }
    Child.prototype.parent = function () {
        return this.getType();
    };
    return Child;
}(Parent));
exports.Child = Child;
/*class Parent{
    constructor (type){
      this.type=type;
    }
    gettype(){
      return this.type;
    }
}
class Child extends Parent{
    constructor(type,username){
       super(type);
       this.username = username;
    }
    getinfo(){
       return this.username + this.type;
    }
}
new Parent("已审核");
new Child("管理员")
export {Child}*/
