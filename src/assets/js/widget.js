(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">-->\n  <!--<h1>-->\n    <!--Welcome to {{ title }}!-->\n  <!--</h1>-->\n<!--</div>-->\n<twins-coin-list-widget coin-ids=\"win-win\" currency=\"usd\" locale=\"en\" width=\"{{_width}}\" height=\"300\" width=\"0\" ></twins-coin-list-widget>\n<!--<div class=\"header\">-->\n  <!--<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">-->\n    <!--<a class=\"navbar-brand\" href=\"#\">-->\n      <!--<img class=\"logo\" src=\"/assets/images/logo.svg\" alt=\"\">-->\n    <!--</a>-->\n    <!--<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">-->\n      <!--<span class=\"navbar-toggler-icon\"></span>-->\n    <!--</button>-->\n\n    <!--<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">-->\n      <!--<ul class=\"navbar-nav mr-auto\">-->\n        <!--<li class=\"nav-item active\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">-->\n          <!--<a class=\"nav-link\" routerLink=\"/\">Home</a>-->\n        <!--</li>-->\n        <!--<li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">-->\n          <!--<a class=\"nav-link\" routerLink=\"/coin-list-widget\">Coin List Widget</a>-->\n        <!--</li>-->\n      <!--</ul>-->\n    <!--</div>-->\n  <!--</nav>-->\n<!--</div>-->\n<!--<router-outlet></router-outlet>-->\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TWINS';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_coin_list_widget_coin_list_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/coin-list-widget/coin-list-widget.component */ "./src/app/components/coin-list-widget/coin-list-widget.component.ts");
/* harmony import */ var _pipes_search_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/search/search.pipe */ "./src/app/pipes/search/search.pipe.ts");
/* harmony import */ var _widgets_twins_coin_list_widget_twins_coin_list_widget_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/twins-coin-list-widget/twins-coin-list-widget.component */ "./src/app/widgets/twins-coin-list-widget/twins-coin-list-widget.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_coin_list_widget_coin_list_widget_component__WEBPACK_IMPORTED_MODULE_8__["CoinListWidgetComponent"],
                _pipes_search_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"],
                _widgets_twins_coin_list_widget_twins_coin_list_widget_component__WEBPACK_IMPORTED_MODULE_10__["TwinsCoinListWidgetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_coin_list_widget_coin_list_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/coin-list-widget/coin-list-widget.component */ "./src/app/components/coin-list-widget/coin-list-widget.component.ts");
/**
 * Created by ori on 4/27/2017.
 */


var appRoutes = [
    // { path: '', component: CoinListWidgetComponent },
    { path: 'coin-list-widget', component: _components_coin_list_widget_coin_list_widget_component__WEBPACK_IMPORTED_MODULE_1__["CoinListWidgetComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/coin-list-widget/coin-list-widget.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/coin-list-widget/coin-list-widget.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"coin-list-widget.component.ts\"></script>\r\n<div class=\"container\">\r\n  <h4 class=\"header-title\" id=\"coin-list-widget\">Coin List Widget</h4>\r\n  <div class=\"row\" data-controller=\"widget\" data-widget-name=\"coingecko-coin-list-widget\">\r\n    <div class=\"col-12 col-md-6 order-2 order-md-1\">\r\n      <form>\r\n        <!--<div class=\"form-group\">-->\r\n          <!--<label for=\"CoinId1\">Coin ID</label>-->\r\n          <!--<input type=\"email\" class=\"form-control\" id=\"CoinId1\" aria-describedby=\"emailHelp\" placeholder=\"Search Coin\">-->\r\n          <!--<small id=\"emailHelp\" class=\"form-text text-muted\">Coins in the list are displayed in this order. To delete an item, click on tag and hit \"Delete\".</small>-->\r\n        <!--</div>-->\r\n        <div class=\"form-group\">\r\n          <div class=\"select-collapse-wrapper\">\r\n            <label>Coin ID</label>\r\n            <div class=\"form-control fake-select fake-select-multiple\" [attr.data-toggle]=\"!(_coinIdOptions | search: _coinIdSearch | search: _coinIdSelected).length ? '' : 'collapse'\"  href=\"#CoinIdList\" (click)=\"inputFocus('CoinId')\" aria-expanded=\"false\">\r\n              <div class=\"fake-select-box\" *ngFor=\"let coin of _coinIdSelected\">{{coin.value}} <i class=\"fa fa-close\" (click)=\"onRemoveCoinId(coin)\"></i></div>\r\n            </div>\r\n            <div class=\"collapse collapse-force-open\" id=\"CoinIdList\">\r\n              <input type=\"text\" class=\"form-control search\" name=\"coinIdSearch\" id=\"CoinId\" placeholder=\"Select Coins\" [(ngModel)]=\"_coinIdSearch\">\r\n              <div class=\"auto-complete-list\">\r\n                <div class=\"auto-complete-option collapse-force-open\" *ngFor=\"let option of _coinIdOptions | search: _coinIdSearch | search: _coinIdSelected\" (click)=\"onSelectCoinId(option);inputFocus('CoinId')\">{{option.value}}</div>\r\n              </div>\r\n              <!--<mat-autocomplete #coinIdAuto=\"matAutocomplete\" class=\"force-block\" (optionSelected)=\"onSelectCoinId($event.option.value);checkOption($event)\">-->\r\n                <!--<mat-option class=\"force-block\" *ngFor=\"let option of _coinIdOptions | search: _coinIdSearch | search: _coinIdSelected\" [value]=\"option\">-->\r\n                  <!--{{option.value}}-->\r\n                <!--</mat-option>-->\r\n              <!--</mat-autocomplete>-->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"select-collapse-wrapper\">\r\n            <label>Currency Code</label>\r\n            <div class=\"form-control fake-select\" data-toggle=\"collapse\" href=\"#CurrencyCodeList\" (click)=\"inputFocus('CurrencyCode')\" aria-expanded=\"false\">\r\n              {{_currencyCodeSelected}}\r\n            </div>\r\n            <div class=\"collapse\" id=\"CurrencyCodeList\">\r\n              <input type=\"text\" class=\"form-control search\" name=\"currencyCodeSearch\" id=\"CurrencyCode\" placeholder=\"Select Currency Code\" [(ngModel)]=\"_currencyCodeSearch\" [matAutocomplete]=\"currencyCodeAuto\">\r\n              <!--<div class=\"auto-complete-list\">-->\r\n                <!--<div class=\"auto-complete-option\" *ngFor=\"let option of _currencyCodeOptions| search: _currencyCodeSearch\">{{option}}</div>-->\r\n              <!--</div>-->\r\n              <mat-autocomplete #currencyCodeAuto=\"matAutocomplete\" (optionSelected)=\"onSelectCurrencyCode($event.option.value); closeCollapse()\">\r\n                <mat-option *ngFor=\"let option of _currencyCodeOptions| search: _currencyCodeSearch\" [value]=\"option\">\r\n                  {{option}}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"Width\">Width</label>\r\n          <input type=\"number\" class=\"form-control\" id=\"Width\" name=\"width\" [(ngModel)]=\"_width\" placeholder=\"Width\">\r\n          <small class=\"form-text text-muted\">Enter widget width, e.g. 400. Width of 0 or omitted makes the widget take the full width of its container (responsive). Minimum width is 300, regardless of input.</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"select-collapse-wrapper\">\r\n            <label>Language</label>\r\n            <div class=\"form-control fake-select\" data-toggle=\"collapse\" href=\"#languageList\" (click)=\"inputFocus('Language')\" aria-expanded=\"false\">\r\n              {{_languageSelected.value}}\r\n            </div>\r\n            <div class=\"collapse\" id=\"languageList\">\r\n              <input type=\"text\" class=\"form-control search\" name=\"languageList\" id=\"Language\" placeholder=\"Select Language\" [(ngModel)]=\"_languageSearch\" [matAutocomplete]=\"languageAuto\">\r\n              <mat-autocomplete #languageAuto=\"matAutocomplete\" (optionSelected)=\"onSelectLanguage($event.option.value); closeCollapse()\">\r\n                <mat-option *ngFor=\"let option of _languageOptions| search: _languageSearch\" [value]=\"option\">\r\n                  {{option.value}}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-12 col-md-6 order-1 order-md-2 mb-3\" data-controller=\"widget-loader\" data-widget-loader-widget-name=\"coingecko-coin-list-widget\">\r\n      <twins-coin-list-widget coin-ids=\"{{getCoinIdesForWidget()}}\" currency=\"{{_currencyCodeSelected}}\" locale=\"{{_languageSelected.key}}\" width=\"{{_width}}\" height=\"300\" width=\"0\" ></twins-coin-list-widget>\r\n      <textarea class=\"form-control text-sm mt-2\" rows=\"7\" onclick=\"this.focus();this.select()\" readonly=\"readonly\" data-target=\"widget.code\">&lt;script src=\"https://widgets.coingecko.com/coingecko-coin-list-widget.js\"&gt;&lt;/script&gt;\r\n  &lt;coingecko-coin-list-widget  coin-ids=\"{{getCoinIdesForWidget()}}\" currency=\"{{_currencyCodeSelected}}\" locale=\"{{_languageSelected.key}}\" width=\"{{_width}}\" &gt;&lt;/coingecko-coin-list-widget&gt;</textarea>\r\n      <div class=\"mt-1 p-1\">Copy and paste this into where you want the widget to be. You can load as many widgets of this type as you like, but only load the script ONCE.</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/coin-list-widget/coin-list-widget.component.less":
/*!*****************************************************************************!*\
  !*** ./src/app/components/coin-list-widget/coin-list-widget.component.less ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select:focus,\ninput:focus {\n  border-color: #ced4da;\n  box-shadow: none;\n  outline: none;\n}\n.select-collapse-wrapper {\n  position: relative;\n}\n.select-collapse-wrapper .fake-select[aria-expanded=\"false\"] {\n  position: relative;\n}\n.select-collapse-wrapper .fake-select[aria-expanded=\"false\"]:after {\n  content: \"\";\n  height: 0;\n  width: 0;\n  border-style: solid;\n  border-color: #333 transparent transparent transparent;\n  border-width: 5px;\n  position: absolute;\n  right: 11.5px;\n  top: 50%;\n  margin-top: -2.5px;\n  pointer-events: none;\n}\n.select-collapse-wrapper .fake-select[aria-expanded=\"true\"] {\n  position: relative;\n}\n.select-collapse-wrapper .fake-select[aria-expanded=\"true\"]:after {\n  content: \"\";\n  height: 0;\n  width: 0;\n  border-style: solid;\n  border-color: transparent transparent #333 transparent;\n  border-width: 5px;\n  position: absolute;\n  right: 11.5px;\n  top: 38%;\n  margin-top: -2.5px;\n  pointer-events: none;\n}\n.select-collapse-wrapper .fake-select {\n  cursor: pointer;\n}\n.select-collapse-wrapper .fake-select .fake-select-box {\n  border: solid 1px green;\n  padding: 0.2% 0.5%;\n  display: inline-block;\n  margin: 0.5%;\n}\n.select-collapse-wrapper input.search {\n  border-radius: 0;\n}\n.select-collapse-wrapper .fake-select-multiple {\n  padding: 0;\n  height: auto;\n  min-height: calc(1.5em + 0.75rem + 2px);\n  padding-right: 5%;\n}\n.select-collapse-wrapper .collapse,\n.select-collapse-wrapper .collapsing {\n  position: absolute;\n  left: 0;\n  right: 0;\n  transition-duration: 0s;\n  z-index: 1;\n}\n.select-collapse-wrapper .collapse.hide {\n  display: none;\n}\n.auto-complete-list {\n  min-width: 112px;\n  max-width: 280px;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  max-width: none;\n  max-height: 256px;\n  position: relative;\n  width: 100%;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  z-index: 1;\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.auto-complete-list .auto-complete-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: 0;\n  display: flex;\n  flex-direction: row;\n  max-width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  -webkit-tap-highlight-color: transparent;\n}\n.auto-complete-list .auto-complete-option:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n"

/***/ }),

/***/ "./src/app/components/coin-list-widget/coin-list-widget.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/coin-list-widget/coin-list-widget.component.ts ***!
  \***************************************************************************/
/*! exports provided: CoinListWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinListWidgetComponent", function() { return CoinListWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoinListWidgetComponent = /** @class */ (function () {
    function CoinListWidgetComponent(http) {
        this._http = http;
        this._currencyCodeOptions = [];
        this._languageOptions = [
            { key: 'en', value: 'English' },
            { key: 'es', value: 'Español' },
            { key: 'de', value: 'Deutsch' },
            { key: 'nl', value: 'Nederlands' },
            { key: 'pt', value: 'Português' },
            { key: 'fr', value: 'Français' },
            { key: 'it', value: 'Italiano' },
            { key: 'hu', value: 'Magyar nyelv' },
            { key: 'ro', value: 'Limba română' },
            { key: 'sv', value: 'Svenska' },
            { key: 'pl', value: 'język polski' },
            { key: 'id', value: 'Bahasa Indonesia' },
            { key: 'zh', value: '简体中文' },
            { key: 'zh-tw', value: '繁體中文' },
            { key: 'ja', value: '日本語' },
            { key: 'ko', value: '한국어' },
            { key: 'ru', value: 'ру́сский' },
            { key: 'ar', value: 'العربية' },
            { key: 'th', value: 'ภาษาไทย' },
            { key: 'vi', value: 'Tiếng việt' },
            { key: 'tr', value: 'Türkçe' },
        ];
        this._coinIdOptions = [];
        this._currencyCodeSearch = '';
        this._currencyCodeSelected = 'USD';
        this._languageSearch = '';
        this._languageSelected = this._languageOptions[0];
        this._coinIdSearch = '';
        this._coinIdSelected = [
            // {key: "bitcoin", value: "Bitcoin (bitcoin)"},
            // {key: "ethereum", value: "Ethereum (ethereum)"},
            // {key: "eos", value: "EOS (eos)"},
            // {key: "ripple", value: "XRP (ripple)"},
            // {key: "litecoin", value: "Litecoin (litecoin)"},
            { key: "win-win", value: "win.win (win-win)" }
        ];
        this._width = 0;
    }
    CoinListWidgetComponent.prototype.ngOnInit = function () {
        // this.getData();
        this.getCoinList();
    };
    CoinListWidgetComponent.prototype.onSelectCurrencyCode = function (value) {
        var _this = this;
        this._currencyCodeSelected = value;
        setTimeout(function () {
            _this._currencyCodeSearch = '';
        });
    };
    CoinListWidgetComponent.prototype.onSelectLanguage = function (value) {
        var _this = this;
        this._languageSelected = value;
        setTimeout(function () {
            _this._languageSearch = '';
        });
    };
    CoinListWidgetComponent.prototype.onSelectCoinId = function (value) {
        var _this = this;
        this._coinIdSelected.push(value);
        // console.log("this._coinIdSelected",this._coinIdSelected)
        setTimeout(function () {
            _this._coinIdSearch = '';
        });
    };
    CoinListWidgetComponent.prototype.getCoinIdesForWidget = function () {
        return this._coinIdSelected.map(function (item) { return item.key; }).join(',');
    };
    CoinListWidgetComponent.prototype.onRemoveCoinId = function (value) {
        var index = this._coinIdSelected.indexOf(value);
        this._coinIdSelected.splice(index, 1);
    };
    CoinListWidgetComponent.prototype.inputFocus = function (inputId) {
        setTimeout(function () {
            $('#' + inputId).focus();
        }, 25);
    };
    CoinListWidgetComponent.prototype.inputBlur = function (inputId) {
        setTimeout(function () {
            $('#' + inputId).blur();
        });
    };
    CoinListWidgetComponent.prototype.closeCollapse = function () {
        // setTimeout(() => {
        $('.collapse').removeClass('show');
        // });
    };
    CoinListWidgetComponent.prototype.getData = function () {
        this._http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=&locale=").subscribe(function (data) {
            // this._data = data;
            // this._currencyCodeOptions = this._data.map(item => item.symbol.toUpperCase());
            // this._coinIdOptions = this._data.map(item => JSON.parse('{"key": "' + item.id + '", "value": "' + item.name + ' (' + item.id + ')' + '"}'));
            // console.log("data", this._data);
            // console.log("_coinIdOptions", this._coinIdOptions);
        });
    };
    CoinListWidgetComponent.prototype.getCoinList = function () {
        var _this = this;
        this._http.get("https://api.coingecko.com/api/v3/coins/list").subscribe(function (data) {
            console.log("data", data);
            _this._currencyCodeOptions = data.map(function (item) { return item.symbol.toUpperCase(); });
            _this._coinIdOptions = data.map(function (item) { return JSON.parse('{"key": "' + item.id + '", "value": "' + item.name + ' (' + item.id + ')' + '"}'); });
        });
        // https://api.coingecko.com/api/v3/coins/list
    };
    CoinListWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coin-list-widget',
            template: __webpack_require__(/*! ./coin-list-widget.component.html */ "./src/app/components/coin-list-widget/coin-list-widget.component.html"),
            styles: [__webpack_require__(/*! ./coin-list-widget.component.less */ "./src/app/components/coin-list-widget/coin-list-widget.component.less")],
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CoinListWidgetComponent);
    return CoinListWidgetComponent;
}());



/***/ }),

/***/ "./src/app/pipes/search/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/search/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, arg) {
        // console.log(typeof arg)
        // console.log(items)
        if (typeof arg === 'string') {
            return items.filter(function (item) { return (typeof item === 'string' ? item.toLowerCase().indexOf(arg.toLowerCase()) !== -1 : item.value.toLowerCase().indexOf(arg.toLowerCase()) !== -1); });
        }
        if (typeof arg === 'object') {
            return items.filter(function (item) { return JSON.stringify(arg).indexOf(typeof item === 'string' ? item.toLowerCase() : item.key.toLowerCase()) === -1; });
            // return items.filter(item => !arg.includes(item));
        }
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search',
            pure: false
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/widgets/twins-coin-list-widget/twins-coin-list-widget.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/widgets/twins-coin-list-widget/twins-coin-list-widget.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cg-container large\" style=\"width: 100%; background-color: rgb(255, 255, 255); color: rgb(76, 76, 76);\" [ngStyle]=\"width > 0 && {'width': width + 'px'}\">\n  <div class=\"cg-p-3 cg-base\" *ngIf=\"!coinIds.length || !_showCoins.length\">Loading widget...</div>\n  <div class=\"cg-widget cg-flex-column\" *ngIf=\"coinIds.length && _showCoins.length\">\n    <a *ngFor=\"let coin of _showCoins\" [href]=\"'https://www.coingecko.com/resource_redirect?locale=' + locale.toLowerCase() + '&amp;route=coins/' + coin.id + '&amp;utm_source=www.coingecko.com&amp;utm_medium=coin_list_widget&amp;utm_content=bitcoin'\" target=\"_blank\" class=\"cg-p-3 cg-flex cg-justify-between cg-coin-row cg-even-row\" style=\"color: rgb(76, 76, 76);\">\n      <div class=\"cg-flex cg-items-center\">\n        <img src=\"{{coin.image}}\" class=\"cg-mr-2\" />\n        <div class=\"cg-sm-hide\"></div>\n        <div class=\"cg-sm-hide\">\n          <span class=\"cg-bold\">{{coin.name}}</span> ({{coin.symbol.toUpperCase()}})\n        </div>\n        <div class=\"cg-lg-hide\">\n          <span class=\"cg-bold\">{{coin.symbol.toUpperCase()}}</span>\n        </div>\n      </div>\n      <div class=\"cg-flex cg-justify-end cg-items-center cg-red-color-dark\">\n        <div>\n          <span class=\"cg-bold cg-px-1\">\n              ${{fixCurrentPrice(coin.current_price)}}\n            </span>\n          <span>({{coin.price_change_percentage_24h.toFixed(2)}}%)</span>\n        </div>\n        <div class=\"cg-ml-2 cg-sm-hide cg-arrow-down\"></div>\n      </div>\n    </a>\n    <div class=\"cg-flex cg-justify-between cg-items-center cg-footer cg-px-2 cg-py-1\">\n      <select name=\"currency\" [(ngModel)]=\"currency\" (ngModelChange)=\"getData()\">\n        <option value=\"btc\">BTC</option>\n        <option value=\"eth\">ETH</option>\n        <option value=\"usd\">USD</option>\n        <option value=\"aed\">AED</option>\n        <option value=\"ars\">ARS</option>\n        <option value=\"aud\">AUD</option>\n        <option value=\"brl\">BRL</option>\n        <option value=\"cad\">CAD</option>\n        <option value=\"chf\">CHF</option>\n        <option value=\"clp\">CLP</option>\n        <option value=\"cny\">CNY</option>\n        <option value=\"czk\">CZK</option>\n        <option value=\"dkk\">DKK</option>\n        <option value=\"eur\">EUR</option>\n        <option value=\"gbp\">GBP</option>\n        <option value=\"hkd\">HKD</option>\n        <option value=\"huf\">HUF</option>\n        <option value=\"idr\">IDR</option>\n        <option value=\"ils\">ILS</option>\n        <option value=\"inr\">INR</option>\n        <option value=\"jpy\">JPY</option>\n        <option value=\"krw\">KRW</option>\n        <option value=\"kwd\">KWD</option>\n        <option value=\"lkr\">LKR</option>\n        <option value=\"mxn\">MXN</option>\n        <option value=\"myr\">MYR</option>\n        <option value=\"nok\">NOK</option>\n        <option value=\"nzd\">NZD</option>\n        <option value=\"php\">PHP</option>\n        <option value=\"pkr\">PKR</option>\n        <option value=\"pln\">PLN</option>\n        <option value=\"rub\">RUB</option>\n        <option value=\"sar\">SAR</option>\n        <option value=\"sek\">SEK</option>\n        <option value=\"sgd\">SGD</option>\n        <option value=\"thb\">THB</option>\n        <option value=\"try\">TRY</option>\n        <option value=\"twd\">TWD</option>\n        <option value=\"zar\">ZAR</option>\n      </select>\n      <!--<select name=\"currency\" [(ngModel)]=\"currency\">-->\n        <!--<option *ngFor=\"let option of _currencyOptions\" [value]=\"option.toUpperCase()\">{{option.toUpperCase()}}</option>-->\n      <!--</select>-->\n      <div class=\"cg-bold\">{{getPowerBy()}} <a class=\"cg-primary-color-dark cg-no-underline\" [href]=\"'https://www.coingecko.com/' + locale.toLowerCase() + '?utm_source=www.coingecko.com&amp;utm_medium=coin_list_widget&amp;utm_content=bitcoin'\" target=\"_blank\">CoinGecko</a></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widgets/twins-coin-list-widget/twins-coin-list-widget.component.less":
/*!**************************************************************************************!*\
  !*** ./src/app/widgets/twins-coin-list-widget/twins-coin-list-widget.component.less ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cg-default {\n  font-family: -apple-system, BlinkMacSystemFont, segoe ui, Helvetica, Arial, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol;\n}\n.cg-bold {\n  font-weight: 600;\n}\n.cg-center {\n  text-align: center;\n}\n.cg-primary-color {\n  color: #8dc647 !important;\n}\n.cg-primary-color-dark {\n  color: #4b8800 !important;\n}\n.cg-red-color-dark {\n  color: #c2220d !important;\n}\n.cg-red-color {\n  color: #ff614d !important;\n}\n.cg-2xs {\n  font-size: 8.8px;\n  /* 0.55rem; */\n}\n.cg-xs {\n  font-size: 10.4px;\n  /* 0.65rem */\n}\n.cg-sm {\n  font-size: 12.8px;\n  /* 0.8rem */\n}\n.cg-normal {\n  font-size: 13.6px;\n  /* 0.85rem */\n}\n.cg-base {\n  font-size: 16px;\n  /* 16px */\n}\n.cg-medium {\n  font-size: 19.2px;\n  /* 1.2rem */\n}\n.cg-lg {\n  font-size: 24px;\n  /* 1.5rem */\n}\n.cg-xl {\n  font-size: 30.4px;\n  /* 1.9rem */\n}\n.cg-cap {\n  text-transform: capitalize;\n}\n.cg-no-underline {\n  text-decoration: none;\n}\n.cg-nowrap {\n  white-space: nowrap;\n}\n.cg-m-0 {\n  margin: 0;\n}\n.cg-m-1 {\n  margin: 4px;\n}\n.cg-m-2 {\n  margin: 8px;\n}\n.cg-mt-1 {\n  margin-top: 4px;\n}\n.cg-mb-1 {\n  margin-bottom: 4px;\n}\n.cg-ml-1 {\n  margin-left: 4px;\n}\n.cg-mr-1 {\n  margin-right: 4px;\n}\n.cg-mt-2 {\n  margin-top: 8px;\n}\n.cg-ml-2 {\n  margin-left: 8px;\n}\n.cg-mr-2 {\n  margin-right: 8px;\n}\n.cg-mb-2 {\n  margin-bottom: 8px;\n}\n.cg-mx-1 {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.cg-my-1 {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n.cg-mx-2 {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.cg-my-2 {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.cg-p-1 {\n  padding: 4px;\n}\n.cg-p-2 {\n  padding: 8px;\n}\n.cg-p-3 {\n  padding: 12px;\n}\n.cg-p-4 {\n  padding: 16px;\n}\n.cg-pt-1 {\n  padding-top: 4px;\n}\n.cg-pb-1 {\n  padding-bottom: 4px;\n}\n.cg-pt-2 {\n  padding-top: 8px;\n}\n.cg-pb-2 {\n  padding-bottom: 8px;\n}\n.cg-pt-3 {\n  padding-top: 12px;\n}\n.cg-pb-3 {\n  padding-bottom: 12px;\n}\n.cg-py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.cg-px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.cg-py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.cg-px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.cg-py-3 {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.cg-px-3 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.cg-px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.cg-py-4 {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.cg-py-5 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.cg-pr-1 {\n  padding-right: 4px;\n}\n.cg-flex {\n  display: flex !important;\n}\n.cg-flex-row {\n  flex-direction: row;\n}\n.cg-flex-column {\n  flex-direction: column;\n}\n.cg-items-stretch {\n  align-items: flex-stretch;\n}\n.cg-items-start {\n  align-items: flex-start;\n}\n.cg-items-center {\n  align-items: center;\n}\n.cg-items-end {\n  align-items: flex-end;\n}\n.cg-items-baseline {\n  align-items: baseline;\n}\n.cg-justify-start {\n  justify-content: flex-start;\n}\n.cg-justify-center {\n  justify-content: center;\n}\n.cg-justify-end {\n  justify-content: flex-end;\n}\n.cg-justify-between {\n  justify-content: space-between;\n}\n.cg-justify-around {\n  justify-content: space-around;\n}\n.cg-self-auto {\n  -ms-grid-row-align: auto;\n      align-self: auto;\n}\n.cg-self-start {\n  align-self: flex-start;\n}\n.cg-self-center {\n  -ms-grid-row-align: center;\n      align-self: center;\n}\n.cg-self-end {\n  align-self: flex-end;\n}\n.cg-self-stretch {\n  -ms-grid-row-align: stretch;\n      align-self: stretch;\n}\n.cg-relative {\n  position: relative;\n}\n.cg-absolute {\n  position: absolute;\n}\n.cg-block {\n  display: block;\n}\n.cg-container {\n  font-family: sans-serif;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  line-height: 1.25;\n  font-size: 12px;\n  min-width: 250px;\n  box-sizing: border-box;\n}\n.cg-container[data-loading] .cg-widget {\n  display: none;\n}\n.cg-coin-row {\n  border-bottom: 1px solid #f0f0f0;\n}\n.large .cg-coin-row {\n  font-size: 14.75px;\n}\n.small .cg-coin-row {\n  font-size: 13.75px;\n}\n.cg-coin-row:hover {\n  background-color: rgba(250, 250, 250, 0.3);\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.cg-even-row {\n  background-color: rgba(252, 255, 248, 0.6);\n}\n.cg-arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #4b8800;\n}\n.cg-arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #a11b0a;\n}\n.cg-footer {\n  background-color: #8dc647;\n}\n.cg-widget select {\n  background-color: white;\n  border-color: #8dc647;\n}\n.cg-widget a {\n  text-decoration: none;\n}\n.large .cg-coin-row img {\n  width: 28px;\n}\n.small .cg-coin-row img {\n  width: 20px;\n}\n.large .cg-lg-hide {\n  display: none;\n}\n.small .cg-sm-hide {\n  display: none;\n}\n"

/***/ }),

/***/ "./src/app/widgets/twins-coin-list-widget/twins-coin-list-widget.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/widgets/twins-coin-list-widget/twins-coin-list-widget.component.ts ***!
  \************************************************************************************/
/*! exports provided: TwinsCoinListWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwinsCoinListWidgetComponent", function() { return TwinsCoinListWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwinsCoinListWidgetComponent = /** @class */ (function () {
    function TwinsCoinListWidgetComponent(http) {
        this._showCoins = [];
        this._http = http;
        this._powerd_by = [
            { key: 'en', value: 'Powered by' },
            { key: 'es', value: 'Con tecnología de' },
            { key: 'de', value: 'Präsentiert von' },
            { key: 'nl', value: 'Powered by' },
            { key: 'pt', value: 'Fornecido por' },
            { key: 'fr', value: 'Fourni par' },
            { key: 'it', value: 'Offerto da' },
            { key: 'hu', value: 'Powered by' },
            { key: 'ro', value: 'Powered by' },
            { key: 'sv', value: 'Powered by' },
            { key: 'pl', value: 'Treść dostarczona przez' },
            { key: 'id', value: 'Didukung oleh' },
            { key: 'zh', value: 'Powered by' },
            { key: 'zh-tw', value: 'Powered by' },
            { key: 'ja', value: 'Powered by' },
            { key: 'ko', value: 'Powered by' },
            { key: 'ru', value: 'От' },
            { key: 'ar', value: 'برعاية ' },
            { key: 'th', value: 'ขับเคลื่อนด้วย' },
            { key: 'vi', value: 'Được hỗ trợ bởi' },
            { key: 'tr', value: 'tarafından desteklenmektedir' },
        ];
    }
    TwinsCoinListWidgetComponent.prototype.updateApiUrl = function () {
        this.currency = this.currency.toLowerCase();
        this._apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=' + this.currency + '&ids=' + this.coinIds + '&locale=' + this.locale;
    };
    TwinsCoinListWidgetComponent.prototype.ngOnInit = function () {
        if (parseInt(this.width) > 0 && parseInt(this.width) < 300) {
            this.width = (300).toString();
        }
    };
    TwinsCoinListWidgetComponent.prototype.ngOnChanges = function (changes) {
        this.getData();
    };
    TwinsCoinListWidgetComponent.prototype.getData = function () {
        var _this = this;
        if (this.coinIds.length) {
            this.updateApiUrl();
            this._http.get(this._apiUrl).subscribe(function (data) {
                // this._data = data;
                _this._currencyOptions = data.map(function (item) { return item.symbol; });
                var coinIdsArray = _this.coinIds.split(',');
                _this._showCoins = data.filter(function (item) { return coinIdsArray.includes(item.id); });
                // console.log("data", this._data);
                // console.log("coinIdsArray", coinIdsArray);
                // console.log("_showCoins", this._data.filter(item => coinIdsArray.includes(item.id)));
            });
        }
    };
    TwinsCoinListWidgetComponent.prototype.getPowerBy = function () {
        var powerByArray = this._powerd_by.map(function (item) { return item.key; });
        var key = powerByArray.indexOf(this.locale.toLowerCase());
        return this._powerd_by[key].value;
    };
    TwinsCoinListWidgetComponent.prototype.fixCurrentPrice = function (price) {
        var numberOfZeros = price.toString().split('0').length;
        var decimalAfterDotNumber = 2 + parseInt(numberOfZeros);
        return price.toPrecision(6);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('coin-ids'),
        __metadata("design:type", String)
    ], TwinsCoinListWidgetComponent.prototype, "coinIds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TwinsCoinListWidgetComponent.prototype, "currency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TwinsCoinListWidgetComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TwinsCoinListWidgetComponent.prototype, "width", void 0);
    TwinsCoinListWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'twins-coin-list-widget',
            template: __webpack_require__(/*! ./twins-coin-list-widget.component.html */ "./src/app/widgets/twins-coin-list-widget/twins-coin-list-widget.component.html"),
            styles: [__webpack_require__(/*! ./twins-coin-list-widget.component.less */ "./src/app/widgets/twins-coin-list-widget/twins-coin-list-widget.component.less")],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TwinsCoinListWidgetComponent);
    return TwinsCoinListWidgetComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev2016\TWINSWalletApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map