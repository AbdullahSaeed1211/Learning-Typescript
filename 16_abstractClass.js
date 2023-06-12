var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var takePhoto = /** @class */ (function () {
    function takePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    return takePhoto;
}());
var instagram = /** @class */ (function (_super) {
    __extends(instagram, _super);
    function instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    instagram.prototype.getSepia = function () {
        console.log("Sepia");
    };
    instagram.prototype.getReelTime = function () {
        //complex calc lol
        return 2;
    };
    return instagram;
}(takePhoto));
// const Luffy = new takePhoto("test","also Test")
// can't create obj from abstract class make from child class instead
var Luffy = new instagram("test", "also Test", 4);
