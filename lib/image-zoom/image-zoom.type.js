"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PropsGaea = (function () {
    function PropsGaea() {
        this.gaeaName = '图片手势操作';
        this.gaeaIcon = 'square-o';
        this.gaeaUniqueKey = 'nt-image-zoom';
    }
    return PropsGaea;
}());
exports.PropsGaea = PropsGaea;
var Props = (function (_super) {
    __extends(Props, _super);
    function Props() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () {
        };
        _this.onLongPress = function () {
        };
        _this.panToMove = true;
        _this.pinchToZoom = true;
        _this.cropWidth = 100;
        _this.cropHeight = 100;
        _this.imageWidth = 100;
        _this.imageHeight = 100;
        _this.source = '';
        _this.longPressTime = 800;
        _this.leaveStayTime = 100;
        _this.leaveDistance = 10;
        _this.maxOverflow = 100;
        _this.horizontalOuterRangeOffset = function () {
        };
        _this.responderRelease = function () {
        };
        _this.onDoubleClick = function () {
        };
        _this.onScale = function () {
        };
        return _this;
    }
    return Props;
}(PropsGaea));
exports.Props = Props;
var State = (function () {
    function State() {
        this.centerX = 0.5;
        this.centerY = 0.5;
    }
    return State;
}());
exports.State = State;
