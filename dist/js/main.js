(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDOM = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var thing_1 = require("./thing");
ReactDOM.render(React.createElement("div", { className: "red" },
    React.createElement(thing_1.default, null)), document.getElementById('appBody'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi50c3giLCJzcmMvanMvdGhpbmcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSw2QkFBK0I7QUFDL0Isb0NBQXNDO0FBRXRDLGlDQUEyQjtBQUUzQixRQUFRLENBQUMsTUFBTSxDQUNYLDZCQUFLLFNBQVMsRUFBQyxLQUFLO0lBQUMsb0JBQUMsZUFBSyxPQUFHLENBQU0sRUFDcEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDckMsQ0FBQzs7Ozs7Ozs7Ozs7QUNSRiw2QkFBK0I7QUFFL0I7SUFBbUMseUJBQXdCO0lBQ3ZEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBQ0Qsc0JBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQywrQ0FBc0IsQ0FBQTtJQUNqQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBUEEsQUFPQyxDQVBrQyxLQUFLLENBQUMsU0FBUyxHQU9qRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgVGhpbmcgZnJvbSAnLi90aGluZydcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkXCI+PFRoaW5nIC8+PC9kaXY+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcEJvZHknKVxyXG4pOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRoaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSxhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+SGVsbG8gQWdhaW48L2Rpdj5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
