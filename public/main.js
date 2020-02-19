/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Pitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Pitch */ \"./src/model/Pitch.js\");\n/* harmony import */ var _model_Duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Duration */ \"./src/model/Duration.js\");\n/* harmony import */ var _model_Time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Time */ \"./src/model/Time.js\");\n/* harmony import */ var _model_Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/Note */ \"./src/model/Note.js\");\n/* harmony import */ var _model_Rest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/Rest */ \"./src/model/Rest.js\");\n/* harmony import */ var _model_Chord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/Chord */ \"./src/model/Chord.js\");\n/* harmony import */ var _model_Direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/Direction */ \"./src/model/Direction.js\");\n/* harmony import */ var _model_Multipart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/Multipart */ \"./src/model/Multipart.js\");\n/* harmony import */ var _model_Bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/Bar */ \"./src/model/Bar.js\");\n/* harmony import */ var _model_Cell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/Cell */ \"./src/model/Cell.js\");\n/* harmony import */ var _model_Staff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/Staff */ \"./src/model/Staff.js\");\n/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./player/player */ \"./src/player/player.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar slice = [].slice;\n\nfunction test() {\n  var list = slice.apply(arguments);\n  var Class = list.shift();\n  list.forEach(function (item) {\n    var inst = new Class(item);\n    console.log(JSON.parse(JSON.stringify(inst)), '' + inst);\n  });\n}\n\ntest(_model_Time__WEBPACK_IMPORTED_MODULE_2__[\"default\"], '3/4');\ntest(_model_Pitch__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  step: 6,\n  octave: 0,\n  accidental: ''\n}, '#3,');\ntest(_model_Duration__WEBPACK_IMPORTED_MODULE_1__[\"default\"], '=_..');\ntest(_model_Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \"b5''---.\");\ntest(_model_Rest__WEBPACK_IMPORTED_MODULE_4__[\"default\"], '0-..');\ntest(_model_Chord__WEBPACK_IMPORTED_MODULE_5__[\"default\"], \"<1#351'>_\");\ntest(_model_Multipart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], '<1- #1 | 12 3>');\ntest(_model_Direction__WEBPACK_IMPORTED_MODULE_6__[\"default\"], '/test', '\\\\測試');\ntest(_model_Bar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], '|', '||', ':|', '|:', ':|:', '|]');\ntest(_model_Cell__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n  data: [new _model_Time__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('6/8'), new _model_Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('5'), new _model_Rest__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('0'), new _model_Chord__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"<572'>\"), new _model_Bar__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('||')]\n}, '2/4 7,1 0   <246>_ <1 1|2 > \\\\be \\n 1 /ab  | 2 ');\ntest(_model_Staff__WEBPACK_IMPORTED_MODULE_10__[\"default\"], '2/4 1 1 | 5  <15> | 6  \\n 6 | 5- ');\nvar obj = new _model_Cell__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('1155665- 4433221- 5544332- 5544332- 1155665- 4433221-');\n\nfunction component() {\n  var div = document.createElement('div');\n  var editor = document.createElement('textarea');\n  var btnRefrash = document.createElement('button');\n  btnRefrash.innerHTML = '()';\n  btnRefrash.addEventListener('click', function () {}, false);\n  var btnPlay = document.createElement('button');\n  btnPlay.innerHTML = '&gt;';\n  btnPlay.addEventListener('click', function () {\n    return _player_player__WEBPACK_IMPORTED_MODULE_11__[\"default\"].play(obj);\n  }, false);\n  var info = document.createElement('pre');\n  div.appendChild(editor);\n  div.appendChild(btnRefrash);\n  div.appendChild(btnPlay);\n  div.appendChild(info);\n  return div;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model/Bar.js":
/*!**************************!*\
  !*** ./src/model/Bar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bar; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Bar =\n/*#__PURE__*/\nfunction () {\n  function Bar(bar, style) {\n    _classCallCheck(this, Bar);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('value');\n    this.name = 'bar';\n    this.style = style;\n\n    if (bar.name === 'lexer') {\n      this.parse(bar);\n    } else if (typeof bar === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bar));\n    } else {\n      this.value = bar.value;\n    }\n  }\n\n  _createClass(Bar, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      var _this = this;\n\n      lexer.token('bar', function (lexeme) {\n        _this.value = lexeme;\n      });\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return this.value;\n    }\n  }]);\n\n  return Bar;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Bar.js?");

/***/ }),

/***/ "./src/model/Cell.js":
/*!***************************!*\
  !*** ./src/model/Cell.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cell; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Time */ \"./src/model/Time.js\");\n/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Note */ \"./src/model/Note.js\");\n/* harmony import */ var _Rest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rest */ \"./src/model/Rest.js\");\n/* harmony import */ var _Chord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chord */ \"./src/model/Chord.js\");\n/* harmony import */ var _Multipart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Multipart */ \"./src/model/Multipart.js\");\n/* harmony import */ var _Direction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Direction */ \"./src/model/Direction.js\");\n/* harmony import */ var _Bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Bar */ \"./src/model/Bar.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\nvar Cell =\n/*#__PURE__*/\nfunction () {\n  function Cell(cell, style) {\n    _classCallCheck(this, Cell);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('data');\n    this.name = 'cell';\n    this.style = style;\n\n    if (cell.name === 'lexer') {\n      this.parse(cell);\n    } else if (typeof cell === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cell));\n    } else {\n      this.data = cell.data.map(function (dt) {\n        switch (dt.name) {\n          case 'time':\n            return new _Time__WEBPACK_IMPORTED_MODULE_2__[\"default\"](dt);\n\n          case 'note':\n            return new _Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"](dt);\n\n          case 'rest':\n            return new _Rest__WEBPACK_IMPORTED_MODULE_4__[\"default\"](dt);\n\n          case 'chord':\n            return new _Chord__WEBPACK_IMPORTED_MODULE_5__[\"default\"](dt);\n\n          case 'multipart':\n            return new _Multipart__WEBPACK_IMPORTED_MODULE_6__[\"default\"](dt);\n\n          case 'direction':\n            return new _Direction__WEBPACK_IMPORTED_MODULE_7__[\"default\"](dt);\n\n          case 'bar':\n            return new _Bar__WEBPACK_IMPORTED_MODULE_8__[\"default\"](dt);\n\n          default:\n            throw new Error(\"Music data: \".concat(dt));\n        }\n      });\n    }\n  }\n\n  _createClass(Cell, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      this.data = [];\n\n      while (!lexer.eof) {\n        if (lexer.is('time')) {\n          this.data.push(new _Time__WEBPACK_IMPORTED_MODULE_2__[\"default\"](lexer));\n        } else if (lexer.is('note')) {\n          this.data.push(new _Note__WEBPACK_IMPORTED_MODULE_3__[\"default\"](lexer));\n        } else if (lexer.is('rest')) {\n          this.data.push(new _Rest__WEBPACK_IMPORTED_MODULE_4__[\"default\"](lexer));\n        } else if (lexer.is('chord')) {\n          this.data.push(new _Chord__WEBPACK_IMPORTED_MODULE_5__[\"default\"](lexer));\n        } else if (lexer.is('multipart')) {\n          this.data.push(new _Multipart__WEBPACK_IMPORTED_MODULE_6__[\"default\"](lexer));\n        } else if (lexer.is('direction')) {\n          this.data.push(new _Direction__WEBPACK_IMPORTED_MODULE_7__[\"default\"](lexer));\n        } else if (lexer.is('bar')) {\n          this.data.push(new _Bar__WEBPACK_IMPORTED_MODULE_8__[\"default\"](lexer));\n          lexer.skipWhite();\n          break;\n        } else {\n          lexer.skipWhite();\n          break;\n        }\n\n        lexer.skipWhite();\n      }\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return this.data.join(' ');\n    }\n  }]);\n\n  return Cell;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Cell.js?");

/***/ }),

/***/ "./src/model/Chord.js":
/*!****************************!*\
  !*** ./src/model/Chord.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Chord; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _Pitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pitch */ \"./src/model/Pitch.js\");\n/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Duration */ \"./src/model/Duration.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar Chord =\n/*#__PURE__*/\nfunction () {\n  function Chord(chord, style) {\n    _classCallCheck(this, Chord);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('pitches', 'duration');\n    this.name = 'chord';\n    this.style = style;\n\n    if (chord.name === 'lexer') {\n      this.parse(chord);\n    } else if (typeof chord === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](chord));\n    } else {\n      this.pitches = chord.pitches.map(function (pitch) {\n        return new _Pitch__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pitch);\n      });\n      this.duration = new _Duration__WEBPACK_IMPORTED_MODULE_3__[\"default\"](chord.duration, style);\n    }\n  }\n\n  _createClass(Chord, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      this.pitches = [];\n      lexer.token('<');\n\n      while (lexer.is('pitch')) {\n        this.pitches.push(new _Pitch__WEBPACK_IMPORTED_MODULE_2__[\"default\"](lexer));\n      }\n\n      lexer.token('>');\n      this.duration = new _Duration__WEBPACK_IMPORTED_MODULE_3__[\"default\"](lexer);\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"<\".concat(this.pitches.join(''), \">\").concat(this.duration);\n    }\n  }]);\n\n  return Chord;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Chord.js?");

/***/ }),

/***/ "./src/model/Direction.js":
/*!********************************!*\
  !*** ./src/model/Direction.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Direction; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Direction =\n/*#__PURE__*/\nfunction () {\n  function Direction(direction) {\n    _classCallCheck(this, Direction);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('placement', 'words');\n    this.name = 'direction';\n\n    if (direction.name === 'lexer') {\n      this.parse(direction);\n    } else if (typeof direction === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](direction));\n    } else {\n      this.placement = direction.placement;\n      this.words = direction.words;\n    }\n  }\n\n  _createClass(Direction, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      var _this = this;\n\n      lexer.token('/\\\\', function (lexeme) {\n        _this.placement = lexeme === '/' ? 'above' : 'below';\n      });\n      lexer.token('words', function (lexeme) {\n        _this.words = lexeme.trim();\n      });\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      var strs = [];\n      strs.push(this.placement === 'above' ? '/' : '\\\\');\n      strs.push(this.words);\n      return strs.join('');\n    }\n  }]);\n\n  return Direction;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Direction.js?");

/***/ }),

/***/ "./src/model/Duration.js":
/*!*******************************!*\
  !*** ./src/model/Duration.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Duration; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar STR_TO_TYPE = {\n  '---': 1,\n  '-': 2,\n  '': 4,\n  '_': 8,\n  '=': 16,\n  '=_': 32,\n  '==': 64,\n  '==_': 128,\n  '===': 256,\n  '===_': 512,\n  '====': 1024\n};\nvar TYPE_TO_STR = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"swapObject\"])(STR_TO_TYPE);\nvar DOTS_MULTIPLIERS = [1, 1.5, 1.75];\n\nvar Duration =\n/*#__PURE__*/\nfunction () {\n  function Duration(duration, style) {\n    _classCallCheck(this, Duration);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('type', 'dots');\n    this.name = 'duration';\n\n    if (duration.name === 'lexer') {\n      this.parse(duration);\n    } else if (typeof duration === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](duration));\n    } else {\n      this.type = duration.type;\n      this.dots = duration.dots;\n    }\n  }\n\n  _createClass(Duration, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      var _this = this;\n\n      lexer.optional('type', function (lexeme) {\n        _this.type = STR_TO_TYPE[lexeme];\n      });\n      lexer.optional('dots', function (lexeme) {\n        _this.dots = lexeme.length;\n      });\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"\".concat(TYPE_TO_STR[this.type]).concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"repeat\"])('.', this.dots));\n    }\n  }, {\n    key: \"quarters\",\n    get: function get() {\n      return 4 / this.type * DOTS_MULTIPLIERS[this.dots];\n    }\n  }]);\n\n  return Duration;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Duration.js?");

/***/ }),

/***/ "./src/model/Layer.js":
/*!****************************!*\
  !*** ./src/model/Layer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layer; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Note */ \"./src/model/Note.js\");\n/* harmony import */ var _Rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rest */ \"./src/model/Rest.js\");\n/* harmony import */ var _Chord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chord */ \"./src/model/Chord.js\");\n/* harmony import */ var _Direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Direction */ \"./src/model/Direction.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\nvar Layer =\n/*#__PURE__*/\nfunction () {\n  function Layer(layer) {\n    _classCallCheck(this, Layer);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('data');\n    this.name = 'layer';\n\n    if (layer.name === 'lexer') {\n      this.parse(layer);\n    } else if (typeof layer === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](layer));\n    } else {\n      this.data = layer.data.map(function (dt) {\n        switch (dt.name) {\n          case 'note':\n            return new _Note__WEBPACK_IMPORTED_MODULE_2__[\"default\"](dt);\n\n          case 'rest':\n            return new _Rest__WEBPACK_IMPORTED_MODULE_3__[\"default\"](dt);\n\n          case 'chord':\n            return new _Chord__WEBPACK_IMPORTED_MODULE_4__[\"default\"](dt);\n\n          case 'direction':\n            return new _Direction__WEBPACK_IMPORTED_MODULE_5__[\"default\"](dt);\n\n          default:\n            throw new Error(\"Music data: \".concat(dt));\n        }\n      });\n    }\n  }\n\n  _createClass(Layer, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      this.data = [];\n\n      while (!lexer.eof) {\n        if (lexer.is('note')) {\n          this.data.push(new _Note__WEBPACK_IMPORTED_MODULE_2__[\"default\"](lexer));\n        } else if (lexer.is('rest')) {\n          this.data.push(new _Rest__WEBPACK_IMPORTED_MODULE_3__[\"default\"](lexer));\n        } else if (lexer.is('chord')) {\n          this.data.push(new _Chord__WEBPACK_IMPORTED_MODULE_4__[\"default\"](lexer));\n        } else if (lexer.is('direction')) {\n          this.data.push(new _Direction__WEBPACK_IMPORTED_MODULE_5__[\"default\"](lexer));\n        } else if (lexer.is('|')) {\n          lexer.token('|');\n          lexer.skipWhite();\n          break;\n        } else {\n          lexer.skipWhite();\n          break;\n        }\n\n        lexer.skipWhite();\n      }\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return this.data.join(' ');\n    }\n  }]);\n\n  return Layer;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Layer.js?");

/***/ }),

/***/ "./src/model/Lexer.js":
/*!****************************!*\
  !*** ./src/model/Lexer.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_makeLexerClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/makeLexerClass */ \"./src/utils/makeLexerClass.js\");\n\nvar cjk = \"\\u2E80-\\u2FD5\\u3190-\\u319F\\u3400-\\u4DBF\\u4E00-\\u9FCC\\uF900-\\uFAAD\";\nvar letter = \"A-Za-z\".concat(cjk);\nvar pitch = '[#nb]*[1-7]';\nvar Lexer = Object(_utils_makeLexerClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  0: '0',\n  '/': '\\\\/',\n  '\\\\': '\\\\\\\\',\n  '<': '<',\n  '>': '>',\n  '|': '\\\\|',\n  '/\\\\': '[\\\\/\\\\\\\\]',\n  '//': '\\\\/\\\\/',\n  '/*': '\\\\/\\\\*',\n  '*/': '\\\\*\\\\/',\n  letter: \"[\".concat(letter, \"]\"),\n  word: \"[\".concat(letter, \"]+\"),\n  words: \"[\".concat(letter, \" ]+\"),\n  beats: '[1-9]\\\\d{0,3}',\n  beatType: '[1-9]\\\\d{0,3}',\n  step: '[1-7]',\n  accidental: '(#{1,2}|n|b{1,2})',\n  octave: \"('{1,5}|,{1,5})\",\n  type: '(---|-|={0,5}_|={1,5})',\n  dots: '\\\\.{1,2}',\n  pitch: pitch,\n  duration: '[-_=]*\\.{1,2}',\n  time: '[1-9]\\\\d{0,3}\\\\/',\n  note: pitch,\n  rest: '0',\n  chord: \"<(\".concat(pitch, \")*>\"),\n  multipart: '<',\n  direction: \"[\\\\/\\\\\\\\][\".concat(letter, \" ]+\"),\n  bar: '(:\\\\|:?|\\\\|:|\\\\|[\\\\|\\\\]]?)',\n  cell: '([#nb]?\\\\d|<|[\\\\:\\\\|]|[\\\\/\\\\\\\\])',\n  'sl-comment': '\\\\/\\\\/',\n  'ml-comment': '\\\\/\\\\*'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lexer);\n\n//# sourceURL=webpack:///./src/model/Lexer.js?");

/***/ }),

/***/ "./src/model/Multipart.js":
/*!********************************!*\
  !*** ./src/model/Multipart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Multipart; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layer.js */ \"./src/model/Layer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Multipart =\n/*#__PURE__*/\nfunction () {\n  function Multipart(multipart) {\n    _classCallCheck(this, Multipart);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('layers');\n    this.name = 'multipart';\n\n    if (multipart.name === 'lexer') {\n      this.parse(multipart);\n    } else if (typeof multipart === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](multipart));\n    } else {\n      this.layers = multipart.layers.map(function (mp) {\n        return new _Layer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](mp);\n      });\n    }\n  }\n\n  _createClass(Multipart, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      this.layers = [];\n      lexer.token('<');\n\n      while (!lexer.is('>') && !lexer.eof) {\n        this.layers.push(new _Layer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](lexer));\n      }\n\n      lexer.token('>');\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"<\".concat(this.layers.join(' | '), \">\");\n    }\n  }]);\n\n  return Multipart;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Multipart.js?");

/***/ }),

/***/ "./src/model/Note.js":
/*!***************************!*\
  !*** ./src/model/Note.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Note; });\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _Pitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pitch */ \"./src/model/Pitch.js\");\n/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Duration */ \"./src/model/Duration.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar Note =\n/*#__PURE__*/\nfunction () {\n  function Note(note, style) {\n    _classCallCheck(this, Note);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"makeToJSON\"])('pitch', 'duration');\n    this.name = 'note';\n    this.style = style;\n\n    if (note.name === 'lexer') {\n      this.parse(note);\n    } else if (typeof note === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](note));\n    } else {\n      this.pitch = new _Pitch__WEBPACK_IMPORTED_MODULE_2__[\"default\"](note.pitch, style);\n      this.duration = new _Duration__WEBPACK_IMPORTED_MODULE_3__[\"default\"](note.duration, style);\n    }\n  }\n\n  _createClass(Note, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      this.pitch = new _Pitch__WEBPACK_IMPORTED_MODULE_2__[\"default\"](lexer, this.style);\n      this.duration = new _Duration__WEBPACK_IMPORTED_MODULE_3__[\"default\"](lexer, this.style);\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"\".concat(this.pitch).concat(this.duration);\n    }\n  }]);\n\n  return Note;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Note.js?");

/***/ }),

/***/ "./src/model/Pitch.js":
/*!****************************!*\
  !*** ./src/model/Pitch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pitch; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar STEP_TO_SEMITONE = {\n  1: 0,\n  2: 2,\n  3: 4,\n  4: 5,\n  5: 7,\n  6: 9,\n  7: 11\n};\nvar ACCIDENTAL_TO_ALTER = {\n  '#': 1,\n  '##': 2,\n  n: 0,\n  '': 0,\n  b: -1,\n  bb: -2\n};\n\nvar Pitch =\n/*#__PURE__*/\nfunction () {\n  function Pitch(pitch, style) {\n    _classCallCheck(this, Pitch);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('step', 'accidental', 'octave');\n    this.name = 'pitch';\n    this.style = style;\n\n    if (pitch.name === 'lexer') {\n      this.parse(pitch);\n    } else if (typeof pitch === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pitch));\n    } else {\n      this.step = pitch.step;\n      this.accidental = pitch.accidental;\n      this.octave = pitch.octave;\n    }\n  }\n\n  _createClass(Pitch, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      var _this = this;\n\n      lexer.optional('accidental', function (lexeme) {\n        _this.accidental = lexeme;\n      });\n      lexer.token('step', function (lexeme) {\n        _this.step = +lexeme;\n      });\n      lexer.optional('octave', function (lexeme) {\n        _this.octave = lexeme[0] === \"'\" ? lexeme.length : lexeme[0] === ',' ? -lexeme.length : 0;\n      });\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      var step = this.step,\n          accidental = this.accidental,\n          octave = this.octave;\n      var oct = octave > 0 ? Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"repeat\"])('\\'', octave) : Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"repeat\"])(',', -octave);\n      return \"\".concat(accidental).concat(step).concat(oct);\n    }\n  }, {\n    key: \"alter\",\n    get: function get() {\n      return typeof this._alter === 'number' ? this._alter : ACCIDENTAL_TO_ALTER[this.accidental];\n    },\n    set: function set(alt) {\n      this._alter = alt;\n    }\n  }, {\n    key: \"midiNumber\",\n    get: function get() {\n      return STEP_TO_SEMITONE[this.step] + this.alter + this.octave * 12 + 60;\n    }\n  }, {\n    key: \"frequency\",\n    get: function get() {\n      return Math.pow(2, (this.midiNumber - 69) / 12) * 440;\n    }\n  }]);\n\n  return Pitch;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Pitch.js?");

/***/ }),

/***/ "./src/model/Rest.js":
/*!***************************!*\
  !*** ./src/model/Rest.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rest; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _Duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Duration */ \"./src/model/Duration.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Rest =\n/*#__PURE__*/\nfunction () {\n  function Rest(rest, style) {\n    _classCallCheck(this, Rest);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('duration');\n    this.name = 'rest';\n    this.style = style;\n\n    if (rest.name === 'lexer') {\n      this.parse(rest);\n    } else if (typeof rest === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](rest));\n    } else {\n      this.duration = new _Duration__WEBPACK_IMPORTED_MODULE_2__[\"default\"](rest.duration, style);\n    }\n  }\n\n  _createClass(Rest, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      lexer.token('0');\n      this.duration = new _Duration__WEBPACK_IMPORTED_MODULE_2__[\"default\"](lexer, this.style);\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return '0' + this.duration;\n    }\n  }]);\n\n  return Rest;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Rest.js?");

/***/ }),

/***/ "./src/model/Staff.js":
/*!****************************!*\
  !*** ./src/model/Staff.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Staff; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ \"./src/model/Cell.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Staff =\n/*#__PURE__*/\nfunction () {\n  function Staff(staff, style) {\n    _classCallCheck(this, Staff);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('cells');\n    this.name = 'staff';\n    this.style = style;\n\n    if (staff.name === 'lexer') {\n      this.parse(staff);\n    } else if (typeof staff === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](staff));\n    } else {\n      this.cells = staff.cells.map(function (cell) {\n        return new _Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"](cell);\n      });\n    }\n  }\n\n  _createClass(Staff, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      this.cells = [];\n\n      while (lexer.is('cell')) {\n        this.cells.push(new _Cell__WEBPACK_IMPORTED_MODULE_2__[\"default\"](lexer));\n      }\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return this.cells.join(' ');\n    }\n  }]);\n\n  return Staff;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Staff.js?");

/***/ }),

/***/ "./src/model/Time.js":
/*!***************************!*\
  !*** ./src/model/Time.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Time; });\n/* harmony import */ var _Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexer */ \"./src/model/Lexer.js\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/helpers */ \"./src/utils/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Time =\n/*#__PURE__*/\nfunction () {\n  function Time(time, style) {\n    _classCallCheck(this, Time);\n\n    this.toJSON = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__[\"makeToJSON\"])('beats', 'beatType');\n    this.name = 'time';\n    this.style = style;\n\n    if (time.name === 'lexer') {\n      this.parse(time);\n    } else if (typeof time === 'string') {\n      this.parse(new _Lexer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](time));\n    } else {\n      this.beats = time.beats;\n      this.beatType = time.beatType;\n    }\n  }\n\n  _createClass(Time, [{\n    key: \"parse\",\n    value: function parse(lexer) {\n      var _this = this;\n\n      lexer.token('beats', function (lexeme) {\n        _this.beats = +lexeme;\n      });\n      lexer.token('/');\n      lexer.token('beatType', function (lexeme) {\n        _this.beatType = +lexeme;\n      });\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return \"\".concat(this.beats, \"/\").concat(this.beatType);\n    }\n  }]);\n\n  return Time;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/Time.js?");

/***/ }),

/***/ "./src/player/play.js":
/*!****************************!*\
  !*** ./src/player/play.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return play; });\nfunction play(obj) {\n  var context = this.context;\n\n  switch (obj.name) {\n    case 'note':\n      playNote(0, obj, context);\n      break;\n\n    case 'cell':\n      playCell(0, obj, context);\n      break;\n  }\n}\n\nvar oscPlay = function oscPlay(t, freq, dur, onended, context) {\n  var osc = context.createOscillator();\n  osc.frequency.value = freq;\n  osc.connect(context.destination);\n  osc.start(context.currentTime + t);\n  osc.stop(context.currentTime + t + dur);\n\n  if (onended) {\n    osc.onended = onended;\n  }\n};\n\nvar getDur = function getDur(dt) {\n  return dt.duration.quarters * 60 / 90;\n};\n\nvar playCell = function playCell(t, cell, context) {\n  var tempo = 60 / 90;\n  cell.data.forEach(function (dt) {\n    switch (dt.name) {\n      case 'note':\n        playNote(t, dt, context);\n        t += getDur(dt);\n        break;\n\n      case 'rest':\n        t += getDur(dt);\n        break;\n    }\n  });\n};\n\nvar playNote = function playNote(t, note, context) {\n  var pitch = note.pitch,\n      duration = note.duration;\n  var dur = getDur(note);\n  console.log(\"play: \".concat(note), pitch.frequency);\n  oscPlay(t, pitch.frequency, dur, function () {\n    return console.log('stop');\n  }, context);\n};\n\n//# sourceURL=webpack:///./src/player/play.js?");

/***/ }),

/***/ "./src/player/player.js":
/*!******************************!*\
  !*** ./src/player/player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play */ \"./src/player/play.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar _ctx;\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this.play = _play__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n\n  _createClass(Player, [{\n    key: \"context\",\n    get: function get() {\n      return _ctx || (_ctx = new AudioContext());\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Player());\n\n//# sourceURL=webpack:///./src/player/player.js?");

/***/ }),

/***/ "./src/utils/helpers.js":
/*!******************************!*\
  !*** ./src/utils/helpers.js ***!
  \******************************/
/*! exports provided: repeat, swapObject, makeToJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"repeat\", function() { return repeat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swapObject\", function() { return swapObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeToJSON\", function() { return makeToJSON; });\nvar repeat = function repeat(rep, num) {\n  return new Array(num + 1).join(rep);\n};\nvar swapObject = function swapObject(obj) {\n  var result = {};\n\n  for (var key in obj) {\n    result[obj[key]] = key;\n  }\n\n  return result;\n};\nvar slice = [].slice;\nfunction makeToJSON() {\n  var list = ['name'].concat(slice.apply(arguments));\n  return function () {\n    var _this = this;\n\n    var result = {};\n    list.forEach(function (key) {\n      result[key] = _this[key];\n    });\n    return result;\n  };\n}\n\n//# sourceURL=webpack:///./src/utils/helpers.js?");

/***/ }),

/***/ "./src/utils/makeLexerClass.js":
/*!*************************************!*\
  !*** ./src/utils/makeLexerClass.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeLexerClass; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/utils/helpers.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Lines =\n/*#__PURE__*/\nfunction () {\n  function Lines(str) {\n    _classCallCheck(this, Lines);\n\n    this.data = str.split('\\n');\n    this.ln = -1;\n    this.nextLine();\n  }\n\n  _createClass(Lines, [{\n    key: \"nextLine\",\n    value: function nextLine() {\n      this.ln++;\n      this.line = new Line(this.data[this.ln]);\n    }\n  }, {\n    key: \"eof\",\n    get: function get() {\n      return this.ln === this.data.length - 1 && this.line.eol;\n    }\n  }]);\n\n  return Lines;\n}();\n\nvar Line =\n/*#__PURE__*/\nfunction () {\n  function Line(str) {\n    _classCallCheck(this, Line);\n\n    this.str = str;\n    this.rest = str;\n    this.col = 0;\n  }\n\n  _createClass(Line, [{\n    key: \"advance\",\n    value: function advance(num) {\n      this.col += num;\n      this.rest = this.rest.substr(num);\n    }\n  }, {\n    key: \"eol\",\n    get: function get() {\n      return this.rest.length === 0;\n    }\n  }]);\n\n  return Line;\n}();\n\nvar defaultPatterns = {\n  S: ' ',\n  SS: ' +'\n};\n\nvar getPatterns = function getPatterns(patterns) {\n  patterns = _objectSpread({}, defaultPatterns, {}, patterns);\n  var result = [{}, {}];\n\n  for (var key in patterns) {\n    result[0][key] = new RegExp(patterns[key]);\n    result[1][key] = new RegExp('^' + patterns[key]);\n  }\n\n  return result;\n};\n\nfunction makeLexerClass(patterns) {\n  return (\n    /*#__PURE__*/\n    function () {\n      function Lexer(src) {\n        _classCallCheck(this, Lexer);\n\n        this.name = 'lexer';\n        this.src = src.replace(/\\r\\n/g, '\\n');\n        this.lines = new Lines(src);\n        var ptrns = getPatterns(patterns);\n        this.withoutPatterns = ptrns[0];\n        this.patterns = ptrns[1];\n      }\n\n      _createClass(Lexer, [{\n        key: \"nextLine\",\n        value: function nextLine() {\n          this.lines.nextLine();\n        }\n      }, {\n        key: \"getPattern\",\n        value: function getPattern(token) {\n          if (token in this.patterns) return this.patterns[token];\n          this.error(\"Undefined token [\".concat(token, \"]\"));\n        }\n      }, {\n        key: \"getWithoutPattern\",\n        value: function getWithoutPattern(token) {\n          if (token in this.withoutPatterns) return this.withoutPatterns[token];\n          this.error(\"Undefined token [\".concat(token, \"]\"));\n        }\n      }, {\n        key: \"eat\",\n        value: function eat(token) {\n          var matched = this.line.rest.match(this.getPattern(token));\n          if (!matched) this.error(\"token [\".concat(token, \"]\"));\n          this.lexeme = matched[0];\n          this.line.advance(this.lexeme.length);\n        }\n      }, {\n        key: \"is\",\n        value: function is(token) {\n          return this.getPattern(token).test(this.line.rest);\n        }\n      }, {\n        key: \"token\",\n        value: function token(tkn, act) {\n          this.eat(tkn);\n          if (act) act(this.lexeme);\n        }\n      }, {\n        key: \"optional\",\n        value: function optional(token, act) {\n          this.lexeme = '';\n          if (this.is(token)) this.eat(token);\n          if (act) act(this.lexeme);\n        }\n      }, {\n        key: \"without\",\n        value: function without(token, act) {\n          var matched = this.line.rest.match(this.getWithoutPattern(token));\n          this.lexeme = matched ? this.line.rest.substr(0, matched.index - 1) : this.line.rest;\n          this.line.advance(this.lexeme.length);\n          if (act) act(this.lexeme);\n        }\n      }, {\n        key: \"mlwithout\",\n        value: function mlwithout(token, act) {\n          var pattern = this.getWithoutPattern(token);\n          var strs = [];\n          var matched = this.line.rest.match(pattern);\n\n          while (!matched) {\n            this.str.push(this.line.rest);\n            this.line.advance(this.line.rest.length);\n            if (this.eof) break;\n            matched = this.line.rest.match(pattern);\n          }\n\n          if (matched) strs.push(this.line.rest.substr(0, matched.index - 1));\n          this.lexeme = strs.join('\\n');\n          if (act) act(this.lexeme);\n        }\n      }, {\n        key: \"error\",\n        value: function error(message) {\n          throw new Error(\"\".concat(message, \" at line \").concat(this.ln + 1, \" column \").concat(this.col + 1, \".\\n\").concat(this.line.str, \"\\n\").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"repeat\"])(' ', this.line.col), \"^\"));\n        }\n      }, {\n        key: \"skipSS\",\n        value: function skipSS() {\n          this.optional('SS');\n        }\n      }, {\n        key: \"skipWhite\",\n        value: function skipWhite() {\n          while ((this.is('S') || this.eol) && !this.eof) {\n            if (this.eol) {\n              this.nextLine();\n            } else {\n              this.token('SS');\n            }\n          }\n        }\n      }, {\n        key: \"line\",\n        get: function get() {\n          return this.lines.line;\n        }\n      }, {\n        key: \"ln\",\n        get: function get() {\n          return this.lines.ln;\n        }\n      }, {\n        key: \"col\",\n        get: function get() {\n          return this.line.col;\n        }\n      }, {\n        key: \"eol\",\n        get: function get() {\n          return this.line.eol;\n        }\n      }, {\n        key: \"eof\",\n        get: function get() {\n          return this.lines.eof;\n        }\n      }]);\n\n      return Lexer;\n    }()\n  );\n}\n\n//# sourceURL=webpack:///./src/utils/makeLexerClass.js?");

/***/ })

/******/ });