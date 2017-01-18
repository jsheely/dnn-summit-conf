(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var thing_1 = require("./thing");
ReactDOM.render(React.createElement("div", { className: "red" },
    React.createElement(thing_1.default, { number: 5 })), document.getElementById('appBody'));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./thing":2}],2:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Thing = (function (_super) {
    __extends(Thing, _super);
    function Thing() {
        return _super.call(this) || this;
    }
    Thing.prototype.render = function () {
        return React.createElement("div", null, "Hello Again");
    };
    return Thing;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Thing;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi50c3giLCJzcmMvanMvdGhpbmcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSw2QkFBK0I7QUFDL0Isb0NBQXNDO0FBRXRDLGlDQUEyQjtBQUUzQixRQUFRLENBQUMsTUFBTSxDQUNYLDZCQUFLLFNBQVMsRUFBQyxLQUFLO0lBQUMsb0JBQUMsZUFBSyxJQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUksQ0FBTSxFQUMvQyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNyQyxDQUFDOzs7Ozs7Ozs7OztBQ1JGLDZCQUErQjtBQU0vQjtJQUFtQyx5QkFBK0I7SUFDOUQ7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUFDRCxzQkFBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLCtDQUFzQixDQUFBO0lBQ2pDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FQQSxBQU9DLENBUGtDLEtBQUssQ0FBQyxTQUFTLEdBT2pEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCBUaGluZyBmcm9tICcuL3RoaW5nJ1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWRcIj48VGhpbmcgbnVtYmVyPXs1fSAvPjwvZGl2PixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBCb2R5JylcclxuKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgVGhpbmdQcm9wcyB7XHJcbiAgICBudW1iZXI6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUaGluZ1Byb3BzLGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5IZWxsbyBBZ2FpbjwvZGl2PlxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19
