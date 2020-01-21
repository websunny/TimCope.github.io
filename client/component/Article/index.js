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

var _reactHotLoader = require("react-hot-loader");

var _marked = _interopRequireDefault(require("marked"));

var _highlight = _interopRequireDefault(require("highlight.js"));

require("./style.less");

var _dec, _class, _temp;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var Article = (_dec = (0, _reactHotLoader.hot)(module), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Article, _React$Component);

  function Article() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Article);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Article)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      articleDetail: {
        content: '## asdsa'
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Article, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // marked相关配置
      _marked["default"].setOptions({
        renderer: new _marked["default"].Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
        highlight: function highlight(code) {
          return _highlight["default"].highlightAuto(code).value;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var articleDetail = this.state.articleDetail;
      return _react["default"].createElement("div", {
        id: "content",
        className: "article-detail",
        dangerouslySetInnerHTML: {
          __html: articleDetail.content ? (0, _marked["default"])(articleDetail.content) : null
        }
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Article;
}(_react["default"].Component), _temp)) || _class);
var _default = Article;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Article, "Article", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/client/component/Article/index.tsx");
  reactHotLoader.register(_default, "default", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/client/component/Article/index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();