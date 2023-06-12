var instagram = /** @class */ (function () {
    function instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return instagram;
}());
var youtube = /** @class */ (function () {
    function youtube(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    youtube.prototype.createStory = function () {
        console.log("Story created");
    };
    return youtube;
}());
