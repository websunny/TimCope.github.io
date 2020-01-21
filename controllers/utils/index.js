"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var getRoutes = function getRoutes(params) {
  var _routes = [];

  if (params.path.length > 0) {
    for (var i = 0; i < params.path.length; i++) {
      var _r = params.path[i];

      if (typeof _r === 'string') {
        var _obj = {
          title: params.title || '',
          keywords: params.keywords || '',
          description: params.description || '',
          path: "".concat(_r),
          exact: params.exact
        };

        _routes.push(_obj);
      }
    }
  }

  return _routes;
};

var _default = {
  getRoutes: getRoutes
};
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getRoutes, "getRoutes", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/controllers/utils/index.ts");
  reactHotLoader.register(_default, "default", "/Users/shuyicong/Documents/shuyicong/\u4E2A\u4EBA\u9879\u76EE/TimCope/src/controllers/utils/index.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();