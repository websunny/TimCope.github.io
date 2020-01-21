"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _config = _interopRequireDefault(require("./config"));

var _utils = _interopRequireDefault(require("../utils"));

var _component = _interopRequireDefault(require("@loadable/component"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var routes = _utils["default"].getRoutes(_config["default"]);

var MainPage = (0, _component["default"])(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2["default"])(require('./../../client/container/Main/index'));
  });
});

var loadData = function loadData(dispatch, params) {
  return Promise.all([]);
};

if (routes.length > 0) {
  for (var i = 0; i < routes.length; i++) {
    routes[i].component = MainPage;
    routes[i].loadData = loadData;
  }
}

var _default = routes;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routes, "routes", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/controllers/Main/index.ts");
  reactHotLoader.register(MainPage, "MainPage", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/controllers/Main/index.ts");
  reactHotLoader.register(loadData, "loadData", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/controllers/Main/index.ts");
  reactHotLoader.register(_default, "default", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/controllers/Main/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();