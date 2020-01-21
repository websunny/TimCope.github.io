"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

require("./style.less");

var _reactHotLoader = require("react-hot-loader");

var _antd = require("antd");

var _dec, _class, _temp;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var menu = _react["default"].createElement(_antd.Menu, null, _react["default"].createElement(_antd.Menu.Item, {
  key: "0"
}, _react["default"].createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "http://www.alipay.com/"
}, "1st menu item")), _react["default"].createElement(_antd.Menu.Item, {
  key: "1"
}, _react["default"].createElement("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  href: "http://www.taobao.com/"
}, "2nd menu item")), _react["default"].createElement(_antd.Menu.Divider, null), _react["default"].createElement(_antd.Menu.Item, {
  key: "3",
  disabled: true
}, "3rd menu item\uFF08disabled\uFF09"));

var Header = (_dec = (0, _reactHotLoader.hot)(module), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
    return _this;
  }

  (0, _createClass2["default"])(Header, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("header", {
        className: "navbar"
      }, _react["default"].createElement("div", {
        className: "blog-name"
      }, "Mr.shu"), _react["default"].createElement("div", {
        className: "navbar-content"
      }, _react["default"].createElement("div", {
        className: "navbar-content-item"
      }, _react["default"].createElement(_antd.Dropdown, {
        overlay: menu
      }, _react["default"].createElement("a", {
        className: "ant-dropdown-link",
        href: "#"
      }, "Hover me ", _react["default"].createElement(_antd.Icon, {
        type: "down"
      })))), _react["default"].createElement("div", {
        className: "navbar-content-item"
      }, _react["default"].createElement(_antd.Dropdown, {
        overlay: menu
      }, _react["default"].createElement("a", {
        className: "ant-dropdown-link",
        href: "#"
      }, "Hover me ", _react["default"].createElement(_antd.Icon, {
        type: "down"
      })))), _react["default"].createElement("div", {
        className: "navbar-content-item"
      }, _react["default"].createElement(_antd.Dropdown, {
        overlay: menu
      }, _react["default"].createElement("a", {
        className: "ant-dropdown-link",
        href: "#"
      }, "Hover me ", _react["default"].createElement(_antd.Icon, {
        type: "down"
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Header;
}(_react["default"].Component), _temp)) || _class);
var _default = Header;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(menu, "menu", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/client/component/Header/index.tsx");
  reactHotLoader.register(Header, "Header", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/client/component/Header/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/client/component/Header/index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();