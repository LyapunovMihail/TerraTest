webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".valign-middle {\r\n  padding-top: 15%;\r\n  padding-bottom: 15%;\r\n}\r\n\r\n.margin-top-30 {\r\n\tmargin-top: 30px;\r\n}\r\n\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row justify-content-center valign-middle\" *ngIf=\"view.currentView == 'authorization'\">\n    <div class=\"col-12 col-md-5\">\n      <form (ngSubmit)=\"processingAuthData({username: username.value, password: password.value});\n      username.value = ''; password.value = ''\" #authForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"username\">Логин</label>\n          <input type=\"text\" class=\"form-control is-invalid\" [class.is-invalid]=\"username.invalid && username.touched\" id=\"username\" name=\"username\" placeholder=\"Введите логин\" ngModel #username=\"ngModel\" required>\n          <div class=\"invalid-feedback\" *ngIf=\"username.invalid && username.touched\">\n            Пожалуйста, введите логин.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Пароль</label>\n          <input type=\"password\" class=\"form-control is-invalid\" [class.is-invalid]=\"password.invalid && password.touched\" id=\"password\" name=\"password\" placeholder=\"Введите пароль\" ngModel #password=\"ngModel\" required>\n          <div class=\"invalid-feedback\" *ngIf=\"password.invalid && password.touched\">\n            Пожалуйста, введите пароль.\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"authForm.invalid\">Войти</button>\n        <div class=\"alert alert-danger margin-top-30\" role=\"alert\" *ngIf=\"authorization.error.statusText\">\n          Ошибка авторизации. Неверный логин или пароль.\n        </div>\n      </form>\n    </div>\n  </div>    \n\n  <div class=\"row justify-content-center valign-middle\" *ngIf=\"view.currentView == 'receivingPrivateValue'\">\n    <div class=\"col-lg-2 col-md-2 col-sm-2\"></div>\n    <div class=\"col-sm-8 col-md-6 col-lg-5\">\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"getPrivateValue({access_token: authorization.response.access_token})\">Получить приватное значение</button>\n      <div class=\"alert alert-danger margin-top-30\" role=\"alert\" *ngIf=\"receivingPrivateValue.error.statusText\">\n          Ошибка {{receivingPrivateValue.error.status}}\n      </div>\n    </div>\n    <div class=\"col-lg-8 margin-top-30\">\n      <h1 *ngIf=\"receivingPrivateValue.response\">{{receivingPrivateValue.response}}</h1>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utf8__ = __webpack_require__("../../../../utf8/utf8.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utf8___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_utf8__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_base_64__ = __webpack_require__("../../../../base-64/base64.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_base_64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_base_64__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.authorization = {
            response: null,
            error: {}
        };
        this.receivingPrivateValue = {
            response: null,
            error: {}
        };
        this.view = {
            currentView: "authorization"
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var authData = this.getStoredAuthData();
        if (authData)
            this.authorize(authData);
    };
    AppComponent.prototype.authorize = function (authData) {
        var _this = this;
        this.appService
            .authorize(authData)
            .subscribe(function (response) {
            if (!_this.getStoredAuthData())
                _this.storeAuthData(authData);
            _this.authorization.response = response;
            _this.view.currentView = 'receivingPrivateValue';
            setInterval(function () {
                _this.appService.refreshAuthorize(_this.authorization.response)
                    .subscribe(function (newResponse) {
                    _this.authorization.response = newResponse;
                }, function (error) {
                    console.log("Request failed: " + JSON.stringify(error));
                    _this.authorization.error = error;
                });
            }, _this.authorization.response.expires_in * 1000);
        }, function (error) {
            console.log("Request failed: " + JSON.stringify(error));
            _this.authorization.error = error;
        });
    };
    AppComponent.prototype.getPrivateValue = function (data) {
        var _this = this;
        this.appService
            .getPrivateValue(data)
            .subscribe(function (response) {
            _this.receivingPrivateValue.response = response;
        }, function (error) {
            console.log("Request failed: " + JSON.stringify(error));
            _this.receivingPrivateValue.error = error;
        });
    };
    AppComponent.prototype.processingAuthData = function (authData) {
        authData = this.encodeAuthData(authData);
        this.authorize(authData);
    };
    AppComponent.prototype.encodeAuthData = function (authData) {
        var authDataString = authData.username + ":" + authData.password;
        var bytes = __WEBPACK_IMPORTED_MODULE_2_utf8__["encode"](authDataString);
        var base64authData = __WEBPACK_IMPORTED_MODULE_3_base_64__["encode"](bytes);
        return base64authData;
    };
    AppComponent.prototype.storeAuthData = function (authData) {
        Cookies.set("authData", authData);
    };
    AppComponent.prototype.getStoredAuthData = function () {
        var authData = Cookies.get("authData");
        return authData;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.authorize = function (authData) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            "Authorization": "Basic " + authData,
            "Content-type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*"
        });
        var body = "grant_type=password";
        return this.http.post("https://ta-test.ipname.xyz/api/token", body, { headers: myHeaders });
    };
    AppService.prototype.refreshAuthorize = function (data) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            "Authorization": "Bearer " + data.refresh_token,
            "Content-type": "application/x-www-form-urlencoded"
        });
        var body = "grant_type=refresh_token";
        return this.http.post("https://ta-test.ipname.xyz/api/token", body, { headers: myHeaders });
    };
    AppService.prototype.getPrivateValue = function (data) {
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Authorization': "Bearer " + data.access_token });
        return this.http.get('https://ta-test.ipname.xyz/api/secret', { headers: myHeaders });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map