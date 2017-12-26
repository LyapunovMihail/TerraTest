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

module.exports = "<div class=\"container\">\n\n  <div class=\"row justify-content-center valign-middle\" *ngIf=\"view.currentView == 'authorization'\">\n    <div class=\"col-12 col-md-5\">\n      <form (ngSubmit)=\"authorize({username: username, password: password});\n      username.value = ''; password.value = ''\" #authForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"username\">Логин</label>\n          <input type=\"text\" class=\"form-control is-invalid\" [class.is-invalid]=\"username.invalid && username.touched\" id=\"username\" name=\"username\" placeholder=\"Введите логин\" ngModel #username=\"ngModel\" required>\n          <div class=\"invalid-feedback\" *ngIf=\"username.invalid && username.touched\">\n            Пожалуйста, введите логин.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Пароль</label>\n          <input type=\"password\" class=\"form-control is-invalid\" [class.is-invalid]=\"password.invalid && password.touched\" id=\"password\" name=\"password\" placeholder=\"Введите пароль\" ngModel #password=\"ngModel\" required>\n          <div class=\"invalid-feedback\" *ngIf=\"password.invalid && password.touched\">\n            Пожалуйста, введите пароль.\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"authForm.invalid\">Войти</button>\n        <div class=\"alert alert-danger margin-top-30\" role=\"alert\" *ngIf=\"authorization.error\">\n          Ошибка {{authorization.error.status}}. Ошибка авторизации\n        </div>\n      </form>\n    </div>\n  </div>    \n\n  <div class=\"row justify-content-center valign-middle\" *ngIf=\"view.currentView == 'gettingPrivateValue'\">\n    <div class=\"col-12 col-sm-8 col-md-6 col-lg-5\" >\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"getPrivateValue({access_token: authorization.response.access_token})\">Получить приватное значение</button>\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"backToView('authorization')\">Назад</button>\n      <div class=\"alert alert-danger margin-top-30\" role=\"alert\" *ngIf=\"gettingPrivateValue.error\">\n          Ошибка {{gettingPrivateValue.error.status}}\n      </div>\n    </div>\n    <div class=\"col-lg-8 margin-top-30\">\n      <h1 *ngIf=\"gettingPrivateValue.response\">{{gettingPrivateValue.response}}</h1>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
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
            error: null
        };
        this.gettingPrivateValue = {
            response: null,
            error: null
        };
        this.view = {
            currentView: "authorization"
        };
    }
    AppComponent.prototype.authorize = function (authData) {
        var self = this;
        this.appService
            .authorize(authData)
            .done(function (response) {
            self.authorization.response = response;
            self.view.currentView = 'gettingPrivateValue';
        })
            .fail(function (error) {
            console.log("Request failed: " + JSON.stringify(error));
            self.authorization.error = error;
        });
    };
    AppComponent.prototype.getPrivateValue = function (data) {
        var self = this;
        this.appService
            .getPrivateValue(data)
            .done(function (response) {
            self.gettingPrivateValue.response = response;
        })
            .fail(function (error) {
            console.log("Request failed: " + JSON.stringify(error));
            self.gettingPrivateValue.error = error;
        });
    };
    AppComponent.prototype.backToView = function (view) {
        this.view.currentView = view;
        this.authorization.response = null;
        this.authorization.error = null;
        this.gettingPrivateValue.response = null;
        this.gettingPrivateValue.error = null;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
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
    function AppService() {
    }
    AppService.prototype.authorize = function (authData) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://ta-test.ipname.xyz/api/token",
            "method": "POST",
            "headers": {
                "authorization": "Basic dGVzdDp0ZXN0",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
                "grant_type": "password",
                "username": "" + authData.username,
                "password": "" + authData.password
            }
        };
        return $.ajax(settings);
    };
    AppService.prototype.getPrivateValue = function (data) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://ta-test.ipname.xyz/api/secret",
            "method": "GET",
            "headers": {
                "authorization": "Bearer " + data.access_token
            }
        };
        return $.ajax(settings);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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