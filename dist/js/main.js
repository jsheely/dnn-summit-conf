"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
require('../style/main.scss');
ReactDOM.render(React.createElement("p", { className: "red" }, "Hello DNN Summit"), document.getElementById('appBody'));
