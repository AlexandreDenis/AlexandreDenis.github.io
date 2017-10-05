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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_main_main_component__ = __webpack_require__("../../../../../src/app/chat/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_messagebox_messagebox_component__ = __webpack_require__("../../../../../src/app/chat/messagebox/messagebox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dataaccess_cache_service__ = __webpack_require__("../../../../../src/app/dataaccess/cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentification_auth_service__ = __webpack_require__("../../../../../src/app/authentification/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toast_toast_service__ = __webpack_require__("../../../../../src/app/toast/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentification_encryption_service__ = __webpack_require__("../../../../../src/app/authentification/encryption.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chat_messenger_service__ = __webpack_require__("../../../../../src/app/chat/messenger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routing_app_routing_module__ = __webpack_require__("../../../../../src/app/routing/app-routing.module.ts");
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
            __WEBPACK_IMPORTED_MODULE_6__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_7__chat_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_messagebox_messagebox_component__["a" /* MessageBoxComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__dataaccess_cache_service__["a" /* CacheService */],
            __WEBPACK_IMPORTED_MODULE_10__authentification_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_12__authentification_encryption_service__["a" /* EncryptionService */],
            __WEBPACK_IMPORTED_MODULE_13__chat_messenger_service__["a" /* Messenger */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__encryption_service__ = __webpack_require__("../../../../../src/app/authentification/encryption.service.ts");
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
    function AuthService(cache, encryption) {
        this.cache = cache;
        this.encryption = encryption;
        this.isLoggedIn = false;
        this.idUser = -1;
    }
    ;
    AuthService.prototype.isUserAlreadyExisting = function (username) {
        return this.cache.isUserAlreadyExisting(username);
    };
    ;
    AuthService.prototype.createUser = function (userInfo) {
        // encrypt the password
        userInfo.password = this.encryption.encrypt(userInfo.password);
        // ask cache saving
        return this.cache.createUser(userInfo);
    };
    ;
    AuthService.prototype.tryLogin = function (username, password) {
        this.isLoggedIn = false;
        this.idUser = -1;
        var user = this.cache.getUserFromName(username);
        if (user != undefined) {
            var encryptedPwd = this.encryption.encrypt(password);
            if (user.password == encryptedPwd) {
                this.isLoggedIn = true;
                this.idUser = user.id;
            }
        }
        return this.isLoggedIn;
    };
    ;
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.idUser = -1;
    };
    ;
    AuthService.prototype.getCurrentUserId = function () {
        return this.idUser;
    };
    ;
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__["a" /* CacheService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__encryption_service__["a" /* EncryptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__encryption_service__["a" /* EncryptionService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentification/encryption.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncryptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js__ = __webpack_require__("../../../../crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EncryptionService = (function () {
    function EncryptionService() {
    }
    EncryptionService.prototype.encrypt = function (word) {
        var hash = Object(__WEBPACK_IMPORTED_MODULE_1_crypto_js__["SHA256"])(word);
        return hash.toString(__WEBPACK_IMPORTED_MODULE_1_crypto_js__["enc"].Base64);
    };
    ;
    return EncryptionService;
}());
EncryptionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], EncryptionService);

//# sourceMappingURL=encryption.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataaccess_cache_service__ = __webpack_require__("../../../../../src/app/dataaccess/cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/authentification/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_toast_service__ = __webpack_require__("../../../../../src/app/toast/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enum__ = __webpack_require__("../../../../../src/app/enum.ts");
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
    function LoginComponent(cache, authService, toastService, router) {
        this.cache = cache;
        this.authService = authService;
        this.toastService = toastService;
        this.router = router;
    }
    ;
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
        console.log("Authentication requested");
        var username = this.usernameInput.value, password = this.passwordInput.value;
        // try to login
        if (this.authService.tryLogin(username, password)) {
            // display a success toast
            this.toastService.requestToastDisplay("Connexion succeeded", __WEBPACK_IMPORTED_MODULE_6__enum__["a" /* ToastType */].INFO);
            // open the chat
            this.router.navigate(['/main']);
        }
        else {
            // display an error toast
            this.toastService.requestToastDisplay("Connexion failed: bad login/password", __WEBPACK_IMPORTED_MODULE_6__enum__["a" /* ToastType */].ERROR);
        }
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/authentification/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__dataaccess_cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dataaccess_cache_service__["a" /* CacheService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__toast_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__toast_toast_service__["a" /* ToastService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
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

/***/ "../../../../../src/app/chat/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#info-user {\r\n    color: darkgrey;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<p id=\"info-user\">Logged as: {{getCurrentUsername()}}</p>\r\n\r\n<!-- Messages box -->\r\n<message-box></message-box>\r\n\r\n<!-- Send form -->\r\n<form [formGroup]=\"formGroup\" (ngSubmit)=\"onSendButtonClicked()\" id=\"send-form\">\r\n    <div class=\"input-group\">\r\n        <span class=\"input-group-btn\">\r\n            <button class=\"btn\" type=\"button\" (click)=\"onLogoutButtonClicked()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></button>\r\n        </span>\r\n        <input type=\"text\"  id=\"messageInput\" name=\"message\" class=\"form-control\" placeholder=\"Enter your message...\" aria-label=\"Enter your message...\" maxlength=\"{{maxSize}}\" formControlName=\"messageInput\">\r\n        <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!formGroup.valid\">Send</button>\r\n        </span>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/chat/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messenger_service__ = __webpack_require__("../../../../../src/app/chat/messenger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_service__ = __webpack_require__("../../../../../src/app/toast/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentification_auth_service__ = __webpack_require__("../../../../../src/app/authentification/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dataaccess_cache_service__ = __webpack_require__("../../../../../src/app/dataaccess/cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__enum__ = __webpack_require__("../../../../../src/app/enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainComponent = (function () {
    function MainComponent(messenger, toastService, authService, router, cache) {
        this.messenger = messenger;
        this.toastService = toastService;
        this.authService = authService;
        this.router = router;
        this.cache = cache;
        this.maxSize = 128; // max size for messages
    }
    ;
    MainComponent.prototype.ngOnInit = function () {
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'messageInput': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(this.maxSize)
            ])
        });
    };
    ;
    Object.defineProperty(MainComponent.prototype, "messageInput", {
        // getters
        get: function () { return this.formGroup.get('messageInput'); },
        enumerable: true,
        configurable: true
    });
    MainComponent.prototype.onSendButtonClicked = function () {
        var message = this.messageInput.value;
        if (this.messenger.Send(message)) {
            // empty the message field
            this.messageInput.setValue("");
        }
        else {
            // display an error toast
            this.toastService.requestToastDisplay("Unable to send the message", __WEBPACK_IMPORTED_MODULE_7__enum__["a" /* ToastType */].ERROR);
        }
    };
    ;
    MainComponent.prototype.onLogoutButtonClicked = function () {
        this.authService.logout();
        this.router.navigate(["/login"]);
    };
    ;
    MainComponent.prototype.getCurrentUsername = function () {
        var username = "";
        var user = this.cache.getUser(this.authService.getCurrentUserId());
        if (user != undefined) {
            username = user.username;
        }
        return username;
    };
    ;
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'main',
        template: __webpack_require__("../../../../../src/app/chat/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__messenger_service__["a" /* Messenger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__messenger_service__["a" /* Messenger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__toast_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__toast_toast_service__["a" /* ToastService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__authentification_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__authentification_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__dataaccess_cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__dataaccess_cache_service__["a" /* CacheService */]) === "function" && _e || Object])
], MainComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/messagebox/messagebox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".message {\r\n    text-align: left;\r\n}\r\n\r\n.message .message-block > p {\r\n    display: inline-block;\r\n    background-color: #4080FF;\r\n    border-radius: 0.25rem;\r\n    padding: 5px 10px;\r\n    color: white;\r\n}\r\n\r\n.message.own-message {\r\n     text-align: right;\r\n}\r\n\r\n.message.own-message .message-block > p {\r\n    background-color: #F1F0F0;\r\n    color: #4B4F56;\r\n}\r\n\r\n.meta-part {\r\n    color: darkgrey;\r\n}\r\n\r\n.message .message-block > p.text-part:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.message .message-block > p.text-part {\r\n    margin-bottom: 0rem;\r\n}\r\n\r\n.message .message-block {\r\n    margin-bottom: 1rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/messagebox/messagebox.component.html":
/***/ (function(module, exports) {

module.exports = "<div #messagebox id=\"message-box\">\r\n    <div *ngFor=\"let msg of messages;\" class=\"message\" [class.own-message]=\"fromCurrentUser(msg.idUser)\">\r\n        <div class=\"meta-part author-part small\" *ngIf=\"!fromCurrentUser(msg.idUser)\">{{ getUsername(msg.idUser) }}</div>\r\n        <div class=\"message-block\">\r\n            <p class=\"text-part noselect\" (click)=\"switchShowDate(msg)\">{{ msg.text }}</p>\r\n            <div class=\"meta-part date-part small\" *ngIf=\"msg.showDate\">{{ displayDateFromTimestamp(msg.timestamp) }}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat/messagebox/messagebox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__ = __webpack_require__("../../../../../src/app/dataaccess/cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentification_auth_service__ = __webpack_require__("../../../../../src/app/authentification/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib__ = __webpack_require__("../../../../../src/app/lib.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageBoxComponent = (function () {
    function MessageBoxComponent(cache, authService) {
        this.cache = cache;
        this.authService = authService;
        this.messages = [];
    }
    ;
    MessageBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // recover the messages from the cache
        this.messages = this.cache.getMessages();
        // scroll down when new message to display
        this.cache.newMessageReceived.subscribe(function () { return _this.scrollDown(); });
    };
    ;
    MessageBoxComponent.prototype.ngAfterViewChecked = function () {
        this.scrollDown();
    };
    ;
    MessageBoxComponent.prototype.fromCurrentUser = function (idUser) {
        return (idUser == this.authService.getCurrentUserId());
    };
    ;
    MessageBoxComponent.prototype.getUsername = function (idUser) {
        var username = "";
        var user = this.cache.getUser(idUser);
        if (user != undefined) {
            username = user.username;
        }
        return username;
    };
    ;
    MessageBoxComponent.prototype.displayDateFromTimestamp = function (timestamp) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__lib__["b" /* timeConverter */])(timestamp);
    };
    ;
    MessageBoxComponent.prototype.switchShowDate = function (msg) {
        if (msg.showDate == undefined) {
            msg.showDate = true;
        }
        else {
            msg.showDate = !msg.showDate;
        }
    };
    ;
    MessageBoxComponent.prototype.scrollDown = function () {
        var elem = this.messagebox;
        var height = elem.nativeElement.scrollHeight;
        elem.nativeElement.scrollTop = height;
    };
    ;
    return MessageBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('messagebox'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], MessageBoxComponent.prototype, "messagebox", void 0);
MessageBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'message-box',
        template: __webpack_require__("../../../../../src/app/chat/messagebox/messagebox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/messagebox/messagebox.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__["a" /* CacheService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__authentification_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentification_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], MessageBoxComponent);

var _a, _b, _c;
//# sourceMappingURL=messagebox.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/messenger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Messenger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__ = __webpack_require__("../../../../../src/app/dataaccess/cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentification_auth_service__ = __webpack_require__("../../../../../src/app/authentification/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Messenger = (function () {
    function Messenger(cache, authService) {
        this.cache = cache;
        this.authService = authService;
    }
    ;
    Messenger.prototype.Send = function (msg) {
        // create a Message instance
        var newMsg = {
            idUser: this.authService.getCurrentUserId(),
            timestamp: Date.now(),
            text: msg
        };
        return this.cache.sendMessage(newMsg);
    };
    ;
    return Messenger;
}());
Messenger = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dataaccess_cache_service__["a" /* CacheService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentification_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentification_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], Messenger);

var _a, _b;
//# sourceMappingURL=messenger.service.js.map

/***/ }),

/***/ "../../../../../src/app/dataaccess/cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__("../../../../../src/app/lib.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
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
    NEXT_USER_ID: prefixKey + "NEXT_USER_ID",
    MESSAGES: prefixKey + "MESSAGES"
};
var CacheService = (function () {
    function CacheService() {
        // Clear the local storage for debug
        //window.localStorage.clear();
        this.storage = window.localStorage;
        // data
        this.users = [];
        this.messages = [];
        // subjects
        this.newMessageReceived = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        // init local storage items if needed
        this.initStorageItem(STORAGE_KEYS.HAS_STORAGE, "true");
        this.initStorageItem(STORAGE_KEYS.WLOCK, "false");
        this.initStorageItem(STORAGE_KEYS.USERS, JSON.stringify([]));
        this.initStorageItem(STORAGE_KEYS.NEXT_USER_ID, "0");
        this.initStorageItem(STORAGE_KEYS.MESSAGES, JSON.stringify([]));
        // recovering of the storage
        this.users = JSON.parse(this.storage.getItem(STORAGE_KEYS.USERS));
        this.messages = JSON.parse(this.storage.getItem(STORAGE_KEYS.MESSAGES));
        //let usernames = this.users.map(user => user.username);
        //console.log("Registered users:", this.users);
        // add listener to detect cache modifications
        this.handleStorageEvent = this.handleStorageEvent.bind(this);
        Object(__WEBPACK_IMPORTED_MODULE_1__lib__["a" /* addEvent */])(window, 'storage', this.handleStorageEvent);
    }
    CacheService.prototype.handleStorageEvent = function (event) {
        var newValue = JSON.parse(event.newValue);
        switch (event.key) {
            case STORAGE_KEYS.USERS: {
                console.log("sync users");
                var cnt = newValue.length;
                if (newValue != undefined && cnt > 0) {
                    var newUser = newValue[cnt - 1];
                    this.users.push(newUser);
                }
                break;
            }
            case STORAGE_KEYS.MESSAGES: {
                console.log("sync messages");
                var cnt = newValue.length;
                if (newValue != undefined && cnt > 0) {
                    var newMsg = newValue[cnt - 1];
                    this.messages.push(newMsg);
                    // notify the observers that a new message has been received
                    this.newMessageReceived.next();
                }
                break;
            }
        }
    };
    ;
    CacheService.prototype.initStorageItem = function (name, defaultValue) {
        var hasItem = this.storage.getItem(name);
        if (!hasItem) {
            console.log("Creation of the local storage item " + name);
            this.storage.setItem(name, defaultValue);
        }
    };
    ;
    ;
    CacheService.prototype.getUsers = function () {
        return this.users;
    };
    ;
    CacheService.prototype.getMessages = function () {
        return this.messages;
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
            // update the next user ID
            this.storage.setItem(STORAGE_KEYS.NEXT_USER_ID, "" + (userInfo.id + 1));
            // unlock the write on the cache
            this.storage.setItem(STORAGE_KEYS.WLOCK, 'false');
            res = true;
        }
        else {
            console.error("Couldn't create user because of cache lock");
        }
        return res;
    };
    ;
    CacheService.prototype.getUserFrom = function (key, value) {
        var user = null;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var currUser = _a[_i];
            if (currUser[key] === value) {
                user = currUser;
                break;
            }
        }
        return user;
    };
    ;
    CacheService.prototype.getUser = function (idUser) {
        return this.getUserFrom("id", idUser);
    };
    ;
    CacheService.prototype.getUserFromName = function (username) {
        return this.getUserFrom("username", username);
    };
    ;
    CacheService.prototype.sendMessage = function (msg) {
        var success = false;
        var isAlreadyLocked = (this.storage.getItem(STORAGE_KEYS.WLOCK) === 'true');
        if (!isAlreadyLocked) {
            this.messages.push(msg);
            this.storage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(this.messages));
            // notify the observers that a new message has been sent
            this.newMessageReceived.next();
            success = true;
        }
        else {
            console.error("Couldn't send message because of cache lock");
        }
        return success;
    };
    ;
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

/***/ "../../../../../src/app/lib.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEvent;
/* harmony export (immutable) */ __webpack_exports__["b"] = timeConverter;
function addEvent(to, type, fn) {
    if (document.addEventListener) {
        to.addEventListener(type, fn, false);
    }
    else {
        to['on' + type] = fn;
    }
}
function timeConverter(timestamp) {
    var a = new Date(timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
}
//# sourceMappingURL=lib.js.map

/***/ }),

/***/ "../../../../../src/app/routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__("../../../../../src/app/routing/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentification_login_login_component__ = __webpack_require__("../../../../../src/app/authentification/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentification_signin_signin_component__ = __webpack_require__("../../../../../src/app/authentification/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_main_main_component__ = __webpack_require__("../../../../../src/app/chat/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__authentification_login_login_component__["a" /* LoginComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_4__authentification_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_5__chat_main_main_component__["a" /* MainComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/routing/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentification_auth_service__ = __webpack_require__("../../../../../src/app/authentification/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ;
    AuthGuard.prototype.canActivate = function () {
        // if not logged in
        if (!this.authService.isLoggedIn) {
            // redirect to the login page
            this.router.navigate(['/login']);
        }
        return this.authService.isLoggedIn;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentification_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentification_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/toast/toast.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* source: https://www.w3schools.com/howto/howto_js_snackbar.asp */\r\n\r\n#snackbar {\r\n    visibility: hidden; /* Hidden by default. Visible on click */\r\n    min-width: 250px; /* Set a default minimum width */\r\n    background-color: #333; /* Black background color */\r\n    color: #fff; /* White text color */\r\n    text-align: center; /* Centered text */\r\n    border-radius: 2px; /* Rounded borders */\r\n    padding: 16px; /* Padding */\r\n    position: fixed; /* Sit on top of the screen */\r\n    z-index: 1000; /* Add a z-index if needed */\r\n    bottom: 1px;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,0%);\r\n            transform: translate(-50%,0%);\r\n}\r\n\r\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\r\n#snackbar.show {\r\n    visibility: visible; /* Show the snackbar */\r\n\r\n/* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n#snackbar.error {\r\n    background-color: #F8D7DA;\r\n    color: #921217;\r\n}\r\n\r\n#snackbar.info {\r\n    background-color: #D1ECF1;\r\n    color: #0C75AB;\r\n}\r\n\r\n/* Animations to fade the snackbar in and out */\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 1px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 1px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 1px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 1px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}", ""]);

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