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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalDispatcher; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GlobalDispatcher = function () {
    function GlobalDispatcher() {
        _classCallCheck(this, GlobalDispatcher);
    }

    _createClass(GlobalDispatcher, null, [{
        key: 'addEventListener',
        value: function addEventListener(event, callback) {
            this._listeners.push({ 'event': event, 'callback': callback });
        }
    }, {
        key: 'removeEventListener',
        value: function removeEventListener(event, callback) {
            for (var i = 0; i < this._listeners.length; i++) {
                var listener = this._listeners[i];
                if (listener.event === event && listener.callback === callback) {
                    this._listeners.splice(i, 1);
                }
            }
            // for (let listenerIndex in this._listeners) {
            //     let listener:IListener = this._listeners[listenerIndex];
            //     if(listener.event === event && listener.callback === callback) {
            //         this._listeners.splice(listenerIndex, 1)
            //     }
            // }
        }
    }, {
        key: 'dispatch',
        value: function dispatch(event, obj) {
            for (var i = 0; i < this._listeners.length; i++) {
                var listener = this._listeners[i];
                if (listener.event === event) {
                    listener.callback(obj);
                }
            }
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            this._listeners.length = 0;
        }
    }]);

    return GlobalDispatcher;
}();
GlobalDispatcher._listeners = [];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = {
    GOTOGAMEBTNPRESSED: 'GoToGameBtnPressed',
    GOTOMENUBTNPRESSED: 'GoToMenuBtnPressed',
    PLAY_CUBES: 'PlayCubes',
    AMOUNT_BAR_MINUS_PRESSED: 'AmountBarMinus',
    AMOUNT_BAR_PLUS_PRESSED: 'AmountBarPlus',
    PLAYER_BAR_MINUS_PRESSED: 'PlayerBarMinus',
    PLAYER_BAR_PLUS_PRESSED: 'PlayerBarPlus',
    MENU_PLAYER_1_PRESSED: 'MenuPlayer1Pressed',
    MENU_PLAYER_2_PRESSED: 'MenuPlayer2Pressed',
    MENU_PLAYER_3_PRESSED: 'MenuPlayer3Pressed',
    MENU_PLAYER_4_PRESSED: 'MenuPlayer4Pressed',
    GAME_PLAYER_1_PRESSED: 'GamePlayer1Pressed',
    GAME_PLAYER_2_PRESSED: 'GamePlayer2Pressed',
    GAME_PLAYER_3_PRESSED: 'GamePlayer3Pressed',
    GAME_PLAYER_4_PRESSED: 'GamePlayer4Pressed',
    AMOUNT_BAR_RATIO: 0.000095,
    PLAYER_BAR_RATIO: 40,
    CHIP_IS_STOPPED: 'ChipIsStopped',
    TO_BUY_BTN_PRESSED: 'ToBuyBtnPressed',
    TO_AUCTION_BTN_PRESSED: 'ToAuctionBtnPressed',
    POPUP_CLOSED: 'PopUpClosed'
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
    function Model() {
        _classCallCheck(this, Model);
    }

    _createClass(Model, null, [{
        key: "start_amount",
        get: function get() {
            return Model._start_amount;
        },
        set: function set(_start_amount) {
            Model._start_amount = _start_amount;
        }
    }, {
        key: "start_amount_max",
        get: function get() {
            return Model._start_amount_max;
        },
        set: function set(_start_amount_max) {
            Model._start_amount_max = _start_amount_max;
        }
    }, {
        key: "start_amount_min",
        get: function get() {
            return Model._start_amount_min;
        },
        set: function set(_start_amount_min) {
            Model._start_amount_min = _start_amount_min;
        }
    }, {
        key: "start_amount_step",
        get: function get() {
            return Model._start_amount_step;
        },
        set: function set(_start_amount_step) {
            Model._start_amount_step = _start_amount_step;
        }
    }, {
        key: "number_of_players",
        get: function get() {
            return Model._number_of_players;
        },
        set: function set(_number_of_players) {
            Model._number_of_players = _number_of_players;
        }
    }, {
        key: "number_of_players_max",
        get: function get() {
            return Model._number_of_players_max;
        },
        set: function set(_number_of_players_max) {
            Model._number_of_players_max = _number_of_players_max;
        }
    }, {
        key: "number_of_players_min",
        get: function get() {
            return Model._number_of_players_min;
        },
        set: function set(_number_of_players_mi) {
            Model._number_of_players_min = _number_of_players_mi;
        }
    }, {
        key: "number_of_players_step",
        get: function get() {
            return Model._number_of_players_step;
        },
        set: function set(_number_of_players_step) {
            Model._number_of_players_step = _number_of_players_step;
        }
    }, {
        key: "player_1_name",
        get: function get() {
            return Model._player_1_name;
        },
        set: function set(_player_1_name) {
            Model._player_1_name = _player_1_name;
        }
    }, {
        key: "player_2_name",
        get: function get() {
            return Model._player_2_name;
        },
        set: function set(_player_2_name) {
            Model._player_2_name = _player_2_name;
        }
    }, {
        key: "players",
        get: function get() {
            return this._players;
        },
        set: function set(_players) {
            this._players = _players;
        }
    }, {
        key: "currentPlayerIndex",
        get: function get() {
            return this._currentPlayerIndex;
        },
        set: function set(_currentPlayerIndex) {
            this._currentPlayerIndex = _currentPlayerIndex;
        }
    }, {
        key: "currentPlayerPosition",
        get: function get() {
            return this._currentPlayerPosition;
        },
        set: function set(_currentPlayerPosition) {
            this._currentPlayerPosition = _currentPlayerPosition;
        }
    }]);

    return Model;
}();
Model._players = [];

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleBox; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleBox = function (_PIXI$Graphics) {
    _inherits(SimpleBox, _PIXI$Graphics);

    function SimpleBox(pos_x, pos_y, w, h, _color, _text) {
        _classCallCheck(this, SimpleBox);

        var _this = _possibleConstructorReturn(this, (SimpleBox.__proto__ || Object.getPrototypeOf(SimpleBox)).call(this));

        _this.pos_x = pos_x;
        _this.pos_y = pos_y;
        _this.w = w;
        _this.h = h;
        _this._color = _color;
        _this._text = _text;
        _this.activePlayer = false;
        _this.box = new PIXI.Graphics();
        _this.box.alpha = 4;
        _this.box.beginFill(_color, 0.25);
        _this.box.drawRoundedRect(pos_x, pos_y, w, h, 15);
        _this.box.endFill();
        _this.addChild(_this.box);
        _this.inputText = new PIXI.Text(_text, { fontFamily: "Arial", fontSize: 28, fill: "black" });
        _this.inputText.position.set(pos_x + 10, pos_y + 10);
        _this.box.addChild(_this.inputText);
        return _this;
    }

    _createClass(SimpleBox, [{
        key: "boxOutLine",
        value: function boxOutLine() {
            this.box.lineStyle(10, 0xFFFFFF, 1);
            this.box.drawRoundedRect(this.pos_x, this.pos_y, this.w, this.h, 15);
        }
    }, {
        key: "outLineClear",
        value: function outLineClear() {
            this.box.clear();
            this.box.beginFill(this._color, 0.25);
            this.box.drawRoundedRect(this.pos_x, this.pos_y, this.w, this.h, 15);
            this.box.endFill();
        }
    }]);

    return SimpleBox;
}(PIXI.Graphics);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_GlobalDispatcher__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var SimpleButton = function (_PIXI$Sprite) {
    _inherits(SimpleButton, _PIXI$Sprite);

    function SimpleButton(event, graphicAlias, pos_x, pos_y) {
        _classCallCheck(this, SimpleButton);

        var _this = _possibleConstructorReturn(this, (SimpleButton.__proto__ || Object.getPrototypeOf(SimpleButton)).call(this));

        _this.event = event;
        _this.graphicAlias = graphicAlias;
        _this.pos_x = pos_x;
        _this.pos_y = pos_y;
        _this.onDownEvent = event;
        _this.textureMenu = PIXI.loader.resources.SpriteSheet.textures;
        _this.initGraphic(_this.textureMenu);
        _this.addListeners(_this.currentState);
        return _this;
    }

    _createClass(SimpleButton, [{
        key: 'initGraphic',
        value: function initGraphic(currentTexture) {
            this.currentState = new PIXI.Sprite(currentTexture[this.graphicAlias + ".png"]);
            this.currentState.position.set(this.pos_x, this.pos_y);
            this.currentState.interactive = true;
            this.currentState.buttonMode = true;
            this.addChild(this.currentState);
        }
    }, {
        key: 'addListeners',
        value: function addListeners(currentState) {
            var _this2 = this;

            this.currentState.on('mousedown', function () {
                _this2.currentState.texture = _this2.textureMenu[_this2.graphicAlias + "Down.png"];
            });
            this.currentState.on('mouseup', function () {
                __WEBPACK_IMPORTED_MODULE_0__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch(_this2.onDownEvent);
            });
            this.currentState.on('mouseover', function () {
                _this2.currentState.texture = _this2.textureMenu[_this2.graphicAlias + "Over.png"];
            });
            this.currentState.on('mouseout', function () {
                _this2.currentState.texture = _this2.textureMenu[_this2.graphicAlias + ".png"];
            });
        }
    }]);

    return SimpleButton;
}(PIXI.Sprite);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scene = function (_PIXI$Container) {
    _inherits(Scene, _PIXI$Container);

    function Scene() {
        _classCallCheck(this, Scene);

        var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

        _this.paused = false;
        _this.updateCB = function () {};
        return _this;
    }

    _createClass(Scene, [{
        key: "onUpdate",
        value: function onUpdate(updateCB) {
            this.updateCB = updateCB;
        }
    }, {
        key: "update",
        value: function update() {
            this.updateCB();
        }
    }, {
        key: "pause",
        value: function pause() {
            this.paused = true;
        }
    }, {
        key: "resume",
        value: function resume() {
            this.paused = false;
        }
    }, {
        key: "isPaused",
        value: function isPaused() {
            return this.paused;
        }
    }]);

    return Scene;
}(PIXI.Container);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellsUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CellsParser__ = __webpack_require__(24);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var CellsUtil = function () {
    function CellsUtil() {
        _classCallCheck(this, CellsUtil);

        this.cellsParser = new __WEBPACK_IMPORTED_MODULE_0__CellsParser__["a" /* CellsParser */](PIXI.loader.resources.GameView.data);
    }

    _createClass(CellsUtil, [{
        key: 'getCellPosition_x',
        value: function getCellPosition_x(_cellIndex) {
            return this.cellsParser.cellsConfig[_cellIndex].x;
        }
    }, {
        key: 'getCellPosition_y',
        value: function getCellPosition_y(_cellIndex) {
            return this.cellsParser.cellsConfig[_cellIndex].y;
        }
    }, {
        key: 'getCellType',
        value: function getCellType(_cellIndex) {
            return this.cellsParser.cellsConfig[_cellIndex].cellType;
        }
    }, {
        key: 'getCompanyName',
        value: function getCompanyName(_cellIndex) {
            return this.cellsParser.cellsConfig[_cellIndex].companyName;
        }
    }, {
        key: 'getCompanyPrice',
        value: function getCompanyPrice(_cellIndex) {
            return this.cellsParser.cellsConfig[_cellIndex].companyPrice;
        }
    }, {
        key: 'getCompanyTax',
        value: function getCompanyTax(_cellIndex) {
            return this.cellsParser.cellsConfig[_cellIndex].compamyTax;
        }
    }, {
        key: 'getCommonTax',
        value: function getCommonTax(_cellIndex) {
            return this.cellsParser.cellsConfig[_cellIndex].tax;
        }
    }]);

    return CellsUtil;
}();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scenes_Scene__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var CoreRenderer = function (_Scene) {
    _inherits(CoreRenderer, _Scene);

    function CoreRenderer() {
        _classCallCheck(this, CoreRenderer);

        return _possibleConstructorReturn(this, (CoreRenderer.__proto__ || Object.getPrototypeOf(CoreRenderer)).apply(this, arguments));
    }

    _createClass(CoreRenderer, null, [{
        key: 'create',
        value: function create(width, height) {
            var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (CoreRenderer.renderer) return this;
            this.defaultWidth = this.width = width;
            this.defaultHeight = this.height = height;
            CoreRenderer.renderer = PIXI.autoDetectRenderer(CoreRenderer.width, CoreRenderer.height);
            document.body.appendChild(CoreRenderer.renderer.view);
            if (scale) {
                CoreRenderer._rescale();
                window.addEventListener('resize', CoreRenderer._rescale, false);
            }
            requestAnimationFrame(this.loop.bind(this));
            return this;
        }
    }, {
        key: '_rescale',
        value: function _rescale() {
            CoreRenderer.ratio = 1;
            CoreRenderer.width = CoreRenderer.defaultWidth * CoreRenderer.ratio;
            CoreRenderer.height = CoreRenderer.defaultHeight * CoreRenderer.ratio;
            CoreRenderer.renderer.resize(CoreRenderer.width, CoreRenderer.height);
        }
    }, {
        key: '_applyRatio',
        value: function _applyRatio(displayObj, ratio) {
            if (ratio == 1) return;
            var object = displayObj;
            object.position.x = object.position.x * ratio;
            object.position.y = object.position.y * ratio;
            object.scale.x = object.scale.x * ratio;
            object.scale.y = object.scale.y * ratio;
            for (var i = 0; i < object.children.length; i++) {
                this._applyRatio(object.children[i], ratio);
            }
        }
    }, {
        key: 'loop',
        value: function loop() {
            requestAnimationFrame(function () {
                CoreRenderer.loop();
            });
            if (!CoreRenderer.currentScene || CoreRenderer.currentScene.isPaused()) return;
            CoreRenderer.currentScene.update();
            CoreRenderer._applyRatio(CoreRenderer.currentScene, CoreRenderer.ratio);
            CoreRenderer.renderer.render(CoreRenderer.currentScene);
            CoreRenderer._applyRatio(CoreRenderer.currentScene, 1 / CoreRenderer.ratio);
        }
    }]);

    return CoreRenderer;
}(__WEBPACK_IMPORTED_MODULE_0__scenes_Scene__["a" /* Scene */]);
CoreRenderer.scenes = {};
CoreRenderer.ratio = 1;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupVO; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopupVO = function () {
    function PopupVO() {
        _classCallCheck(this, PopupVO);
    }

    _createClass(PopupVO, [{
        key: "name",
        get: function get() {
            return this._name;
        },
        set: function set(_name) {
            this._name = _name;
        }
    }]);

    return PopupVO;
}();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Loader__ = __webpack_require__(10);

var loader = new __WEBPACK_IMPORTED_MODULE_0__core_Loader__["a" /* Loader */]();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_SpriteSheet_png__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_SpriteSheet_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_SpriteSheet_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_SpriteSheet_json__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_SpriteSheet_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_SpriteSheet_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_GameView_json__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_GameView_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_GameView_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_DataConfig_json__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_DataConfig_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_DataConfig_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_CoreRenderer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scenes_ScenesManager__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StartParser__ = __webpack_require__(37);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var Loader = function () {
    function Loader() {
        _classCallCheck(this, Loader);

        PIXI.loader.add('SpriteSheet', '../src/assets/SpriteSheet.json').add('GameView', '../src/assets/GameView.json').add('DataConfig', '../src/assets/DataConfig.json').on("complete", this.onComplete).load(function () {
            console.log("all loaded");
        });
    }

    _createClass(Loader, [{
        key: "onComplete",
        value: function onComplete() {
            var startParser = new __WEBPACK_IMPORTED_MODULE_6__StartParser__["a" /* StartParser */](PIXI.loader.resources.DataConfig.data);
            var coreRenderer = __WEBPACK_IMPORTED_MODULE_4__core_CoreRenderer__["a" /* CoreRenderer */];
            coreRenderer.create(1235, 837, true);
            var scenesManager = new __WEBPACK_IMPORTED_MODULE_5__scenes_ScenesManager__["a" /* ScenesManager */]();
            //var cellsUtil = new CellsUtil();
            // var popUpManager = new PopUpManager(cellsUtil.cellsParser.cellsConfig, scenesManager.game);
            // var cellsParser = new CellsParser(PIXI.loader.resources.GameView.data);
            // var cellsManager = new CellsManager(cellsParser.cellsConfig, scenesManager.game);
        }
    }]);

    return Loader;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/SpriteSheet.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/SpriteSheet.json";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/GameView.json";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/DataConfig.json";

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScenesManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_CoreRenderer__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Scene__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_MenuScene__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_GameScene__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_mainTable_CellsUtil__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var ScenesManager = function () {
    function ScenesManager() {
        var _this = this;

        _classCallCheck(this, ScenesManager);

        this.cellsUtil = new __WEBPACK_IMPORTED_MODULE_6__game_mainTable_CellsUtil__["a" /* CellsUtil */]();
        this.menu = this.createScene('menu', __WEBPACK_IMPORTED_MODULE_4__menu_MenuScene__["a" /* MenuScene */]);
        this.goToScene('menu');
        __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(__WEBPACK_IMPORTED_MODULE_3__core_Constants__["a" /* Constants */].GOTOGAMEBTNPRESSED, function () {
            _this.game = _this.createScene('game', __WEBPACK_IMPORTED_MODULE_5__game_GameScene__["a" /* GameScene */]);
            var cellsUtil = new __WEBPACK_IMPORTED_MODULE_6__game_mainTable_CellsUtil__["a" /* CellsUtil */]();
            //var cellsManager = new CellsManager(this.cellsUtil.cellsParser.cellsConfig, this.game);
            //var cellsParser = new CellsParser(PIXI.loader.resources.GameView.data);
            //var chipsManager = new ChipsManager(this.game);
            //var popUpManager = new PopUpManager(this.cellsUtil.cellsParser.cellsConfig, this.game);
            //var gameFieldsManager = new GameFieldsManager(this.game);
            _this.goToScene('game');
        });
        __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(__WEBPACK_IMPORTED_MODULE_3__core_Constants__["a" /* Constants */].GOTOMENUBTNPRESSED, function () {
            _this.goToScene('menu');
        });
    }

    _createClass(ScenesManager, [{
        key: 'createScene',
        value: function createScene(id) {
            var TScene = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_2__Scene__["a" /* Scene */];

            if (__WEBPACK_IMPORTED_MODULE_0__core_CoreRenderer__["a" /* CoreRenderer */].scenes[id]) return undefined;
            var scene = new TScene();
            __WEBPACK_IMPORTED_MODULE_0__core_CoreRenderer__["a" /* CoreRenderer */].scenes[id] = scene;
            return scene;
        }
    }, {
        key: 'goToScene',
        value: function goToScene(id) {
            if (__WEBPACK_IMPORTED_MODULE_0__core_CoreRenderer__["a" /* CoreRenderer */].scenes[id]) {
                if (__WEBPACK_IMPORTED_MODULE_0__core_CoreRenderer__["a" /* CoreRenderer */].currentScene) __WEBPACK_IMPORTED_MODULE_0__core_CoreRenderer__["a" /* CoreRenderer */].currentScene.pause();
                __WEBPACK_IMPORTED_MODULE_0__core_CoreRenderer__["a" /* CoreRenderer */].currentScene = __WEBPACK_IMPORTED_MODULE_0__core_CoreRenderer__["a" /* CoreRenderer */].scenes[id];
                __WEBPACK_IMPORTED_MODULE_0__core_CoreRenderer__["a" /* CoreRenderer */].currentScene.resume();
                return true;
            }
            return false;
        }
    }]);

    return ScenesManager;
}();

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuScene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scene__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_SimpleButton__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Model__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_GlobalDispatcher__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_MenuBar__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scenes_menu_MenuBarVO__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scenes_menu_MenuFieldsManager__ = __webpack_require__(19);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var MenuScene = function (_Scene) {
    _inherits(MenuScene, _Scene);

    function MenuScene() {
        _classCallCheck(this, MenuScene);

        var _this = _possibleConstructorReturn(this, (MenuScene.__proto__ || Object.getPrototypeOf(MenuScene)).call(this));

        _this.playButton = new __WEBPACK_IMPORTED_MODULE_1__ui_SimpleButton__["a" /* SimpleButton */](__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].GOTOGAMEBTNPRESSED, 'playBtn', 500, 400);
        _this.addChild(_this.playButton);
        _this.setupAmountBar();
        _this.setupPlayerBar();
        _this.setupInputFields();
        _this.addListeners();
        return _this;
    }

    _createClass(MenuScene, [{
        key: 'setupAmountBar',
        value: function setupAmountBar() {
            var menuBarVO = new __WEBPACK_IMPORTED_MODULE_6__scenes_menu_MenuBarVO__["a" /* MenuBarVO */]();
            menuBarVO._eventPlus = __WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].AMOUNT_BAR_PLUS_PRESSED;
            menuBarVO._eventMinus = __WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].AMOUNT_BAR_MINUS_PRESSED;
            menuBarVO._currentBar_x = 10;
            menuBarVO._currentBar_y = 10;
            menuBarVO._ratio = __WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].AMOUNT_BAR_RATIO;
            menuBarVO._modelValue = __WEBPACK_IMPORTED_MODULE_3__core_Model__["a" /* Model */].start_amount;
            menuBarVO._modelMaxValue = __WEBPACK_IMPORTED_MODULE_3__core_Model__["a" /* Model */].start_amount_max;
            menuBarVO._modelMinValue = __WEBPACK_IMPORTED_MODULE_3__core_Model__["a" /* Model */].start_amount_min;
            menuBarVO._modelStepValue = __WEBPACK_IMPORTED_MODULE_3__core_Model__["a" /* Model */].start_amount_step;
            menuBarVO._menuBarUnit = "start_amount.png";
            menuBarVO._menuBartoggle = "toggle.png";
            menuBarVO._eventName = "amountBar"; //TODO  make a constant
            this.amount_bar = new __WEBPACK_IMPORTED_MODULE_5__ui_MenuBar__["a" /* MenuBar */](menuBarVO);
            this.addChild(this.amount_bar);
        }
    }, {
        key: 'setupPlayerBar',
        value: function setupPlayerBar() {
            var menuBarVO = new __WEBPACK_IMPORTED_MODULE_6__scenes_menu_MenuBarVO__["a" /* MenuBarVO */]();
            menuBarVO._eventPlus = __WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].PLAYER_BAR_PLUS_PRESSED;
            menuBarVO._eventMinus = __WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].PLAYER_BAR_MINUS_PRESSED;
            menuBarVO._currentBar_x = 10;
            menuBarVO._currentBar_y = 200;
            menuBarVO._ratio = __WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].PLAYER_BAR_RATIO + 20;
            menuBarVO._modelValue = __WEBPACK_IMPORTED_MODULE_3__core_Model__["a" /* Model */].number_of_players;
            menuBarVO._modelMaxValue = __WEBPACK_IMPORTED_MODULE_3__core_Model__["a" /* Model */].number_of_players_max;
            menuBarVO._modelMinValue = __WEBPACK_IMPORTED_MODULE_3__core_Model__["a" /* Model */].number_of_players_min;
            menuBarVO._modelStepValue = __WEBPACK_IMPORTED_MODULE_3__core_Model__["a" /* Model */].number_of_players_step;
            menuBarVO._menuBarUnit = "number_of_players.png";
            menuBarVO._menuBartoggle = "toggle.png";
            menuBarVO._eventName = "playerBar"; //TODO  make a constant
            this.amount_bar = new __WEBPACK_IMPORTED_MODULE_5__ui_MenuBar__["a" /* MenuBar */](menuBarVO);
            this.amount_bar.menu_bar_value.visible = false;
            this.addChild(this.amount_bar);
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            __WEBPACK_IMPORTED_MODULE_4__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener("amountBar", function (_modelValue) {
                __WEBPACK_IMPORTED_MODULE_3__core_Model__["a" /* Model */].start_amount = _modelValue;
            });
            __WEBPACK_IMPORTED_MODULE_4__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener("playerBar", function (_modelValue) {
                __WEBPACK_IMPORTED_MODULE_3__core_Model__["a" /* Model */].number_of_players = _modelValue;
            });
        }
    }, {
        key: 'setupInputFields',
        value: function setupInputFields() {
            this.menuFieldsManager = new __WEBPACK_IMPORTED_MODULE_7__scenes_menu_MenuFieldsManager__["a" /* MenuFieldsManager */]();
            this.addChild(this.menuFieldsManager);
        }
    }]);

    return MenuScene;
}(__WEBPACK_IMPORTED_MODULE_0__Scene__["a" /* Scene */]);
// public setupInputBoxes(){
//   var inputBox = new InputBox();
//   inputBox.interactive = true;
//   for (let i: number = 0; i < Model._number_of_players; i++){
//     inputBox.createSimpleBox(10, 350 + i*70);
//     this.addChild(inputBox);  
//     var playerName = new InputBoxText(this.players_array[i]);
//         playerName.position.set(120, 355 + i*70 );
//     this.addChild(playerName);
//   }
// }

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_GlobalDispatcher__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_SimpleButton__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Constants__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MenuBar = function (_PIXI$Sprite) {
    _inherits(MenuBar, _PIXI$Sprite);

    function MenuBar(menuBarVO) {
        _classCallCheck(this, MenuBar);

        var _this = _possibleConstructorReturn(this, (MenuBar.__proto__ || Object.getPrototypeOf(MenuBar)).call(this));

        _this.menuBarVO = menuBarVO;
        _this.textureMenu = PIXI.loader.resources.SpriteSheet.textures;
        _this.initGraphic();
        _this.addPlusListener();
        _this.addMinusListener();
        return _this;
    }

    _createClass(MenuBar, [{
        key: 'initGraphic',
        value: function initGraphic() {
            this.currentBar = new PIXI.Sprite(this.textureMenu[this.menuBarVO.menuBarUnit]);
            this.currentBar.position.set(this.menuBarVO.currentBar_x, this.menuBarVO.currentBar_y);
            this.currentToggle = new PIXI.Sprite(this.textureMenu[this.menuBarVO.menuBartoggle]);
            this.currentToggle.position.set(this.menuBarVO.modelValue * this.menuBarVO.ratio, this.currentBar.y + this.currentBar.height - 27);
            this.currentPlus = new __WEBPACK_IMPORTED_MODULE_1__ui_SimpleButton__["a" /* SimpleButton */](this.menuBarVO.eventPlus, "plus", 347, this.currentBar.y + 52);
            this.currentMinus = new __WEBPACK_IMPORTED_MODULE_1__ui_SimpleButton__["a" /* SimpleButton */](this.menuBarVO.eventMinus, "minus", 22, this.currentBar.y + 52);
            this.menu_bar_value = new PIXI.Text(this.menuBarVO.modelValue, { fontFamily: "Arial", fontSize: 28, fill: "green" });
            this.menu_bar_value.position.set(this.currentBar.x + this.currentBar.width / 2 - 50, this.currentBar.y + this.currentBar.height / 2 - 10);
            this.addChild(this.currentBar);
            this.addChild(this.currentToggle);
            this.addChild(this.currentPlus);
            this.addChild(this.currentMinus);
            this.addChild(this.menu_bar_value);
        }
    }, {
        key: 'onPlusButtonPressed',
        value: function onPlusButtonPressed() {
            if (this.currentPlus) {
                if (this.menuBarVO._modelValue < this.menuBarVO.modelMaxValue) {
                    this.menuBarVO._modelValue = this.menuBarVO.modelValue + this.menuBarVO.modelStepValue;
                    __WEBPACK_IMPORTED_MODULE_0__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch(this.menuBarVO.eventName, this.menuBarVO.modelValue);
                    this.currentToggle.x = this.currentToggle.x + this.menuBarVO.modelStepValue * this.menuBarVO.ratio;
                    this.menu_bar_value.text = this.menuBarVO.modelValue;
                }
            }
        }
    }, {
        key: 'onMinusButtonPressed',
        value: function onMinusButtonPressed() {
            if (this.currentMinus) {
                if (this.menuBarVO._modelValue > this.menuBarVO.modelMinValue) {
                    this.menuBarVO._modelValue = this.menuBarVO.modelValue - this.menuBarVO.modelStepValue;
                    __WEBPACK_IMPORTED_MODULE_0__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch(this.menuBarVO.eventName, this.menuBarVO.modelValue);
                    this.currentToggle.x = this.currentToggle.x - this.menuBarVO.modelStepValue * this.menuBarVO.ratio;
                    this.menu_bar_value.text = this.menuBarVO.modelValue;
                }
            }
        }
    }, {
        key: 'addPlusListener',
        value: function addPlusListener() {
            __WEBPACK_IMPORTED_MODULE_0__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(this.menuBarVO.eventPlus, this.onPlusButtonPressed.bind(this));
        }
    }, {
        key: 'addMinusListener',
        value: function addMinusListener() {
            __WEBPACK_IMPORTED_MODULE_0__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(this.menuBarVO.eventMinus, this.onMinusButtonPressed.bind(this));
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            __WEBPACK_IMPORTED_MODULE_0__core_GlobalDispatcher__["a" /* GlobalDispatcher */].removeEventListener(__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].AMOUNT_BAR_MINUS_PRESSED, this.onMinusButtonPressed);
        }
    }]);

    return MenuBar;
}(PIXI.Sprite);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarVO; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuBarVO = function () {
    function MenuBarVO() {
        _classCallCheck(this, MenuBarVO);
    }

    _createClass(MenuBarVO, [{
        key: "eventName",
        get: function get() {
            return this._eventName;
        }
    }, {
        key: "eventPlus",
        get: function get() {
            return this._eventPlus;
        }
    }, {
        key: "eventMinus",
        get: function get() {
            return this._eventMinus;
        }
    }, {
        key: "currentBar_x",
        get: function get() {
            return this._currentBar_x;
        }
    }, {
        key: "currentBar_y",
        get: function get() {
            return this._currentBar_y;
        }
    }, {
        key: "ratio",
        get: function get() {
            return this._ratio;
        }
    }, {
        key: "modelValue",
        get: function get() {
            return this._modelValue;
        }
    }, {
        key: "modelMaxValue",
        get: function get() {
            return this._modelMaxValue;
        }
    }, {
        key: "modelMinValue",
        get: function get() {
            return this._modelMinValue;
        }
    }, {
        key: "modelStepValue",
        get: function get() {
            return this._modelStepValue;
        }
    }, {
        key: "menuBarUnit",
        get: function get() {
            return this._menuBarUnit;
        }
    }, {
        key: "menuBartoggle",
        get: function get() {
            return this._menuBartoggle;
        }
    }]);

    return MenuBarVO;
}();

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuFieldsManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Model__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_SimpleBox__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scenes_game_mainTable_PlayerVO__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MenuFieldsManager = function (_PIXI$Sprite) {
    _inherits(MenuFieldsManager, _PIXI$Sprite);

    function MenuFieldsManager() {
        _classCallCheck(this, MenuFieldsManager);

        var _this = _possibleConstructorReturn(this, (MenuFieldsManager.__proto__ || Object.getPrototypeOf(MenuFieldsManager)).call(this));

        _this.playerBoxes = [];
        _this.createBoxesByDefault();
        _this.addInputBox();
        _this.changeName();
        _this.removeInputBox();
        return _this;
    }

    _createClass(MenuFieldsManager, [{
        key: 'createPlayer',
        value: function createPlayer(boxYPosition, event, color, name) {
            var playerVO = new __WEBPACK_IMPORTED_MODULE_4__scenes_game_mainTable_PlayerVO__["a" /* PlayerVO */]();
            playerVO.name = name;
            playerVO.color = color;
            __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players.push(playerVO);
            var playerBox = new __WEBPACK_IMPORTED_MODULE_3__ui_SimpleBox__["a" /* SimpleBox */](10, boxYPosition, 350, 60, playerVO.color, playerVO.name);
            playerBox.buttonMode = true;
            playerBox.interactive = true;
            playerBox.on('mousedown', function () {
                __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch(event);
            });
            this.playerBoxes.push(playerBox);
            this.addChild(playerBox);
        }
    }, {
        key: 'createBoxesByDefault',
        value: function createBoxesByDefault() {
            this.createPlayer(330, __WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].MENU_PLAYER_1_PRESSED, 0x00ff00, __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].player_1_name);
            this.createPlayer(420, __WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].MENU_PLAYER_2_PRESSED, 0xffff00, __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].player_2_name);
        }
    }, {
        key: 'addInputBox',
        value: function addInputBox() {
            __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].PLAYER_BAR_PLUS_PRESSED, this.onPlusButtonPressed.bind(this));
        }
    }, {
        key: 'removeInputBox',
        value: function removeInputBox() {
            __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].PLAYER_BAR_MINUS_PRESSED, this.onMinusButtonPressed.bind(this));
        }
    }, {
        key: 'changeName',
        value: function changeName() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].MENU_PLAYER_1_PRESSED, function () {
                __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[0].name = prompt("Please, enter your name");
                _this2.playerBoxes[0].inputText.text = __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[0].name;
            });
            __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].MENU_PLAYER_2_PRESSED, function () {
                __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[1].name = prompt("Please, enter your name");
                _this2.playerBoxes[1].inputText.text = __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[1].name;
            });
            __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].MENU_PLAYER_3_PRESSED, function () {
                __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[2].name = prompt("Please, enter your name");
                _this2.playerBoxes[2].inputText.text = __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[2].name;
            });
            __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].MENU_PLAYER_4_PRESSED, function () {
                __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[3].name = prompt("Please, enter your name");
                _this2.playerBoxes[3].inputText.text = __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[3].name;
            });
        }
    }, {
        key: 'onPlusButtonPressed',
        value: function onPlusButtonPressed() {
            for (var i = __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].number_of_players - 1; i < __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].number_of_players; i++) {
                if (__WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players.length == 2) {
                    this.createPlayer(510, __WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].MENU_PLAYER_3_PRESSED, 0x0066ff, "        ");
                } else if (__WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players.length == 3) {
                    this.createPlayer(600, __WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].MENU_PLAYER_4_PRESSED, 0xff0000, "        ");
                } else {
                    return;
                }
            }
        }
    }, {
        key: 'onMinusButtonPressed',
        value: function onMinusButtonPressed() {
            if (this.children.length > __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].number_of_players_min) {
                if (__WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].number_of_players >= __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].number_of_players_min) {
                    this.children.pop();
                }
            }
        }
    }]);

    return MenuFieldsManager;
}(PIXI.Sprite);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerVO; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerVO = function () {
    function PlayerVO() {
        _classCallCheck(this, PlayerVO);

        this._companies = [];
        this._position = 0;
    }

    _createClass(PlayerVO, [{
        key: "name",
        get: function get() {
            return this._name;
        },
        set: function set(_name) {
            this._name = _name;
        }
    }, {
        key: "money",
        get: function get() {
            return this._money;
        },
        set: function set(_money) {
            this._money = _money;
        }
    }, {
        key: "color",
        get: function get() {
            return this._color;
        },
        set: function set(_color) {
            this._color = _color;
        }
    }, {
        key: "companies",
        get: function get() {
            return this._companies;
        },
        set: function set(_companies) {
            this._companies = _companies;
        }
    }, {
        key: "position",
        get: function get() {
            return this._position;
        },
        set: function set(_position) {
            this._position = _position;
        }
    }]);

    return PlayerVO;
}();

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameScene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scene__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_SimpleButton__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scenes_game_ChipsManager__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mainTable_CellsManager__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mainTable_CellsUtil__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scenes_game_GameFieldsManager__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_RollBar__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ui_PopUp_PopupVO__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ui_PopUp_PopUpManager__ = __webpack_require__(32);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var GameScene = function (_Scene) {
    _inherits(GameScene, _Scene);

    function GameScene() {
        _classCallCheck(this, GameScene);

        var _this = _possibleConstructorReturn(this, (GameScene.__proto__ || Object.getPrototypeOf(GameScene)).call(this));

        _this.cellsUtil = new __WEBPACK_IMPORTED_MODULE_6__mainTable_CellsUtil__["a" /* CellsUtil */]();
        _this.popUpManager = new __WEBPACK_IMPORTED_MODULE_10__ui_PopUp_PopUpManager__["a" /* PopUpManager */](_this.cellsUtil.cellsParser.cellsConfig, _this);
        _this.cellsManager = new __WEBPACK_IMPORTED_MODULE_5__mainTable_CellsManager__["a" /* CellsManager */](_this.cellsUtil.cellsParser.cellsConfig, _this);
        _this.gameFieldsManager = new __WEBPACK_IMPORTED_MODULE_7__scenes_game_GameFieldsManager__["a" /* GameFieldsManager */](_this);
        _this.chipsManager = new __WEBPACK_IMPORTED_MODULE_4__scenes_game_ChipsManager__["a" /* ChipsManager */](_this);
        _this.rollBar = new __WEBPACK_IMPORTED_MODULE_8__ui_RollBar__["a" /* RollBar */](_this);
        _this.createMenuButton();
        _this.addListeners();
        return _this;
    }

    _createClass(GameScene, [{
        key: 'createMenuButton',
        value: function createMenuButton() {
            this.menuButton = new __WEBPACK_IMPORTED_MODULE_2__ui_SimpleButton__["a" /* SimpleButton */](__WEBPACK_IMPORTED_MODULE_3__core_Constants__["a" /* Constants */].GOTOMENUBTNPRESSED, 'menuBtn', 930, 600);
            this.addChild(this.menuButton);
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('current_position', function (_currentPosition) {
                _this2.currentPlayerPosition = _currentPosition;
            });
            __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('active_player', function (_currentPlayer) {
                _this2.currentPlayerIndex = _currentPlayer;
            });
            __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(__WEBPACK_IMPORTED_MODULE_3__core_Constants__["a" /* Constants */].PLAY_CUBES, this.onRollButtonPressed.bind(this));
        }
    }, {
        key: 'onRollButtonPressed',
        value: function onRollButtonPressed() {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('close_popup');
            this.gameFieldsManager.setPlayerQueue();
            this.rollBar.cube_1.anim.gotoAndPlay(Math.random() * 2);
            this.rollBar.cube_2.anim.gotoAndPlay(Math.random() * 2);
            setTimeout(function () {
                _this3.rollBar.cube_1.anim.stop();
                _this3.rollBar.cube_2.anim.stop();
                _this3.rollBar.setCubesSum();
                _this3.chipsManager.setCurrentPlayerChip(_this3.rollBar.cubes_sum, _this3.currentPlayerIndex);
                _this3.showPopUp();
            }, 1000);
        }
    }, {
        key: 'showPopUp',
        value: function showPopUp() {
            var popupData = new __WEBPACK_IMPORTED_MODULE_9__ui_PopUp_PopupVO__["a" /* PopupVO */]();
            if (this.cellsManager.isCompanyType(this.currentPlayerPosition)) {
                __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('company_tax');
                if (this.cellsManager.isCompanySold(this.currentPlayerPosition) == false || this.cellsManager.isCompanySold(this.currentPlayerPosition) == undefined) {
                    popupData.name = 'sellingPopUp';
                    __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('show_popup', popupData);
                }
            }
            if (this.cellsManager.isForceType(this.currentPlayerPosition)) {
                popupData.name = 'forceMajeure';
                __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('show_popup', popupData);
            }
            if (this.cellsManager.isChanceType(this.currentPlayerPosition)) {
                popupData.name = 'chancePopUp';
                __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('show_popup', popupData);
            }
            if (this.cellsManager.isTaxType(this.currentPlayerPosition)) {
                __WEBPACK_IMPORTED_MODULE_1__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('common_tax');
            }
        }
    }]);

    return GameScene;
}(__WEBPACK_IMPORTED_MODULE_0__Scene__["a" /* Scene */]);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipsManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_Chip__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Model__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scenes_game_mainTable_CellsUtil__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_GlobalDispatcher__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ChipsManager = function (_PIXI$Sprite) {
    _inherits(ChipsManager, _PIXI$Sprite);

    function ChipsManager(parent) {
        _classCallCheck(this, ChipsManager);

        var _this2 = _possibleConstructorReturn(this, (ChipsManager.__proto__ || Object.getPrototypeOf(ChipsManager)).call(this));

        _this2.parent = parent;
        _this2.chipsArray = [];
        _this2.number_of_cells = 38;
        _this2.cellsUtil = new __WEBPACK_IMPORTED_MODULE_2__scenes_game_mainTable_CellsUtil__["a" /* CellsUtil */]();
        _this2.initChips();
        return _this2;
    }

    _createClass(ChipsManager, [{
        key: 'initChips',
        value: function initChips() {
            var chipColors = ["green", "yellow", "blue", "red"];
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].number_of_players; i++) {
                var playerChip = new __WEBPACK_IMPORTED_MODULE_0__ui_Chip__["a" /* Chip */](chipColors[i], 25 + i * 5, 25 + i * 5);
                this.parent.addChild(playerChip);
                this.chipsArray.push(playerChip);
            }
        }
    }, {
        key: 'moveCurrentChip',
        value: function moveCurrentChip(currentChip, currentCellPosition_x, currentCellPosition_y) {
            this.checkCollision(currentChip, currentCellPosition_x, currentCellPosition_y);
        }
    }, {
        key: 'setCurrentPlayerPos',
        value: function setCurrentPlayerPos(_currentCubesSum, _currentPlayerIndex) {
            __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[_currentPlayerIndex].position = __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[_currentPlayerIndex].position + _currentCubesSum;
            if (__WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[_currentPlayerIndex].position < this.number_of_cells) {
                return __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[_currentPlayerIndex].position;
            } else {
                __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[_currentPlayerIndex].position = __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[_currentPlayerIndex].position - this.number_of_cells;
                return __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[_currentPlayerIndex].position;
            }
        }
    }, {
        key: 'checkCollision',
        value: function checkCollision(currentChip, currentCellPosition_x, currentCellPosition_y) {
            if (currentChip.x < 1068) {
                currentChip.x < currentCellPosition_x && currentChip.y < 40 ? currentChip.x += 5 : false;
            }
            if (currentChip.x >= 1068) {
                currentChip.y < currentCellPosition_y ? currentChip.y += 5 : false;
            }
            if (currentChip.y > 665) {
                currentChip.x > currentCellPosition_x ? currentChip.x -= 5 : false;
            }
            if (currentChip.x < 30) {
                currentChip.y > currentCellPosition_y ? currentChip.y -= 5 : false;
            }
        }
    }, {
        key: 'setCurrentPlayerChip',
        value: function setCurrentPlayerChip(_cubes_sum, _currentPlayerIndex) {
            this.currentChipPosition = this.setCurrentPlayerPos(_cubes_sum, _currentPlayerIndex);
            __WEBPACK_IMPORTED_MODULE_3__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('current_position', this.currentChipPosition);
            var _this = this;
            this.parent.onUpdate(function () {
                _this.moveCurrentChip(_this.chipsArray[_currentPlayerIndex], _this.cellsUtil.getCellPosition_x(_this.currentChipPosition), _this.cellsUtil.getCellPosition_y(_this.currentChipPosition));
            });
        }
    }]);

    return ChipsManager;
}(PIXI.Sprite);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chip; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chip = function (_PIXI$Sprite) {
    _inherits(Chip, _PIXI$Sprite);

    function Chip(chipColor, pos_x, pos_y) {
        _classCallCheck(this, Chip);

        var _this = _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).call(this));

        _this.simpleChip = new PIXI.Sprite(PIXI.loader.resources.SpriteSheet.textures["chip_" + chipColor + ".png"]);
        _this.simpleChip.position.set(pos_x, pos_y);
        _this.addChild(_this.simpleChip);
        //this.visible = false; //если вешать на this.simpleChip.visible = false; - почему-то не работает
        return _this;
    }

    return Chip;
}(PIXI.Sprite);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellsParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CellVO__ = __webpack_require__(25);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var CellsParser = function CellsParser(resources) {
    _classCallCheck(this, CellsParser);

    this.cellsConfig = [];
    var cells = resources.cells;
    for (var i = 0; i < cells.length; i++) {
        this.cellsConfig.push(new __WEBPACK_IMPORTED_MODULE_0__CellVO__["a" /* CellVO */](cells[i].fieldDefinition.x, cells[i].fieldDefinition.y, cells[i].imageAlias, cells[i].cellType, cells[i].companyName, cells[i].companyPrice, cells[i].companyTax, cells[i].tax));
    }
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellVO; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CellVO = function () {
    function CellVO(_x, _y, _imageAlias, _cellType, _companyName, _companyPrice, _companyTax, _commonTax) {
        _classCallCheck(this, CellVO);

        this._x = _x;
        this._y = _y;
        this._imageAlias = _imageAlias;
        this._cellType = _cellType;
        this._companyName = _companyName;
        this._companyPrice = _companyPrice;
        this._companyTax = _companyTax;
        this._commonTax = _commonTax;
    }

    _createClass(CellVO, [{
        key: "x",
        get: function get() {
            return this._x;
        }
    }, {
        key: "y",
        get: function get() {
            return this._y;
        }
    }, {
        key: "imageAlias",
        get: function get() {
            return this._imageAlias;
        }
    }, {
        key: "cellType",
        get: function get() {
            return this._cellType;
        }
    }, {
        key: "companyName",
        get: function get() {
            return this._companyName;
        }
    }, {
        key: "companyPrice",
        get: function get() {
            return this._companyPrice;
        }
    }, {
        key: "compamyTax",
        get: function get() {
            return this._companyTax;
        }
    }, {
        key: "tax",
        get: function get() {
            return this._commonTax;
        }
    }]);

    return CellVO;
}();

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellsManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CellView__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Model__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CellsUtil__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scenes_game_mainTable_Company__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_PopUp_PopupVO__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var CellsManager = function () {
    function CellsManager(_cellsConfig, parent) {
        _classCallCheck(this, CellsManager);

        this._cellsConfig = _cellsConfig;
        this.parent = parent;
        this.cellsView = [];
        this.cellsUtil = new __WEBPACK_IMPORTED_MODULE_3__CellsUtil__["a" /* CellsUtil */]();
        this.initCells();
        this.addEventListeners();
    }

    _createClass(CellsManager, [{
        key: 'initCells',
        value: function initCells() {
            for (var i = 0; i < this._cellsConfig.length; i++) {
                var cellView = new __WEBPACK_IMPORTED_MODULE_0__CellView__["a" /* CellView */](this._cellsConfig[i]);
                this.cellsView.push(cellView);
                this.parent.addChild(cellView);
            }
        }
    }, {
        key: 'isCompanyType',
        value: function isCompanyType(cellPosition) {
            var cellType = this.cellsUtil.getCellType(cellPosition);
            return cellType == "Company";
        }
    }, {
        key: 'isChanceType',
        value: function isChanceType(cellPosition) {
            var cellType = this.cellsUtil.getCellType(cellPosition);
            return cellType == "Chance";
        }
    }, {
        key: 'isForceType',
        value: function isForceType(cellPosition) {
            var cellType = this.cellsUtil.getCellType(cellPosition);
            return cellType == "Force majeure";
        }
    }, {
        key: 'isTaxType',
        value: function isTaxType(cellPosition) {
            var cellType = this.cellsUtil.getCellType(cellPosition);
            return cellType == "Tax";
        }
    }, {
        key: 'isCompanySold',
        value: function isCompanySold(cellPosition) {
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players.length; i++) {
                for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[i].companies.length; j++) {
                    if (__WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[i].companies[j].name === this.cellsUtil.getCompanyName(cellPosition)) {
                        return true;
                    }
                }
            }
        }
    }, {
        key: 'isCurrentPlayerCompanyOwner',
        value: function isCurrentPlayerCompanyOwner(cellPosition, currentPlayerIndex) {
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[currentPlayerIndex].companies.length; j++) {
                if (__WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[currentPlayerIndex].companies[j].name === this.cellsUtil.getCompanyName(cellPosition)) {
                    return currentPlayerIndex;
                }
            }
        }
    }, {
        key: 'isMoneyEnough',
        value: function isMoneyEnough(cellPosition, currentPlayerIndex) {
            var companyPrice = this.cellsUtil.getCompanyPrice(cellPosition);
            var currentPlayerMoney = __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[currentPlayerIndex].money;
            return currentPlayerMoney >= companyPrice;
        }
    }, {
        key: 'markCell',
        value: function markCell(curentPlayerPosition, currentPlayerIndex) {
            var filter = new PIXI.filters.ColorMatrixFilter();
            this.cellsView[curentPlayerPosition].filters = [filter];
            var matrix = filter.matrix;
            var colorIndexes = [4, 5, 9, 8.5];
            var count = colorIndexes[currentPlayerIndex];
            matrix[1] = Math.sin(count) * 3;
            matrix[2] = Math.cos(count);
            matrix[3] = Math.cos(count) * 1.5;
            matrix[4] = Math.sin(count / 3) * 2;
            matrix[5] = Math.sin(count / 2);
            matrix[6] = Math.sin(count / 4);
        }
    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('active_player', function (_currentPlayerIndex) {
                _this.currentPlayerIndex = _currentPlayerIndex;
            });
            __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('current_position', function (_currentPlayerPosition) {
                _this.currentPlayerPosition = _currentPlayerPosition;
            });
            __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('company_name', function (companyName) {
                _this.currentCompanyName = companyName;
            });
            __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('buy_company', function () {
                _this.onBuyCompanyPressed();
            });
            __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('company_tax', function () {
                _this.companyTax();
            });
            __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('common_tax', function () {
                _this.commonTax();
            });
        }
    }, {
        key: 'onBuyCompanyPressed',
        value: function onBuyCompanyPressed() {
            this.markCell(this.currentPlayerPosition, this.currentPlayerIndex);
            var moneyEnogh = this.isMoneyEnough(this.currentPlayerPosition, this.currentPlayerIndex);
            if (moneyEnogh == true) {
                var company = new __WEBPACK_IMPORTED_MODULE_4__scenes_game_mainTable_Company__["a" /* Company */]();
                company.name = this.currentCompanyName;
                __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].companies.push(company);
                __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money = __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money - this.cellsUtil.getCompanyPrice(this.currentPlayerPosition);
                __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('player_money', __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money);
                __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('close_popup');
            } else {
                __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('close_popup');
                var popupData = new __WEBPACK_IMPORTED_MODULE_5__ui_PopUp_PopupVO__["a" /* PopupVO */]();
                popupData.name = "notEnoughMoneyPopUp";
                __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('show_popup', popupData);
            }
        }
    }, {
        key: 'companyTax',
        value: function companyTax() {
            if (this.isCompanySold(this.currentPlayerPosition) == true && this.isCurrentPlayerCompanyOwner(this.currentPlayerPosition, this.currentPlayerIndex) !== this.currentPlayerIndex) {
                if (__WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money >= this.cellsUtil.getCompanyTax(this.currentPlayerPosition)) {
                    __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money = __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money - this.cellsUtil.getCompanyTax(this.currentPlayerPosition);
                    __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('player_money', __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money);
                } else {
                    var popupData = new __WEBPACK_IMPORTED_MODULE_5__ui_PopUp_PopupVO__["a" /* PopupVO */]();
                    popupData.name = "notEnoughMoneyPopUp";
                    __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('show_popup', popupData);
                }
            }
        }
    }, {
        key: 'commonTax',
        value: function commonTax() {
            if (this.isTaxType(this.currentPlayerPosition) == true) {
                if (__WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money >= this.cellsUtil.getCommonTax(this.currentPlayerPosition)) {
                    __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money = __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money - this.cellsUtil.getCommonTax(this.currentPlayerPosition);
                    __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('player_money', __WEBPACK_IMPORTED_MODULE_1__core_Model__["a" /* Model */].players[this.currentPlayerIndex].money);
                } else {
                    var popupData = new __WEBPACK_IMPORTED_MODULE_5__ui_PopUp_PopupVO__["a" /* PopupVO */]();
                    popupData.name = "notEnoughMoneyPopUp";
                    __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('show_popup', popupData);
                }
            }
        }
    }]);

    return CellsManager;
}();

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellView; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CellView = function (_PIXI$Sprite) {
    _inherits(CellView, _PIXI$Sprite);

    function CellView(cellData) {
        _classCallCheck(this, CellView);

        var _this = _possibleConstructorReturn(this, (CellView.__proto__ || Object.getPrototypeOf(CellView)).call(this));

        _this.textureFields = PIXI.loader.resources.SpriteSheet.textures;
        _this.graphic = new PIXI.Sprite(_this.textureFields[cellData.imageAlias]);
        _this.graphic.position.set(cellData.x, cellData.y);
        _this.addChild(_this.graphic);
        return _this;
    }

    return CellView;
}(PIXI.Sprite);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Company = function () {
    function Company() {
        _classCallCheck(this, Company);
    }

    _createClass(Company, [{
        key: "name",
        get: function get() {
            return this._name;
        },
        set: function set(_name) {
            this._name = _name;
        }
    }, {
        key: "price",
        get: function get() {
            return this._price;
        },
        set: function set(_price) {
            this._price = _price;
        }
    }, {
        key: "tax",
        get: function get() {
            return this._tax;
        },
        set: function set(_tax) {
            this._tax = _tax;
        }
    }, {
        key: "isOwner",
        get: function get() {
            return this._isOwner;
        },
        set: function set(_isOwner) {
            this._isOwner = _isOwner;
        }
    }]);

    return Company;
}();

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameFieldsManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Model__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_SimpleBox__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GameFieldsManager = function (_PIXI$Sprite) {
    _inherits(GameFieldsManager, _PIXI$Sprite);

    function GameFieldsManager(parent) {
        _classCallCheck(this, GameFieldsManager);

        var _this = _possibleConstructorReturn(this, (GameFieldsManager.__proto__ || Object.getPrototypeOf(GameFieldsManager)).call(this));

        _this.parent = parent;
        _this.playerBoxes = [];
        _this.currentPlayerIndex = 0;
        _this.setPlayerBoxes();
        _this.setBoxOutLine(_this.currentPlayerIndex);
        _this.setNewPlayerAmount();
        return _this;
    }

    _createClass(GameFieldsManager, [{
        key: 'setPlayerBoxes',
        value: function setPlayerBoxes() {
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players.length; i++) {
                __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[i].money = __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].start_amount;
                var playerBox = new __WEBPACK_IMPORTED_MODULE_1__ui_SimpleBox__["a" /* SimpleBox */](190, 200 + 100 * i, 300, 80, __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[i].color, "Player " + __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[i].name + "\n money - " + __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[i].money);
                this.parent.addChild(playerBox);
                this.playerBoxes.push(playerBox);
            }
        }
    }, {
        key: 'setBoxOutLine',
        value: function setBoxOutLine(_currentPlayerIndex) {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('active_player', function (_currentPlayerIndex) {
                for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players.length; i++) {
                    _this2.playerBoxes[i].outLineClear();
                }
                _this2.playerBoxes[_currentPlayerIndex].boxOutLine();
            });
        }
    }, {
        key: 'setPlayerQueue',
        value: function setPlayerQueue() {
            if (this.currentPlayerIndex > __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players.length - 1) {
                this.currentPlayerIndex = 0;
            }
            __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('active_player', this.currentPlayerIndex);
            this.currentPlayerIndex++;
        }
    }, {
        key: 'setNewPlayerAmount',
        value: function setNewPlayerAmount() {
            var _this3 = this;

            __WEBPACK_IMPORTED_MODULE_2__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('player_money', function (currentPlayerMoney) {
                _this3.playerBoxes[_this3.currentPlayerIndex - 1].inputText.text = "Player " + __WEBPACK_IMPORTED_MODULE_0__core_Model__["a" /* Model */].players[_this3.currentPlayerIndex - 1].name + "\n money - " + currentPlayerMoney;
            });
        }
    }]);

    return GameFieldsManager;
}(PIXI.Sprite);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RollBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SimpleButton__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scenes_game_Cubes__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RollBar = function (_PIXI$Sprite) {
    _inherits(RollBar, _PIXI$Sprite);

    function RollBar(parent) {
        _classCallCheck(this, RollBar);

        var _this = _possibleConstructorReturn(this, (RollBar.__proto__ || Object.getPrototypeOf(RollBar)).call(this));

        _this.rollButton = new __WEBPACK_IMPORTED_MODULE_0__SimpleButton__["a" /* SimpleButton */](__WEBPACK_IMPORTED_MODULE_1__core_Constants__["a" /* Constants */].PLAY_CUBES, 'rollBtn', 550, 300);
        parent.addChild(_this.rollButton);
        _this.cube_1 = new __WEBPACK_IMPORTED_MODULE_2__scenes_game_Cubes__["a" /* Cubes */](550, 370);
        _this.cube_2 = new __WEBPACK_IMPORTED_MODULE_2__scenes_game_Cubes__["a" /* Cubes */](640, 370);
        parent.addChild(_this.cube_2);
        parent.addChild(_this.cube_1);
        return _this;
    }

    _createClass(RollBar, [{
        key: 'setCubesSum',
        value: function setCubesSum() {
            var cube_1_number = this.cube_1.anim.currentFrame + 1;
            var cube_2_number = this.cube_2.anim.currentFrame + 1;
            this.cubes_sum = cube_1_number + cube_2_number;
        }
    }]);

    return RollBar;
}(PIXI.Sprite);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cubes; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cubes = function (_PIXI$Sprite) {
    _inherits(Cubes, _PIXI$Sprite);

    function Cubes(pos_x, pos_y) {
        _classCallCheck(this, Cubes);

        var _this = _possibleConstructorReturn(this, (Cubes.__proto__ || Object.getPrototypeOf(Cubes)).call(this));

        var images = ["cube_1.png", "cube_2.png", "cube_3.png", "cube_4.png", "cube_5.png", "cube_6.png"];
        var frames = [];
        for (var i = 0; i < images.length; i++) {
            frames.push(PIXI.Texture.fromFrame(images[i]));
        }
        _this.anim = new PIXI.extras.AnimatedSprite(frames);
        _this.anim.position.set(pos_x, pos_y);
        _this.anim.anchor.set(0.05);
        _this.anim.animationSpeed = 0.2;
        _this.addChild(_this.anim);
        return _this;
    }

    return Cubes;
}(PIXI.Sprite);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SellingPopUp__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ChancePopUp__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ForceMajeurePopUp__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotEnoughMoneyPopUp__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_GlobalDispatcher__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_Constants__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var PopUpManager = function (_PIXI$Sprite) {
    _inherits(PopUpManager, _PIXI$Sprite);

    function PopUpManager(_cellsConfig, parent) {
        _classCallCheck(this, PopUpManager);

        var _this = _possibleConstructorReturn(this, (PopUpManager.__proto__ || Object.getPrototypeOf(PopUpManager)).call(this));

        _this._cellsConfig = _cellsConfig;
        _this.parent = parent;
        _this.sellingPopUp = new __WEBPACK_IMPORTED_MODULE_0__SellingPopUp__["a" /* SellingPopUp */](465, 490);
        _this.chancePopUp = new __WEBPACK_IMPORTED_MODULE_1__ChancePopUp__["a" /* ChancePopUp */](465, 490);
        _this.forceMajeurePopUp = new __WEBPACK_IMPORTED_MODULE_2__ForceMajeurePopUp__["a" /* ForceMajeurePopUp */](465, 490);
        _this.notEnoughMoneyPopUp = new __WEBPACK_IMPORTED_MODULE_3__NotEnoughMoneyPopUp__["a" /* NotEnoughMoneyPopUp */](465, 490);
        _this.addPopUpListeners();
        _this.parent.addChild(_this.sellingPopUp);
        _this.parent.addChild(_this.chancePopUp);
        _this.parent.addChild(_this.forceMajeurePopUp);
        _this.parent.addChild(_this.notEnoughMoneyPopUp);
        return _this;
    }

    _createClass(PopUpManager, [{
        key: 'addPopUpListeners',
        value: function addPopUpListeners() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_4__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('current_position', function (_currentPosition) {
                _this2.currentPlayerPosition = _currentPosition;
            });
            __WEBPACK_IMPORTED_MODULE_4__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('show_popup', function (popup) {
                _this2.showPopUp(popup);
            });
            __WEBPACK_IMPORTED_MODULE_4__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('close_popup', function () {
                _this2.closePopUp();
            });
            __WEBPACK_IMPORTED_MODULE_4__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener('active_player', function (activePlayerIndex) {
                _this2.currentPlayerIndex = activePlayerIndex;
            });
            __WEBPACK_IMPORTED_MODULE_4__core_GlobalDispatcher__["a" /* GlobalDispatcher */].addEventListener(__WEBPACK_IMPORTED_MODULE_5__core_Constants__["a" /* Constants */].TO_BUY_BTN_PRESSED, this.onBuyButtonPressed.bind(this));
        }
    }, {
        key: 'onBuyButtonPressed',
        value: function onBuyButtonPressed() {
            __WEBPACK_IMPORTED_MODULE_4__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('buy_company');
        }
    }, {
        key: 'showPopUp',
        value: function showPopUp(_popup) {
            if (_popup.name == "sellingPopUp") {
                this.sellingPopUp.setPupupInfo(this._cellsConfig[this.currentPlayerPosition]);
                this.sellingPopUp.visible = true;
            }
            if (_popup.name == "forceMajeure") {
                this.forceMajeurePopUp.setPupupInfo(this._cellsConfig[this.currentPlayerPosition]);
                this.forceMajeurePopUp.visible = true;
            }
            if (_popup.name == "chancePopUp") {
                this.chancePopUp.setPupupInfo(this._cellsConfig[this.currentPlayerPosition]);
                this.chancePopUp.visible = true;
            }
            if (_popup.name == "notEnoughMoneyPopUp") {
                this.notEnoughMoneyPopUp.setPupupInfo(this._cellsConfig[this.currentPlayerPosition]);
                this.notEnoughMoneyPopUp.visible = true;
            }
        }
    }, {
        key: 'closePopUp',
        value: function closePopUp() {
            this.sellingPopUp.visible = false;
            this.forceMajeurePopUp.visible = false;
            this.chancePopUp.visible = false;
            this.notEnoughMoneyPopUp.visible = false;
        }
    }]);

    return PopUpManager;
}(PIXI.Sprite);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellingPopUp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SimpleBox__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SimpleButton__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_GlobalDispatcher__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SellingPopUp = function (_PIXI$Sprite) {
    _inherits(SellingPopUp, _PIXI$Sprite);

    function SellingPopUp(pos_x, pos_y) {
        _classCallCheck(this, SellingPopUp);

        var _this = _possibleConstructorReturn(this, (SellingPopUp.__proto__ || Object.getPrototypeOf(SellingPopUp)).call(this));

        _this.pos_x = pos_x;
        _this.pos_y = pos_y;
        _this.box = new __WEBPACK_IMPORTED_MODULE_0__SimpleBox__["a" /* SimpleBox */](_this.pos_x, _this.pos_y, 320, 150, 0xFFFFFF, "  ");
        _this.buyBtn = new __WEBPACK_IMPORTED_MODULE_1__SimpleButton__["a" /* SimpleButton */](__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].TO_BUY_BTN_PRESSED, "buyBtn", _this.pos_x + 10, _this.pos_y + 100);
        _this.buyBtn.on('mousedown', function () {
            __WEBPACK_IMPORTED_MODULE_3__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch(__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].TO_BUY_BTN_PRESSED);
        });
        _this.auctionBtn = new __WEBPACK_IMPORTED_MODULE_1__SimpleButton__["a" /* SimpleButton */](__WEBPACK_IMPORTED_MODULE_2__core_Constants__["a" /* Constants */].TO_BUY_BTN_PRESSED, "auctionBtn", _this.pos_x + 150, _this.pos_y + 100);
        _this.box.addChild(_this.buyBtn);
        _this.box.addChild(_this.auctionBtn);
        _this.addChild(_this.box);
        _this.visible = false;
        return _this;
    }

    _createClass(SellingPopUp, [{
        key: 'setPupupInfo',
        value: function setPupupInfo(cellData) {
            this.box.inputText.text = cellData.companyName + " - " + cellData.companyPrice;
            __WEBPACK_IMPORTED_MODULE_3__core_GlobalDispatcher__["a" /* GlobalDispatcher */].dispatch('company_name', cellData.companyName);
        }
    }]);

    return SellingPopUp;
}(PIXI.Sprite);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChancePopUp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SimpleBox__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var ChancePopUp = function (_PIXI$Sprite) {
    _inherits(ChancePopUp, _PIXI$Sprite);

    function ChancePopUp(pos_x, pos_y) {
        _classCallCheck(this, ChancePopUp);

        var _this = _possibleConstructorReturn(this, (ChancePopUp.__proto__ || Object.getPrototypeOf(ChancePopUp)).call(this));

        _this.pos_x = pos_x;
        _this.pos_y = pos_y;
        _this.box = new __WEBPACK_IMPORTED_MODULE_0__SimpleBox__["a" /* SimpleBox */](_this.pos_x, _this.pos_y, 320, 150, 0xFFFFFF, "  ");
        _this.addChild(_this.box);
        _this.visible = false;
        return _this;
    }

    _createClass(ChancePopUp, [{
        key: "setPupupInfo",
        value: function setPupupInfo(cellData) {
            this.box.inputText.text = "Chance";
        }
    }]);

    return ChancePopUp;
}(PIXI.Sprite);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForceMajeurePopUp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SimpleBox__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var ForceMajeurePopUp = function (_PIXI$Sprite) {
    _inherits(ForceMajeurePopUp, _PIXI$Sprite);

    function ForceMajeurePopUp(pos_x, pos_y) {
        _classCallCheck(this, ForceMajeurePopUp);

        var _this = _possibleConstructorReturn(this, (ForceMajeurePopUp.__proto__ || Object.getPrototypeOf(ForceMajeurePopUp)).call(this));

        _this.pos_x = pos_x;
        _this.pos_y = pos_y;
        _this.box = new __WEBPACK_IMPORTED_MODULE_0__SimpleBox__["a" /* SimpleBox */](_this.pos_x, _this.pos_y, 320, 150, 0xFFFFFF, "  ");
        _this.addChild(_this.box);
        _this.visible = false;
        return _this;
    }

    _createClass(ForceMajeurePopUp, [{
        key: "setPupupInfo",
        value: function setPupupInfo(cellData) {
            this.box.inputText.text = "ForceMajeure";
        }
    }]);

    return ForceMajeurePopUp;
}(PIXI.Sprite);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotEnoughMoneyPopUp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SimpleBox__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var NotEnoughMoneyPopUp = function (_PIXI$Sprite) {
    _inherits(NotEnoughMoneyPopUp, _PIXI$Sprite);

    function NotEnoughMoneyPopUp(pos_x, pos_y) {
        _classCallCheck(this, NotEnoughMoneyPopUp);

        var _this = _possibleConstructorReturn(this, (NotEnoughMoneyPopUp.__proto__ || Object.getPrototypeOf(NotEnoughMoneyPopUp)).call(this));

        _this.pos_x = pos_x;
        _this.pos_y = pos_y;
        _this.box = new __WEBPACK_IMPORTED_MODULE_0__SimpleBox__["a" /* SimpleBox */](_this.pos_x, _this.pos_y, 320, 150, 0xFFFFFF, "  ");
        _this.addChild(_this.box);
        _this.visible = false;
        return _this;
    }

    _createClass(NotEnoughMoneyPopUp, [{
        key: "setPupupInfo",
        value: function setPupupInfo(cellData) {
            this.box.inputText.text = "NotEnoughMoney";
        }
    }]);

    return NotEnoughMoneyPopUp;
}(PIXI.Sprite);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var StartParser = function StartParser(dataConfig) {
    _classCallCheck(this, StartParser);

    __WEBPACK_IMPORTED_MODULE_0__Model__["a" /* Model */].start_amount = dataConfig.start_amount.default_value;
    __WEBPACK_IMPORTED_MODULE_0__Model__["a" /* Model */].start_amount_max = dataConfig.start_amount.max_value;
    __WEBPACK_IMPORTED_MODULE_0__Model__["a" /* Model */].start_amount_min = dataConfig.start_amount.min_value;
    __WEBPACK_IMPORTED_MODULE_0__Model__["a" /* Model */].start_amount_step = dataConfig.start_amount.step;
    __WEBPACK_IMPORTED_MODULE_0__Model__["a" /* Model */].number_of_players = dataConfig.number_of_players.default_value;
    __WEBPACK_IMPORTED_MODULE_0__Model__["a" /* Model */].number_of_players_max = dataConfig.number_of_players.max_value;
    __WEBPACK_IMPORTED_MODULE_0__Model__["a" /* Model */].number_of_players_min = dataConfig.number_of_players.min_value;
    __WEBPACK_IMPORTED_MODULE_0__Model__["a" /* Model */].number_of_players_step = dataConfig.number_of_players.step;
    __WEBPACK_IMPORTED_MODULE_0__Model__["a" /* Model */].player_1_name = dataConfig.name_of_player.player_1;
    __WEBPACK_IMPORTED_MODULE_0__Model__["a" /* Model */].player_2_name = dataConfig.name_of_player.player_2;
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTg3MWE3MmZmNDY0NzY5NzJmOGMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9HbG9iYWxEaXNwYXRjaGVyLnRzIiwid2VicGFjazovLy8uL2NvcmUvQ29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL2NvcmUvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvU2ltcGxlQm94LnRzIiwid2VicGFjazovLy8uL3VpL1NpbXBsZUJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zY2VuZXMvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmVzL2dhbWUvbWFpblRhYmxlL0NlbGxzVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvcmVSZW5kZXJlci50cyIsIndlYnBhY2s6Ly8vLi91aS9Qb3BVcC9Qb3B1cFZPLnRzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvcmUvTG9hZGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9TcHJpdGVTaGVldC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL1Nwcml0ZVNoZWV0Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0dhbWVWaWV3Lmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0RhdGFDb25maWcuanNvbiIsIndlYnBhY2s6Ly8vLi9zY2VuZXMvU2NlbmVzTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zY2VuZXMvbWVudS9NZW51U2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvTWVudUJhci50cyIsIndlYnBhY2s6Ly8vLi9zY2VuZXMvbWVudS9NZW51QmFyVk8udHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmVzL21lbnUvTWVudUZpZWxkc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmVzL2dhbWUvbWFpblRhYmxlL1BsYXllclZPLnRzIiwid2VicGFjazovLy8uL3NjZW5lcy9nYW1lL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zY2VuZXMvZ2FtZS9DaGlwc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvQ2hpcC50cyIsIndlYnBhY2s6Ly8vLi9zY2VuZXMvZ2FtZS9tYWluVGFibGUvQ2VsbHNQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmVzL2dhbWUvbWFpblRhYmxlL0NlbGxWTy50cyIsIndlYnBhY2s6Ly8vLi9zY2VuZXMvZ2FtZS9tYWluVGFibGUvQ2VsbHNNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NjZW5lcy9nYW1lL21haW5UYWJsZS9DZWxsVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zY2VuZXMvZ2FtZS9tYWluVGFibGUvQ29tcGFueS50cyIsIndlYnBhY2s6Ly8vLi9zY2VuZXMvZ2FtZS9HYW1lRmllbGRzTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi91aS9Sb2xsQmFyLnRzIiwid2VicGFjazovLy8uL3NjZW5lcy9nYW1lL0N1YmVzLnRzIiwid2VicGFjazovLy8uL3VpL1BvcFVwL1BvcFVwTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi91aS9Qb3BVcC9TZWxsaW5nUG9wVXAudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvUG9wVXAvQ2hhbmNlUG9wVXAudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvUG9wVXAvRm9yY2VNYWpldXJlUG9wVXAudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvUG9wVXAvTm90RW5vdWdoTW9uZXlQb3BVcC50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL1N0YXJ0UGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdETSxJQUltQjs7Ozs7Ozt5Q0FBYSxPQUFtQjtBQUNqRCxpQkFBVyxXQUFLLEtBQUMsRUFBUSxTQUFNLE9BQVksWUFDakQ7QUFFMEI7Ozs0Q0FBYSxPQUFtQjtBQUVwRCxpQkFBQyxJQUFLLElBQUksR0FBRyxJQUFPLEtBQVcsV0FBTyxRQUFLLEtBQUc7QUFDOUMsb0JBQVksV0FBaUIsS0FBVyxXQUFJO0FBQzFDLG9CQUFTLFNBQU0sVUFBVSxTQUFZLFNBQVMsYUFBYyxVQUFFO0FBQ3hELHlCQUFXLFdBQU8sT0FBRSxHQUM1QjtBQUNKO0FBQUM7QUFFOEM7QUFDZ0I7QUFDUTtBQUNwQjtBQUMzQztBQUdWO0FBRWU7OztpQ0FBYSxPQUFXO0FBQy9CLGlCQUFDLElBQUssSUFBSSxHQUFHLElBQU8sS0FBVyxXQUFPLFFBQUssS0FBRztBQUM5QyxvQkFBWSxXQUFpQixLQUFXLFdBQUk7QUFDMUMsb0JBQVMsU0FBTSxVQUFXLE9BQUc7QUFDbkIsNkJBQVMsU0FDckI7QUFDSjtBQUNKO0FBRWM7Ozs7QUFDUixpQkFBVyxXQUFPLFNBQ3hCO0FBQUM7Ozs7O0FBbkNjLGlCQUFVLGFBQWtCLEc7Ozs7Ozs7O0FDRnZDLElBQWdCO0FBQ0Qsd0JBQXNCO0FBQ3RCLHdCQUFzQjtBQUM5QixnQkFBYTtBQUNDLDhCQUFrQjtBQUNuQiw2QkFBaUI7QUFDaEIsOEJBQWtCO0FBQ25CLDZCQUFpQjtBQUNuQiwyQkFBc0I7QUFDdEIsMkJBQXNCO0FBQ3RCLDJCQUFzQjtBQUN0QiwyQkFBc0I7QUFDdEIsMkJBQXNCO0FBQ3RCLDJCQUFzQjtBQUN0QiwyQkFBc0I7QUFDdEIsMkJBQXNCO0FBQzNCLHNCQUFVO0FBQ1Ysc0JBQUk7QUFDTCxxQkFBaUI7QUFDZCx3QkFBbUI7QUFDZiw0QkFBdUI7QUFDakMsa0JBQ2I7QUF0QnVCLENBQWxCLEM7Ozs7Ozs7Ozs7OztBQ0VELElBZW1COzs7Ozs7OztBQUNmLG1CQUFNLE1BQ2Q7QUFFdUI7MEJBQWM7QUFDOUIsa0JBQWMsZ0JBQ3JCO0FBRTJCOzs7O0FBQ25CLG1CQUFNLE1BQ2Q7QUFFMkI7MEJBQWtCO0FBQ3RDLGtCQUFrQixvQkFDekI7QUFFMkI7Ozs7QUFDbkIsbUJBQU0sTUFDZDtBQUUyQjswQkFBa0I7QUFDdEMsa0JBQWtCLG9CQUN6QjtBQUU0Qjs7OztBQUNwQixtQkFBTSxNQUNkO0FBRTRCOzBCQUFtQjtBQUN4QyxrQkFBbUIscUJBQzFCO0FBRTRCOzs7O0FBQ3BCLG1CQUFNLE1BQ2Q7QUFFNEI7MEJBQW1CO0FBQ3hDLGtCQUFtQixxQkFDMUI7QUFFZ0M7Ozs7QUFDeEIsbUJBQU0sTUFDZDtBQUVnQzswQkFBdUI7QUFDaEQsa0JBQXVCLHlCQUM5QjtBQUVnQzs7OztBQUN4QixtQkFBTSxNQUNkO0FBRWdDOzBCQUFzQjtBQUMvQyxrQkFBdUIseUJBQzlCO0FBRWlDOzs7O0FBQ3pCLG1CQUFNLE1BQ2Q7QUFFaUM7MEJBQXdCO0FBQ2xELGtCQUF3QiwwQkFDL0I7QUFFd0I7Ozs7QUFDaEIsbUJBQU0sTUFDZDtBQUV3QjswQkFBZTtBQUNoQyxrQkFBZSxpQkFDdEI7QUFFd0I7Ozs7QUFDaEIsbUJBQU0sTUFDZDtBQUV3QjswQkFBZTtBQUNoQyxrQkFBZSxpQkFDdEI7QUFFa0I7Ozs7QUFDVixtQkFBSyxLQUNiO0FBRWtCOzBCQUFTO0FBQ3JCLGlCQUFTLFdBQ2Y7QUFFNkI7Ozs7QUFDckIsbUJBQUssS0FDYjtBQUU2QjswQkFBb0I7QUFDM0MsaUJBQW9CLHNCQUMxQjtBQUVnQzs7OztBQUN4QixtQkFBSyxLQUNiO0FBRWdDOzBCQUF1QjtBQUNqRCxpQkFBdUIseUJBQzdCO0FBQUM7Ozs7O0FBMUdjLE1BQVEsV0FBa0IsRzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZyQyxJQUFpQjs7O0FBS3JCLHVCQUFnQyxPQUFzQixPQUFpQixHQUFpQixHQUFvQixRQUFrQjtBQUNwSDs7OztBQURTLGNBQUssUUFBUTtBQUFTLGNBQUssUUFBUTtBQUFTLGNBQUMsSUFBTztBQUFTLGNBQUMsSUFBTztBQUFTLGNBQU0sU0FBSztBQUFTLGNBQUssUUFBSTtBQUZ2SCxjQUFZLGVBQWtCO0FBSS9CLGNBQUksTUFBRyxJQUFRLEtBQVU7QUFDekIsY0FBSSxJQUFNLFFBQUs7QUFDZixjQUFJLElBQVUsVUFBTyxRQUFRO0FBQzdCLGNBQUksSUFBZ0IsZ0JBQU0sT0FBTyxPQUFHLEdBQUcsR0FBTTtBQUM3QyxjQUFJLElBQVc7QUFDZixjQUFTLFNBQUssTUFBTTtBQUVwQixjQUFVLFlBQUcsSUFBUSxLQUFLLEtBQU0sT0FBRSxFQUFXLFlBQVMsU0FBVSxVQUFJLElBQU0sTUFBWTtBQUN0RixjQUFVLFVBQVMsU0FBSSxJQUFNLFFBQUcsSUFBTyxRQUFLO0FBQzVDLGNBQUksSUFBUyxTQUFLLE1BQ3hCOztBQUVpQjs7Ozs7QUFDWCxpQkFBSSxJQUFVLFVBQUcsSUFBVSxVQUFLO0FBQ2hDLGlCQUFJLElBQWdCLGdCQUFLLEtBQU0sT0FBTSxLQUFNLE9BQU0sS0FBRSxHQUFNLEtBQUUsR0FDakU7QUFFbUI7Ozs7QUFDYixpQkFBSSxJQUFTO0FBQ2IsaUJBQUksSUFBVSxVQUFLLEtBQU8sUUFBUTtBQUNsQyxpQkFBSSxJQUFnQixnQkFBSyxLQUFNLE9BQU0sS0FBTSxPQUFNLEtBQUUsR0FBTSxLQUFFLEdBQU07QUFDakUsaUJBQUksSUFDVjtBQUVEOzs7O0VBL0JrQyxLQUFTLFU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmdCO0FBRXRELElBQW9COzs7QUFLeEIsMEJBQStCLE9BQTZCLGNBQXFCLE9BQXFCO0FBQzVGOzs7O0FBRFMsY0FBSyxRQUFPO0FBQVMsY0FBWSxlQUFRO0FBQVMsY0FBSyxRQUFPO0FBQVMsY0FBSyxRQUFPO0FBRWhHLGNBQVksY0FBUztBQUNyQixjQUFZLGNBQU8sS0FBTyxPQUFVLFVBQVksWUFBVTtBQUMxRCxjQUFZLFlBQUssTUFBYztBQUMvQixjQUFhLGFBQUssTUFDeEI7O0FBRWtCOzs7O29DQUFtQjtBQUMvQixpQkFBYSxlQUFHLElBQVEsS0FBTyxPQUFlLGVBQUssS0FBYSxlQUFZO0FBQzVFLGlCQUFhLGFBQVMsU0FBSSxJQUFLLEtBQU0sT0FBTSxLQUFRO0FBQ25ELGlCQUFhLGFBQVksY0FBUTtBQUNqQyxpQkFBYSxhQUFXLGFBQVE7QUFDaEMsaUJBQVMsU0FBSyxLQUNwQjtBQUVtQjs7O3FDQUF5Qjs7O0FBQ3RDLGlCQUFhLGFBQUcsR0FBWSxhQUFFO0FBQVUsdUJBQWEsYUFBUSxVQUFPLE9BQVksWUFBSyxPQUFhLGVBQWU7QUFBRztBQUNwSCxpQkFBYSxhQUFHLEdBQVUsV0FBRTtBQUFzQixpR0FBUyxTQUFLLE9BQWM7QUFBRztBQUNqRixpQkFBYSxhQUFHLEdBQVksYUFBRTtBQUFVLHVCQUFhLGFBQVEsVUFBTyxPQUFZLFlBQUssT0FBYSxlQUFlO0FBQUc7QUFDcEgsaUJBQWEsYUFBRyxHQUFXLFlBQUU7QUFBVSx1QkFBYSxhQUFRLFVBQU8sT0FBWSxZQUFLLE9BQWEsZUFBVztBQUNsSDtBQUNEOzs7O0VBM0JxQyxLQUFPLFE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdkMsSUFBYTs7O0FBR2pCO0FBQ1k7Ozs7QUFITCxjQUFNLFNBQWtCO0FBQ3hCLGNBQVEsV0FBRyxZQUFjLENBR2hDOztBQUNlOzs7O2lDQUFxQjtBQUM5QixpQkFBUyxXQUNmO0FBQ2E7Ozs7QUFDUCxpQkFDTjtBQUNZOzs7O0FBQ04saUJBQU8sU0FDYjtBQUNhOzs7O0FBQ1AsaUJBQU8sU0FDYjtBQUNlOzs7O0FBQ1AsbUJBQUssS0FDYjtBQUNEOzs7O0VBckI4QixLQUFVLFc7Ozs7Ozs7Ozs7Ozs7QUNBRztBQUd0QztBQUFOOzs7QUFDUyxhQUFXLGNBQWdCLElBQWUsa0VBQUssS0FBTyxPQUFVLFVBQVMsU0ErQmxGO0FBQUM7Ozs7MENBNUIyQztBQUNsQyxtQkFBSyxLQUFZLFlBQVksWUFBWSxZQUNqRDtBQUV3Qjs7OzBDQUFrQjtBQUNsQyxtQkFBSyxLQUFZLFlBQVksWUFBWSxZQUNqRDtBQUVrQjs7O29DQUFrQjtBQUM1QixtQkFBSyxLQUFZLFlBQVksWUFBWSxZQUNqRDtBQUVxQjs7O3VDQUFrQjtBQUMvQixtQkFBSyxLQUFZLFlBQVksWUFBWSxZQUNqRDtBQUVzQjs7O3dDQUFrQjtBQUNoQyxtQkFBSyxLQUFZLFlBQVksWUFBWSxZQUNqRDtBQUVvQjs7O3NDQUFrQjtBQUM5QixtQkFBSyxLQUFZLFlBQVksWUFBWSxZQUNqRDtBQUVtQjs7O3FDQUFrQjtBQUM3QixtQkFBSyxLQUFZLFlBQVksWUFBWSxZQUNqRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ3VDO0FBRWxDLElBQW9COzs7Ozs7Ozs7OzsrQkFVWSxPQUFnQjtnQkFBRSw0RUFBbUI7O0FBQ2xFLGdCQUFhLGFBQVUsVUFBTyxPQUFNO0FBQ25DLGlCQUFhLGVBQU8sS0FBTSxRQUFTO0FBQ25DLGlCQUFjLGdCQUFPLEtBQU8sU0FBVTtBQUM5Qix5QkFBUyxXQUFPLEtBQW1CLG1CQUFhLGFBQU0sT0FBYyxhQUFTO0FBQ2pGLHFCQUFLLEtBQVksWUFBYSxhQUFTLFNBQU87QUFDakQsZ0JBQU8sT0FBRTtBQUNFLDZCQUFZO0FBQ2xCLHVCQUFpQixpQkFBUyxVQUFjLGFBQVMsVUFDekQ7QUFBQztBQUNvQixrQ0FBSyxLQUFLLEtBQUssS0FBUTtBQUN0QyxtQkFDVjtBQUVzQjs7OztBQUNSLHlCQUFNLFFBQUs7QUFDWCx5QkFBTSxRQUFlLGFBQWEsZUFBZSxhQUFPO0FBQ3hELHlCQUFPLFNBQWUsYUFBYyxnQkFBZSxhQUFPO0FBQzFELHlCQUFTLFNBQU8sT0FBYSxhQUFNLE9BQWMsYUFDL0Q7QUFFeUI7OztvQ0FBK0IsWUFBZTtBQUNsRSxnQkFBTSxTQUFNLEdBQVE7QUFDdkIsZ0JBQVUsU0FBbUI7QUFDdkIsbUJBQVMsU0FBRSxJQUFTLE9BQVMsU0FBRSxJQUFTO0FBQ3hDLG1CQUFTLFNBQUUsSUFBUyxPQUFTLFNBQUUsSUFBUztBQUN4QyxtQkFBTSxNQUFFLElBQVMsT0FBTSxNQUFFLElBQVM7QUFDbEMsbUJBQU0sTUFBRSxJQUFTLE9BQU0sTUFBRSxJQUFTO0FBQ3BDLGlCQUFDLElBQUssSUFBSSxHQUFHLElBQVMsT0FBUyxTQUFPLFFBQUssS0FBRztBQUM1QyxxQkFBWSxZQUFPLE9BQVMsU0FBRyxJQUNyQztBQUNGO0FBRWtCOzs7O0FBQ0ssa0NBQUM7QUFBMEIsNkJBQVE7QUFBRztBQUN4RCxnQkFBQyxDQUFhLGFBQWEsZ0JBQWdCLGFBQWEsYUFBWSxZQUFRO0FBQ25FLHlCQUFhLGFBQVU7QUFDdkIseUJBQVksWUFBYSxhQUFhLGNBQWMsYUFBUTtBQUM1RCx5QkFBUyxTQUFPLE9BQWEsYUFBZTtBQUM1Qyx5QkFBWSxZQUFhLGFBQWEsY0FBRyxJQUFhLGFBQ3BFO0FBQUM7Ozs7RUF4Q21CO0FBVFIsYUFBTSxTQUFXO0FBR2pCLGFBQUssUUFBYSxFOzs7Ozs7Ozs7Ozs7QUNONUI7QUFHSjtBQUFjO0FBRU47Ozs7O0FBQ0EsbUJBQUssS0FDYjtBQUVROzBCQUFNO0FBQ1IsaUJBQU0sUUFDWjtBQUNEOzs7Ozs7Ozs7Ozs7O0FDWnNDO0FBRXZDLElBQVUsU0FBRyxJQUFhLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZTO0FBQ0M7QUFDSDtBQUNFO0FBR2lCO0FBQ0k7QUFDWjtBQUl0QztBQUNKOzs7QUFDTSxhQUFPLE9BQUksSUFBYyxlQUFtQyxrQ0FDakQsSUFBVyxZQUFnQywrQkFDM0MsSUFBYSxjQUFrQyxpQ0FDaEQsR0FBVyxZQUFNLEtBQVksWUFDM0IsS0FBQztBQUNHLG9CQUFJLElBQ1o7QUFDZDtBQUVpQjs7Ozs7QUFDZixnQkFBZSxjQUFHLElBQWUsa0VBQUssS0FBTyxPQUFVLFVBQVcsV0FBTztBQUN6RSxnQkFBZ0IsZUFBZ0I7QUFDbEIseUJBQU8sT0FBSyxNQUFLLEtBQVE7QUFDdkMsZ0JBQWlCLGdCQUFHLElBQWtCO0FBQ0o7QUFDNEQ7QUFDcEI7QUFFNUU7QUFDRDs7Ozs7Ozs7OztBQ2pDRCxrRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLGdFOzs7Ozs7QUNBQSxrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvRDtBQUNRO0FBQzVCO0FBQ2M7QUFDRDtBQUNBO0FBS1U7QUFHakQ7QUFLSjs7Ozs7QUFGTyxhQUFTLFlBQWMsSUFBZ0I7QUFHeEMsYUFBSyxPQUFPLEtBQVksWUFBTyxRQUFhO0FBQzVDLGFBQVUsVUFBUztBQUNQLHlGQUFpQixpQkFBVSxtRUFBbUIsb0JBQUU7QUFDMUQsa0JBQUssT0FBTyxNQUFZLFlBQU8sUUFBYTtBQUNoRCxnQkFBYSxZQUFHLElBQWdCO0FBQ3lEO0FBQ2hCO0FBQ3hCO0FBQ3dDO0FBQzlCO0FBQ3ZELGtCQUFVLFVBQ2hCO0FBQUc7QUFFYSx5RkFBaUIsaUJBQVUsbUVBQW1CLG9CQUFFO0FBQVcsa0JBQVUsVUFBUztBQUNoRztBQUVrQjs7OztvQ0FBVztnQkFBRSw2RUFBK0I7O0FBQ3pELGdCQUFhLHlFQUFPLE9BQUssS0FBTyxPQUFXO0FBQzlDLGdCQUFTLFFBQUcsSUFBYTtBQUNiLHFGQUFPLE9BQUksTUFBUztBQUMxQixtQkFDUjtBQUVpQjs7O2tDQUFXO0FBQ3ZCLGdCQUFhLHlFQUFPLE9BQUssS0FBRTtBQUN6QixvQkFBYSx5RUFBYyxjQUFhLHlFQUFhLGFBQVM7QUFDbkQseUZBQWEsZUFBZSx5RUFBTyxPQUFLO0FBQ3hDLHlGQUFhLGFBQVU7QUFDL0IsdUJBQ1I7QUFBQztBQUNLLG1CQUNSO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRGdDO0FBQ29CO0FBQ0o7QUFDUjtBQUNzQjtBQUNwQjtBQUNhO0FBQ2dCO0FBRWxFLElBQWlCOzs7QUFPckI7QUFDVTs7OztBQUNKLGNBQVcsYUFBRyxJQUFnQix1RUFBVSxtRUFBbUIsb0JBQVcsV0FBSyxLQUFPO0FBQ2xGLGNBQVMsU0FBSyxNQUFhO0FBQzNCLGNBQWtCO0FBQ2xCLGNBQWtCO0FBQ2xCLGNBQW9CO0FBQ3BCLGNBQ047O0FBRXFCOzs7OztBQUNuQixnQkFBYSxZQUFjLElBQWdCO0FBQzlCLHNCQUFXLGFBQVksbUVBQXlCO0FBQ2hELHNCQUFZLGNBQVksbUVBQTBCO0FBQ2xELHNCQUFjLGdCQUFNO0FBQ3BCLHNCQUFjLGdCQUFNO0FBQ3BCLHNCQUFPLFNBQVksbUVBQWtCO0FBQ3JDLHNCQUFZLGNBQVEsMkRBQWM7QUFDbEMsc0JBQWUsaUJBQVEsMkRBQWtCO0FBQ3pDLHNCQUFlLGlCQUFRLDJEQUFrQjtBQUN6QyxzQkFBZ0Isa0JBQVEsMkRBQW1CO0FBQzNDLHNCQUFhLGVBQXNCO0FBQ25DLHNCQUFlLGlCQUFnQjtBQUMvQixzQkFBVyxhQUFlLGFBQXdCO0FBQzNELGlCQUFXLGFBQUcsSUFBVyw2REFBWTtBQUNyQyxpQkFBUyxTQUFLLEtBQ3BCO0FBRXFCOzs7O0FBQ25CLGdCQUFhLFlBQWMsSUFBZ0I7QUFDOUIsc0JBQVcsYUFBWSxtRUFBeUI7QUFDaEQsc0JBQVksY0FBWSxtRUFBMEI7QUFDbEQsc0JBQWMsZ0JBQU07QUFDcEIsc0JBQWMsZ0JBQU87QUFDckIsc0JBQU8sU0FBWSxtRUFBaUIsbUJBQUk7QUFDeEMsc0JBQVksY0FBUSwyREFBbUI7QUFDdkMsc0JBQWUsaUJBQVEsMkRBQXVCO0FBQzlDLHNCQUFlLGlCQUFRLDJEQUF1QjtBQUM5QyxzQkFBZ0Isa0JBQVEsMkRBQXdCO0FBQ2hELHNCQUFhLGVBQTJCO0FBQ3hDLHNCQUFlLGlCQUFnQjtBQUMvQixzQkFBVyxhQUFlLGFBQXdCO0FBQzNELGlCQUFXLGFBQUcsSUFBVyw2REFBWTtBQUNyQyxpQkFBVyxXQUFlLGVBQVEsVUFBUztBQUMzQyxpQkFBUyxTQUFLLEtBQ3BCO0FBRW9COzs7O0FBQ0YsNkZBQWlCLGlCQUFZLGFBQUUsVUFBbUI7QUFBVywyRUFBYSxlQUFjO0FBQUc7QUFDM0YsNkZBQWlCLGlCQUFZLGFBQUUsVUFBbUI7QUFBVywyRUFBa0Isb0JBQWU7QUFDaEg7QUFFdUI7Ozs7QUFDakIsaUJBQWtCLG9CQUFHLElBQXdCO0FBQzdDLGlCQUFTLFNBQUssS0FDcEI7QUFFRDs7OztFQWhFbUM7QUErRk47QUFDTztBQUNGO0FBQytCO0FBQ2hCO0FBQ2Y7QUFDK0I7QUFDWDtBQUNwQjtBQUMzQjtBQUNGLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSHNEO0FBQ1Y7QUFDSjtBQUl4QyxJQUFlOzs7QUFRbkIscUJBQXVDO0FBQzdCOzs7O0FBRFMsY0FBUyxZQUFXO0FBRWpDLGNBQVksY0FBTyxLQUFPLE9BQVUsVUFBWSxZQUFVO0FBQzFELGNBQWU7QUFDZixjQUFtQjtBQUNuQixjQUNOOztBQUVrQjs7Ozs7QUFDWixpQkFBVyxhQUFHLElBQVEsS0FBTyxPQUFLLEtBQVksWUFBSyxLQUFVLFVBQWU7QUFDNUUsaUJBQVcsV0FBUyxTQUFJLElBQUssS0FBVSxVQUFhLGNBQU0sS0FBVSxVQUFlO0FBRW5GLGlCQUFjLGdCQUFHLElBQVEsS0FBTyxPQUFLLEtBQVksWUFBSyxLQUFVLFVBQWlCO0FBQ2pGLGlCQUFjLGNBQVMsU0FBSSxJQUFLLEtBQVUsVUFBVyxhQUFPLEtBQVUsVUFBTSxPQUFNLEtBQVcsV0FBRSxJQUFPLEtBQVcsV0FBTyxTQUFNO0FBRTlILGlCQUFZLGNBQUcsSUFBZ0IsdUVBQUssS0FBVSxVQUFVLFdBQVEsUUFBSyxLQUFNLEtBQVcsV0FBRSxJQUFPO0FBRS9GLGlCQUFhLGVBQUcsSUFBZ0IsdUVBQUssS0FBVSxVQUFXLFlBQVMsU0FBSSxJQUFNLEtBQVcsV0FBRSxJQUFPO0FBRWpHLGlCQUFlLGlCQUFHLElBQVEsS0FBSyxLQUFLLEtBQVUsVUFBVyxZQUFFLEVBQVcsWUFBUyxTQUFVLFVBQUksSUFBTSxNQUFZO0FBQy9HLGlCQUFlLGVBQVMsU0FBSSxJQUFLLEtBQVcsV0FBRSxJQUFPLEtBQVcsV0FBTSxRQUFJLElBQUssSUFBTSxLQUFXLFdBQUUsSUFBTyxLQUFXLFdBQU8sU0FBSSxJQUFPO0FBRXRJLGlCQUFTLFNBQUssS0FBYTtBQUMzQixpQkFBUyxTQUFLLEtBQWdCO0FBQzlCLGlCQUFTLFNBQUssS0FBYztBQUM1QixpQkFBUyxTQUFLLEtBQWU7QUFDN0IsaUJBQVMsU0FBSyxLQUNwQjtBQUUwQjs7OztBQUNwQixnQkFBSyxLQUFhLGFBQUM7QUFDakIsb0JBQUssS0FBVSxVQUFZLGNBQU8sS0FBVSxVQUFlLGVBQUM7QUFDeEQseUJBQVUsVUFBWSxjQUFPLEtBQVUsVUFBVyxhQUFPLEtBQVUsVUFBZ0I7QUFDdkUscUdBQVMsU0FBSyxLQUFVLFVBQVUsV0FBTSxLQUFVLFVBQWE7QUFDM0UseUJBQWMsY0FBRSxJQUFPLEtBQWMsY0FBRSxJQUFPLEtBQVUsVUFBZSxpQkFBTyxLQUFVLFVBQU87QUFDL0YseUJBQWUsZUFBSyxPQUFPLEtBQVUsVUFDM0M7QUFDRjtBQUNKO0FBRTJCOzs7O0FBQ3JCLGdCQUFLLEtBQWMsY0FBQztBQUNsQixvQkFBSyxLQUFVLFVBQVksY0FBTyxLQUFVLFVBQWUsZUFBQztBQUN4RCx5QkFBVSxVQUFZLGNBQU8sS0FBVSxVQUFXLGFBQU8sS0FBVSxVQUFnQjtBQUN2RSxxR0FBUyxTQUFLLEtBQVUsVUFBVSxXQUFNLEtBQVUsVUFBYTtBQUMzRSx5QkFBYyxjQUFFLElBQU8sS0FBYyxjQUFFLElBQU8sS0FBVSxVQUFlLGlCQUFPLEtBQVUsVUFBTztBQUMvRix5QkFBZSxlQUFLLE9BQU8sS0FBVSxVQUMzQztBQUNGO0FBQ0o7QUFFc0I7Ozs7QUFDSiw2RkFBaUIsaUJBQUssS0FBVSxVQUFVLFdBQU0sS0FBb0Isb0JBQUssS0FDM0Y7QUFFdUI7Ozs7QUFDTCw2RkFBaUIsaUJBQUssS0FBVSxVQUFXLFlBQU0sS0FBcUIscUJBQUssS0FDN0Y7QUFFYzs7OztBQUNJLDZGQUFvQixvQkFBVSxtRUFBeUIsMEJBQU0sS0FDL0U7QUFFRDs7OztFQXZFZ0MsS0FBTyxROzs7Ozs7Ozs7Ozs7QUNObEM7QUFjSjtBQUNBO0FBRWE7Ozs7O0FBQ0wsbUJBQUssS0FDYjtBQUVhOzs7O0FBQ0wsbUJBQUssS0FDYjtBQUVjOzs7O0FBQ04sbUJBQUssS0FDYjtBQUVnQjs7OztBQUNSLG1CQUFLLEtBQ2I7QUFFZ0I7Ozs7QUFDUixtQkFBSyxLQUNiO0FBRVM7Ozs7QUFDRCxtQkFBSyxLQUNiO0FBRWM7Ozs7QUFDTixtQkFBSyxLQUNiO0FBRWlCOzs7O0FBQ1QsbUJBQUssS0FDYjtBQUVpQjs7OztBQUNULG1CQUFLLEtBQ2I7QUFFa0I7Ozs7QUFDVixtQkFBSyxLQUNiO0FBRWU7Ozs7QUFDUCxtQkFBSyxLQUNiO0FBRWlCOzs7O0FBQ1QsbUJBQUssS0FDYjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakV3QztBQUNzQjtBQUNkO0FBQ0g7QUFDa0I7QUFFMUQsSUFBeUI7OztBQUc3QjtBQUNVOzs7O0FBSEgsY0FBVyxjQUFtQjtBQUkvQixjQUF3QjtBQUN4QixjQUFlO0FBQ2YsY0FBYztBQUNkLGNBQ047O0FBRW1COzs7O3FDQUFvQixjQUFjLE9BQVcsT0FBYTtBQUMzRSxnQkFBWSxXQUFHLElBQWU7QUFDbEIscUJBQUssT0FBUTtBQUNiLHFCQUFNLFFBQVM7QUFDdEIsdUVBQVEsUUFBSyxLQUFXO0FBQzdCLGdCQUFhLFlBQUcsSUFBYSxpRUFBRyxJQUFjLGNBQUssS0FBSSxJQUFVLFNBQU0sT0FBVSxTQUFPO0FBQzNFLHNCQUFXLGFBQVE7QUFDbkIsc0JBQVksY0FBUTtBQUNwQixzQkFBRyxHQUFZLGFBQUU7QUFBdUIsaUdBQVMsU0FBUTtBQUFHO0FBQ3JFLGlCQUFZLFlBQUssS0FBWTtBQUM3QixpQkFBUyxTQUNmO0FBRTJCOzs7O0FBQ3JCLGlCQUFhLGFBQUksS0FBVyxtRUFBc0IsdUJBQVUsVUFBTywyREFBZ0I7QUFDbkYsaUJBQWEsYUFBSSxLQUFXLG1FQUFzQix1QkFBVSxVQUFPLDJEQUN6RTtBQUVrQjs7OztBQUNBLDZGQUFpQixpQkFBVSxtRUFBd0IseUJBQU0sS0FBb0Isb0JBQUssS0FDcEc7QUFFcUI7Ozs7QUFDSCw2RkFBaUIsaUJBQVUsbUVBQXlCLDBCQUFNLEtBQXFCLHFCQUFLLEtBQ3RHO0FBRWlCOzs7Ozs7QUFDQyw2RkFBaUIsaUJBQVUsbUVBQXNCLHVCQUFFO0FBQzVELDJFQUFRLFFBQUcsR0FBSyxPQUFTLE9BQTRCO0FBQ3RELHVCQUFZLFlBQUcsR0FBVSxVQUFLLE9BQVEsMkRBQVEsUUFBRyxHQUN2RDtBQUFHO0FBQ2EsNkZBQWlCLGlCQUFVLG1FQUFzQix1QkFBRTtBQUM1RCwyRUFBUSxRQUFHLEdBQUssT0FBUyxPQUE0QjtBQUN0RCx1QkFBWSxZQUFHLEdBQVUsVUFBSyxPQUFRLDJEQUFRLFFBQUcsR0FDdkQ7QUFBRztBQUNhLDZGQUFpQixpQkFBVSxtRUFBc0IsdUJBQUU7QUFDNUQsMkVBQVEsUUFBRyxHQUFLLE9BQVMsT0FBNEI7QUFDdEQsdUJBQVksWUFBRyxHQUFVLFVBQUssT0FBUSwyREFBUSxRQUFHLEdBQ3ZEO0FBQUc7QUFDYyw2RkFBaUIsaUJBQVUsbUVBQXNCLHVCQUFFO0FBQzdELDJFQUFRLFFBQUcsR0FBSyxPQUFTLE9BQTRCO0FBQ3RELHVCQUFZLFlBQUcsR0FBVSxVQUFLLE9BQVEsMkRBQVEsUUFBRyxHQUN2RDtBQUNGO0FBRTBCOzs7O0FBQ3BCLGlCQUFDLElBQUssSUFBZ0IsMkRBQWtCLG9CQUFHLEdBQUcsSUFBUSwyREFBa0IsbUJBQUssS0FBRTtBQUMvRSxvQkFBTSwyREFBUSxRQUFPLFVBQU0sR0FBQztBQUN4Qix5QkFBYSxhQUFJLEtBQVcsbUVBQXNCLHVCQUFVLFVBQ2xFO0FBQ0ksMkJBQ08sMkRBQVEsUUFBTyxVQUFNLEdBQUU7QUFDMUIseUJBQWEsYUFBSSxLQUFXLG1FQUFzQix1QkFBVSxVQUNsRTtBQUNRLGlCQUhMLE1BR087QUFBTztBQUNyQjtBQUNGO0FBRTJCOzs7O0FBQ3ZCLGdCQUFLLEtBQVMsU0FBTyxTQUFRLDJEQUF1Qix1QkFBQztBQUNuRCxvQkFBTSwyREFBa0IscUJBQVMsMkRBQXVCLHVCQUFDO0FBQ3JELHlCQUFTLFNBQ2Y7QUFDRjtBQUNGO0FBRUQ7Ozs7RUE3RTBDLEtBQU8sUTs7Ozs7Ozs7Ozs7O0FDSjVDO0FBQU47OztBQUlVLGFBQVUsYUFBaUI7QUFDM0IsYUFBUyxZQTBDbkI7QUFBQzs7Ozs7QUF2Q1MsbUJBQUssS0FDYjtBQUVROzBCQUFNO0FBQ1IsaUJBQU0sUUFDWjtBQUVTOzs7O0FBQ0QsbUJBQUssS0FDYjtBQUVTOzBCQUFPO0FBQ1YsaUJBQU8sU0FDYjtBQUVTOzs7O0FBQ0QsbUJBQUssS0FDYjtBQUVTOzBCQUFPO0FBQ1YsaUJBQU8sU0FDYjtBQUVhOzs7O0FBQ0wsbUJBQUssS0FDYjtBQUVhOzBCQUFXO0FBQ2xCLGlCQUFXLGFBQ2pCO0FBRVk7Ozs7QUFDSixtQkFBSyxLQUNiO0FBRVk7MEJBQVU7QUFDaEIsaUJBQVUsWUFDaEI7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEZ0M7QUFDOEI7QUFDVjtBQUNKO0FBQ2E7QUFDTjtBQUNOO0FBQ3NCO0FBQzdCO0FBQ007QUFDVTtBQUVyRCxJQUFpQjs7O0FBWXJCO0FBQ1U7Ozs7QUFWSCxjQUFTLFlBQWMsSUFBZ0I7QUFDdkMsY0FBWSxlQUFpQixJQUFnQiw4RUFBSyxNQUFVLFVBQVksWUFBb0I7QUFDNUYsY0FBWSxlQUFpQixJQUFnQiw4RUFBSyxNQUFVLFVBQVksWUFBb0I7QUFDNUYsY0FBaUIsb0JBQXNCLElBQTRCO0FBQ25FLGNBQVksZUFBaUIsSUFBdUI7QUFDcEQsY0FBTyxVQUFZLElBQWtCO0FBTXRDLGNBQW9CO0FBQ3BCLGNBQ047O0FBRXVCOzs7OztBQUNqQixpQkFBVyxhQUFHLElBQWdCLHVFQUFVLG1FQUFtQixvQkFBVyxXQUFLLEtBQU87QUFDbEYsaUJBQVMsU0FBSyxLQUNwQjtBQUVtQjs7Ozs7O0FBQ0QsNkZBQWlCLGlCQUFtQixvQkFBRSxVQUF3QjtBQUFVLHVCQUFzQix3QkFBb0I7QUFBRztBQUNySCw2RkFBaUIsaUJBQWdCLGlCQUFFLFVBQXNCO0FBQVUsdUJBQW1CLHFCQUFrQjtBQUFHO0FBQzNHLDZGQUFpQixpQkFBVSxtRUFBVyxZQUFNLEtBQW9CLG9CQUFLLEtBQ3ZGO0FBRTBCOzs7Ozs7QUFDUiw2RkFBUyxTQUFnQjtBQUNyQyxpQkFBa0Isa0JBQWtCO0FBQ3BDLGlCQUFRLFFBQU8sT0FBSyxLQUFZLFlBQUssS0FBUyxXQUFNO0FBQ3BELGlCQUFRLFFBQU8sT0FBSyxLQUFZLFlBQUssS0FBUyxXQUFNO0FBQzlDLHVCQUFDO0FBQ0wsdUJBQVEsUUFBTyxPQUFLLEtBQVE7QUFDNUIsdUJBQVEsUUFBTyxPQUFLLEtBQVE7QUFDNUIsdUJBQVEsUUFBZTtBQUN2Qix1QkFBYSxhQUFxQixxQkFBSyxPQUFRLFFBQVUsV0FBTSxPQUFxQjtBQUNwRix1QkFDTjtBQUFDLGVBQ0g7QUFFZ0I7Ozs7QUFDZCxnQkFBZSxZQUFZLElBQWM7QUFDdEMsZ0JBQUssS0FBYSxhQUFjLGNBQUssS0FBd0Isd0JBQUM7QUFDL0MsaUdBQVMsU0FBZ0I7QUFDeEMsb0JBQUssS0FBYSxhQUFjLGNBQUssS0FBdUIsMEJBQVMsU0FDaEUsS0FBYSxhQUFjLGNBQUssS0FBdUIsMEJBQWMsV0FBQztBQUMvRCw4QkFBSyxPQUFrQjtBQUNoQixxR0FBUyxTQUFhLGNBQzFDO0FBQ0Y7QUFBQztBQUNFLGdCQUFLLEtBQWEsYUFBWSxZQUFLLEtBQXdCLHdCQUFDO0FBQ3BELDBCQUFLLE9BQWtCO0FBQ2hCLGlHQUFTLFNBQWEsY0FDeEM7QUFBQztBQUNFLGdCQUFLLEtBQWEsYUFBYSxhQUFLLEtBQXdCLHdCQUFDO0FBQ3JELDBCQUFLLE9BQWlCO0FBQ2YsaUdBQVMsU0FBYSxjQUN4QztBQUFDO0FBQ0UsZ0JBQUssS0FBYSxhQUFVLFVBQUssS0FBd0Isd0JBQUM7QUFDM0MsaUdBQVMsU0FDM0I7QUFDRjtBQUVEOzs7O0VBbEVtQyx1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQztBQUNJO0FBQ3lCO0FBQ0g7QUFFekQsSUFBb0I7OztBQU94QiwwQkFBd0M7QUFDOUI7Ozs7QUFEUyxlQUFNLFNBQWU7QUFOakMsZUFBVSxhQUFjO0FBQ3hCLGVBQWUsa0JBQWM7QUFDN0IsZUFBUyxZQUFjLElBQWdCO0FBTXhDLGVBQ047O0FBRWdCOzs7OztBQUNkLGdCQUFjLGFBQWEsQ0FBUSxTQUFVLFVBQVEsUUFBUztBQUMzRCxpQkFBQyxJQUFLLElBQVcsR0FBRyxJQUFRLDJEQUFrQixtQkFBSyxLQUFFO0FBQ3RELG9CQUFjLGFBQUcsSUFBUSx1REFBVyxXQUFHLElBQUksS0FBRSxJQUFFLEdBQUksS0FBRSxJQUFJO0FBQ3JELHFCQUFPLE9BQVMsU0FBYTtBQUM3QixxQkFBVyxXQUFLLEtBQ3RCO0FBQ0Y7QUFFc0I7Ozt3Q0FBaUIsYUFBOEIsdUJBQThCO0FBQzdGLGlCQUFlLGVBQVksYUFBdUIsdUJBQ3hEO0FBRTBCOzs7NENBQXdCLGtCQUE0QjtBQUN2RSx1RUFBUSxRQUFxQixxQkFBUyxXQUFRLDJEQUFRLFFBQXFCLHFCQUFTLFdBQW9CO0FBQzFHLGdCQUFNLDJEQUFRLFFBQXFCLHFCQUFTLFdBQU8sS0FBaUIsaUJBQUM7QUFDaEUsdUJBQU0sMkRBQVEsUUFBcUIscUJBQzNDO0FBQU0sbUJBQUU7QUFDSCwyRUFBUSxRQUFxQixxQkFBUyxXQUFRLDJEQUFRLFFBQXFCLHFCQUFTLFdBQU8sS0FBaUI7QUFDM0csdUJBQU0sMkRBQVEsUUFBcUIscUJBQ3ZDO0FBQ0o7QUFFc0I7Ozt1Q0FBaUIsYUFBOEIsdUJBQThCO0FBQzlGLGdCQUFZLFlBQUUsSUFBUSxNQUFDO0FBQ1osNEJBQUUsSUFBd0IseUJBQWUsWUFBRSxJQUFNLEVBQTdELEdBQTJFLFlBQUUsS0FBSyxJQUNwRjtBQUFDO0FBQ0UsZ0JBQVksWUFBRSxLQUFTLE1BQUM7QUFDYiw0QkFBRSxJQUF5QixxQkFBdkMsR0FBcUQsWUFBRSxLQUFLLElBQzlEO0FBQUM7QUFDRSxnQkFBWSxZQUFFLElBQU8sS0FBQztBQUNYLDRCQUFFLElBQXlCLHFCQUF2QyxHQUFxRCxZQUFFLEtBQUssSUFDOUQ7QUFBQztBQUNFLGdCQUFZLFlBQUUsSUFBTSxJQUFDO0FBQ1YsNEJBQUUsSUFBeUIscUJBQXZDLEdBQXFELFlBQUUsS0FBSyxJQUM5RDtBQUNGO0FBRTJCOzs7NkNBQWtCLFlBQTRCO0FBQ25FLGlCQUFvQixzQkFBTyxLQUFvQixvQkFBVyxZQUF1QjtBQUNyRSw2RkFBUyxTQUFtQixvQkFBTSxLQUFzQjtBQUN4RSxnQkFBUyxRQUFRO0FBQ2IsaUJBQU8sT0FBUyxTQUFDO0FBQWdCLHNCQUFnQixnQkFBTSxNQUFXLFdBQXFCLHNCQUN0RCxNQUFVLFVBQWtCLGtCQUFNLE1BQXFCLHNCQUN2RCxNQUFVLFVBQWtCLGtCQUFNLE1BQXVCO0FBQ2hHO0FBRUQ7Ozs7RUEzRHFDLEtBQU8sUTs7Ozs7Ozs7Ozs7Ozs7QUNMdkMsSUFBWTs7O0FBR2hCLGtCQUE0QixXQUFjLE9BQWM7QUFDOUM7Ozs7QUFDSixjQUFXLGFBQUcsSUFBUSxLQUFPLE9BQUssS0FBTyxPQUFVLFVBQVksWUFBUyxTQUFRLFVBQVUsWUFBVTtBQUNwRyxjQUFXLFdBQVMsU0FBSSxJQUFNLE9BQVM7QUFDdkMsY0FBUyxTQUFLLE1BQWE7QUFFakM7O0FBRUQ7OztFQVg2QixLQUFPLFE7Ozs7Ozs7Ozs7O0FDQUg7QUFFNUIsa0JBR0oscUJBQXlCOzs7QUFGbEIsU0FBVyxjQUFnQjtBQUdoQyxRQUFXLFFBQWtCLFVBQU87QUFDaEMsU0FBQyxJQUFLLElBQVMsR0FBRyxJQUFRLE1BQU8sUUFBSyxLQUFHO0FBQ3pDLGFBQVksWUFBSyxLQUFDLElBQVUsd0RBQU0sTUFBRyxHQUFnQixnQkFBRSxHQUNyQixNQUFHLEdBQWdCLGdCQUFFLEdBQ3JCLE1BQUcsR0FBVyxZQUNkLE1BQUcsR0FBUyxVQUNaLE1BQUcsR0FBWSxhQUNmLE1BQUcsR0FBYSxjQUNoQixNQUFHLEdBQVcsWUFDZCxNQUFHLEdBQ3pDO0FBQ0Y7QUFFRCxFOzs7Ozs7Ozs7Ozs7QUNuQks7QUFDRixvQkFBZ0MsSUFDRCxJQUNTLGFBQ0QsV0FDRSxjQUNDLGVBQ0QsYUFDRDs7O0FBUGxCLGFBQUUsS0FBUTtBQUNWLGFBQUUsS0FBTztBQUNULGFBQVcsY0FBTztBQUNsQixhQUFTLFlBQVE7QUFDakIsYUFBWSxlQUFPO0FBQ25CLGFBQWEsZ0JBQU87QUFDcEIsYUFBVyxjQUFRO0FBQ25CLGFBQVUsYUFDaEM7QUFFSzs7Ozs7QUFDSyxtQkFBSyxLQUNmO0FBRUs7Ozs7QUFDSyxtQkFBSyxLQUNmO0FBRWM7Ozs7QUFDSixtQkFBSyxLQUNmO0FBRVk7Ozs7QUFDRixtQkFBSyxLQUNmO0FBRWU7Ozs7QUFDTCxtQkFBSyxLQUNmO0FBRWdCOzs7O0FBQ04sbUJBQUssS0FDZjtBQUVjOzs7O0FBQ0osbUJBQUssS0FDZjtBQUVPOzs7O0FBQ0csbUJBQUssS0FDZjtBQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NxQztBQUVNO0FBQ3NCO0FBQzFCO0FBQ3lCO0FBQ1o7QUFFL0M7QUFPSiwwQkFBd0MsY0FBK0I7OztBQUFwRCxhQUFZLGVBQVM7QUFBUyxhQUFNLFNBQWdCO0FBTmhFLGFBQVMsWUFBa0I7QUFHM0IsYUFBUyxZQUFjLElBQWdCO0FBSXhDLGFBQWE7QUFDYixhQUNOO0FBRWdCOzs7OztBQUNWLGlCQUFDLElBQUssSUFBUyxHQUFHLElBQU8sS0FBYSxhQUFPLFFBQUssS0FBRztBQUN2RCxvQkFBYyxXQUFHLElBQVksNERBQUssS0FBYSxhQUFLO0FBQ2hELHFCQUFVLFVBQUssS0FBVztBQUMxQixxQkFBTyxPQUFTLFNBQ3RCO0FBQ0Y7QUFFb0I7OztzQ0FBb0I7QUFDdEMsZ0JBQVksV0FBTyxLQUFVLFVBQVksWUFBZTtBQUNsRCxtQkFBUyxZQUNqQjtBQUVtQjs7O3FDQUFvQjtBQUNyQyxnQkFBWSxXQUFPLEtBQVUsVUFBWSxZQUFlO0FBQ2xELG1CQUFTLFlBQ2pCO0FBRWtCOzs7b0NBQW9CO0FBQ3BDLGdCQUFZLFdBQU8sS0FBVSxVQUFZLFlBQWU7QUFDbEQsbUJBQVMsWUFDakI7QUFFZ0I7OztrQ0FBb0I7QUFDbEMsZ0JBQVksV0FBTyxLQUFVLFVBQVksWUFBZTtBQUNsRCxtQkFBUyxZQUNqQjtBQUVvQjs7O3NDQUFvQjtBQUNuQyxpQkFBQyxJQUFLLElBQVcsR0FBRyxJQUFRLDJEQUFRLFFBQU8sUUFBSyxLQUFFO0FBQ2hELHFCQUFDLElBQUssSUFBVyxHQUFHLElBQVEsMkRBQVEsUUFBRyxHQUFVLFVBQU8sUUFBSSxLQUFFO0FBQzdELHdCQUFNLDJEQUFRLFFBQUcsR0FBVSxVQUFHLEdBQUssU0FBUyxLQUFVLFVBQWUsZUFBZSxlQUFDO0FBQy9FLCtCQUNSO0FBQ0Y7QUFDRjtBQUNGO0FBRWtDOzs7b0RBQW9CLGNBQTJCO0FBQzVFLGlCQUFDLElBQUssSUFBVyxHQUFHLElBQVEsMkRBQVEsUUFBb0Isb0JBQVUsVUFBTyxRQUFLLEtBQUU7QUFDL0Usb0JBQU0sMkRBQVEsUUFBb0Isb0JBQVUsVUFBRyxHQUFLLFNBQVMsS0FBVSxVQUFlLGVBQWUsZUFBQztBQUNoRywyQkFDUjtBQUNGO0FBQ0Y7QUFFb0I7OztzQ0FBb0IsY0FBMkI7QUFDakUsZ0JBQWdCLGVBQU8sS0FBVSxVQUFnQixnQkFBZTtBQUNoRSxnQkFBc0IscUJBQVEsMkRBQVEsUUFBb0Isb0JBQU07QUFDeEQsbUJBQW1CLHNCQUM3QjtBQUVlOzs7aUNBQTRCLHNCQUEyQjtBQUNwRSxnQkFBVSxTQUFHLElBQVEsS0FBUSxRQUFxQjtBQUM5QyxpQkFBVSxVQUFzQixzQkFBUSxVQUFHLENBQVM7QUFDeEQsZ0JBQVUsU0FBUyxPQUFRO0FBQzNCLGdCQUFnQixlQUFHLENBQUUsR0FBRyxHQUFHLEdBQU87QUFDbEMsZ0JBQVMsUUFBZSxhQUFxQjtBQUN2QyxtQkFBRyxLQUFPLEtBQUksSUFBTyxTQUFLO0FBQzFCLG1CQUFHLEtBQU8sS0FBSSxJQUFRO0FBQ3RCLG1CQUFHLEtBQU8sS0FBSSxJQUFPLFNBQU87QUFDNUIsbUJBQUcsS0FBTyxLQUFJLElBQU0sUUFBSyxLQUFLO0FBQzlCLG1CQUFHLEtBQU8sS0FBSSxJQUFNLFFBQU07QUFDMUIsbUJBQUcsS0FBTyxLQUFJLElBQU0sUUFDNUI7QUFFd0I7Ozs7OztBQUNOLDZGQUFpQixpQkFBZ0IsaUJBQUUsVUFBMkI7QUFBVSxzQkFBbUIscUJBQXNCO0FBQUc7QUFDcEgsNkZBQWlCLGlCQUFtQixvQkFBRSxVQUE4QjtBQUFVLHNCQUFzQix3QkFBeUI7QUFBRztBQUNoSSw2RkFBaUIsaUJBQWUsZ0JBQUUsVUFBbUI7QUFBVSxzQkFBbUIscUJBQWU7QUFBRztBQUNwRyw2RkFBaUIsaUJBQWMsZUFBRTtBQUFXLHNCQUF1QjtBQUFHO0FBQ3RFLDZGQUFpQixpQkFBYyxlQUFFO0FBQVcsc0JBQWM7QUFBRztBQUM3RCw2RkFBaUIsaUJBQWEsY0FBRTtBQUFXLHNCQUFhO0FBQzFFO0FBRTBCOzs7O0FBQ3BCLGlCQUFTLFNBQUssS0FBc0IsdUJBQU0sS0FBcUI7QUFDbkUsZ0JBQWMsYUFBTyxLQUFjLGNBQUssS0FBc0IsdUJBQU0sS0FBcUI7QUFDdkYsZ0JBQVcsY0FBUyxNQUFDO0FBQ3JCLG9CQUFhLFVBQVksSUFBWTtBQUM5Qix3QkFBSyxPQUFPLEtBQW9CO0FBQ2hDLDJFQUFRLFFBQUssS0FBb0Isb0JBQVUsVUFBSyxLQUFVO0FBQzFELDJFQUFRLFFBQUssS0FBb0Isb0JBQU0sUUFBUSwyREFBUSxRQUFLLEtBQW9CLG9CQUFNLFFBQU8sS0FBVSxVQUFnQixnQkFBSyxLQUF3QjtBQUN6SSxpR0FBUyxTQUFlLGdCQUFPLDJEQUFRLFFBQUssS0FBb0Isb0JBQVE7QUFDeEUsaUdBQVMsU0FDN0I7QUFBTSxtQkFBRTtBQUNVLGlHQUFTLFNBQWdCO0FBQ3pDLG9CQUFhLFlBQVksSUFBYztBQUM5QiwwQkFBSyxPQUF5QjtBQUN2QixpR0FBUyxTQUFhLGNBQ3hDO0FBQ0Y7QUFFaUI7Ozs7QUFDWixnQkFBSyxLQUFjLGNBQUssS0FBdUIsMEJBQVEsUUFDbEQsS0FBNEIsNEJBQUssS0FBc0IsdUJBQU0sS0FBb0Isd0JBQVMsS0FBb0Isb0JBQUM7QUFDaEgsb0JBQU0sMkRBQVEsUUFBSyxLQUFvQixvQkFBTSxTQUFRLEtBQVUsVUFBYyxjQUFLLEtBQXdCLHdCQUFDO0FBQ3JHLCtFQUFRLFFBQUssS0FBb0Isb0JBQU0sUUFBUSwyREFBUSxRQUFLLEtBQW9CLG9CQUFNLFFBQU8sS0FBVSxVQUFjLGNBQUssS0FBd0I7QUFDdkkscUdBQVMsU0FBZSxnQkFBTywyREFBUSxRQUFLLEtBQW9CLG9CQUNsRjtBQUNJLHVCQUFFO0FBQ0osd0JBQWEsWUFBWSxJQUFjO0FBQzFCLDhCQUFLLE9BQXlCO0FBQzNCLHFHQUFTLFNBQWEsY0FDNUM7QUFDRjtBQUNGO0FBRWdCOzs7O0FBQ1gsZ0JBQUssS0FBVSxVQUFLLEtBQXVCLDBCQUFTLE1BQUM7QUFDbkQsb0JBQU0sMkRBQVEsUUFBSyxLQUFvQixvQkFBTSxTQUFRLEtBQVUsVUFBYSxhQUFLLEtBQXdCLHdCQUFFO0FBQ3pHLCtFQUFRLFFBQUssS0FBb0Isb0JBQU0sUUFBUSwyREFBUSxRQUFLLEtBQW9CLG9CQUFNLFFBQU8sS0FBVSxVQUFhLGFBQUssS0FBdUI7QUFDckkscUdBQVMsU0FBZSxnQkFBTywyREFBUSxRQUFLLEtBQW9CLG9CQUNsRjtBQUFNLHVCQUFFO0FBQ04sd0JBQWEsWUFBWSxJQUFjO0FBQzFCLDhCQUFLLE9BQXlCO0FBQzNCLHFHQUFTLFNBQWEsY0FDdEM7QUFDRjtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJTSxJQUFnQjs7O0FBSXJCLHNCQUEyQjtBQUNqQjs7OztBQUNKLGNBQWMsZ0JBQU8sS0FBTyxPQUFVLFVBQVksWUFBVTtBQUM1RCxjQUFRLFVBQUcsSUFBUSxLQUFPLE9BQUssTUFBYyxjQUFTLFNBQWM7QUFDcEUsY0FBUSxRQUFTLFNBQUksSUFBUyxTQUFFLEdBQVUsU0FBSTtBQUM5QyxjQUFTLFNBQUssTUFDcEI7O0FBQ0Q7OztFQVhrQyxLQUFPLFE7Ozs7Ozs7Ozs7OztBQ0ZwQyxJQU1JOzs7Ozs7OztBQUNBLG1CQUFLLEtBQ2I7QUFFUTswQkFBTTtBQUNSLGlCQUFNLFFBQ1o7QUFFUzs7OztBQUNELG1CQUFLLEtBQ2I7QUFFUzswQkFBTztBQUNWLGlCQUFPLFNBQ2I7QUFFTzs7OztBQUNDLG1CQUFLLEtBQ2I7QUFFTzswQkFBSztBQUNOLGlCQUFLLE9BQ1g7QUFFVzs7OztBQUNILG1CQUFLLEtBQ2I7QUFFVzswQkFBUztBQUNkLGlCQUFTLFdBQ2Y7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3dDO0FBQ0s7QUFDZ0I7QUFFeEQsSUFBeUI7OztBQUk3QiwrQkFBd0M7QUFDOUI7Ozs7QUFEUyxjQUFNLFNBQWU7QUFIakMsY0FBVyxjQUFtQjtBQUM5QixjQUFrQixxQkFBWTtBQUkvQixjQUFrQjtBQUNsQixjQUFjLGNBQUssTUFBcUI7QUFDeEMsY0FDTjs7QUFFcUI7Ozs7O0FBQ2YsaUJBQUMsSUFBSyxJQUFXLEdBQUcsSUFBUSwyREFBUSxRQUFPLFFBQUssS0FBRTtBQUMvQywyRUFBUSxRQUFHLEdBQU0sUUFBUSwyREFBYztBQUM1QyxvQkFBYSxZQUFHLElBQWEsaUVBQUksS0FBSyxNQUFJLE1BQUUsR0FBSyxLQUFJLElBQU8sMkRBQVEsUUFBRyxHQUFNLE9BQVcsWUFBTSwyREFBUSxRQUFHLEdBQUssT0FBYyxnQkFBTSwyREFBUSxRQUFHLEdBQVE7QUFDakoscUJBQU8sT0FBUyxTQUFZO0FBQzVCLHFCQUFZLFlBQUssS0FDdkI7QUFDRjtBQUVvQjs7O3NDQUEyQjs7O0FBQzdCLDZGQUFpQixpQkFBZ0IsaUJBQUUsVUFBMkI7QUFDekUscUJBQUMsSUFBSyxJQUFXLEdBQUcsSUFBUSwyREFBUSxRQUFPLFFBQUssS0FBRTtBQUMvQywyQkFBWSxZQUFHLEdBQ3JCO0FBQUM7QUFDRyx1QkFBWSxZQUFxQixxQkFDdkM7QUFDRjtBQUVxQjs7OztBQUNqQixnQkFBSyxLQUFtQixxQkFBUSwyREFBUSxRQUFPLFNBQUssR0FBQztBQUNqRCxxQkFBbUIscUJBQ3pCO0FBQUM7QUFDZSw2RkFBUyxTQUFnQixpQkFBTSxLQUFxQjtBQUNoRSxpQkFDTjtBQUV5Qjs7Ozs7O0FBQ1AsNkZBQWlCLGlCQUFlLGdCQUFFLFVBQTBCO0FBQ3RFLHVCQUFZLFlBQUssT0FBbUIscUJBQUssR0FBVSxVQUFLLE9BQVksWUFBTSwyREFBUSxRQUFLLE9BQW1CLHFCQUFLLEdBQUssT0FBYyxnQkFDeEk7QUFDRjtBQUVEOzs7O0VBM0MwQyxLQUFPLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKSjtBQUNBO0FBQ0Q7QUFFdkMsSUFBZTs7O0FBTW5CLHFCQUFpQztBQUN2Qjs7OztBQUNKLGNBQVcsYUFBRyxJQUFnQixvRUFBVSxtRUFBVyxZQUFXLFdBQUssS0FBTztBQUN4RSxlQUFTLFNBQUssTUFBYTtBQUM3QixjQUFPLFNBQUcsSUFBUyxrRUFBSSxLQUFPO0FBQzlCLGNBQU8sU0FBRyxJQUFTLGtFQUFJLEtBQU87QUFDNUIsZUFBUyxTQUFLLE1BQVM7QUFDdkIsZUFBUyxTQUFLLE1BQ3RCOztBQUVrQjs7Ozs7QUFDaEIsZ0JBQWlCLGdCQUFPLEtBQU8sT0FBSyxLQUFhLGVBQUs7QUFDdEQsZ0JBQWlCLGdCQUFPLEtBQU8sT0FBSyxLQUFhLGVBQUs7QUFDbEQsaUJBQVUsWUFBZ0IsZ0JBQ2hDO0FBQ0Q7Ozs7RUFyQmdDLEtBQU8sUTs7Ozs7Ozs7Ozs7Ozs7QUNKbEMsSUFBYTs7O0FBRWpCLG1CQUF5QixPQUFjO0FBQzdCOzs7O0FBQ1IsWUFBVSxTQUFHLENBQWEsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFnQjtBQUNsRyxZQUFVLFNBQU07QUFDWixhQUFDLElBQUssSUFBSSxHQUFHLElBQVMsT0FBTyxRQUFLLEtBQUc7QUFDakMsbUJBQUssS0FBSyxLQUFRLFFBQVUsVUFBTyxPQUMzQztBQUFDO0FBQ0csY0FBSyxPQUFHLElBQVEsS0FBTyxPQUFlLGVBQVM7QUFDL0MsY0FBSyxLQUFTLFNBQUksSUFBTSxPQUFTO0FBQ2pDLGNBQUssS0FBTyxPQUFJLElBQU87QUFDdkIsY0FBSyxLQUFlLGlCQUFPO0FBQzNCLGNBQVMsU0FBSyxNQUNwQjs7QUFFRDs7O0VBaEI4QixLQUFPLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUTtBQUNGO0FBQ1k7QUFDSTtBQUNHO0FBQ2Q7QUFJM0MsSUFBb0I7OztBQVN4QiwwQkFBd0MsY0FBK0I7QUFDN0Q7Ozs7QUFEUyxjQUFZLGVBQVM7QUFBUyxjQUFNLFNBQWdCO0FBUmhFLGNBQVksZUFBaUIsSUFBZ0Isb0VBQUksS0FBTztBQUN4RCxjQUFXLGNBQUcsSUFBZSxrRUFBSSxLQUFPO0FBQ3hDLGNBQWlCLG9CQUFHLElBQXFCLDhFQUFJLEtBQU87QUFDcEQsY0FBbUIsc0JBQUcsSUFBdUIsa0ZBQUksS0FBTztBQU96RCxjQUFxQjtBQUNyQixjQUFPLE9BQVMsU0FBSyxNQUFlO0FBQ3BDLGNBQU8sT0FBUyxTQUFLLE1BQWM7QUFDbkMsY0FBTyxPQUFTLFNBQUssTUFBb0I7QUFDekMsY0FBTyxPQUFTLFNBQUssTUFDM0I7O0FBRXdCOzs7Ozs7O0FBQ04sNkZBQWlCLGlCQUFtQixvQkFBRSxVQUF3QjtBQUFVLHVCQUFzQix3QkFBb0I7QUFBRztBQUNySCw2RkFBaUIsaUJBQWEsY0FBRSxVQUFjO0FBQVUsdUJBQVUsVUFBUTtBQUFHO0FBQzdFLDZGQUFpQixpQkFBYyxlQUFFO0FBQVcsdUJBQWM7QUFBRztBQUM3RCw2RkFBaUIsaUJBQWdCLGlCQUFFLFVBQXlCO0FBQVUsdUJBQW1CLHFCQUFxQjtBQUFHO0FBQ2pILDZGQUFpQixpQkFBVSxtRUFBbUIsb0JBQU0sS0FBbUIsbUJBQUssS0FDOUY7QUFFeUI7Ozs7QUFDUCw2RkFBUyxTQUMzQjtBQUVnQjs7O2tDQUFlO0FBQzNCLGdCQUFPLE9BQUssUUFBbUIsZ0JBQUM7QUFDNUIscUJBQWEsYUFBYSxhQUFLLEtBQWEsYUFBSyxLQUF5QjtBQUMxRSxxQkFBYSxhQUFRLFVBQzNCO0FBQUM7QUFDQyxnQkFBTyxPQUFLLFFBQW1CLGdCQUFDO0FBQzVCLHFCQUFrQixrQkFBYSxhQUFLLEtBQWEsYUFBSyxLQUF5QjtBQUMvRSxxQkFBa0Isa0JBQVEsVUFDaEM7QUFBQztBQUNDLGdCQUFPLE9BQUssUUFBa0IsZUFBQztBQUMzQixxQkFBWSxZQUFhLGFBQUssS0FBYSxhQUFLLEtBQXlCO0FBQ3pFLHFCQUFZLFlBQVEsVUFDMUI7QUFBQztBQUNDLGdCQUFPLE9BQUssUUFBMEIsdUJBQUM7QUFDbkMscUJBQW9CLG9CQUFhLGFBQUssS0FBYSxhQUFLLEtBQXlCO0FBQ2pGLHFCQUFvQixvQkFBUSxVQUNsQztBQUNGO0FBRWlCOzs7O0FBQ1gsaUJBQWEsYUFBUSxVQUFTO0FBQzlCLGlCQUFrQixrQkFBUSxVQUFTO0FBQ25DLGlCQUFZLFlBQVEsVUFBUztBQUM3QixpQkFBb0Isb0JBQVEsVUFDbEM7QUFFRDs7OztFQXhEcUMsS0FBTyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RKO0FBQ007QUFDRTtBQUNjO0FBR3pELElBQW9COzs7QUFNeEIsMEJBQStCLE9BQXFCO0FBQzFDOzs7O0FBRFMsY0FBSyxRQUFPO0FBQVMsY0FBSyxRQUFPO0FBRTlDLGNBQUksTUFBRyxJQUFhLDhEQUFLLE1BQU0sT0FBTSxNQUFNLE9BQUssS0FBSyxLQUFVLFVBQVE7QUFDdkUsY0FBTyxTQUFHLElBQWdCLG9FQUFVLG1FQUFtQixvQkFBVSxVQUFNLE1BQU0sUUFBRyxJQUFNLE1BQU0sUUFBTTtBQUNsRyxjQUFPLE9BQUcsR0FBWSxhQUFFO0FBQXFCLDZGQUFTLFNBQVUsbUVBQXFCO0FBQUc7QUFDeEYsY0FBVyxhQUFHLElBQWdCLG9FQUFVLG1FQUFtQixvQkFBYyxjQUFNLE1BQU0sUUFBSSxLQUFNLE1BQU0sUUFBTTtBQUMzRyxjQUFJLElBQVMsU0FBSyxNQUFTO0FBQzNCLGNBQUksSUFBUyxTQUFLLE1BQWE7QUFDL0IsY0FBUyxTQUFLLE1BQU07QUFDcEIsY0FBUSxVQUNkOztBQUVtQjs7OztxQ0FBZ0I7QUFDN0IsaUJBQUksSUFBVSxVQUFLLE9BQVcsU0FBWSxjQUFNLFFBQVMsU0FBYztBQUMzRCw2RkFBUyxTQUFlLGdCQUFVLFNBQ3BEO0FBRUQ7Ozs7RUF2QnFDLEtBQU8sUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOSjtBQUduQyxJQUFtQjs7O0FBSXZCLHlCQUErQixPQUFxQjtBQUMxQzs7OztBQURTLGNBQUssUUFBTztBQUFTLGNBQUssUUFBTztBQUU5QyxjQUFJLE1BQUcsSUFBYSw4REFBSyxNQUFNLE9BQU0sTUFBTSxPQUFLLEtBQUssS0FBVSxVQUFRO0FBQ3ZFLGNBQVMsU0FBSyxNQUFNO0FBQ3BCLGNBQVEsVUFDZDs7QUFFbUI7Ozs7cUNBQWdCO0FBQzdCLGlCQUFJLElBQVUsVUFBSyxPQUN6QjtBQUVEOzs7O0VBZm9DLEtBQU8sUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNISDtBQUduQyxJQUF5Qjs7O0FBSTdCLCtCQUErQixPQUFxQjtBQUMxQzs7OztBQURTLGNBQUssUUFBTztBQUFTLGNBQUssUUFBTztBQUU5QyxjQUFJLE1BQUcsSUFBYSw4REFBSyxNQUFNLE9BQU0sTUFBTSxPQUFLLEtBQUssS0FBVSxVQUFRO0FBQ3ZFLGNBQVMsU0FBSyxNQUFNO0FBQ3BCLGNBQVEsVUFDZDs7QUFFbUI7Ozs7cUNBQWdCO0FBQzdCLGlCQUFJLElBQVUsVUFBSyxPQUN6QjtBQUVEOzs7O0VBZjBDLEtBQU8sUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIVDtBQUduQyxJQUEyQjs7O0FBSS9CLGlDQUErQixPQUFxQjtBQUMxQzs7OztBQURTLGNBQUssUUFBTztBQUFTLGNBQUssUUFBTztBQUU5QyxjQUFJLE1BQUcsSUFBYSw4REFBSyxNQUFNLE9BQU0sTUFBTSxPQUFLLEtBQUssS0FBVSxVQUFRO0FBQ3ZFLGNBQVMsU0FBSyxNQUFNO0FBQ3BCLGNBQVEsVUFDZDs7QUFFbUI7Ozs7cUNBQWdCO0FBQzdCLGlCQUFJLElBQVUsVUFBSyxPQUN6QjtBQUVEOzs7O0VBZjRDLEtBQU8sUTs7Ozs7Ozs7Ozs7QUNIcEI7QUFFMUIsa0JBWUoscUJBQTJCOzs7QUFDcEIsMERBQWEsZUFBYSxXQUFhLGFBQWU7QUFDdEQsMERBQWlCLG1CQUFhLFdBQWEsYUFBVztBQUN0RCwwREFBaUIsbUJBQWEsV0FBYSxhQUFXO0FBQ3RELDBEQUFrQixvQkFBYSxXQUFhLGFBQU07QUFFbEQsMERBQWtCLG9CQUFhLFdBQWtCLGtCQUFlO0FBQ2hFLDBEQUFzQix3QkFBYSxXQUFrQixrQkFBVztBQUNoRSwwREFBc0Isd0JBQWEsV0FBa0Isa0JBQVc7QUFDaEUsMERBQXVCLHlCQUFhLFdBQWtCLGtCQUFNO0FBRTVELDBEQUFjLGdCQUFhLFdBQWUsZUFBVTtBQUNwRCwwREFBYyxnQkFBYSxXQUFlLGVBQ2pEO0FBQ0QsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU4NzFhNzJmZjQ2NDc2OTcyZjhjIiwiZXhwb3J0IGNsYXNzIEdsb2JhbERpc3BhdGNoZXIge1xyXG5cclxuICBwcml2YXRlIHN0YXRpYyBfbGlzdGVuZXJzOklMaXN0ZW5lcltdID0gW107XHJcbiAgXHJcbiAgc3RhdGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6c3RyaW5nLCBjYWxsYmFjazpGdW5jdGlvbikge1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goeydldmVudCc6ZXZlbnQsICdjYWxsYmFjayc6Y2FsbGJhY2t9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OnN0cmluZywgY2FsbGJhY2s6RnVuY3Rpb24pIHtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xpc3RlbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsaXN0ZW5lcjpJTGlzdGVuZXIgPSB0aGlzLl9saXN0ZW5lcnNbaV07XHJcbiAgICAgICAgaWYobGlzdGVuZXIuZXZlbnQgPT09IGV2ZW50ICYmIGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKGksIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciAobGV0IGxpc3RlbmVySW5kZXggaW4gdGhpcy5fbGlzdGVuZXJzKSB7XHJcbiAgICAvLyAgICAgbGV0IGxpc3RlbmVyOklMaXN0ZW5lciA9IHRoaXMuX2xpc3RlbmVyc1tsaXN0ZW5lckluZGV4XTtcclxuICAgIC8vICAgICBpZihsaXN0ZW5lci5ldmVudCA9PT0gZXZlbnQgJiYgbGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc3BhdGNoKGV2ZW50OnN0cmluZywgb2JqPzogYW55KSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgbGlzdGVuZXI6SUxpc3RlbmVyID0gdGhpcy5fbGlzdGVuZXJzW2ldO1xyXG4gICAgICAgICAgaWYobGlzdGVuZXIuZXZlbnQgPT09IGV2ZW50KSAge1xyXG4gICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKG9iaik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBkaXNwb3NlKCkge1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aCA9IDA7ICAgIFxyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIElMaXN0ZW5lciB7XHJcbiAgZXZlbnQ6c3RyaW5nO1xyXG4gIGNhbGxiYWNrOkZ1bmN0aW9uO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL2NvcmUvR2xvYmFsRGlzcGF0Y2hlci50cyIsImV4cG9ydCBjb25zdCBDb25zdGFudHMgPSB7XHJcbiAgIEdPVE9HQU1FQlROUFJFU1NFRDogJ0dvVG9HYW1lQnRuUHJlc3NlZCcsXHJcbiAgIEdPVE9NRU5VQlROUFJFU1NFRDogJ0dvVG9NZW51QnRuUHJlc3NlZCcsXHJcbiAgIFBMQVlfQ1VCRVM6ICdQbGF5Q3ViZXMnLFxyXG4gICBBTU9VTlRfQkFSX01JTlVTX1BSRVNTRUQ6ICdBbW91bnRCYXJNaW51cycsXHJcbiAgIEFNT1VOVF9CQVJfUExVU19QUkVTU0VEOiAnQW1vdW50QmFyUGx1cycsXHJcbiAgIFBMQVlFUl9CQVJfTUlOVVNfUFJFU1NFRDogJ1BsYXllckJhck1pbnVzJyxcclxuICAgUExBWUVSX0JBUl9QTFVTX1BSRVNTRUQ6ICdQbGF5ZXJCYXJQbHVzJyxcclxuICAgTUVOVV9QTEFZRVJfMV9QUkVTU0VEOiAnTWVudVBsYXllcjFQcmVzc2VkJyxcclxuICAgTUVOVV9QTEFZRVJfMl9QUkVTU0VEOiAnTWVudVBsYXllcjJQcmVzc2VkJyxcclxuICAgTUVOVV9QTEFZRVJfM19QUkVTU0VEOiAnTWVudVBsYXllcjNQcmVzc2VkJyxcclxuICAgTUVOVV9QTEFZRVJfNF9QUkVTU0VEOiAnTWVudVBsYXllcjRQcmVzc2VkJyxcclxuICAgR0FNRV9QTEFZRVJfMV9QUkVTU0VEOiAnR2FtZVBsYXllcjFQcmVzc2VkJyxcclxuICAgR0FNRV9QTEFZRVJfMl9QUkVTU0VEOiAnR2FtZVBsYXllcjJQcmVzc2VkJyxcclxuICAgR0FNRV9QTEFZRVJfM19QUkVTU0VEOiAnR2FtZVBsYXllcjNQcmVzc2VkJyxcclxuICAgR0FNRV9QTEFZRVJfNF9QUkVTU0VEOiAnR2FtZVBsYXllcjRQcmVzc2VkJyxcclxuICAgQU1PVU5UX0JBUl9SQVRJTzogMC4wMDAwOTUsIC8vMC4xMlxyXG4gICBQTEFZRVJfQkFSX1JBVElPOiA0MCxcclxuICAgQ0hJUF9JU19TVE9QUEVEOiAnQ2hpcElzU3RvcHBlZCcsXHJcbiAgIFRPX0JVWV9CVE5fUFJFU1NFRDogJ1RvQnV5QnRuUHJlc3NlZCcsXHJcbiAgIFRPX0FVQ1RJT05fQlROX1BSRVNTRUQ6ICdUb0F1Y3Rpb25CdG5QcmVzc2VkJyxcclxuICAgUE9QVVBfQ0xPU0VEOiAnUG9wVXBDbG9zZWQnXHJcbn07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtbG9hZGVyIS4vY29yZS9Db25zdGFudHMudHMiLCJpbXBvcnQgeyBQbGF5ZXJWTyB9IGZyb20gJy4uL3NjZW5lcy9nYW1lL21haW5UYWJsZS9QbGF5ZXJWTyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWwge1xyXG4gIHByaXZhdGUgc3RhdGljIF9zdGFydF9hbW91bnQ6IG51bWJlcjsgXHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3N0YXJ0X2Ftb3VudF9tYXg6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfc3RhcnRfYW1vdW50X21pbjogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9zdGFydF9hbW91bnRfc3RlcDogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9udW1iZXJfb2ZfcGxheWVyczogbnVtYmVyO1xyXG4gIHByaXZhdGUgc3RhdGljIF9udW1iZXJfb2ZfcGxheWVyc19tYXg6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfbnVtYmVyX29mX3BsYXllcnNfbWluOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX251bWJlcl9vZl9wbGF5ZXJzX3N0ZXA6IG51bWJlcjtcclxuICBwcml2YXRlIHN0YXRpYyBfcGxheWVyXzFfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgc3RhdGljIF9wbGF5ZXJfMl9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3BsYXllcnM6IFBsYXllclZPW10gPSBbXTtcclxuICBwcml2YXRlIHN0YXRpYyBfY3VycmVudFBsYXllckluZGV4OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX2N1cnJlbnRQbGF5ZXJQb3NpdGlvbjogbnVtYmVyO1xyXG5cclxuICBzdGF0aWMgZ2V0IHN0YXJ0X2Ftb3VudCgpe1xyXG4gICAgcmV0dXJuIE1vZGVsLl9zdGFydF9hbW91bnQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHN0YXJ0X2Ftb3VudChfc3RhcnRfYW1vdW50KXtcclxuICAgIE1vZGVsLl9zdGFydF9hbW91bnQgPSBfc3RhcnRfYW1vdW50O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdGFydF9hbW91bnRfbWF4KCl7XHJcbiAgICByZXR1cm4gTW9kZWwuX3N0YXJ0X2Ftb3VudF9tYXg7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHN0YXJ0X2Ftb3VudF9tYXgoX3N0YXJ0X2Ftb3VudF9tYXgpe1xyXG4gICAgTW9kZWwuX3N0YXJ0X2Ftb3VudF9tYXggPSBfc3RhcnRfYW1vdW50X21heDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgc3RhcnRfYW1vdW50X21pbigpe1xyXG4gICAgcmV0dXJuIE1vZGVsLl9zdGFydF9hbW91bnRfbWluO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBzdGFydF9hbW91bnRfbWluKF9zdGFydF9hbW91bnRfbWluKXtcclxuICAgIE1vZGVsLl9zdGFydF9hbW91bnRfbWluID0gX3N0YXJ0X2Ftb3VudF9taW47XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0YXJ0X2Ftb3VudF9zdGVwKCl7XHJcbiAgICByZXR1cm4gTW9kZWwuX3N0YXJ0X2Ftb3VudF9zdGVwO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBzdGFydF9hbW91bnRfc3RlcChfc3RhcnRfYW1vdW50X3N0ZXApe1xyXG4gICAgTW9kZWwuX3N0YXJ0X2Ftb3VudF9zdGVwID0gX3N0YXJ0X2Ftb3VudF9zdGVwO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBudW1iZXJfb2ZfcGxheWVycygpe1xyXG4gICAgcmV0dXJuIE1vZGVsLl9udW1iZXJfb2ZfcGxheWVycztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgbnVtYmVyX29mX3BsYXllcnMoX251bWJlcl9vZl9wbGF5ZXJzKXtcclxuICAgIE1vZGVsLl9udW1iZXJfb2ZfcGxheWVycyA9IF9udW1iZXJfb2ZfcGxheWVycztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgbnVtYmVyX29mX3BsYXllcnNfbWF4KCl7XHJcbiAgICByZXR1cm4gTW9kZWwuX251bWJlcl9vZl9wbGF5ZXJzX21heDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgbnVtYmVyX29mX3BsYXllcnNfbWF4KF9udW1iZXJfb2ZfcGxheWVyc19tYXgpe1xyXG4gICAgTW9kZWwuX251bWJlcl9vZl9wbGF5ZXJzX21heCA9IF9udW1iZXJfb2ZfcGxheWVyc19tYXg7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IG51bWJlcl9vZl9wbGF5ZXJzX21pbigpe1xyXG4gICAgcmV0dXJuIE1vZGVsLl9udW1iZXJfb2ZfcGxheWVyc19taW47XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IG51bWJlcl9vZl9wbGF5ZXJzX21pbihfbnVtYmVyX29mX3BsYXllcnNfbWkpe1xyXG4gICAgTW9kZWwuX251bWJlcl9vZl9wbGF5ZXJzX21pbiA9IF9udW1iZXJfb2ZfcGxheWVyc19taTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgbnVtYmVyX29mX3BsYXllcnNfc3RlcCgpe1xyXG4gICAgcmV0dXJuIE1vZGVsLl9udW1iZXJfb2ZfcGxheWVyc19zdGVwO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBudW1iZXJfb2ZfcGxheWVyc19zdGVwKF9udW1iZXJfb2ZfcGxheWVyc19zdGVwKXtcclxuICAgIE1vZGVsLl9udW1iZXJfb2ZfcGxheWVyc19zdGVwID0gX251bWJlcl9vZl9wbGF5ZXJzX3N0ZXA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHBsYXllcl8xX25hbWUoKXtcclxuICAgIHJldHVybiBNb2RlbC5fcGxheWVyXzFfbmFtZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgcGxheWVyXzFfbmFtZShfcGxheWVyXzFfbmFtZSl7XHJcbiAgICBNb2RlbC5fcGxheWVyXzFfbmFtZSA9IF9wbGF5ZXJfMV9uYW1lO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBwbGF5ZXJfMl9uYW1lKCl7XHJcbiAgICByZXR1cm4gTW9kZWwuX3BsYXllcl8yX25hbWU7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHBsYXllcl8yX25hbWUoX3BsYXllcl8yX25hbWUpe1xyXG4gICAgTW9kZWwuX3BsYXllcl8yX25hbWUgPSBfcGxheWVyXzJfbmFtZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgcGxheWVycygpOlBsYXllclZPW117XHJcbiAgICByZXR1cm4gdGhpcy5fcGxheWVycztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgcGxheWVycyhfcGxheWVycyl7XHJcbiAgICB0aGlzLl9wbGF5ZXJzID0gX3BsYXllcnM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGN1cnJlbnRQbGF5ZXJJbmRleCgpOm51bWJlcntcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGxheWVySW5kZXg7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IGN1cnJlbnRQbGF5ZXJJbmRleChfY3VycmVudFBsYXllckluZGV4KXtcclxuICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJJbmRleCA9IF9jdXJyZW50UGxheWVySW5kZXg7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGN1cnJlbnRQbGF5ZXJQb3NpdGlvbigpOm51bWJlcntcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGxheWVyUG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IGN1cnJlbnRQbGF5ZXJQb3NpdGlvbihfY3VycmVudFBsYXllclBvc2l0aW9uKXtcclxuICAgIHRoaXMuX2N1cnJlbnRQbGF5ZXJQb3NpdGlvbiA9IF9jdXJyZW50UGxheWVyUG9zaXRpb247XHJcbiAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi9jb3JlL01vZGVsLnRzIiwiaW1wb3J0IHsgR2xvYmFsRGlzcGF0Y2hlciB9IGZyb20gJy4uL0NvcmUvR2xvYmFsRGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL0NvcmUvQ29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUJveCBleHRlbmRzIFBJWEkuR3JhcGhpY3N7XHJcbiAgcHVibGljIGJveDogUElYSS5HcmFwaGljcztcclxuICBwdWJsaWMgaW5wdXRUZXh0OiBQSVhJLlRleHQ7XHJcbiAgcHVibGljIGFjdGl2ZVBsYXllcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcG9zX3g6IG51bWJlciwgcHVibGljIHBvc195OiBudW1iZXIsIHB1YmxpYyB3Om51bWJlciwgcHVibGljIGg6bnVtYmVyLCBwdWJsaWMgX2NvbG9yOiBhbnksIHB1YmxpYyBfdGV4dDphbnkpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYm94ID0gbmV3IFBJWEkuR3JhcGhpY3M7XHJcbiAgICB0aGlzLmJveC5hbHBoYSA9IDQ7IFxyXG4gICAgdGhpcy5ib3guYmVnaW5GaWxsKF9jb2xvciwgMC4yNSk7XHJcbiAgICB0aGlzLmJveC5kcmF3Um91bmRlZFJlY3QocG9zX3gsIHBvc195LCB3LCBoLCAxNSk7XHJcbiAgICB0aGlzLmJveC5lbmRGaWxsKCk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm94KTtcclxuXHJcbiAgICB0aGlzLmlucHV0VGV4dCA9IG5ldyBQSVhJLlRleHQoX3RleHQsIHtmb250RmFtaWx5OiBcIkFyaWFsXCIsIGZvbnRTaXplOiAyOCwgZmlsbDogXCJibGFja1wifSk7XHJcbiAgICB0aGlzLmlucHV0VGV4dC5wb3NpdGlvbi5zZXQocG9zX3grMTAsIHBvc195KzEwKTtcclxuICAgIHRoaXMuYm94LmFkZENoaWxkKHRoaXMuaW5wdXRUZXh0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBib3hPdXRMaW5lKCl7XHJcbiAgICB0aGlzLmJveC5saW5lU3R5bGUoMTAsIDB4RkZGRkZGLCAxKTtcclxuICAgIHRoaXMuYm94LmRyYXdSb3VuZGVkUmVjdCh0aGlzLnBvc194LCB0aGlzLnBvc195LCB0aGlzLncsIHRoaXMuaCwgMTUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG91dExpbmVDbGVhcigpe1xyXG4gICAgdGhpcy5ib3guY2xlYXIoKTtcclxuICAgIHRoaXMuYm94LmJlZ2luRmlsbCh0aGlzLl9jb2xvciwgMC4yNSk7XHJcbiAgICB0aGlzLmJveC5kcmF3Um91bmRlZFJlY3QodGhpcy5wb3NfeCwgdGhpcy5wb3NfeSwgdGhpcy53LCB0aGlzLmgsIDE1KTtcclxuICAgIHRoaXMuYm94LmVuZEZpbGwoKTtcclxuICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL1NpbXBsZUJveC50cyIsImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uL2NvcmUvQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgR2xvYmFsRGlzcGF0Y2hlciB9IGZyb20gJy4uL2NvcmUvR2xvYmFsRGlzcGF0Y2hlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgU2ltcGxlQnV0dG9uIGV4dGVuZHMgUElYSS5TcHJpdGUge1xyXG4gIHB1YmxpYyBjdXJyZW50U3RhdGU6IFBJWEkuU3ByaXRlO1xyXG4gIHB1YmxpYyB0ZXh0dXJlTWVudTogUElYSS5UZXh0dXJlRGljdGlvbmFyeTtcclxuICBwdWJsaWMgb25Eb3duRXZlbnQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGV2ZW50OnN0cmluZywgcHVibGljIGdyYXBoaWNBbGlhczogc3RyaW5nLCBwdWJsaWMgcG9zX3g6bnVtYmVyLCBwdWJsaWMgcG9zX3k6bnVtYmVyKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5vbkRvd25FdmVudCA9IGV2ZW50O1xyXG4gICAgdGhpcy50ZXh0dXJlTWVudSA9IFBJWEkubG9hZGVyLnJlc291cmNlcy5TcHJpdGVTaGVldC50ZXh0dXJlcztcclxuICAgIHRoaXMuaW5pdEdyYXBoaWModGhpcy50ZXh0dXJlTWVudSk7XHJcbiAgICB0aGlzLmFkZExpc3RlbmVycyh0aGlzLmN1cnJlbnRTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdEdyYXBoaWMoY3VycmVudFRleHR1cmU6YW55KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IG5ldyBQSVhJLlNwcml0ZShjdXJyZW50VGV4dHVyZVt0aGlzLmdyYXBoaWNBbGlhcyArIFwiLnBuZ1wiXSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZS5wb3NpdGlvbi5zZXQodGhpcy5wb3NfeCwgdGhpcy5wb3NfeSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZS5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jdXJyZW50U3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZExpc3RlbmVycyhjdXJyZW50U3RhdGU6UElYSS5TcHJpdGUpIHtcclxuICAgIHRoaXMuY3VycmVudFN0YXRlLm9uKCdtb3VzZWRvd24nLCAoKT0+IHt0aGlzLmN1cnJlbnRTdGF0ZS50ZXh0dXJlID0gdGhpcy50ZXh0dXJlTWVudVt0aGlzLmdyYXBoaWNBbGlhcyArIFwiRG93bi5wbmdcIl07fSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZS5vbignbW91c2V1cCcsICgpPT4ge0dsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2godGhpcy5vbkRvd25FdmVudCk7fSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTdGF0ZS5vbignbW91c2VvdmVyJywgKCk9PiB7dGhpcy5jdXJyZW50U3RhdGUudGV4dHVyZSA9IHRoaXMudGV4dHVyZU1lbnVbdGhpcy5ncmFwaGljQWxpYXMgKyBcIk92ZXIucG5nXCJdO30pO1xyXG4gICAgdGhpcy5jdXJyZW50U3RhdGUub24oJ21vdXNlb3V0JywgKCk9PiB7dGhpcy5jdXJyZW50U3RhdGUudGV4dHVyZSA9IHRoaXMudGV4dHVyZU1lbnVbdGhpcy5ncmFwaGljQWxpYXMgKyBcIi5wbmdcIl07fSk7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL1NpbXBsZUJ1dHRvbi50cyIsImV4cG9ydCBjbGFzcyBTY2VuZSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICBwdWJsaWMgcGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHVwZGF0ZUNCID0gZnVuY3Rpb24gKCkgeyB9O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpO1xyXG4gIH1cclxuICBwdWJsaWMgb25VcGRhdGUodXBkYXRlQ0I6ICgpID0+IHZvaWQgKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUNCID0gdXBkYXRlQ0I7XHJcbiAgfVxyXG4gIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZUNCKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBwYXVzZSgpIHtcclxuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcclxuICB9XHJcbiAgcHVibGljIHJlc3VtZSgpIHtcclxuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XHJcbiAgfVxyXG4gIHB1YmxpYyBpc1BhdXNlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBhdXNlZDtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtbG9hZGVyIS4vc2NlbmVzL1NjZW5lLnRzIiwiaW1wb3J0IHsgQ2VsbHNQYXJzZXIgfSBmcm9tICcuL0NlbGxzUGFyc2VyJzsgXHJcbmltcG9ydCB7IEdsb2JhbERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL0dsb2JhbERpc3BhdGNoZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIENlbGxzVXRpbCB7XHJcbiAgcHVibGljIGNlbGxzUGFyc2VyOiBDZWxsc1BhcnNlciA9IG5ldyBDZWxsc1BhcnNlcihQSVhJLmxvYWRlci5yZXNvdXJjZXMuR2FtZVZpZXcuZGF0YSk7XHJcbiAgcHVibGljIGNlbGxzVmlldzogYW55OyBcclxuXHJcbiAgcHVibGljIGdldENlbGxQb3NpdGlvbl94KF9jZWxsSW5kZXg6bnVtYmVyKXtcclxuICAgIHJldHVybiB0aGlzLmNlbGxzUGFyc2VyLmNlbGxzQ29uZmlnW19jZWxsSW5kZXhdLng7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q2VsbFBvc2l0aW9uX3koX2NlbGxJbmRleDpudW1iZXIpe1xyXG4gICAgcmV0dXJuIHRoaXMuY2VsbHNQYXJzZXIuY2VsbHNDb25maWdbX2NlbGxJbmRleF0ueTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDZWxsVHlwZShfY2VsbEluZGV4Om51bWJlcil7XHJcbiAgICByZXR1cm4gdGhpcy5jZWxsc1BhcnNlci5jZWxsc0NvbmZpZ1tfY2VsbEluZGV4XS5jZWxsVHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb21wYW55TmFtZShfY2VsbEluZGV4Om51bWJlcil7XHJcbiAgICByZXR1cm4gdGhpcy5jZWxsc1BhcnNlci5jZWxsc0NvbmZpZ1tfY2VsbEluZGV4XS5jb21wYW55TmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb21wYW55UHJpY2UoX2NlbGxJbmRleDpudW1iZXIpe1xyXG4gICAgcmV0dXJuIHRoaXMuY2VsbHNQYXJzZXIuY2VsbHNDb25maWdbX2NlbGxJbmRleF0uY29tcGFueVByaWNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbXBhbnlUYXgoX2NlbGxJbmRleDpudW1iZXIpe1xyXG4gICAgcmV0dXJuIHRoaXMuY2VsbHNQYXJzZXIuY2VsbHNDb25maWdbX2NlbGxJbmRleF0uY29tcGFteVRheDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb21tb25UYXgoX2NlbGxJbmRleDpudW1iZXIpe1xyXG4gICAgcmV0dXJuIHRoaXMuY2VsbHNQYXJzZXIuY2VsbHNDb25maWdbX2NlbGxJbmRleF0udGF4O1xyXG4gIH1cclxuXHJcbn0gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL3NjZW5lcy9nYW1lL21haW5UYWJsZS9DZWxsc1V0aWwudHMiLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lcy9TY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29yZVJlbmRlcmVyIGV4dGVuZHMgU2NlbmUge1xyXG4gIHB1YmxpYyBzdGF0aWMgc2NlbmVzOiBhbnkgPSB7fTtcclxuICBwdWJsaWMgc3RhdGljIGN1cnJlbnRTY2VuZTogU2NlbmU7XHJcbiAgcHVibGljIHN0YXRpYyByZW5kZXJlcjogYW55O1xyXG4gIHB1YmxpYyBzdGF0aWMgcmF0aW86IG51bWJlciA9IDE7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0V2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRIZWlnaHQ6IG51bWJlcjtcclxuICBwdWJsaWMgc3RhdGljIHdpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIHN0YXRpYyBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc2NhbGU6Qm9vbGVhbj1mYWxzZSkge1xyXG4gICAgICBpZiAoQ29yZVJlbmRlcmVyLnJlbmRlcmVyKSByZXR1cm4gdGhpcztcclxuICAgICAgdGhpcy5kZWZhdWx0V2lkdGggPSB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9IHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICBDb3JlUmVuZGVyZXIucmVuZGVyZXIgPSBQSVhJLmF1dG9EZXRlY3RSZW5kZXJlcihDb3JlUmVuZGVyZXIud2lkdGgsIENvcmVSZW5kZXJlci5oZWlnaHQpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENvcmVSZW5kZXJlci5yZW5kZXJlci52aWV3KTtcclxuICAgICAgICBpZiAoc2NhbGUpIHtcclxuICAgICAgICAgIENvcmVSZW5kZXJlci5fcmVzY2FsZSgpO1xyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIENvcmVSZW5kZXJlci5fcmVzY2FsZSwgZmFsc2UpO1xyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgX3Jlc2NhbGUoKSB7XHJcbiAgICAgIENvcmVSZW5kZXJlci5yYXRpbyA9IDE7IFxyXG4gICAgICBDb3JlUmVuZGVyZXIud2lkdGggPSBDb3JlUmVuZGVyZXIuZGVmYXVsdFdpZHRoICogQ29yZVJlbmRlcmVyLnJhdGlvO1xyXG4gICAgICBDb3JlUmVuZGVyZXIuaGVpZ2h0ID0gQ29yZVJlbmRlcmVyLmRlZmF1bHRIZWlnaHQgKiBDb3JlUmVuZGVyZXIucmF0aW87XHJcbiAgICAgIENvcmVSZW5kZXJlci5yZW5kZXJlci5yZXNpemUoQ29yZVJlbmRlcmVyLndpZHRoLCBDb3JlUmVuZGVyZXIuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIF9hcHBseVJhdGlvKGRpc3BsYXlPYmo6IFBJWEkuRGlzcGxheU9iamVjdCwgcmF0aW86IG51bWJlcikge1xyXG4gICAgICBpZiAocmF0aW8gPT0gMSkgcmV0dXJuO1xyXG4gICAgICB2YXIgb2JqZWN0OiBhbnkgPSBkaXNwbGF5T2JqO1xyXG4gICAgICBvYmplY3QucG9zaXRpb24ueCA9IG9iamVjdC5wb3NpdGlvbi54ICogcmF0aW87XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvbi55ID0gb2JqZWN0LnBvc2l0aW9uLnkgKiByYXRpbztcclxuICAgICAgb2JqZWN0LnNjYWxlLnggPSBvYmplY3Quc2NhbGUueCAqIHJhdGlvO1xyXG4gICAgICBvYmplY3Quc2NhbGUueSA9IG9iamVjdC5zY2FsZS55ICogcmF0aW87XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5fYXBwbHlSYXRpbyhvYmplY3QuY2hpbGRyZW5baV0sIHJhdGlvKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbG9vcCgpIHtcclxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgQ29yZVJlbmRlcmVyLmxvb3AoKSB9KTtcclxuICAgICAgaWYgKCFDb3JlUmVuZGVyZXIuY3VycmVudFNjZW5lIHx8IENvcmVSZW5kZXJlci5jdXJyZW50U2NlbmUuaXNQYXVzZWQoKSkgcmV0dXJuO1xyXG4gICAgICBDb3JlUmVuZGVyZXIuY3VycmVudFNjZW5lLnVwZGF0ZSgpOyBcclxuICAgICAgQ29yZVJlbmRlcmVyLl9hcHBseVJhdGlvKENvcmVSZW5kZXJlci5jdXJyZW50U2NlbmUsIENvcmVSZW5kZXJlci5yYXRpbyk7XHJcbiAgICAgIENvcmVSZW5kZXJlci5yZW5kZXJlci5yZW5kZXIoQ29yZVJlbmRlcmVyLmN1cnJlbnRTY2VuZSk7XHJcbiAgICAgIENvcmVSZW5kZXJlci5fYXBwbHlSYXRpbyhDb3JlUmVuZGVyZXIuY3VycmVudFNjZW5lLCAxL0NvcmVSZW5kZXJlci5yYXRpbyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi9jb3JlL0NvcmVSZW5kZXJlci50cyIsImV4cG9ydCBjbGFzcyBQb3B1cFZPIHtcclxuICBwdWJsaWMgX25hbWU6IHN0cmluZztcclxuICBcclxuICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgZ2V0IG5hbWUoKTpzdHJpbmd7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBuYW1lKF9uYW1lKXtcclxuICAgIHRoaXMuX25hbWUgPSBfbmFtZTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL1BvcFVwL1BvcHVwVk8udHMiLCJpbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL2NvcmUvTG9hZGVyJztcclxuXHJcbnZhciBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL2luZGV4LnRzIiwiaW1wb3J0IFwiLi4vYXNzZXRzL1Nwcml0ZVNoZWV0LnBuZ1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvU3ByaXRlU2hlZXQuanNvblwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvR2FtZVZpZXcuanNvblwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvRGF0YUNvbmZpZy5qc29uXCI7XHJcbmltcG9ydCB7IENlbGxzTWFuYWdlciB9IGZyb20gXCIuLi9zY2VuZXMvZ2FtZS9tYWluVGFibGUvQ2VsbHNNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENlbGxzUGFyc2VyIH0gZnJvbSBcIi4uL3NjZW5lcy9nYW1lL21haW5UYWJsZS9DZWxsc1BhcnNlclwiO1xyXG5pbXBvcnQgeyBDb3JlUmVuZGVyZXIgfSBmcm9tIFwiLi4vY29yZS9Db3JlUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgU2NlbmVzTWFuYWdlciB9IGZyb20gXCIuLi9zY2VuZXMvU2NlbmVzTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTdGFydFBhcnNlciB9IGZyb20gXCIuL1N0YXJ0UGFyc2VyXCI7XHJcbmltcG9ydCB7IFBvcFVwTWFuYWdlciB9IGZyb20gJy4uL3VpL1BvcFVwL1BvcFVwTWFuYWdlcic7XHJcbmltcG9ydCB7IENlbGxzVXRpbCB9IGZyb20gJy4uL3NjZW5lcy9nYW1lL21haW5UYWJsZS9DZWxsc1V0aWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFBJWEkubG9hZGVyLmFkZCgnU3ByaXRlU2hlZXQnLCAnLi4vc3JjL2Fzc2V0cy9TcHJpdGVTaGVldC5qc29uJylcclxuICAgICAgICAgICAgICAgLmFkZCgnR2FtZVZpZXcnLCAnLi4vc3JjL2Fzc2V0cy9HYW1lVmlldy5qc29uJylcclxuICAgICAgICAgICAgICAgLmFkZCgnRGF0YUNvbmZpZycsICcuLi9zcmMvYXNzZXRzL0RhdGFDb25maWcuanNvbicpXHJcbiAgICAgICAgICAgICAgIC5vbihcImNvbXBsZXRlXCIsIHRoaXMub25Db21wbGV0ZSlcclxuICAgICAgICAgICAgICAgLmxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ29tcGxldGUoKXtcclxuICAgIHZhciBzdGFydFBhcnNlciA9IG5ldyBTdGFydFBhcnNlcihQSVhJLmxvYWRlci5yZXNvdXJjZXMuRGF0YUNvbmZpZy5kYXRhKTtcclxuICAgIHZhciBjb3JlUmVuZGVyZXIgPSBDb3JlUmVuZGVyZXI7XHJcbiAgICAgIGNvcmVSZW5kZXJlci5jcmVhdGUoMTIzNSwgODM3LCB0cnVlKTtcclxuICAgIHZhciBzY2VuZXNNYW5hZ2VyID0gbmV3IFNjZW5lc01hbmFnZXI7XHJcbiAgICAvL3ZhciBjZWxsc1V0aWwgPSBuZXcgQ2VsbHNVdGlsKCk7XHJcbiAgICAvLyB2YXIgcG9wVXBNYW5hZ2VyID0gbmV3IFBvcFVwTWFuYWdlcihjZWxsc1V0aWwuY2VsbHNQYXJzZXIuY2VsbHNDb25maWcsIHNjZW5lc01hbmFnZXIuZ2FtZSk7XHJcbiAgICAvLyB2YXIgY2VsbHNQYXJzZXIgPSBuZXcgQ2VsbHNQYXJzZXIoUElYSS5sb2FkZXIucmVzb3VyY2VzLkdhbWVWaWV3LmRhdGEpO1xyXG4gICAgLy8gdmFyIGNlbGxzTWFuYWdlciA9IG5ldyBDZWxsc01hbmFnZXIoY2VsbHNQYXJzZXIuY2VsbHNDb25maWcsIHNjZW5lc01hbmFnZXIuZ2FtZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtbG9hZGVyIS4vY29yZS9Mb2FkZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvU3ByaXRlU2hlZXQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvU3ByaXRlU2hlZXQucG5nXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvU3ByaXRlU2hlZXQuanNvblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL1Nwcml0ZVNoZWV0Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9HYW1lVmlldy5qc29uXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvR2FtZVZpZXcuanNvblxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL0RhdGFDb25maWcuanNvblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL0RhdGFDb25maWcuanNvblxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29yZVJlbmRlcmVyIH0gZnJvbSAnLi4vY29yZS9Db3JlUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBHbG9iYWxEaXNwYXRjaGVyIH0gZnJvbSAnLi4vY29yZS9HbG9iYWxEaXNwYXRjaGVyJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL1NjZW5lJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vY29yZS9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBNZW51U2NlbmUgfSBmcm9tICcuL21lbnUvTWVudVNjZW5lJztcclxuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lL0dhbWVTY2VuZSc7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vY29yZS9Nb2RlbCc7XHJcbmltcG9ydCB7IEdhbWVGaWVsZHNNYW5hZ2VyIH0gZnJvbSAnLi9nYW1lL0dhbWVGaWVsZHNNYW5hZ2VyJztcclxuaW1wb3J0IHsgQ2hpcHNNYW5hZ2VyIH0gZnJvbSAnLi9nYW1lL0NoaXBzTWFuYWdlcic7XHJcbmltcG9ydCB7IFBvcFVwTWFuYWdlciB9IGZyb20gJy4uL3VpL1BvcFVwL1BvcFVwTWFuYWdlcic7XHJcbmltcG9ydCB7IENlbGxzVXRpbCB9IGZyb20gJy4vZ2FtZS9tYWluVGFibGUvQ2VsbHNVdGlsJztcclxuaW1wb3J0IHsgQ2VsbHNNYW5hZ2VyIH0gZnJvbSBcIi4uL3NjZW5lcy9nYW1lL21haW5UYWJsZS9DZWxsc01hbmFnZXJcIjtcclxuIFxyXG5leHBvcnQgY2xhc3MgU2NlbmVzTWFuYWdlciB7XHJcbiAgcHVibGljIG1lbnU6IFNjZW5lO1xyXG4gIHB1YmxpYyBnYW1lOiBTY2VuZTtcclxuICBwdWJsaWMgY2VsbHNVdGlsOiBDZWxsc1V0aWwgPSBuZXcgQ2VsbHNVdGlsKCk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1lbnUgPSB0aGlzLmNyZWF0ZVNjZW5lKCdtZW51JywgTWVudVNjZW5lKTtcclxuICAgIHRoaXMuZ29Ub1NjZW5lKCdtZW51Jyk7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLkdPVE9HQU1FQlROUFJFU1NFRCwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmdhbWUgPSB0aGlzLmNyZWF0ZVNjZW5lKCdnYW1lJywgR2FtZVNjZW5lKTtcclxuICAgICAgdmFyIGNlbGxzVXRpbCA9IG5ldyBDZWxsc1V0aWwoKTtcclxuICAgICAgLy92YXIgY2VsbHNNYW5hZ2VyID0gbmV3IENlbGxzTWFuYWdlcih0aGlzLmNlbGxzVXRpbC5jZWxsc1BhcnNlci5jZWxsc0NvbmZpZywgdGhpcy5nYW1lKTtcclxuICAgICAgLy92YXIgY2VsbHNQYXJzZXIgPSBuZXcgQ2VsbHNQYXJzZXIoUElYSS5sb2FkZXIucmVzb3VyY2VzLkdhbWVWaWV3LmRhdGEpO1xyXG4gICAgICAvL3ZhciBjaGlwc01hbmFnZXIgPSBuZXcgQ2hpcHNNYW5hZ2VyKHRoaXMuZ2FtZSk7XHJcbiAgICAgIC8vdmFyIHBvcFVwTWFuYWdlciA9IG5ldyBQb3BVcE1hbmFnZXIodGhpcy5jZWxsc1V0aWwuY2VsbHNQYXJzZXIuY2VsbHNDb25maWcsIHRoaXMuZ2FtZSk7XHJcbiAgICAgIC8vdmFyIGdhbWVGaWVsZHNNYW5hZ2VyID0gbmV3IEdhbWVGaWVsZHNNYW5hZ2VyKHRoaXMuZ2FtZSk7XHJcbiAgICAgIHRoaXMuZ29Ub1NjZW5lKCdnYW1lJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgR2xvYmFsRGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKENvbnN0YW50cy5HT1RPTUVOVUJUTlBSRVNTRUQsICgpID0+IHt0aGlzLmdvVG9TY2VuZSgnbWVudScpO30pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZVNjZW5lKGlkOiBzdHJpbmcsIFRTY2VuZTogbmV3ICgpID0+IFNjZW5lID0gU2NlbmUpOiBTY2VuZSB7XHJcbiAgICBpZiAoQ29yZVJlbmRlcmVyLnNjZW5lc1tpZF0pIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB2YXIgc2NlbmUgPSBuZXcgVFNjZW5lKCk7XHJcbiAgICBDb3JlUmVuZGVyZXIuc2NlbmVzW2lkXSA9IHNjZW5lO1xyXG4gICAgcmV0dXJuIHNjZW5lO1xyXG4gIH1cclxuICBcclxuICBwcml2YXRlIGdvVG9TY2VuZShpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoQ29yZVJlbmRlcmVyLnNjZW5lc1tpZF0pIHtcclxuICAgICAgaWYgKENvcmVSZW5kZXJlci5jdXJyZW50U2NlbmUpIENvcmVSZW5kZXJlci5jdXJyZW50U2NlbmUucGF1c2UoKTtcclxuICAgICAgICBDb3JlUmVuZGVyZXIuY3VycmVudFNjZW5lID0gQ29yZVJlbmRlcmVyLnNjZW5lc1tpZF07XHJcbiAgICAgICAgQ29yZVJlbmRlcmVyLmN1cnJlbnRTY2VuZS5yZXN1bWUoKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi9zY2VuZXMvU2NlbmVzTWFuYWdlci50cyIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vU2NlbmUnO1xyXG5pbXBvcnQgeyBTaW1wbGVCdXR0b24gfSBmcm9tICcuLi8uLi91aS9TaW1wbGVCdXR0b24nO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9jb3JlL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9Nb2RlbCc7XHJcbmltcG9ydCB7IEdsb2JhbERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9jb3JlL0dsb2JhbERpc3BhdGNoZXInO1xyXG5pbXBvcnQgeyBNZW51QmFyIH0gZnJvbSAnLi4vLi4vdWkvTWVudUJhcic7XHJcbmltcG9ydCB7IE1lbnVCYXJWTyB9IGZyb20gJy4uLy4uL3NjZW5lcy9tZW51L01lbnVCYXJWTyc7XHJcbmltcG9ydCB7IE1lbnVGaWVsZHNNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vc2NlbmVzL21lbnUvTWVudUZpZWxkc01hbmFnZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTY2VuZSBleHRlbmRzIFNjZW5lIHtcclxuICBwdWJsaWMgcGxheUJ1dHRvbjogU2ltcGxlQnV0dG9uO1xyXG4gIHB1YmxpYyBhbW91bnRfYmFyOiBNZW51QmFyO1xyXG4gIHB1YmxpYyBwbGF5ZXJfYmFyOiBNZW51QmFyO1xyXG4gIHB1YmxpYyBtZW51X2Jhcl92YWx1ZTogUElYSS5UZXh0O1xyXG4gIHB1YmxpYyBtZW51RmllbGRzTWFuYWdlcjogTWVudUZpZWxkc01hbmFnZXI7IFxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnBsYXlCdXR0b24gPSBuZXcgU2ltcGxlQnV0dG9uKENvbnN0YW50cy5HT1RPR0FNRUJUTlBSRVNTRUQsICdwbGF5QnRuJywgNTAwLCA0MDApO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBsYXlCdXR0b24pO1xyXG4gICAgdGhpcy5zZXR1cEFtb3VudEJhcigpO1xyXG4gICAgdGhpcy5zZXR1cFBsYXllckJhcigpO1xyXG4gICAgdGhpcy5zZXR1cElucHV0RmllbGRzKCk7XHJcbiAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldHVwQW1vdW50QmFyKCl7XHJcbiAgICBsZXQgbWVudUJhclZPOiBNZW51QmFyVk8gPSBuZXcgTWVudUJhclZPKCk7XHJcbiAgICAgICAgbWVudUJhclZPLl9ldmVudFBsdXMgPSBDb25zdGFudHMuQU1PVU5UX0JBUl9QTFVTX1BSRVNTRUQ7XHJcbiAgICAgICAgbWVudUJhclZPLl9ldmVudE1pbnVzID0gQ29uc3RhbnRzLkFNT1VOVF9CQVJfTUlOVVNfUFJFU1NFRDtcclxuICAgICAgICBtZW51QmFyVk8uX2N1cnJlbnRCYXJfeCA9IDEwO1xyXG4gICAgICAgIG1lbnVCYXJWTy5fY3VycmVudEJhcl95ID0gMTA7XHJcbiAgICAgICAgbWVudUJhclZPLl9yYXRpbyA9IENvbnN0YW50cy5BTU9VTlRfQkFSX1JBVElPO1xyXG4gICAgICAgIG1lbnVCYXJWTy5fbW9kZWxWYWx1ZSA9IE1vZGVsLnN0YXJ0X2Ftb3VudDtcclxuICAgICAgICBtZW51QmFyVk8uX21vZGVsTWF4VmFsdWUgPSBNb2RlbC5zdGFydF9hbW91bnRfbWF4O1xyXG4gICAgICAgIG1lbnVCYXJWTy5fbW9kZWxNaW5WYWx1ZSA9IE1vZGVsLnN0YXJ0X2Ftb3VudF9taW47XHJcbiAgICAgICAgbWVudUJhclZPLl9tb2RlbFN0ZXBWYWx1ZSA9IE1vZGVsLnN0YXJ0X2Ftb3VudF9zdGVwO1xyXG4gICAgICAgIG1lbnVCYXJWTy5fbWVudUJhclVuaXQgPSBcInN0YXJ0X2Ftb3VudC5wbmdcIjtcclxuICAgICAgICBtZW51QmFyVk8uX21lbnVCYXJ0b2dnbGUgPSBcInRvZ2dsZS5wbmdcIjtcclxuICAgICAgICBtZW51QmFyVk8uX2V2ZW50TmFtZSA9IFwiYW1vdW50QmFyXCI7IC8vVE9ETyAgbWFrZSBhIGNvbnN0YW50XHJcbiAgICB0aGlzLmFtb3VudF9iYXIgPSBuZXcgTWVudUJhcihtZW51QmFyVk8pO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLmFtb3VudF9iYXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldHVwUGxheWVyQmFyKCl7XHJcbiAgICBsZXQgbWVudUJhclZPOiBNZW51QmFyVk8gPSBuZXcgTWVudUJhclZPKCk7XHJcbiAgICAgICAgbWVudUJhclZPLl9ldmVudFBsdXMgPSBDb25zdGFudHMuUExBWUVSX0JBUl9QTFVTX1BSRVNTRUQ7XHJcbiAgICAgICAgbWVudUJhclZPLl9ldmVudE1pbnVzID0gQ29uc3RhbnRzLlBMQVlFUl9CQVJfTUlOVVNfUFJFU1NFRDtcclxuICAgICAgICBtZW51QmFyVk8uX2N1cnJlbnRCYXJfeCA9IDEwO1xyXG4gICAgICAgIG1lbnVCYXJWTy5fY3VycmVudEJhcl95ID0gMjAwO1xyXG4gICAgICAgIG1lbnVCYXJWTy5fcmF0aW8gPSBDb25zdGFudHMuUExBWUVSX0JBUl9SQVRJTysyMDtcclxuICAgICAgICBtZW51QmFyVk8uX21vZGVsVmFsdWUgPSBNb2RlbC5udW1iZXJfb2ZfcGxheWVycztcclxuICAgICAgICBtZW51QmFyVk8uX21vZGVsTWF4VmFsdWUgPSBNb2RlbC5udW1iZXJfb2ZfcGxheWVyc19tYXg7XHJcbiAgICAgICAgbWVudUJhclZPLl9tb2RlbE1pblZhbHVlID0gTW9kZWwubnVtYmVyX29mX3BsYXllcnNfbWluO1xyXG4gICAgICAgIG1lbnVCYXJWTy5fbW9kZWxTdGVwVmFsdWUgPSBNb2RlbC5udW1iZXJfb2ZfcGxheWVyc19zdGVwO1xyXG4gICAgICAgIG1lbnVCYXJWTy5fbWVudUJhclVuaXQgPSBcIm51bWJlcl9vZl9wbGF5ZXJzLnBuZ1wiO1xyXG4gICAgICAgIG1lbnVCYXJWTy5fbWVudUJhcnRvZ2dsZSA9IFwidG9nZ2xlLnBuZ1wiO1xyXG4gICAgICAgIG1lbnVCYXJWTy5fZXZlbnROYW1lID0gXCJwbGF5ZXJCYXJcIjsgLy9UT0RPICBtYWtlIGEgY29uc3RhbnRcclxuICAgIHRoaXMuYW1vdW50X2JhciA9IG5ldyBNZW51QmFyKG1lbnVCYXJWTyk7XHJcbiAgICB0aGlzLmFtb3VudF9iYXIubWVudV9iYXJfdmFsdWUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLmFtb3VudF9iYXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJhbW91bnRCYXJcIiwgKF9tb2RlbFZhbHVlOm51bWJlcikgPT4ge01vZGVsLnN0YXJ0X2Ftb3VudCA9IF9tb2RlbFZhbHVlfSk7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5ZXJCYXJcIiwgKF9tb2RlbFZhbHVlOm51bWJlcikgPT4ge01vZGVsLm51bWJlcl9vZl9wbGF5ZXJzID0gX21vZGVsVmFsdWU7fSk7XHJcbiAgfVxyXG4gIFxyXG4gIHB1YmxpYyBzZXR1cElucHV0RmllbGRzKCl7XHJcbiAgICB0aGlzLm1lbnVGaWVsZHNNYW5hZ2VyID0gbmV3IE1lbnVGaWVsZHNNYW5hZ2VyKCk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMubWVudUZpZWxkc01hbmFnZXIpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyBwdWJsaWMgc2V0dXBJbnB1dEJveGVzKCl7XHJcbiAgLy8gICB2YXIgaW5wdXRCb3ggPSBuZXcgSW5wdXRCb3goKTtcclxuICAvLyAgIGlucHV0Qm94LmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAvLyAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBNb2RlbC5fbnVtYmVyX29mX3BsYXllcnM7IGkrKyl7XHJcbiAgLy8gICAgIGlucHV0Qm94LmNyZWF0ZVNpbXBsZUJveCgxMCwgMzUwICsgaSo3MCk7XHJcbiAgLy8gICAgIHRoaXMuYWRkQ2hpbGQoaW5wdXRCb3gpOyAgXHJcbiAgLy8gICAgIHZhciBwbGF5ZXJOYW1lID0gbmV3IElucHV0Qm94VGV4dCh0aGlzLnBsYXllcnNfYXJyYXlbaV0pO1xyXG4gIC8vICAgICAgICAgcGxheWVyTmFtZS5wb3NpdGlvbi5zZXQoMTIwLCAzNTUgKyBpKjcwICk7XHJcbiAgLy8gICAgIHRoaXMuYWRkQ2hpbGQocGxheWVyTmFtZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi9zY2VuZXMvbWVudS9NZW51U2NlbmUudHMiLCJpbXBvcnQgeyBHbG9iYWxEaXNwYXRjaGVyIH0gZnJvbSAnLi4vY29yZS9HbG9iYWxEaXNwYXRjaGVyJztcclxuaW1wb3J0IHsgU2ltcGxlQnV0dG9uIH0gZnJvbSAnLi4vdWkvU2ltcGxlQnV0dG9uJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vY29yZS9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4uL2NvcmUvTW9kZWwnO1xyXG5pbXBvcnQgeyBNZW51QmFyVk99IGZyb20gJy4vTWVudUJhclZPJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51QmFyIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbiAgcHVibGljIHRleHR1cmVNZW51OiBQSVhJLlRleHR1cmVEaWN0aW9uYXJ5O1xyXG4gIHB1YmxpYyBjdXJyZW50QmFyOiBQSVhJLlNwcml0ZTtcclxuICBwdWJsaWMgY3VycmVudFRvZ2dsZTogUElYSS5TcHJpdGU7XHJcbiAgcHVibGljIGN1cnJlbnRQbHVzOiBTaW1wbGVCdXR0b247XHJcbiAgcHVibGljIGN1cnJlbnRNaW51czogU2ltcGxlQnV0dG9uO1xyXG4gIHB1YmxpYyBtZW51X2Jhcl92YWx1ZTogUElYSS5UZXh0O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVudUJhclZPOiBNZW51QmFyVk8pe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudGV4dHVyZU1lbnUgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXMuU3ByaXRlU2hlZXQudGV4dHVyZXM7XHJcbiAgICB0aGlzLmluaXRHcmFwaGljKCk7XHJcbiAgICB0aGlzLmFkZFBsdXNMaXN0ZW5lcigpO1xyXG4gICAgdGhpcy5hZGRNaW51c0xpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdEdyYXBoaWMoKXtcclxuICAgIHRoaXMuY3VycmVudEJhciA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLnRleHR1cmVNZW51W3RoaXMubWVudUJhclZPLm1lbnVCYXJVbml0XSk7XHJcbiAgICB0aGlzLmN1cnJlbnRCYXIucG9zaXRpb24uc2V0KHRoaXMubWVudUJhclZPLmN1cnJlbnRCYXJfeCwgdGhpcy5tZW51QmFyVk8uY3VycmVudEJhcl95KTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRUb2dnbGUgPSBuZXcgUElYSS5TcHJpdGUodGhpcy50ZXh0dXJlTWVudVt0aGlzLm1lbnVCYXJWTy5tZW51QmFydG9nZ2xlXSk7XHJcbiAgICB0aGlzLmN1cnJlbnRUb2dnbGUucG9zaXRpb24uc2V0KHRoaXMubWVudUJhclZPLm1vZGVsVmFsdWUgKiB0aGlzLm1lbnVCYXJWTy5yYXRpbywgdGhpcy5jdXJyZW50QmFyLnkgKyB0aGlzLmN1cnJlbnRCYXIuaGVpZ2h0IC0gMjcpXHJcblxyXG4gICAgdGhpcy5jdXJyZW50UGx1cyA9IG5ldyBTaW1wbGVCdXR0b24odGhpcy5tZW51QmFyVk8uZXZlbnRQbHVzLCBcInBsdXNcIiwgMzQ3LCB0aGlzLmN1cnJlbnRCYXIueSArIDUyKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRNaW51cyA9IG5ldyBTaW1wbGVCdXR0b24odGhpcy5tZW51QmFyVk8uZXZlbnRNaW51cywgXCJtaW51c1wiLCAyMiwgdGhpcy5jdXJyZW50QmFyLnkgKyA1Mik7XHJcblxyXG4gICAgdGhpcy5tZW51X2Jhcl92YWx1ZSA9IG5ldyBQSVhJLlRleHQodGhpcy5tZW51QmFyVk8ubW9kZWxWYWx1ZSwge2ZvbnRGYW1pbHk6IFwiQXJpYWxcIiwgZm9udFNpemU6IDI4LCBmaWxsOiBcImdyZWVuXCJ9KTtcclxuICAgIHRoaXMubWVudV9iYXJfdmFsdWUucG9zaXRpb24uc2V0KHRoaXMuY3VycmVudEJhci54ICsgdGhpcy5jdXJyZW50QmFyLndpZHRoIC8gMiAtIDUwLCB0aGlzLmN1cnJlbnRCYXIueSArIHRoaXMuY3VycmVudEJhci5oZWlnaHQgLyAyIC0gMTApO1xyXG5cclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jdXJyZW50QmFyKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jdXJyZW50VG9nZ2xlKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jdXJyZW50UGx1cyk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuY3VycmVudE1pbnVzKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5tZW51X2Jhcl92YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25QbHVzQnV0dG9uUHJlc3NlZCgpe1xyXG4gICAgICBpZih0aGlzLmN1cnJlbnRQbHVzKXtcclxuICAgICAgICBpZih0aGlzLm1lbnVCYXJWTy5fbW9kZWxWYWx1ZSA8IHRoaXMubWVudUJhclZPLm1vZGVsTWF4VmFsdWUpe1xyXG4gICAgICAgICAgdGhpcy5tZW51QmFyVk8uX21vZGVsVmFsdWUgPSB0aGlzLm1lbnVCYXJWTy5tb2RlbFZhbHVlICsgdGhpcy5tZW51QmFyVk8ubW9kZWxTdGVwVmFsdWU7XHJcbiAgICAgICAgICBHbG9iYWxEaXNwYXRjaGVyLmRpc3BhdGNoKHRoaXMubWVudUJhclZPLmV2ZW50TmFtZSwgdGhpcy5tZW51QmFyVk8ubW9kZWxWYWx1ZSk7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRUb2dnbGUueCA9IHRoaXMuY3VycmVudFRvZ2dsZS54ICsgdGhpcy5tZW51QmFyVk8ubW9kZWxTdGVwVmFsdWUgKiB0aGlzLm1lbnVCYXJWTy5yYXRpbztcclxuICAgICAgICAgIHRoaXMubWVudV9iYXJfdmFsdWUudGV4dCA9IHRoaXMubWVudUJhclZPLm1vZGVsVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25NaW51c0J1dHRvblByZXNzZWQoKXtcclxuICAgICAgaWYodGhpcy5jdXJyZW50TWludXMpe1xyXG4gICAgICAgIGlmKHRoaXMubWVudUJhclZPLl9tb2RlbFZhbHVlID4gdGhpcy5tZW51QmFyVk8ubW9kZWxNaW5WYWx1ZSl7XHJcbiAgICAgICAgICB0aGlzLm1lbnVCYXJWTy5fbW9kZWxWYWx1ZSA9IHRoaXMubWVudUJhclZPLm1vZGVsVmFsdWUgLSB0aGlzLm1lbnVCYXJWTy5tb2RlbFN0ZXBWYWx1ZTtcclxuICAgICAgICAgIEdsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2godGhpcy5tZW51QmFyVk8uZXZlbnROYW1lLCB0aGlzLm1lbnVCYXJWTy5tb2RlbFZhbHVlKTtcclxuICAgICAgICAgIHRoaXMuY3VycmVudFRvZ2dsZS54ID0gdGhpcy5jdXJyZW50VG9nZ2xlLnggLSB0aGlzLm1lbnVCYXJWTy5tb2RlbFN0ZXBWYWx1ZSAqIHRoaXMubWVudUJhclZPLnJhdGlvO1xyXG4gICAgICAgICAgdGhpcy5tZW51X2Jhcl92YWx1ZS50ZXh0ID0gdGhpcy5tZW51QmFyVk8ubW9kZWxWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRQbHVzTGlzdGVuZXIoKXtcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1lbnVCYXJWTy5ldmVudFBsdXMsIHRoaXMub25QbHVzQnV0dG9uUHJlc3NlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRNaW51c0xpc3RlbmVyKCl7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tZW51QmFyVk8uZXZlbnRNaW51cywgdGhpcy5vbk1pbnVzQnV0dG9uUHJlc3NlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNwb3NlKCl7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLkFNT1VOVF9CQVJfTUlOVVNfUFJFU1NFRCwgdGhpcy5vbk1pbnVzQnV0dG9uUHJlc3NlZCk7XHJcbiAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi91aS9NZW51QmFyLnRzIiwiZXhwb3J0IGNsYXNzIE1lbnVCYXJWTyB7XHJcbiAgcHVibGljIF9ldmVudFBsdXM6IHN0cmluZzsgXHJcbiAgcHVibGljIF9ldmVudE1pbnVzOiBzdHJpbmc7IFxyXG4gIHB1YmxpYyBfZXZlbnROYW1lOiBzdHJpbmc7IFxyXG4gIHB1YmxpYyBfY3VycmVudEJhcl94OiBudW1iZXI7IFxyXG4gIHB1YmxpYyBfY3VycmVudEJhcl95OiBudW1iZXI7IFxyXG4gIHB1YmxpYyBfcmF0aW86IG51bWJlcjsgXHJcbiAgcHVibGljIF9tb2RlbFZhbHVlOm51bWJlcjsgXHJcbiAgcHVibGljIF9tb2RlbE1heFZhbHVlOiBudW1iZXI7IFxyXG4gIHB1YmxpYyBfbW9kZWxNaW5WYWx1ZTogbnVtYmVyOyBcclxuICBwdWJsaWMgX21vZGVsU3RlcFZhbHVlOiBudW1iZXI7IFxyXG4gIHB1YmxpYyBfbWVudUJhclVuaXQ6IHN0cmluZzsgXHJcbiAgcHVibGljIF9tZW51QmFydG9nZ2xlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgZ2V0IGV2ZW50TmFtZSgpOnN0cmluZ3tcclxuICAgIHJldHVybiB0aGlzLl9ldmVudE5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZXZlbnRQbHVzKCk6c3RyaW5ne1xyXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50UGx1cztcclxuICB9XHJcblxyXG4gIGdldCBldmVudE1pbnVzKCk6c3RyaW5ne1xyXG4gICAgcmV0dXJuIHRoaXMuX2V2ZW50TWludXM7XHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudEJhcl94KCk6bnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRCYXJfeDtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50QmFyX3koKTpudW1iZXJ7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEJhcl95O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJhdGlvKCk6bnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuX3JhdGlvO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1vZGVsVmFsdWUoKTpudW1iZXJ7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxWYWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBtb2RlbE1heFZhbHVlKCk6bnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuX21vZGVsTWF4VmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgbW9kZWxNaW5WYWx1ZSgpOm51bWJlcntcclxuICAgIHJldHVybiB0aGlzLl9tb2RlbE1pblZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1vZGVsU3RlcFZhbHVlKCk6bnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuX21vZGVsU3RlcFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1lbnVCYXJVbml0KCk6c3RyaW5ne1xyXG4gICAgcmV0dXJuIHRoaXMuX21lbnVCYXJVbml0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1lbnVCYXJ0b2dnbGUoKTpzdHJpbmd7XHJcbiAgICByZXR1cm4gdGhpcy5fbWVudUJhcnRvZ2dsZTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi9zY2VuZXMvbWVudS9NZW51QmFyVk8udHMiLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvTW9kZWwnO1xyXG5pbXBvcnQgeyBHbG9iYWxEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vY29yZS9HbG9iYWxEaXNwYXRjaGVyJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vLi4vY29yZS9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBTaW1wbGVCb3h9IGZyb20gJy4uLy4uL3VpL1NpbXBsZUJveCc7XHJcbmltcG9ydCB7IFBsYXllclZPIH0gZnJvbSAnLi4vLi4vc2NlbmVzL2dhbWUvbWFpblRhYmxlL1BsYXllclZPJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51RmllbGRzTWFuYWdlciBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gIHB1YmxpYyBwbGF5ZXJCb3hlczogU2ltcGxlQm94W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZUJveGVzQnlEZWZhdWx0KCk7XHJcbiAgICB0aGlzLmFkZElucHV0Qm94KCk7XHJcbiAgICB0aGlzLmNoYW5nZU5hbWUoKTtcclxuICAgIHRoaXMucmVtb3ZlSW5wdXRCb3goKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGVQbGF5ZXIoYm94WVBvc2l0aW9uOm51bWJlciwgZXZlbnQ6c3RyaW5nLCBjb2xvcjphbnksIG5hbWU6c3RyaW5nKXtcclxuICAgIHZhciBwbGF5ZXJWTyA9IG5ldyBQbGF5ZXJWTygpO1xyXG4gICAgICAgIHBsYXllclZPLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHBsYXllclZPLmNvbG9yID0gY29sb3I7XHJcbiAgICBNb2RlbC5wbGF5ZXJzLnB1c2gocGxheWVyVk8pO1xyXG4gICAgdmFyIHBsYXllckJveCA9IG5ldyBTaW1wbGVCb3goMTAsIGJveFlQb3NpdGlvbiwgMzUwLCA2MCwgcGxheWVyVk8uY29sb3IsIHBsYXllclZPLm5hbWUpO1xyXG4gICAgICAgIHBsYXllckJveC5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgICAgICBwbGF5ZXJCb3guaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHBsYXllckJveC5vbignbW91c2Vkb3duJywgKCkgPT4ge0dsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO30pO1xyXG4gICAgdGhpcy5wbGF5ZXJCb3hlcy5wdXNoKHBsYXllckJveCk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHBsYXllckJveCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlQm94ZXNCeURlZmF1bHQoKXtcclxuICAgIHRoaXMuY3JlYXRlUGxheWVyKDMzMCwgQ29uc3RhbnRzLk1FTlVfUExBWUVSXzFfUFJFU1NFRCwgMHgwMGZmMDAsIE1vZGVsLnBsYXllcl8xX25hbWUpO1xyXG4gICAgdGhpcy5jcmVhdGVQbGF5ZXIoNDIwLCBDb25zdGFudHMuTUVOVV9QTEFZRVJfMl9QUkVTU0VELCAweGZmZmYwMCwgTW9kZWwucGxheWVyXzJfbmFtZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkSW5wdXRCb3goKXtcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihDb25zdGFudHMuUExBWUVSX0JBUl9QTFVTX1BSRVNTRUQsIHRoaXMub25QbHVzQnV0dG9uUHJlc3NlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVJbnB1dEJveCgpe1xyXG4gICAgR2xvYmFsRGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKENvbnN0YW50cy5QTEFZRVJfQkFSX01JTlVTX1BSRVNTRUQsIHRoaXMub25NaW51c0J1dHRvblByZXNzZWQuYmluZCh0aGlzKSk7XHJcbiAgfSBcclxuXHJcbiAgcHVibGljIGNoYW5nZU5hbWUoKXtcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihDb25zdGFudHMuTUVOVV9QTEFZRVJfMV9QUkVTU0VELCAoKSA9PiB7XHJcbiAgICAgIE1vZGVsLnBsYXllcnNbMF0ubmFtZSA9IHByb21wdChcIlBsZWFzZSwgZW50ZXIgeW91ciBuYW1lXCIpO1xyXG4gICAgICB0aGlzLnBsYXllckJveGVzWzBdLmlucHV0VGV4dC50ZXh0ID0gTW9kZWwucGxheWVyc1swXS5uYW1lO1xyXG4gICAgfSk7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLk1FTlVfUExBWUVSXzJfUFJFU1NFRCwgKCkgPT4ge1xyXG4gICAgICBNb2RlbC5wbGF5ZXJzWzFdLm5hbWUgPSBwcm9tcHQoXCJQbGVhc2UsIGVudGVyIHlvdXIgbmFtZVwiKTtcclxuICAgICAgdGhpcy5wbGF5ZXJCb3hlc1sxXS5pbnB1dFRleHQudGV4dCA9IE1vZGVsLnBsYXllcnNbMV0ubmFtZTtcclxuICAgIH0pO1xyXG4gICAgR2xvYmFsRGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKENvbnN0YW50cy5NRU5VX1BMQVlFUl8zX1BSRVNTRUQsICgpID0+IHtcclxuICAgICAgTW9kZWwucGxheWVyc1syXS5uYW1lID0gcHJvbXB0KFwiUGxlYXNlLCBlbnRlciB5b3VyIG5hbWVcIik7XHJcbiAgICAgIHRoaXMucGxheWVyQm94ZXNbMl0uaW5wdXRUZXh0LnRleHQgPSBNb2RlbC5wbGF5ZXJzWzJdLm5hbWU7XHJcbiAgICB9KTtcclxuICAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLk1FTlVfUExBWUVSXzRfUFJFU1NFRCwgKCkgPT4ge1xyXG4gICAgICBNb2RlbC5wbGF5ZXJzWzNdLm5hbWUgPSBwcm9tcHQoXCJQbGVhc2UsIGVudGVyIHlvdXIgbmFtZVwiKTtcclxuICAgICAgdGhpcy5wbGF5ZXJCb3hlc1szXS5pbnB1dFRleHQudGV4dCA9IE1vZGVsLnBsYXllcnNbM10ubmFtZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUGx1c0J1dHRvblByZXNzZWQoKXtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IE1vZGVsLm51bWJlcl9vZl9wbGF5ZXJzIC0xOyBpIDwgTW9kZWwubnVtYmVyX29mX3BsYXllcnM7IGkrKyl7XHJcbiAgICAgIGlmKE1vZGVsLnBsYXllcnMubGVuZ3RoID09IDIpe1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKDUxMCwgQ29uc3RhbnRzLk1FTlVfUExBWUVSXzNfUFJFU1NFRCwgMHgwMDY2ZmYsIFwiICAgICAgICBcIik7XHJcbiAgICAgIH0gXHJcbiAgICAgIGVsc2UgXHJcbiAgICAgICAgaWYgKE1vZGVsLnBsYXllcnMubGVuZ3RoID09IDMpIHsgXHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZVBsYXllcig2MDAsIENvbnN0YW50cy5NRU5VX1BMQVlFUl80X1BSRVNTRUQsIDB4ZmYwMDAwLCBcIiAgICAgICAgXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7cmV0dXJuO31cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbk1pbnVzQnV0dG9uUHJlc3NlZCgpe1xyXG4gICAgaWYodGhpcy5jaGlsZHJlbi5sZW5ndGggPiBNb2RlbC5udW1iZXJfb2ZfcGxheWVyc19taW4pe1xyXG4gICAgICBpZihNb2RlbC5udW1iZXJfb2ZfcGxheWVycyA+PSBNb2RlbC5udW1iZXJfb2ZfcGxheWVyc19taW4pe1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IFxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi9zY2VuZXMvbWVudS9NZW51RmllbGRzTWFuYWdlci50cyIsImltcG9ydCB7IENvbXBhbnkgfSBmcm9tICcuL0NvbXBhbnknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclZPIHtcclxuICBwcml2YXRlIF9uYW1lOnN0cmluZztcclxuICBwcml2YXRlIF9tb25leTpudW1iZXI7XHJcbiAgcHJpdmF0ZSBfY29sb3I6YW55O1xyXG4gIHByaXZhdGUgX2NvbXBhbmllczogQ29tcGFueVtdID0gW107XHJcbiAgcHJpdmF0ZSBfcG9zaXRpb246bnVtYmVyID0gMDtcclxuXHJcbiAgZ2V0IG5hbWUoKTpzdHJpbmd7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBuYW1lKF9uYW1lKXtcclxuICAgIHRoaXMuX25hbWU9IF9uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1vbmV5KCk6bnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuX21vbmV5O1xyXG4gIH1cclxuXHJcbiAgc2V0IG1vbmV5KF9tb25leSl7XHJcbiAgICB0aGlzLl9tb25leSA9IF9tb25leTtcclxuICB9XHJcblxyXG4gIGdldCBjb2xvcigpOmFueXtcclxuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcclxuICB9XHJcblxyXG4gIHNldCBjb2xvcihfY29sb3Ipe1xyXG4gICAgdGhpcy5fY29sb3IgPSBfY29sb3I7XHJcbiAgfVxyXG5cclxuICBnZXQgY29tcGFuaWVzKCk6Q29tcGFueVtde1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhbmllcztcclxuICB9XHJcblxyXG4gIHNldCBjb21wYW5pZXMoX2NvbXBhbmllcyl7XHJcbiAgICB0aGlzLl9jb21wYW5pZXMgPSBfY29tcGFuaWVzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBvc2l0aW9uKCk6bnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0IHBvc2l0aW9uKF9wb3NpdGlvbil7XHJcbiAgICB0aGlzLl9wb3NpdGlvbiA9IF9wb3NpdGlvbjtcclxuICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtbG9hZGVyIS4vc2NlbmVzL2dhbWUvbWFpblRhYmxlL1BsYXllclZPLnRzIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9TY2VuZSc7XHJcbmltcG9ydCB7IEdsb2JhbERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9jb3JlL0dsb2JhbERpc3BhdGNoZXInO1xyXG5pbXBvcnQgeyBTaW1wbGVCdXR0b24gfSBmcm9tICcuLi8uLi91aS9TaW1wbGVCdXR0b24nO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9jb3JlL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IENoaXBzTWFuYWdlciB9IGZyb20gJy4uLy4uL3NjZW5lcy9nYW1lL0NoaXBzTWFuYWdlcic7XHJcbmltcG9ydCB7IENlbGxzTWFuYWdlciB9IGZyb20gJy4vbWFpblRhYmxlL0NlbGxzTWFuYWdlcic7XHJcbmltcG9ydCB7IENlbGxzVXRpbCB9IGZyb20gJy4vbWFpblRhYmxlL0NlbGxzVXRpbCc7XHJcbmltcG9ydCB7IEdhbWVGaWVsZHNNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vc2NlbmVzL2dhbWUvR2FtZUZpZWxkc01hbmFnZXInO1xyXG5pbXBvcnQgeyBSb2xsQmFyIH0gZnJvbSAnLi4vLi4vdWkvUm9sbEJhcic7XHJcbmltcG9ydCB7IFBvcHVwVk8gfSBmcm9tICcuLi8uLi91aS9Qb3BVcC9Qb3B1cFZPJztcclxuaW1wb3J0IHsgUG9wVXBNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vdWkvUG9wVXAvUG9wVXBNYW5hZ2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBTY2VuZSB7IFxyXG4gIHB1YmxpYyBtZW51QnV0dG9uOiBTaW1wbGVCdXR0b247XHJcbiAgcHVibGljIHJvbGxCdXR0b246IFNpbXBsZUJ1dHRvbjsgXHJcbiAgcHVibGljIGNlbGxzVXRpbDogQ2VsbHNVdGlsID0gbmV3IENlbGxzVXRpbCgpO1xyXG4gIHB1YmxpYyBwb3BVcE1hbmFnZXI6IFBvcFVwTWFuYWdlciA9IG5ldyBQb3BVcE1hbmFnZXIodGhpcy5jZWxsc1V0aWwuY2VsbHNQYXJzZXIuY2VsbHNDb25maWcsIHRoaXMpO1xyXG4gIHB1YmxpYyBjZWxsc01hbmFnZXI6IENlbGxzTWFuYWdlciA9IG5ldyBDZWxsc01hbmFnZXIodGhpcy5jZWxsc1V0aWwuY2VsbHNQYXJzZXIuY2VsbHNDb25maWcsIHRoaXMpO1xyXG4gIHB1YmxpYyBnYW1lRmllbGRzTWFuYWdlcjogR2FtZUZpZWxkc01hbmFnZXIgPSBuZXcgR2FtZUZpZWxkc01hbmFnZXIodGhpcyk7XHJcbiAgcHVibGljIGNoaXBzTWFuYWdlcjogQ2hpcHNNYW5hZ2VyID0gbmV3IENoaXBzTWFuYWdlcih0aGlzKTtcclxuICBwdWJsaWMgcm9sbEJhcjogUm9sbEJhciA9IG5ldyBSb2xsQmFyKHRoaXMpO1xyXG4gIHB1YmxpYyBjdXJyZW50UGxheWVySW5kZXg6IG51bWJlcjtcclxuICBwdWJsaWMgY3VycmVudFBsYXllclBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY3JlYXRlTWVudUJ1dHRvbigpO1xyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlTWVudUJ1dHRvbigpe1xyXG4gICAgdGhpcy5tZW51QnV0dG9uID0gbmV3IFNpbXBsZUJ1dHRvbihDb25zdGFudHMuR09UT01FTlVCVE5QUkVTU0VELCAnbWVudUJ0bicsIDkzMCwgNjAwKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5tZW51QnV0dG9uKTtcclxuICB9XHJcbiAgXHJcbiAgcHVibGljIGFkZExpc3RlbmVycygpe1xyXG4gICAgR2xvYmFsRGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjdXJyZW50X3Bvc2l0aW9uJywgKF9jdXJyZW50UG9zaXRpb246bnVtYmVyKSA9PiB7dGhpcy5jdXJyZW50UGxheWVyUG9zaXRpb24gPSBfY3VycmVudFBvc2l0aW9uO30pO1xyXG4gICAgR2xvYmFsRGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmVfcGxheWVyJywgKF9jdXJyZW50UGxheWVyOm51bWJlcikgPT4ge3RoaXMuY3VycmVudFBsYXllckluZGV4ID0gX2N1cnJlbnRQbGF5ZXI7fSk7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoQ29uc3RhbnRzLlBMQVlfQ1VCRVMsIHRoaXMub25Sb2xsQnV0dG9uUHJlc3NlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblJvbGxCdXR0b25QcmVzc2VkKCl7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmRpc3BhdGNoKCdjbG9zZV9wb3B1cCcpO1xyXG4gICAgdGhpcy5nYW1lRmllbGRzTWFuYWdlci5zZXRQbGF5ZXJRdWV1ZSgpO1xyXG4gICAgdGhpcy5yb2xsQmFyLmN1YmVfMS5hbmltLmdvdG9BbmRQbGF5KE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgIHRoaXMucm9sbEJhci5jdWJlXzIuYW5pbS5nb3RvQW5kUGxheShNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgIHRoaXMucm9sbEJhci5jdWJlXzEuYW5pbS5zdG9wKCk7XHJcbiAgICAgIHRoaXMucm9sbEJhci5jdWJlXzIuYW5pbS5zdG9wKCk7XHJcbiAgICAgIHRoaXMucm9sbEJhci5zZXRDdWJlc1N1bSgpOyBcclxuICAgICAgdGhpcy5jaGlwc01hbmFnZXIuc2V0Q3VycmVudFBsYXllckNoaXAodGhpcy5yb2xsQmFyLmN1YmVzX3N1bSwgdGhpcy5jdXJyZW50UGxheWVySW5kZXgpO1xyXG4gICAgICB0aGlzLnNob3dQb3BVcCgpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1BvcFVwKCl7XHJcbiAgICBjb25zdCBwb3B1cERhdGE6IFBvcHVwVk8gPSBuZXcgUG9wdXBWTygpO1xyXG4gICAgaWYgKHRoaXMuY2VsbHNNYW5hZ2VyLmlzQ29tcGFueVR5cGUodGhpcy5jdXJyZW50UGxheWVyUG9zaXRpb24pKXtcclxuICAgICAgR2xvYmFsRGlzcGF0Y2hlci5kaXNwYXRjaCgnY29tcGFueV90YXgnKTtcclxuICAgIGlmICh0aGlzLmNlbGxzTWFuYWdlci5pc0NvbXBhbnlTb2xkKHRoaXMuY3VycmVudFBsYXllclBvc2l0aW9uKSA9PSBmYWxzZSB8fCBcclxuICAgICAgICB0aGlzLmNlbGxzTWFuYWdlci5pc0NvbXBhbnlTb2xkKHRoaXMuY3VycmVudFBsYXllclBvc2l0aW9uKSA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgcG9wdXBEYXRhLm5hbWUgPSAnc2VsbGluZ1BvcFVwJztcclxuICAgICAgICAgIEdsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2goJ3Nob3dfcG9wdXAnLCBwb3B1cERhdGEpO1xyXG4gICAgICB9IFxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2VsbHNNYW5hZ2VyLmlzRm9yY2VUeXBlKHRoaXMuY3VycmVudFBsYXllclBvc2l0aW9uKSl7XHJcbiAgICAgIHBvcHVwRGF0YS5uYW1lID0gJ2ZvcmNlTWFqZXVyZSc7XHJcbiAgICAgIEdsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2goJ3Nob3dfcG9wdXAnLCBwb3B1cERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2VsbHNNYW5hZ2VyLmlzQ2hhbmNlVHlwZSh0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbikpe1xyXG4gICAgICBwb3B1cERhdGEubmFtZSA9ICdjaGFuY2VQb3BVcCc7XHJcbiAgICAgIEdsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2goJ3Nob3dfcG9wdXAnLCBwb3B1cERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2VsbHNNYW5hZ2VyLmlzVGF4VHlwZSh0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbikpe1xyXG4gICAgICBHbG9iYWxEaXNwYXRjaGVyLmRpc3BhdGNoKCdjb21tb25fdGF4Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL3NjZW5lcy9nYW1lL0dhbWVTY2VuZS50cyIsImltcG9ydCB7IENoaXAgfSBmcm9tICcuLi8uLi91aS9DaGlwJztcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL01vZGVsJztcclxuaW1wb3J0IHsgQ2VsbHNVdGlsIH0gZnJvbSAnLi4vLi4vc2NlbmVzL2dhbWUvbWFpblRhYmxlL0NlbGxzVXRpbCc7XHJcbmltcG9ydCB7IEdsb2JhbERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9jb3JlL0dsb2JhbERpc3BhdGNoZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoaXBzTWFuYWdlciBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gIHB1YmxpYyBjaGlwc0FycmF5OiBDaGlwW10gPSBbXTtcclxuICBwdWJsaWMgbnVtYmVyX29mX2NlbGxzOiBudW1iZXIgPSAzODtcclxuICBwdWJsaWMgY2VsbHNVdGlsOiBDZWxsc1V0aWwgPSBuZXcgQ2VsbHNVdGlsKCk7XHJcbiAgcHVibGljIGN1cnJlbnRQbGF5ZXJJbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBjdXJyZW50Q2hpcFBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXJlbnQ6UElYSS5Db250YWluZXIpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5pdENoaXBzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdENoaXBzKCl7XHJcbiAgICB2YXIgY2hpcENvbG9yczogc3RyaW5nW10gPSBbXCJncmVlblwiLCBcInllbGxvd1wiLCBcImJsdWVcIiwgXCJyZWRcIl07XHJcbiAgICBmb3IobGV0IGk6bnVtYmVyID0gMDsgaSA8IE1vZGVsLm51bWJlcl9vZl9wbGF5ZXJzOyBpKyspe1xyXG4gICAgICB2YXIgcGxheWVyQ2hpcCA9IG5ldyBDaGlwKGNoaXBDb2xvcnNbaV0sIDI1K2kqNSwgMjUraSo1KTtcclxuICAgICAgdGhpcy5wYXJlbnQuYWRkQ2hpbGQocGxheWVyQ2hpcCk7XHJcbiAgICAgIHRoaXMuY2hpcHNBcnJheS5wdXNoKHBsYXllckNoaXApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBwdWJsaWMgbW92ZUN1cnJlbnRDaGlwKGN1cnJlbnRDaGlwOkNoaXAsIGN1cnJlbnRDZWxsUG9zaXRpb25feDpudW1iZXIsIGN1cnJlbnRDZWxsUG9zaXRpb25feTpudW1iZXIpe1xyXG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbihjdXJyZW50Q2hpcCwgY3VycmVudENlbGxQb3NpdGlvbl94LCBjdXJyZW50Q2VsbFBvc2l0aW9uX3kpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEN1cnJlbnRQbGF5ZXJQb3MoX2N1cnJlbnRDdWJlc1N1bTpudW1iZXIsIF9jdXJyZW50UGxheWVySW5kZXg6bnVtYmVyKXtcclxuICAgIE1vZGVsLnBsYXllcnNbX2N1cnJlbnRQbGF5ZXJJbmRleF0ucG9zaXRpb24gPSBNb2RlbC5wbGF5ZXJzW19jdXJyZW50UGxheWVySW5kZXhdLnBvc2l0aW9uICsgX2N1cnJlbnRDdWJlc1N1bTtcclxuICAgIGlmIChNb2RlbC5wbGF5ZXJzW19jdXJyZW50UGxheWVySW5kZXhdLnBvc2l0aW9uIDwgdGhpcy5udW1iZXJfb2ZfY2VsbHMpe1xyXG4gICAgICByZXR1cm4gTW9kZWwucGxheWVyc1tfY3VycmVudFBsYXllckluZGV4XS5wb3NpdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICBNb2RlbC5wbGF5ZXJzW19jdXJyZW50UGxheWVySW5kZXhdLnBvc2l0aW9uID0gTW9kZWwucGxheWVyc1tfY3VycmVudFBsYXllckluZGV4XS5wb3NpdGlvbiAtIHRoaXMubnVtYmVyX29mX2NlbGxzO1xyXG4gICAgcmV0dXJuIE1vZGVsLnBsYXllcnNbX2N1cnJlbnRQbGF5ZXJJbmRleF0ucG9zaXRpb247XHJcbiAgICAgIH0gXHJcbiAgfVxyXG4gIFxyXG4gIHByaXZhdGUgY2hlY2tDb2xsaXNpb24oY3VycmVudENoaXA6Q2hpcCwgY3VycmVudENlbGxQb3NpdGlvbl94Om51bWJlciwgY3VycmVudENlbGxQb3NpdGlvbl95Om51bWJlcil7XHJcbiAgICBpZiAoY3VycmVudENoaXAueCA8IDEwNjgpe1xyXG4gICAgICAoY3VycmVudENoaXAueCA8IGN1cnJlbnRDZWxsUG9zaXRpb25feCAmJiBjdXJyZW50Q2hpcC55IDwgNDApID8gY3VycmVudENoaXAueCArPSA1IDogZmFsc2U7IFxyXG4gICAgfSBcclxuICAgIGlmIChjdXJyZW50Q2hpcC54ID49IDEwNjgpe1xyXG4gICAgICAoY3VycmVudENoaXAueSA8IGN1cnJlbnRDZWxsUG9zaXRpb25feSkgPyBjdXJyZW50Q2hpcC55ICs9IDUgOiBmYWxzZTtcclxuICAgIH0gXHJcbiAgICBpZiAoY3VycmVudENoaXAueSA+IDY2NSl7XHJcbiAgICAgIChjdXJyZW50Q2hpcC54ID4gY3VycmVudENlbGxQb3NpdGlvbl94KSA/IGN1cnJlbnRDaGlwLnggLT0gNSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRDaGlwLnggPCAzMCl7XHJcbiAgICAgIChjdXJyZW50Q2hpcC55ID4gY3VycmVudENlbGxQb3NpdGlvbl95KSA/IGN1cnJlbnRDaGlwLnkgLT0gNSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEN1cnJlbnRQbGF5ZXJDaGlwKF9jdWJlc19zdW06bnVtYmVyLCBfY3VycmVudFBsYXllckluZGV4Om51bWJlcil7XHJcbiAgICB0aGlzLmN1cnJlbnRDaGlwUG9zaXRpb24gPSB0aGlzLnNldEN1cnJlbnRQbGF5ZXJQb3MoX2N1YmVzX3N1bSwgX2N1cnJlbnRQbGF5ZXJJbmRleCk7ICBcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2goJ2N1cnJlbnRfcG9zaXRpb24nLCB0aGlzLmN1cnJlbnRDaGlwUG9zaXRpb24pO1xyXG4gICAgdmFyIF90aGlzID0gdGhpczsgICAgICAgICAgICAgICAgICBcclxuICAgIHRoaXMucGFyZW50Lm9uVXBkYXRlKGZ1bmN0aW9uKCl7X3RoaXMubW92ZUN1cnJlbnRDaGlwKF90aGlzLmNoaXBzQXJyYXlbX2N1cnJlbnRQbGF5ZXJJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNlbGxzVXRpbC5nZXRDZWxsUG9zaXRpb25feChfdGhpcy5jdXJyZW50Q2hpcFBvc2l0aW9uKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNlbGxzVXRpbC5nZXRDZWxsUG9zaXRpb25feShfdGhpcy5jdXJyZW50Q2hpcFBvc2l0aW9uKSk7fSk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgfVxyXG4gIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL3NjZW5lcy9nYW1lL0NoaXBzTWFuYWdlci50cyIsImV4cG9ydCBjbGFzcyBDaGlwIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbiAgcHJpdmF0ZSBzaW1wbGVDaGlwOiBQSVhJLlNwcml0ZVxyXG5cclxuICBjb25zdHJ1Y3RvcihjaGlwQ29sb3I6c3RyaW5nLCBwb3NfeDpudW1iZXIsIHBvc195Om51bWJlcil7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zaW1wbGVDaGlwID0gbmV3IFBJWEkuU3ByaXRlKFBJWEkubG9hZGVyLnJlc291cmNlcy5TcHJpdGVTaGVldC50ZXh0dXJlc1tcImNoaXBfXCIrY2hpcENvbG9yK1wiLnBuZ1wiXSk7XHJcbiAgICB0aGlzLnNpbXBsZUNoaXAucG9zaXRpb24uc2V0KHBvc194LCBwb3NfeSk7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2ltcGxlQ2hpcCk7XHJcbiAgICAvL3RoaXMudmlzaWJsZSA9IGZhbHNlOyAvL9C10YHQu9C4INCy0LXRiNCw0YLRjCDQvdCwIHRoaXMuc2ltcGxlQ2hpcC52aXNpYmxlID0gZmFsc2U7IC0g0L/QvtGH0LXQvNGDLdGC0L4g0L3QtSDRgNCw0LHQvtGC0LDQtdGCXHJcbiAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi91aS9DaGlwLnRzIiwiaW1wb3J0IHsgQ2VsbFZPIH0gZnJvbSBcIi4vQ2VsbFZPXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2VsbHNQYXJzZXIge1xyXG4gIHB1YmxpYyBjZWxsc0NvbmZpZzogQ2VsbFZPW10gPSBbXTtcclxuIFxyXG4gIGNvbnN0cnVjdG9yKHJlc291cmNlczphbnkpIHtcclxuICAgIGNvbnN0IGNlbGxzOmFueVtdID0gcmVzb3VyY2VzLmNlbGxzO1xyXG4gICAgZm9yIChsZXQgaTpudW1iZXI9MDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0aGlzLmNlbGxzQ29uZmlnLnB1c2gobmV3IENlbGxWTyhjZWxsc1tpXS5maWVsZERlZmluaXRpb24ueCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXS5maWVsZERlZmluaXRpb24ueSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXS5pbWFnZUFsaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbHNbaV0uY2VsbFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXS5jb21wYW55TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldLmNvbXBhbnlQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxzW2ldLmNvbXBhbnlUYXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsc1tpXS50YXgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL3NjZW5lcy9nYW1lL21haW5UYWJsZS9DZWxsc1BhcnNlci50cyIsImV4cG9ydCBjbGFzcyBDZWxsVk8ge1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIF94OiBudW1iZXIsIFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF95Om51bWJlciwgXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgX2ltYWdlQWxpYXM6c3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9jZWxsVHlwZTogc3RyaW5nLCBcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfY29tcGFueU5hbWU6c3RyaW5nLCBcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfY29tcGFueVByaWNlOm51bWJlcixcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBfY29tcGFueVRheDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIF9jb21tb25UYXg6IG51bWJlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB4KCk6bnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5feDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgeSgpOm51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGltYWdlQWxpYXMoKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbWFnZUFsaWFzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjZWxsVHlwZSgpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NlbGxUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb21wYW55TmFtZSgpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBhbnlOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb21wYW55UHJpY2UoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wYW55UHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbXBhbXlUYXgoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wYW55VGF4O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0YXgoKTpudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21tb25UYXg7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL3NjZW5lcy9nYW1lL21haW5UYWJsZS9DZWxsVk8udHMiLCJpbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4vQ2VsbFZpZXcnO1xyXG5pbXBvcnQgeyBDZWxsVk99IGZyb20gJy4vQ2VsbFZPJztcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9jb3JlL01vZGVsJztcclxuaW1wb3J0IHsgR2xvYmFsRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvR2xvYmFsRGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7IENlbGxzVXRpbCB9IGZyb20gJy4vQ2VsbHNVdGlsJztcclxuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gJy4uLy4uLy4uL3NjZW5lcy9nYW1lL21haW5UYWJsZS9Db21wYW55JztcclxuaW1wb3J0IHsgUG9wdXBWTyB9IGZyb20gJy4uLy4uLy4uL3VpLy9Qb3BVcC9Qb3B1cFZPJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDZWxsc01hbmFnZXIge1xyXG4gIHB1YmxpYyBjZWxsc1ZpZXc6IENlbGxWaWV3W10gPSBbXTsgXHJcbiAgcHVibGljIGN1cnJlbnRQbGF5ZXJJbmRleDogbnVtYmVyO1xyXG4gIHB1YmxpYyBjdXJyZW50UGxheWVyUG9zaXRpb246IG51bWJlcjtcclxuICBwdWJsaWMgY2VsbHNVdGlsOiBDZWxsc1V0aWwgPSBuZXcgQ2VsbHNVdGlsKCk7XHJcbiAgcHVibGljIGN1cnJlbnRDb21wYW55TmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NlbGxzQ29uZmlnOkNlbGxWT1tdLCBwdWJsaWMgcGFyZW50OiBQSVhJLkNvbnRhaW5lcikge1xyXG4gICAgdGhpcy5pbml0Q2VsbHMoKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0Q2VsbHMoKXtcclxuICAgIGZvciAobGV0IGk6bnVtYmVyPTA7IGkgPCB0aGlzLl9jZWxsc0NvbmZpZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjZWxsVmlldyA9IG5ldyBDZWxsVmlldyh0aGlzLl9jZWxsc0NvbmZpZ1tpXSk7XHJcbiAgICAgIHRoaXMuY2VsbHNWaWV3LnB1c2goY2VsbFZpZXcpO1xyXG4gICAgICB0aGlzLnBhcmVudC5hZGRDaGlsZChjZWxsVmlldyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDb21wYW55VHlwZShjZWxsUG9zaXRpb246bnVtYmVyKXtcclxuICAgIHZhciBjZWxsVHlwZSA9IHRoaXMuY2VsbHNVdGlsLmdldENlbGxUeXBlKGNlbGxQb3NpdGlvbik7XHJcbiAgICByZXR1cm4gY2VsbFR5cGUgPT0gXCJDb21wYW55XCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDaGFuY2VUeXBlKGNlbGxQb3NpdGlvbjpudW1iZXIpe1xyXG4gICAgdmFyIGNlbGxUeXBlID0gdGhpcy5jZWxsc1V0aWwuZ2V0Q2VsbFR5cGUoY2VsbFBvc2l0aW9uKTtcclxuICAgIHJldHVybiBjZWxsVHlwZSA9PSBcIkNoYW5jZVwiO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzRm9yY2VUeXBlKGNlbGxQb3NpdGlvbjpudW1iZXIpe1xyXG4gICAgdmFyIGNlbGxUeXBlID0gdGhpcy5jZWxsc1V0aWwuZ2V0Q2VsbFR5cGUoY2VsbFBvc2l0aW9uKTtcclxuICAgIHJldHVybiBjZWxsVHlwZSA9PSBcIkZvcmNlIG1hamV1cmVcIjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1RheFR5cGUoY2VsbFBvc2l0aW9uOm51bWJlcil7XHJcbiAgICB2YXIgY2VsbFR5cGUgPSB0aGlzLmNlbGxzVXRpbC5nZXRDZWxsVHlwZShjZWxsUG9zaXRpb24pO1xyXG4gICAgcmV0dXJuIGNlbGxUeXBlID09IFwiVGF4XCI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNDb21wYW55U29sZChjZWxsUG9zaXRpb246bnVtYmVyKXtcclxuICAgIGZvcihsZXQgaTpudW1iZXIgPSAwOyBpIDwgTW9kZWwucGxheWVycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGZvcihsZXQgajpudW1iZXIgPSAwOyBqIDwgTW9kZWwucGxheWVyc1tpXS5jb21wYW5pZXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgaWYoTW9kZWwucGxheWVyc1tpXS5jb21wYW5pZXNbal0ubmFtZSA9PT0gdGhpcy5jZWxsc1V0aWwuZ2V0Q29tcGFueU5hbWUoY2VsbFBvc2l0aW9uKSl7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0N1cnJlbnRQbGF5ZXJDb21wYW55T3duZXIoY2VsbFBvc2l0aW9uOm51bWJlciwgY3VycmVudFBsYXllckluZGV4Om51bWJlcil7XHJcbiAgICBmb3IobGV0IGo6bnVtYmVyID0gMDsgaiA8IE1vZGVsLnBsYXllcnNbY3VycmVudFBsYXllckluZGV4XS5jb21wYW5pZXMubGVuZ3RoOyBqKyspe1xyXG4gICAgICBpZihNb2RlbC5wbGF5ZXJzW2N1cnJlbnRQbGF5ZXJJbmRleF0uY29tcGFuaWVzW2pdLm5hbWUgPT09IHRoaXMuY2VsbHNVdGlsLmdldENvbXBhbnlOYW1lKGNlbGxQb3NpdGlvbikpe1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50UGxheWVySW5kZXg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc01vbmV5RW5vdWdoKGNlbGxQb3NpdGlvbjpudW1iZXIsIGN1cnJlbnRQbGF5ZXJJbmRleDpudW1iZXIpe1xyXG4gICAgdmFyIGNvbXBhbnlQcmljZSA9IHRoaXMuY2VsbHNVdGlsLmdldENvbXBhbnlQcmljZShjZWxsUG9zaXRpb24pO1xyXG4gICAgdmFyIGN1cnJlbnRQbGF5ZXJNb25leSA9IE1vZGVsLnBsYXllcnNbY3VycmVudFBsYXllckluZGV4XS5tb25leVxyXG4gICAgICByZXR1cm4gY3VycmVudFBsYXllck1vbmV5ID49IGNvbXBhbnlQcmljZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrQ2VsbChjdXJlbnRQbGF5ZXJQb3NpdGlvbjpudW1iZXIsIGN1cnJlbnRQbGF5ZXJJbmRleDpudW1iZXIpe1xyXG4gICAgdmFyIGZpbHRlciA9IG5ldyBQSVhJLmZpbHRlcnMuQ29sb3JNYXRyaXhGaWx0ZXIoKTtcclxuICAgIHRoaXMuY2VsbHNWaWV3W2N1cmVudFBsYXllclBvc2l0aW9uXS5maWx0ZXJzID0gW2ZpbHRlcl07XHJcbiAgICB2YXIgbWF0cml4ID0gZmlsdGVyLm1hdHJpeDtcclxuICAgIHZhciBjb2xvckluZGV4ZXMgPSBbNCwgNSwgOSwgOC41XTtcclxuICAgIHZhciBjb3VudCA9IGNvbG9ySW5kZXhlc1tjdXJyZW50UGxheWVySW5kZXhdO1xyXG4gICAgbWF0cml4WzFdID0gTWF0aC5zaW4oY291bnQpICogMztcclxuICAgIG1hdHJpeFsyXSA9IE1hdGguY29zKGNvdW50KTtcclxuICAgIG1hdHJpeFszXSA9IE1hdGguY29zKGNvdW50KSAqIDEuNTtcclxuICAgIG1hdHJpeFs0XSA9IE1hdGguc2luKGNvdW50IC8gMykgKiAyO1xyXG4gICAgbWF0cml4WzVdID0gTWF0aC5zaW4oY291bnQgLyAyKTtcclxuICAgIG1hdHJpeFs2XSA9IE1hdGguc2luKGNvdW50IC8gNCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZlX3BsYXllcicsIChfY3VycmVudFBsYXllckluZGV4Om51bWJlcikgPT4ge3RoaXMuY3VycmVudFBsYXllckluZGV4ID0gX2N1cnJlbnRQbGF5ZXJJbmRleH0pO1xyXG4gICAgR2xvYmFsRGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjdXJyZW50X3Bvc2l0aW9uJywgKF9jdXJyZW50UGxheWVyUG9zaXRpb246bnVtYmVyKSA9PiB7dGhpcy5jdXJyZW50UGxheWVyUG9zaXRpb24gPSBfY3VycmVudFBsYXllclBvc2l0aW9ufSk7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBhbnlfbmFtZScsIChjb21wYW55TmFtZTpzdHJpbmcpID0+IHt0aGlzLmN1cnJlbnRDb21wYW55TmFtZSA9IGNvbXBhbnlOYW1lO30pO1xyXG4gICAgR2xvYmFsRGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdidXlfY29tcGFueScsICgpID0+IHt0aGlzLm9uQnV5Q29tcGFueVByZXNzZWQoKTt9KTtcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY29tcGFueV90YXgnLCAoKSA9PiB7dGhpcy5jb21wYW55VGF4KCk7fSk7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbW1vbl90YXgnLCAoKSA9PiB7dGhpcy5jb21tb25UYXgoKTt9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkJ1eUNvbXBhbnlQcmVzc2VkKCl7XHJcbiAgICB0aGlzLm1hcmtDZWxsKHRoaXMuY3VycmVudFBsYXllclBvc2l0aW9uLCB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCk7XHJcbiAgICB2YXIgbW9uZXlFbm9naCA9IHRoaXMuaXNNb25leUVub3VnaCh0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbiwgdGhpcy5jdXJyZW50UGxheWVySW5kZXgpO1xyXG4gICAgaWYobW9uZXlFbm9naCA9PSB0cnVlKXtcclxuICAgICAgY29uc3QgY29tcGFueTogQ29tcGFueSA9IG5ldyBDb21wYW55O1xyXG4gICAgICBjb21wYW55Lm5hbWUgPSB0aGlzLmN1cnJlbnRDb21wYW55TmFtZTtcclxuICAgICAgICBNb2RlbC5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XS5jb21wYW5pZXMucHVzaChjb21wYW55KTtcclxuICAgICAgICBNb2RlbC5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XS5tb25leSA9IE1vZGVsLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVySW5kZXhdLm1vbmV5IC0gdGhpcy5jZWxsc1V0aWwuZ2V0Q29tcGFueVByaWNlKHRoaXMuY3VycmVudFBsYXllclBvc2l0aW9uKTtcclxuICAgICAgICBHbG9iYWxEaXNwYXRjaGVyLmRpc3BhdGNoKCdwbGF5ZXJfbW9uZXknLCBNb2RlbC5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XS5tb25leSk7IFxyXG4gICAgICAgIEdsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2goJ2Nsb3NlX3BvcHVwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBHbG9iYWxEaXNwYXRjaGVyLmRpc3BhdGNoKCdjbG9zZV9wb3B1cCcpO1xyXG4gICAgICB2YXIgcG9wdXBEYXRhOiBQb3B1cFZPID0gbmV3IFBvcHVwVk8oKTtcclxuICAgICAgcG9wdXBEYXRhLm5hbWUgPSBcIm5vdEVub3VnaE1vbmV5UG9wVXBcIjtcclxuICAgICAgR2xvYmFsRGlzcGF0Y2hlci5kaXNwYXRjaCgnc2hvd19wb3B1cCcsIHBvcHVwRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcGFueVRheCgpe1xyXG4gICAgaWYgKHRoaXMuaXNDb21wYW55U29sZCh0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbikgPT0gdHJ1ZSAmJlxyXG4gICAgICAgIHRoaXMuaXNDdXJyZW50UGxheWVyQ29tcGFueU93bmVyKHRoaXMuY3VycmVudFBsYXllclBvc2l0aW9uLCB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCkgIT09IHRoaXMuY3VycmVudFBsYXllckluZGV4KXtcclxuICAgICAgICBpZiAoTW9kZWwucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleF0ubW9uZXkgPj0gdGhpcy5jZWxsc1V0aWwuZ2V0Q29tcGFueVRheCh0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbikpe1xyXG4gICAgICAgICAgICBNb2RlbC5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XS5tb25leSA9IE1vZGVsLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVySW5kZXhdLm1vbmV5IC0gdGhpcy5jZWxsc1V0aWwuZ2V0Q29tcGFueVRheCh0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIEdsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2goJ3BsYXllcl9tb25leScsIE1vZGVsLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVySW5kZXhdLm1vbmV5KTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwRGF0YTogUG9wdXBWTyA9IG5ldyBQb3B1cFZPKCk7XHJcbiAgICAgICAgICAgICAgICBwb3B1cERhdGEubmFtZSA9IFwibm90RW5vdWdoTW9uZXlQb3BVcFwiO1xyXG4gICAgICAgICAgICBHbG9iYWxEaXNwYXRjaGVyLmRpc3BhdGNoKCdzaG93X3BvcHVwJywgcG9wdXBEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbW1vblRheCgpe1xyXG4gICAgaWYgKHRoaXMuaXNUYXhUeXBlKHRoaXMuY3VycmVudFBsYXllclBvc2l0aW9uKSA9PSB0cnVlKXtcclxuICAgICAgaWYgKE1vZGVsLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVySW5kZXhdLm1vbmV5ID49IHRoaXMuY2VsbHNVdGlsLmdldENvbW1vblRheCh0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbikpIHtcclxuICAgICAgTW9kZWwucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleF0ubW9uZXkgPSBNb2RlbC5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XS5tb25leSAtIHRoaXMuY2VsbHNVdGlsLmdldENvbW1vblRheCh0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbilcclxuICAgICAgR2xvYmFsRGlzcGF0Y2hlci5kaXNwYXRjaCgncGxheWVyX21vbmV5JywgTW9kZWwucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleF0ubW9uZXkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHBvcHVwRGF0YTogUG9wdXBWTyA9IG5ldyBQb3B1cFZPKCk7XHJcbiAgICAgICAgICBwb3B1cERhdGEubmFtZSA9IFwibm90RW5vdWdoTW9uZXlQb3BVcFwiO1xyXG4gICAgICBHbG9iYWxEaXNwYXRjaGVyLmRpc3BhdGNoKCdzaG93X3BvcHVwJywgcG9wdXBEYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL3NjZW5lcy9nYW1lL21haW5UYWJsZS9DZWxsc01hbmFnZXIudHMiLCJpbXBvcnQgeyBDZWxsVk8gfSBmcm9tICcuL0NlbGxWTyc7XHJcblxyXG4gZXhwb3J0IGNsYXNzIENlbGxWaWV3IGV4dGVuZHMgUElYSS5TcHJpdGUge1xyXG4gIHB1YmxpYyB0ZXh0dXJlRmllbGRzOiBhbnk7XHJcbiAgcHVibGljIGdyYXBoaWM6IFBJWEkuU3ByaXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihjZWxsRGF0YTpDZWxsVk8pe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudGV4dHVyZUZpZWxkcyA9IFBJWEkubG9hZGVyLnJlc291cmNlcy5TcHJpdGVTaGVldC50ZXh0dXJlcztcclxuICAgIHRoaXMuZ3JhcGhpYyA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLnRleHR1cmVGaWVsZHNbY2VsbERhdGEuaW1hZ2VBbGlhc10pO1xyXG4gICAgdGhpcy5ncmFwaGljLnBvc2l0aW9uLnNldChjZWxsRGF0YS54LCBjZWxsRGF0YS55KTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ncmFwaGljKTtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtbG9hZGVyIS4vc2NlbmVzL2dhbWUvbWFpblRhYmxlL0NlbGxWaWV3LnRzIiwiZXhwb3J0IGNsYXNzIENvbXBhbnkge1xyXG4gIHByaXZhdGUgX25hbWU6c3RyaW5nO1xyXG4gIHByaXZhdGUgX3ByaWNlOm51bWJlcjtcclxuICBwcml2YXRlIF90YXg6bnVtYmVyO1xyXG4gIHByaXZhdGUgX2lzT3duZXI6Ym9vbGVhbjtcclxuXHJcbiAgZ2V0IG5hbWUoKTpzdHJpbmd7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBuYW1lKF9uYW1lKXtcclxuICAgIHRoaXMuX25hbWUgPSBfbmFtZTtcclxuICB9XHJcblxyXG4gIGdldCBwcmljZSgpOm51bWJlcntcclxuICAgIHJldHVybiB0aGlzLl9wcmljZTtcclxuICB9XHJcblxyXG4gIHNldCBwcmljZShfcHJpY2Upe1xyXG4gICAgdGhpcy5fcHJpY2UgPSBfcHJpY2U7XHJcbiAgfVxyXG5cclxuICBnZXQgdGF4KCk6bnVtYmVye1xyXG4gICAgcmV0dXJuIHRoaXMuX3RheDtcclxuICB9XHJcblxyXG4gIHNldCB0YXgoX3RheCl7XHJcbiAgICB0aGlzLl90YXggPSBfdGF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzT3duZXIoKTpib29sZWFue1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzT3duZXI7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNPd25lcihfaXNPd25lcil7XHJcbiAgICB0aGlzLl9pc093bmVyID0gX2lzT3duZXI7XHJcbiAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi9zY2VuZXMvZ2FtZS9tYWluVGFibGUvQ29tcGFueS50cyIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9Nb2RlbCc7XHJcbmltcG9ydCB7IFNpbXBsZUJveH0gZnJvbSAnLi4vLi4vdWkvU2ltcGxlQm94JztcclxuaW1wb3J0IHsgR2xvYmFsRGlzcGF0Y2hlcn0gZnJvbSAnLi4vLi4vY29yZS9HbG9iYWxEaXNwYXRjaGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lRmllbGRzTWFuYWdlciBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gIHB1YmxpYyBwbGF5ZXJCb3hlczogU2ltcGxlQm94W10gPSBbXTtcclxuICBwdWJsaWMgY3VycmVudFBsYXllckluZGV4Om51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXJlbnQ6UElYSS5Db250YWluZXIpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2V0UGxheWVyQm94ZXMoKTtcclxuICAgIHRoaXMuc2V0Qm94T3V0TGluZSh0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCk7XHJcbiAgICB0aGlzLnNldE5ld1BsYXllckFtb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBsYXllckJveGVzKCl7XHJcbiAgICBmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBNb2RlbC5wbGF5ZXJzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgTW9kZWwucGxheWVyc1tpXS5tb25leSA9IE1vZGVsLnN0YXJ0X2Ftb3VudDtcclxuICAgICAgdmFyIHBsYXllckJveCA9IG5ldyBTaW1wbGVCb3goMTkwLCAyMDArMTAwKmksIDMwMCwgODAsIE1vZGVsLnBsYXllcnNbaV0uY29sb3IsIFwiUGxheWVyIFwiK01vZGVsLnBsYXllcnNbaV0ubmFtZStcIlxcbiBtb25leSAtIFwiK01vZGVsLnBsYXllcnNbaV0ubW9uZXkpO1xyXG4gICAgICB0aGlzLnBhcmVudC5hZGRDaGlsZChwbGF5ZXJCb3gpO1xyXG4gICAgICB0aGlzLnBsYXllckJveGVzLnB1c2gocGxheWVyQm94KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRCb3hPdXRMaW5lKF9jdXJyZW50UGxheWVySW5kZXg6bnVtYmVyKXtcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZlX3BsYXllcicsIChfY3VycmVudFBsYXllckluZGV4Om51bWJlcikgPT4ge1xyXG4gICAgICBmb3IobGV0IGk6bnVtYmVyID0gMDsgaSA8IE1vZGVsLnBsYXllcnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHRoaXMucGxheWVyQm94ZXNbaV0ub3V0TGluZUNsZWFyKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wbGF5ZXJCb3hlc1tfY3VycmVudFBsYXllckluZGV4XS5ib3hPdXRMaW5lKCk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFBsYXllclF1ZXVlKCl7XHJcbiAgICBpZih0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA+IE1vZGVsLnBsYXllcnMubGVuZ3RoIC0gMSl7XHJcbiAgICAgIHRoaXMuY3VycmVudFBsYXllckluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIEdsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2goJ2FjdGl2ZV9wbGF5ZXInLCB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCk7XHJcbiAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCArKztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXROZXdQbGF5ZXJBbW91bnQoKXtcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcigncGxheWVyX21vbmV5JywgKGN1cnJlbnRQbGF5ZXJNb25leTpudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5wbGF5ZXJCb3hlc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCAtIDFdLmlucHV0VGV4dC50ZXh0ID0gXCJQbGF5ZXIgXCIrTW9kZWwucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCAtIDFdLm5hbWUrXCJcXG4gbW9uZXkgLSBcIitjdXJyZW50UGxheWVyTW9uZXk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL3NjZW5lcy9nYW1lL0dhbWVGaWVsZHNNYW5hZ2VyLnRzIiwiaW1wb3J0IHsgU2ltcGxlQnV0dG9uIH0gZnJvbSAnLi9TaW1wbGVCdXR0b24nO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi9jb3JlL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEN1YmVzIH0gZnJvbSAnLi4vc2NlbmVzL2dhbWUvQ3ViZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvbGxCYXIgZXh0ZW5kcyBQSVhJLlNwcml0ZXtcclxuICBwdWJsaWMgcm9sbEJ1dHRvbjogU2ltcGxlQnV0dG9uO1xyXG4gIHB1YmxpYyBjdWJlXzE6IEN1YmVzO1xyXG4gIHB1YmxpYyBjdWJlXzI6IEN1YmVzO1xyXG4gIHB1YmxpYyBjdWJlc19zdW06IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocGFyZW50OlBJWEkuQ29udGFpbmVyKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnJvbGxCdXR0b24gPSBuZXcgU2ltcGxlQnV0dG9uKENvbnN0YW50cy5QTEFZX0NVQkVTLCAncm9sbEJ0bicsIDU1MCwgMzAwKTtcclxuICAgIHBhcmVudC5hZGRDaGlsZCh0aGlzLnJvbGxCdXR0b24pO1xyXG4gICAgdGhpcy5jdWJlXzEgPSBuZXcgQ3ViZXMoNTUwLCAzNzApO1xyXG4gICAgdGhpcy5jdWJlXzIgPSBuZXcgQ3ViZXMoNjQwLCAzNzApO1xyXG4gICAgcGFyZW50LmFkZENoaWxkKHRoaXMuY3ViZV8yKTtcclxuICAgIHBhcmVudC5hZGRDaGlsZCh0aGlzLmN1YmVfMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q3ViZXNTdW0oKXtcclxuICAgIHZhciBjdWJlXzFfbnVtYmVyID0gdGhpcy5jdWJlXzEuYW5pbS5jdXJyZW50RnJhbWUgKyAxO1xyXG4gICAgdmFyIGN1YmVfMl9udW1iZXIgPSB0aGlzLmN1YmVfMi5hbmltLmN1cnJlbnRGcmFtZSArIDE7XHJcbiAgICB0aGlzLmN1YmVzX3N1bSA9IGN1YmVfMV9udW1iZXIgKyBjdWJlXzJfbnVtYmVyO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi91aS9Sb2xsQmFyLnRzIiwiZXhwb3J0IGNsYXNzIEN1YmVzIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbnB1YmxpYyBhbmltOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocG9zX3g6IG51bWJlciwgcG9zX3k6bnVtYmVyKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB2YXIgaW1hZ2VzID0gW1wiY3ViZV8xLnBuZ1wiLCBcImN1YmVfMi5wbmdcIiwgXCJjdWJlXzMucG5nXCIsIFwiY3ViZV80LnBuZ1wiLCBcImN1YmVfNS5wbmdcIiwgXCJjdWJlXzYucG5nXCJdO1xyXG4gICAgdmFyIGZyYW1lcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZnJhbWVzLnB1c2goUElYSS5UZXh0dXJlLmZyb21GcmFtZShpbWFnZXNbaV0pKTtcclxuICAgIH1cclxuICAgIHRoaXMuYW5pbSA9IG5ldyBQSVhJLmV4dHJhcy5BbmltYXRlZFNwcml0ZShmcmFtZXMpO1xyXG4gICAgdGhpcy5hbmltLnBvc2l0aW9uLnNldChwb3NfeCwgcG9zX3kpO1xyXG4gICAgdGhpcy5hbmltLmFuY2hvci5zZXQoMC4wNSk7XHJcbiAgICB0aGlzLmFuaW0uYW5pbWF0aW9uU3BlZWQgPSAwLjI7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuYW5pbSk7XHJcbiAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi9zY2VuZXMvZ2FtZS9DdWJlcy50cyIsImltcG9ydCB7IFNlbGxpbmdQb3BVcCB9IGZyb20gJy4vU2VsbGluZ1BvcFVwJztcclxuaW1wb3J0IHsgQ2hhbmNlUG9wVXAgfSBmcm9tICcuL0NoYW5jZVBvcFVwJztcclxuaW1wb3J0IHsgRm9yY2VNYWpldXJlUG9wVXAgfSBmcm9tICcuL0ZvcmNlTWFqZXVyZVBvcFVwJztcclxuaW1wb3J0IHsgTm90RW5vdWdoTW9uZXlQb3BVcCB9IGZyb20gJy4vTm90RW5vdWdoTW9uZXlQb3BVcCc7XHJcbmltcG9ydCB7IEdsb2JhbERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9jb3JlL0dsb2JhbERpc3BhdGNoZXInO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi8uLi9jb3JlL0NvbnN0YW50cyc7XHJcbmltcG9ydCB7IENlbGxWT30gZnJvbSAnLi4vLi4vc2NlbmVzL2dhbWUvbWFpblRhYmxlL0NlbGxWTyc7XHJcbmltcG9ydCB7IFBvcHVwVk8gfSBmcm9tICcuL1BvcHVwVk8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcFVwTWFuYWdlciBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gIHB1YmxpYyBzZWxsaW5nUG9wVXA6IFNlbGxpbmdQb3BVcCA9IG5ldyBTZWxsaW5nUG9wVXAoNDY1LCA0OTApOztcclxuICBwdWJsaWMgY2hhbmNlUG9wVXAgPSBuZXcgQ2hhbmNlUG9wVXAoNDY1LCA0OTApO1xyXG4gIHB1YmxpYyBmb3JjZU1hamV1cmVQb3BVcCA9IG5ldyBGb3JjZU1hamV1cmVQb3BVcCg0NjUsIDQ5MCk7XHJcbiAgcHVibGljIG5vdEVub3VnaE1vbmV5UG9wVXAgPSBuZXcgTm90RW5vdWdoTW9uZXlQb3BVcCg0NjUsIDQ5MCk7XHJcbiAgcHVibGljIGN1cnJlbnRQbGF5ZXJQb3NpdGlvbjpudW1iZXI7XHJcbiAgcHVibGljIGN1cnJlbnRDb21wYW55TmFtZTogc3RyaW5nO1xyXG4gIHB1YmxpYyBjdXJyZW50UGxheWVySW5kZXg6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIF9jZWxsc0NvbmZpZzpDZWxsVk9bXSwgcHVibGljIHBhcmVudDogUElYSS5Db250YWluZXIpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYWRkUG9wVXBMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMucGFyZW50LmFkZENoaWxkKHRoaXMuc2VsbGluZ1BvcFVwKTtcclxuICAgIHRoaXMucGFyZW50LmFkZENoaWxkKHRoaXMuY2hhbmNlUG9wVXApO1xyXG4gICAgdGhpcy5wYXJlbnQuYWRkQ2hpbGQodGhpcy5mb3JjZU1hamV1cmVQb3BVcCk7XHJcbiAgICB0aGlzLnBhcmVudC5hZGRDaGlsZCh0aGlzLm5vdEVub3VnaE1vbmV5UG9wVXApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFBvcFVwTGlzdGVuZXJzKCl7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2N1cnJlbnRfcG9zaXRpb24nLCAoX2N1cnJlbnRQb3NpdGlvbjpudW1iZXIpID0+IHt0aGlzLmN1cnJlbnRQbGF5ZXJQb3NpdGlvbiA9IF9jdXJyZW50UG9zaXRpb247fSk7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3dfcG9wdXAnLCAocG9wdXA6UG9wdXBWTykgPT4ge3RoaXMuc2hvd1BvcFVwKHBvcHVwKTt9KTtcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2VfcG9wdXAnLCAoKSA9PiB7dGhpcy5jbG9zZVBvcFVwKCk7fSk7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2ZV9wbGF5ZXInLCAoYWN0aXZlUGxheWVySW5kZXg6bnVtYmVyKSA9PiB7dGhpcy5jdXJyZW50UGxheWVySW5kZXggPSBhY3RpdmVQbGF5ZXJJbmRleDt9KTtcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihDb25zdGFudHMuVE9fQlVZX0JUTl9QUkVTU0VELCB0aGlzLm9uQnV5QnV0dG9uUHJlc3NlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkJ1eUJ1dHRvblByZXNzZWQoKXtcclxuICAgIEdsb2JhbERpc3BhdGNoZXIuZGlzcGF0Y2goJ2J1eV9jb21wYW55Jyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1BvcFVwKF9wb3B1cDpQb3B1cFZPKXtcclxuICAgIGlmKF9wb3B1cC5uYW1lID09IFwic2VsbGluZ1BvcFVwXCIpe1xyXG4gICAgICB0aGlzLnNlbGxpbmdQb3BVcC5zZXRQdXB1cEluZm8odGhpcy5fY2VsbHNDb25maWdbdGhpcy5jdXJyZW50UGxheWVyUG9zaXRpb25dKTtcclxuICAgICAgdGhpcy5zZWxsaW5nUG9wVXAudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZihfcG9wdXAubmFtZSA9PSBcImZvcmNlTWFqZXVyZVwiKXtcclxuICAgICAgdGhpcy5mb3JjZU1hamV1cmVQb3BVcC5zZXRQdXB1cEluZm8odGhpcy5fY2VsbHNDb25maWdbdGhpcy5jdXJyZW50UGxheWVyUG9zaXRpb25dKTtcclxuICAgICAgdGhpcy5mb3JjZU1hamV1cmVQb3BVcC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmKF9wb3B1cC5uYW1lID09IFwiY2hhbmNlUG9wVXBcIil7XHJcbiAgICAgIHRoaXMuY2hhbmNlUG9wVXAuc2V0UHVwdXBJbmZvKHRoaXMuX2NlbGxzQ29uZmlnW3RoaXMuY3VycmVudFBsYXllclBvc2l0aW9uXSk7XHJcbiAgICAgIHRoaXMuY2hhbmNlUG9wVXAudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZihfcG9wdXAubmFtZSA9PSBcIm5vdEVub3VnaE1vbmV5UG9wVXBcIil7XHJcbiAgICAgIHRoaXMubm90RW5vdWdoTW9uZXlQb3BVcC5zZXRQdXB1cEluZm8odGhpcy5fY2VsbHNDb25maWdbdGhpcy5jdXJyZW50UGxheWVyUG9zaXRpb25dKTtcclxuICAgICAgdGhpcy5ub3RFbm91Z2hNb25leVBvcFVwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlUG9wVXAoKXtcclxuICAgIHRoaXMuc2VsbGluZ1BvcFVwLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMuZm9yY2VNYWpldXJlUG9wVXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jaGFuY2VQb3BVcC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm5vdEVub3VnaE1vbmV5UG9wVXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvUG9wVXAvUG9wVXBNYW5hZ2VyLnRzIiwiaW1wb3J0IHsgU2ltcGxlQm94IH0gZnJvbSAnLi4vU2ltcGxlQm94JztcclxuaW1wb3J0IHsgU2ltcGxlQnV0dG9uIH0gZnJvbSAnLi4vU2ltcGxlQnV0dG9uJzsgXHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4uLy4uL2NvcmUvQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgR2xvYmFsRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2NvcmUvR2xvYmFsRGlzcGF0Y2hlcic7XHJcbmltcG9ydCB7IENlbGxWT30gZnJvbSAnLi4vLi4vc2NlbmVzL2dhbWUvbWFpblRhYmxlL0NlbGxWTyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsbGluZ1BvcFVwIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbiAgcHVibGljIGJveDogU2ltcGxlQm94O1xyXG4gIHByaXZhdGUgYnV5QnRuOiBTaW1wbGVCdXR0b247XHJcbiAgcHJpdmF0ZSBhdWN0aW9uQnRuOiBTaW1wbGVCdXR0b247XHJcbiAgcHVibGljIGNlbGxEYXRhOiBDZWxsVk87XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwb3NfeDpudW1iZXIsIHB1YmxpYyBwb3NfeTpudW1iZXIpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYm94ID0gbmV3IFNpbXBsZUJveCh0aGlzLnBvc194LCB0aGlzLnBvc195LCAzMjAsIDE1MCwgMHhGRkZGRkYsIFwiICBcIik7XHJcbiAgICB0aGlzLmJ1eUJ0biA9IG5ldyBTaW1wbGVCdXR0b24oQ29uc3RhbnRzLlRPX0JVWV9CVE5fUFJFU1NFRCwgXCJidXlCdG5cIiwgdGhpcy5wb3NfeCsxMCwgdGhpcy5wb3NfeSsxMDApO1xyXG4gICAgdGhpcy5idXlCdG4ub24oJ21vdXNlZG93bicsICgpPT57R2xvYmFsRGlzcGF0Y2hlci5kaXNwYXRjaChDb25zdGFudHMuVE9fQlVZX0JUTl9QUkVTU0VEKTt9KTtcclxuICAgIHRoaXMuYXVjdGlvbkJ0biA9IG5ldyBTaW1wbGVCdXR0b24oQ29uc3RhbnRzLlRPX0JVWV9CVE5fUFJFU1NFRCwgXCJhdWN0aW9uQnRuXCIsIHRoaXMucG9zX3grMTUwLCB0aGlzLnBvc195KzEwMCk7XHJcbiAgICB0aGlzLmJveC5hZGRDaGlsZCh0aGlzLmJ1eUJ0bik7XHJcbiAgICB0aGlzLmJveC5hZGRDaGlsZCh0aGlzLmF1Y3Rpb25CdG4pO1xyXG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJveCk7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQdXB1cEluZm8oY2VsbERhdGE6Q2VsbFZPKXtcclxuICAgIHRoaXMuYm94LmlucHV0VGV4dC50ZXh0ID0gY2VsbERhdGEuY29tcGFueU5hbWUrXCIgLSBcIitjZWxsRGF0YS5jb21wYW55UHJpY2U7XHJcbiAgICBHbG9iYWxEaXNwYXRjaGVyLmRpc3BhdGNoKCdjb21wYW55X25hbWUnLCBjZWxsRGF0YS5jb21wYW55TmFtZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvUG9wVXAvU2VsbGluZ1BvcFVwLnRzIiwiaW1wb3J0IHsgU2ltcGxlQm94IH0gZnJvbSAnLi4vU2ltcGxlQm94JztcclxuaW1wb3J0IHsgQ2VsbFZPfSBmcm9tICcuLi8uLi9zY2VuZXMvZ2FtZS9tYWluVGFibGUvQ2VsbFZPJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFuY2VQb3BVcCBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gIHB1YmxpYyBib3g6IFNpbXBsZUJveDtcclxuICBwdWJsaWMgY2VsbERhdGE6IENlbGxWTztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBvc194Om51bWJlciwgcHVibGljIHBvc195Om51bWJlcil7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5ib3ggPSBuZXcgU2ltcGxlQm94KHRoaXMucG9zX3gsIHRoaXMucG9zX3ksIDMyMCwgMTUwLCAweEZGRkZGRiwgXCIgIFwiKTtcclxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib3gpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UHVwdXBJbmZvKGNlbGxEYXRhOkNlbGxWTyl7XHJcbiAgICB0aGlzLmJveC5pbnB1dFRleHQudGV4dCA9IFwiQ2hhbmNlXCI7XHJcbiAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi91aS9Qb3BVcC9DaGFuY2VQb3BVcC50cyIsImltcG9ydCB7IFNpbXBsZUJveCB9IGZyb20gJy4uL1NpbXBsZUJveCc7XHJcbmltcG9ydCB7IENlbGxWT30gZnJvbSAnLi4vLi4vc2NlbmVzL2dhbWUvbWFpblRhYmxlL0NlbGxWTyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9yY2VNYWpldXJlUG9wVXAgZXh0ZW5kcyBQSVhJLlNwcml0ZXtcclxuICBwdWJsaWMgYm94OiBTaW1wbGVCb3g7XHJcbiAgcHVibGljIGNlbGxEYXRhOiBDZWxsVk87XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwb3NfeDpudW1iZXIsIHB1YmxpYyBwb3NfeTpudW1iZXIpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYm94ID0gbmV3IFNpbXBsZUJveCh0aGlzLnBvc194LCB0aGlzLnBvc195LCAzMjAsIDE1MCwgMHhGRkZGRkYsIFwiICBcIik7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm94KTtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFB1cHVwSW5mbyhjZWxsRGF0YTpDZWxsVk8pe1xyXG4gICAgdGhpcy5ib3guaW5wdXRUZXh0LnRleHQgPSBcIkZvcmNlTWFqZXVyZVwiO1xyXG4gIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvUG9wVXAvRm9yY2VNYWpldXJlUG9wVXAudHMiLCJpbXBvcnQgeyBTaW1wbGVCb3ggfSBmcm9tICcuLi9TaW1wbGVCb3gnO1xyXG5pbXBvcnQgeyBDZWxsVk99IGZyb20gJy4uLy4uL3NjZW5lcy9nYW1lL21haW5UYWJsZS9DZWxsVk8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5vdEVub3VnaE1vbmV5UG9wVXAgZXh0ZW5kcyBQSVhJLlNwcml0ZXtcclxuICBwdWJsaWMgYm94OiBTaW1wbGVCb3g7XHJcbiAgcHVibGljIGNlbGxEYXRhOiBDZWxsVk87XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwb3NfeDpudW1iZXIsIHB1YmxpYyBwb3NfeTpudW1iZXIpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYm94ID0gbmV3IFNpbXBsZUJveCh0aGlzLnBvc194LCB0aGlzLnBvc195LCAzMjAsIDE1MCwgMHhGRkZGRkYsIFwiICBcIik7XHJcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm94KTtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFB1cHVwSW5mbyhjZWxsRGF0YTpDZWxsVk8pe1xyXG4gICAgdGhpcy5ib3guaW5wdXRUZXh0LnRleHQgPSBcIk5vdEVub3VnaE1vbmV5XCI7XHJcbiAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1sb2FkZXIhLi91aS9Qb3BVcC9Ob3RFbm91Z2hNb25leVBvcFVwLnRzIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL01vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFydFBhcnNlciB7XHJcbiAgcHVibGljIHN0YXJ0X2Ftb3VudDogbnVtYmVyO1xyXG4gIHB1YmxpYyBzdGFydF9hbW91bnRfbWF4OiBudW1iZXI7XHJcbiAgcHVibGljIHN0YXJ0X2Ftb3VudF9taW46IG51bWJlcjtcclxuICBwdWJsaWMgc3RhcnRfYW1vdW50X3N0ZXA6IG51bWJlcjtcclxuICBwdWJsaWMgbnVtYmVyX29mX3BsYXllcnM6IG51bWJlcjtcclxuICBwdWJsaWMgbnVtYmVyX29mX3BsYXllcnNfbWF4OiBudW1iZXI7XHJcbiAgcHVibGljIG51bWJlcl9vZl9wbGF5ZXJzX21pbjogbnVtYmVyO1xyXG4gIHB1YmxpYyBudW1iZXJfb2ZfcGxheWVyc19zdGVwOiBudW1iZXI7XHJcbiAgcHVibGljIHBsYXllcl8xX25hbWU6IHN0cmluZztcclxuICBwdWJsaWMgcGxheWVyXzJfbmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhQ29uZmlnOiBhbnkpIHtcclxuICAgIE1vZGVsLnN0YXJ0X2Ftb3VudCA9IGRhdGFDb25maWcuc3RhcnRfYW1vdW50LmRlZmF1bHRfdmFsdWU7XHJcbiAgICBNb2RlbC5zdGFydF9hbW91bnRfbWF4ID0gZGF0YUNvbmZpZy5zdGFydF9hbW91bnQubWF4X3ZhbHVlO1xyXG4gICAgTW9kZWwuc3RhcnRfYW1vdW50X21pbiA9IGRhdGFDb25maWcuc3RhcnRfYW1vdW50Lm1pbl92YWx1ZTtcclxuICAgIE1vZGVsLnN0YXJ0X2Ftb3VudF9zdGVwID0gZGF0YUNvbmZpZy5zdGFydF9hbW91bnQuc3RlcDtcclxuXHJcbiAgICBNb2RlbC5udW1iZXJfb2ZfcGxheWVycyA9IGRhdGFDb25maWcubnVtYmVyX29mX3BsYXllcnMuZGVmYXVsdF92YWx1ZTtcclxuICAgIE1vZGVsLm51bWJlcl9vZl9wbGF5ZXJzX21heCA9IGRhdGFDb25maWcubnVtYmVyX29mX3BsYXllcnMubWF4X3ZhbHVlO1xyXG4gICAgTW9kZWwubnVtYmVyX29mX3BsYXllcnNfbWluID0gZGF0YUNvbmZpZy5udW1iZXJfb2ZfcGxheWVycy5taW5fdmFsdWU7XHJcbiAgICBNb2RlbC5udW1iZXJfb2ZfcGxheWVyc19zdGVwID0gZGF0YUNvbmZpZy5udW1iZXJfb2ZfcGxheWVycy5zdGVwO1xyXG5cclxuICAgIE1vZGVsLnBsYXllcl8xX25hbWUgPSBkYXRhQ29uZmlnLm5hbWVfb2ZfcGxheWVyLnBsYXllcl8xO1xyXG4gICAgTW9kZWwucGxheWVyXzJfbmFtZSA9IGRhdGFDb25maWcubmFtZV9vZl9wbGF5ZXIucGxheWVyXzI7XHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwLWxvYWRlciEuL2NvcmUvU3RhcnRQYXJzZXIudHMiXSwic291cmNlUm9vdCI6IiJ9