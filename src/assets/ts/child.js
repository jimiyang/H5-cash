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
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(type, username) {
        var _this = _super.call(this, type) || this;
        _this.username = username;
        return _this;
    }
    Child.prototype.getinfo = function () {
        return this.username + this.type;
    };
    return Child;
}(Parent));
exports.Child = Child;
