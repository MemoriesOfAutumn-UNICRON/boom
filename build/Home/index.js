(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(4)
var $app_style$ = __webpack_require__(5)
var $app_script$ = __webpack_require__(6)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {},
      "children": [
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "group-container"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "group-content"
              ],
              "repeat": {
                "exp": function () {return this.tabItemList},
                "value": "tabItem"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "introduce"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.dataMap[this.tabItem].desc}
                      },
                      "classList": [
                        "introduce-detail"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "tab-bar",
          "attr": {},
          "classList": [
            "footer-container"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.dataMap[this.$item].name}
              },
              "classList": [
                "tab-text"
              ],
              "repeat": function () {return this.tabItemList},
              "events": {
                "click": function (evt) {this.routePath(this.dataMap[this.$item].path,{},evt)}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundImage": "/Common/boom-banner.jpg",
    "backgroundSize": "cover"
  },
  ".title": {
    "fontSize": "40px",
    "textAlign": "center"
  },
  ".btn": {
    "width": "550px",
    "height": "86px",
    "marginTop": "75px",
    "borderRadius": "43px",
    "backgroundColor": "#09ba07",
    "fontSize": "30px",
    "color": "#ffffff"
  },
  ".footer-container": {
    "height": "120px",
    "borderTopWidth": "1px",
    "borderTopColor": "#bbbbbb",
    "borderRightColor": "#bbbbbb",
    "borderBottomColor": "#bbbbbb",
    "borderLeftColor": "#bbbbbb",
    "backgroundColor": "#ffffff"
  },
  ".group-container": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".group-content": {
    "flexDirection": "column",
    "flex": 1
  },
  ".introduce": {
    "paddingLeft": "80px",
    "paddingRight": "80px",
    "marginBottom": "80px",
    "marginTop": "60px"
  },
  ".tab-text": {
    "textAlign": "center",
    "color:active": "#0faeff"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _data = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  private: {
    title: 'boom首页',
    dataMap: _data.tabsData,
    tabItemList: [],
    selectedIdxMap: {}
  },
  onInit: function onInit() {
    var _this = this;

    this.tabItemList = [].concat(Object.keys(this.dataMap));
    this.tabItemList.forEach(function (tabItem) {
      _this.$set('selectedIdxMap.' + tabItem, -1);
      console.log(tabItem);
    });
  },
  routePath: function routePath(path, params) {
    console.log(path);
    console.log('打印东西=====');
    _system2.default.push({ uri: path, params: params });
  },
  routeDetail: function routeDetail() {
    console.log('打印东西呀！！！！！');
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var tabsData = exports.tabsData = {
    index: {
        name: '首页',
        desc: 'boom首页',
        path: 'home'
    },
    square: {
        name: '广场',
        desc: '所有人的信息',
        path: 'DemoDetail'
    },
    add: {
        name: '添加',
        desc: '添加boom球',
        path: 'about'
    },
    mySquare: {
        name: '个人广场',
        desc: '用户自己广场',
        path: 'DemoDetail'
    },
    personalCenter: {
        name: '个人中心',
        desc: '用户信息',
        path: 'DemoDetail'
    }
};

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map