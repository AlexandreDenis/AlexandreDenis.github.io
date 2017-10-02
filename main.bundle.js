webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 id=\"app-title\">{{title}}</h1>\n  \n  <router-outlet></router-outlet>\n\n  <toast></toast>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Sezam Labs Chat';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentification_login_login_component__ = __webpack_require__("../../../../../src/app/authentification/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentification_signin_signin_component__ = __webpack_require__("../../../../../src/app/authentification/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast_toast_component__ = __webpack_require__("../../../../../src/app/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dataaccess_cache_service__ = __webpack_require__("../../../../../src/app/dataaccess/cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentification_auth_service__ = __webpack_require__("../../../../../src/app/authentification/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toast_toast_service__ = __webpack_require__("../../../../../src/app/toast/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routing_app_routing_module__ = __webpack_require__("../../../../../src/app/routing/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__authentification_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__authentification_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_6__toast_toast_component__["a" /* ToastComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__dataaccess_cache_service__["a" /* CacheService */],
            __WEBPACK_IMPORTED_MODULE_8__authentification_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9__toast_toast_service__["a" /* ToastService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentification/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__ = __webpack_require__("../../../../../src/app/dataaccess/cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(cache) {
        this.cache = cache;
    }
    ;
    AuthService.prototype.isUserAlreadyExisting = function (username) {
        return this.cache.isUserAlreadyExisting(username);
    };
    ;
    AuthService.prototype.createUser = function (userInfo) {
        return this.cache.createUser(userInfo);
    };
    ;
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__["a" /* CacheService */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentification/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onLoginButtonClicked()\">\r\n        <div class=\"form-group\">\r\n            <label for=\"usernameInput\">Username</label>\r\n            <input type=\"text\" id=\"usernameInput\" name=\"username\" class=\"form-control\" placeholder=\"Enter username\" formControlName=\"usernameInput\">\r\n            <div *ngIf=\"usernameInput.invalid && (usernameInput.dirty || usernameInput.touched)\">\r\n                <div *ngIf=\"usernameInput.errors.required\" class=\"alert alert-danger\">Username is required</div>\r\n                <div *ngIf=\"usernameInput.errors.maxlength\" class=\"alert alert-danger\">Username length must be inferior or equal to 16 characters</div>\r\n                <div *ngIf=\"usernameInput.errors.pattern\" class=\"alert alert-danger\">Username must only contain letters or numbers</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"passwordInput\">Password</label>\r\n            <input type=\"password\" id=\"passwordInput\" name=\"password\" class=\"form-control\" placeholder=\"Enter password\" formControlName=\"passwordInput\">\r\n            <div *ngIf=\"passwordInput.invalid && (passwordInput.dirty || passwordInput.touched)\">\r\n                <div *ngIf=\"passwordInput.errors.required\" class=\"alert alert-danger\">Password is required</div>\r\n                <div *ngIf=\"passwordInput.errors.maxlength\" class=\"alert alert-danger\">Password length must be inferior or equal to 64 characters</div>\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formGroup.valid\">Log in</button>\r\n        <a routerLink=\"/signin\">No account yet? Sign in !</a>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentification/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dataaccess_cache_service__ = __webpack_require__("../../../../../src/app/dataaccess/cache.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(cache) {
        this.cache = cache;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'usernameInput': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(16),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(new RegExp("^[a-zA-Z0-9]+$"))
            ]),
            'passwordInput': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(64)
            ])
        });
    };
    ;
    Object.defineProperty(LoginComponent.prototype, "usernameInput", {
        // getters
        get: function () { return this.formGroup.get('usernameInput'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "passwordInput", {
        get: function () { return this.formGroup.get('passwordInput'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onLoginButtonClicked = function () {
        // TODO
        console.log("Authentication requested");
        console.log("username", this.usernameInput.value);
        console.log("password", this.passwordInput.value);
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/authentification/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__dataaccess_cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dataaccess_cache_service__["a" /* CacheService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentification/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSigninButtonClicked()\">\r\n        <div class=\"form-group\">\r\n                <label for=\"firstNameInput\">First name*</label>\r\n                <input type=\"text\" id=\"firstNameInput\" name=\"firstName\" class=\"form-control\" placeholder=\"Enter first name\" formControlName=\"firstNameInput\" required>\r\n                <div *ngIf=\"firstNameInput.invalid && (firstNameInput.dirty || firstNameInput.touched)\">\r\n                    <div *ngIf=\"firstNameInput.errors.required\" class=\"alert alert-danger\">First name is required</div>\r\n                    <div *ngIf=\"firstNameInput.errors.maxlength\" class=\"alert alert-danger\">First name length must be inferior or equal to 32 characters</div>\r\n                    <div *ngIf=\"firstNameInput.errors.pattern\" class=\"alert alert-danger\">First name must only contain letters</div>\r\n                </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n                <label for=\"lastNameInput\">Last name*</label>\r\n                <input type=\"text\" id=\"lastNameInput\" name=\"lastName\" class=\"form-control\" placeholder=\"Enter last name\" formControlName=\"lastNameInput\" required>\r\n                <div *ngIf=\"lastNameInput.invalid && (lastNameInput.dirty || lastNameInput.touched)\">\r\n                    <div *ngIf=\"lastNameInput.errors.required\" class=\"alert alert-danger\">Last name is required</div>\r\n                    <div *ngIf=\"lastNameInput.errors.maxlength\" class=\"alert alert-danger\">Last name length must be inferior or equal to 32 characters</div>\r\n                    <div *ngIf=\"lastNameInput.errors.pattern\" class=\"alert alert-danger\">Last name must only contain letters</div>\r\n                </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"usernameInput\">Username*</label>\r\n            <input type=\"text\" id=\"usernameInput\" name=\"username\" class=\"form-control\" placeholder=\"Enter username\" formControlName=\"usernameInput\" required>\r\n            <div *ngIf=\"usernameInput.invalid && (usernameInput.dirty || usernameInput.touched)\">\r\n                <div *ngIf=\"usernameInput.errors.required\" class=\"alert alert-danger\">Username is required</div>\r\n                <div *ngIf=\"usernameInput.errors.maxlength\" class=\"alert alert-danger\">Username length must be inferior or equal to 16 characters</div>\r\n                <div *ngIf=\"usernameInput.errors.pattern\" class=\"alert alert-danger\">Username must only contain letters or numbers</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"passwordInput\">Password*</label>\r\n            <input type=\"password\" id=\"passwordInput\" name=\"password\" class=\"form-control\" placeholder=\"Enter password\" formControlName=\"passwordInput\" required>\r\n            <div *ngIf=\"passwordInput.invalid && (passwordInput.dirty || passwordInput.touched)\">\r\n                <div *ngIf=\"passwordInput.errors.required\" class=\"alert alert-danger\">Password is required</div>\r\n                <div *ngIf=\"passwordInput.errors.maxlength\" class=\"alert alert-danger\">Password length must be inferior or equal to 64 characters</div>\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formGroup.valid\">Sign in</button>\r\n        <a routerLink=\"/login\">Already an account? Log in !</a>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentification/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/authentification/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_service__ = __webpack_require__("../../../../../src/app/toast/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enum__ = __webpack_require__("../../../../../src/app/enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninComponent = (function () {
    function SigninComponent(router, authService, toastService) {
        this.router = router;
        this.authService = authService;
        this.toastService = toastService;
    }
    ;
    SigninComponent.prototype.ngOnInit = function () {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'firstNameInput': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(32),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(new RegExp("^[a-zA-Z]+$"))
            ]),
            'lastNameInput': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(32),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(new RegExp("^[a-zA-Z]+$"))
            ]),
            'usernameInput': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(16),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(new RegExp("^[a-zA-Z0-9]+$"))
            ]),
            'passwordInput': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(64)
            ])
        });
    };
    ;
    Object.defineProperty(SigninComponent.prototype, "firstNameInput", {
        // getters
        get: function () { return this.formGroup.get('firstNameInput'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninComponent.prototype, "lastNameInput", {
        get: function () { return this.formGroup.get('lastNameInput'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninComponent.prototype, "usernameInput", {
        get: function () { return this.formGroup.get('usernameInput'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninComponent.prototype, "passwordInput", {
        get: function () { return this.formGroup.get('passwordInput'); },
        enumerable: true,
        configurable: true
    });
    SigninComponent.prototype.onSigninButtonClicked = function () {
        // generate the User instance from the form values
        var userInfo = {
            id: -1,
            firstName: this.firstNameInput.value,
            lastName: this.lastNameInput.value,
            username: this.usernameInput.value,
            password: this.passwordInput.value
        };
        // check if user not already exists
        if (!this.authService.isUserAlreadyExisting(userInfo.username)) {
            // delegate the creation of a user to the AuthService
            if (this.authService.createUser(userInfo)) {
                // display a success toast
                this.toastService.requestToastDisplay("Registration succeeded", __WEBPACK_IMPORTED_MODULE_5__enum__["a" /* ToastType */].INFO);
                this.router.navigate(['/login']);
            }
            else {
                // display an error toast
                this.toastService.requestToastDisplay("Registration failed", __WEBPACK_IMPORTED_MODULE_5__enum__["a" /* ToastType */].ERROR);
            }
        }
        else {
            // display an error toast
            this.toastService.requestToastDisplay("Registration failed: '" + userInfo.username + "' user already exists", __WEBPACK_IMPORTED_MODULE_5__enum__["a" /* ToastType */].ERROR);
        }
    };
    ;
    return SigninComponent;
}());
SigninComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'signin',
        template: __webpack_require__("../../../../../src/app/authentification/signin/signin.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__toast_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__toast_toast_service__["a" /* ToastService */]) === "function" && _c || Object])
], SigninComponent);

var _a, _b, _c;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/dataaccess/cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var prefixKey = "angular2-chat-app/";
var STORAGE_KEYS = {
    HAS_STORAGE: prefixKey + "HAS_STORAGE",
    WLOCK: prefixKey + "WLOCK",
    USERS: prefixKey + "USERS",
    NEXT_USER_ID: prefixKey + "NEXT_USER_ID"
};
var CacheService = (function () {
    function CacheService() {
        // Clear the local storage for debug
        //window.localStorage.clear();
        this.storage = window.localStorage;
        this.users = [];
        // init local storage if there isn't already one
        var hasStorage = this.storage.getItem(STORAGE_KEYS.HAS_STORAGE);
        if (hasStorage !== 'true') {
            console.log("Creation of storage keys...");
            this.storage.setItem(STORAGE_KEYS.HAS_STORAGE, "true");
            this.storage.setItem(STORAGE_KEYS.WLOCK, "false");
            this.storage.setItem(STORAGE_KEYS.USERS, JSON.stringify([]));
            this.storage.setItem(STORAGE_KEYS.NEXT_USER_ID, "0");
        }
        // recovering of the storage
        this.users = JSON.parse(this.storage.getItem(STORAGE_KEYS.USERS));
        var usernames = this.users.map(function (user) { return user.username; });
        console.log("Registered users:", usernames);
    }
    ;
    CacheService.prototype.getUsers = function () {
        return this.users;
    };
    ;
    CacheService.prototype.isUserAlreadyExisting = function (username) {
        var res = false;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var currUser = _a[_i];
            if (currUser.username === username) {
                res = true;
                break;
            }
        }
        return res;
    };
    ;
    CacheService.prototype.createUser = function (userInfo) {
        var res = false;
        var nextId = this.storage.getItem(STORAGE_KEYS.NEXT_USER_ID);
        userInfo.id = +nextId;
        var isAlreadyLocked = (this.storage.getItem(STORAGE_KEYS.WLOCK) === 'true');
        if (!isAlreadyLocked) {
            // lock the write on the cache to avoid sync error
            this.storage.setItem(STORAGE_KEYS.WLOCK, 'true');
            this.users.push(userInfo);
            this.storage.setItem(STORAGE_KEYS.USERS, JSON.stringify(this.users));
            // unlock the write on the cache
            this.storage.setItem(STORAGE_KEYS.WLOCK, 'false');
            res = true;
        }
        else {
            console.error("Couldn't create user because of cache lock");
        }
        return res;
    };
    return CacheService;
}());
CacheService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CacheService);

//# sourceMappingURL=cache.service.js.map

/***/ }),

/***/ "../../../../../src/app/enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastType; });
var ToastType;
(function (ToastType) {
    ToastType[ToastType["INFO"] = 0] = "INFO";
    ToastType[ToastType["ERROR"] = 1] = "ERROR";
})(ToastType || (ToastType = {}));
//# sourceMappingURL=enum.js.map

/***/ }),

/***/ "../../../../../src/app/routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentification_login_login_component__ = __webpack_require__("../../../../../src/app/authentification/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentification_signin_signin_component__ = __webpack_require__("../../../../../src/app/authentification/signin/signin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__authentification_login_login_component__["a" /* LoginComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_3__authentification_signin_signin_component__["a" /* SigninComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/toast/toast.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* source: https://www.w3schools.com/howto/howto_js_snackbar.asp */\r\n\r\n#snackbar {\r\n    visibility: hidden; /* Hidden by default. Visible on click */\r\n    min-width: 250px; /* Set a default minimum width */\r\n    background-color: #333; /* Black background color */\r\n    color: #fff; /* White text color */\r\n    text-align: center; /* Centered text */\r\n    border-radius: 2px; /* Rounded borders */\r\n    padding: 16px; /* Padding */\r\n    position: fixed; /* Sit on top of the screen */\r\n    z-index: 1; /* Add a z-index if needed */\r\n    bottom: 1px;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,0%);\r\n            transform: translate(-50%,0%);\r\n}\r\n\r\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\r\n#snackbar.show {\r\n    visibility: visible; /* Show the snackbar */\r\n\r\n/* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n#snackbar.error {\r\n    background-color: #F8D7DA;\r\n    color: #921217;\r\n}\r\n\r\n#snackbar.info {\r\n    background-color: #D1ECF1;\r\n    color: #0C75AB;\r\n}\r\n\r\n/* Animations to fade the snackbar in and out */\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 1px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 1px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 1px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 1px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toast/toast.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"snackbar\" \r\n    [class.show]=\"showToast === true\"\r\n    [class.info]=\"isInfoMessage()\"\r\n    [class.error]=\"isErrorMessage()\">\r\n    {{info.message}}\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/toast/toast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ToastInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_service__ = __webpack_require__("../../../../../src/app/toast/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enum__ = __webpack_require__("../../../../../src/app/enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastInfo = (function () {
    function ToastInfo() {
    }
    return ToastInfo;
}());

var ToastComponent = (function () {
    function ToastComponent(toastService) {
        var _this = this;
        this.toastService = toastService;
        this.showToast = false;
        this.info = {
            message: '',
            type: __WEBPACK_IMPORTED_MODULE_2__enum__["a" /* ToastType */].INFO
        };
        toastService.displayMessageRequested.subscribe(function (value) { return _this.showMessage(value); });
    }
    ToastComponent.prototype.showMessage = function (value) {
        var _this = this;
        this.info = value;
        this.showToast = true;
        setTimeout(function () { return _this.showToast = false; }, 3000);
    };
    ;
    ToastComponent.prototype.isInfoMessage = function () {
        return (this.info.type === __WEBPACK_IMPORTED_MODULE_2__enum__["a" /* ToastType */].INFO);
    };
    ;
    ToastComponent.prototype.isErrorMessage = function () {
        return (this.info.type === __WEBPACK_IMPORTED_MODULE_2__enum__["a" /* ToastType */].ERROR);
    };
    ;
    return ToastComponent;
}());
ToastComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'toast',
        template: __webpack_require__("../../../../../src/app/toast/toast.component.html"),
        styles: [__webpack_require__("../../../../../src/app/toast/toast.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__toast_service__["a" /* ToastService */]) === "function" && _a || Object])
], ToastComponent);

var _a;
//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "../../../../../src/app/toast/toast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ToastService = (function () {
    function ToastService() {
        this.displayMessageRequested = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ToastService.prototype.requestToastDisplay = function (msg, type) {
        var info = {
            message: msg,
            type: type
        };
        this.displayMessageRequested.next(info);
    };
    ;
    return ToastService;
}());
ToastService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ToastService);

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map