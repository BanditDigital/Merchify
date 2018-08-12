webpackJsonp([0],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationsService = /** @class */ (function () {
    function LocationsService(http) {
        this.http = http;
    }
    LocationsService.prototype.getLocations = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "Location");
    };
    LocationsService.prototype.addLocation = function (location) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "location", location, {});
    };
    LocationsService.prototype.deleteLocation = function (location) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "location/" + location.id);
    };
    LocationsService.prototype.editLocation = function (location) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "location", location, {});
    };
    LocationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], LocationsService);
    return LocationsService;
}());

//# sourceMappingURL=locations.service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RetailerService = /** @class */ (function () {
    function RetailerService(http) {
        this.http = http;
    }
    RetailerService.prototype.getRetailers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "retailer");
    };
    RetailerService.prototype.getRetailerById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "retailer/" + id);
    };
    RetailerService.prototype.addRetailer = function (retailer) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "retailer", retailer, {});
    };
    RetailerService.prototype.deleteRetailer = function (retailer) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "retailer/" + retailer.id);
    };
    RetailerService.prototype.editRetailer = function (retailer) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "retailer", retailer, {});
    };
    RetailerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], RetailerService);
    return RetailerService;
}());

//# sourceMappingURL=retailer.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getProducts = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "product");
    };
    ProductsService.prototype.getProductsByBrand = function (brand) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "product/" + brand.id);
    };
    ProductsService.prototype.addProduct = function (product) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "product", product, {});
    };
    ProductsService.prototype.deleteProduct = function (product) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "product/" + product.id);
    };
    ProductsService.prototype.updateProduct = function (product) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "product", product, {});
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProductsService);
    return ProductsService;
}());

//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_menu_page__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, fb, authService, menuCtrl, alertService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.initialiseForm();
        this.menuCtrl.swipeEnable(false);
    }
    SigninPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.authService.isAuthenticated()
            .then(function (success) {
            if (success) {
                _this.menuCtrl.swipeEnable(true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__app_app_menu_page__["a" /* AppMenuPage */]);
            }
        });
    };
    SigninPage.prototype.initialiseForm = function () {
        this.signinForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ])]
        });
    };
    SigninPage.prototype.signIn = function (accountDetails) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Logging in...' });
        loading.present();
        this.authService.signIn(accountDetails)
            .then(function (success) {
            if (success) {
                _this.menuCtrl.swipeEnable(true);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__app_app_menu_page__["a" /* AppMenuPage */]);
                loading.dismiss();
            }
            else {
                _this.alertService.showAlert('Sign In Failed', 'Please check your credentials and try again!');
                loading.dismiss();
            }
        });
    };
    SigninPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\auth\signin\signin.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>Sign In</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n  <ion-list-header class="header">\n\n    <ion-icon name="people" item-start></ion-icon>\n\n    Account Details\n\n  </ion-list-header>\n\n\n\n  <form [formGroup]="signinForm">\n\n    <ion-list>\n\n      <!-- USER NAME INPUT -->\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="signinForm.controls.email.hasError(\'required\') && signinForm.controls.email.touched">\n\n          Email is required.\n\n      </span>\n\n      <!-- PASSWORD INPUT -->\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="signinForm.controls.password.hasError(\'required\') && signinForm.controls.password.touched">\n\n          Password is required.\n\n      </span>\n\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar padding end>\n\n      <ion-buttons>\n\n        <button ion-button (click)="signUp()">Sign Up</button>\n\n      </ion-buttons>\n\n      <ion-buttons end right>\n\n            <button ion-button (click)="signIn(signinForm.value)"\n\n                    [disabled]="!signinForm.valid">Sign In</button>\n\n      </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\auth\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "users/org");
    };
    UserService.prototype.getOrganisation = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "users/tenant");
    };
    UserService.prototype.resendWelcomeEmail = function (user) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "users/verify/resend/" + user.email);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "users/org/" + user.email, user);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "users/org/" + user.email);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 218:
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
webpackEmptyAsyncContext.id = 218;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService(alertController) {
        this.alertController = alertController;
    }
    AlertService.prototype.showAlert = function (title, message) {
        this.alertController.create({
            title: title,
            message: message,
            buttons: [{
                    text: 'Okay'
                }]
        }).present();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertService);
    return AlertService;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 262:
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
webpackEmptyAsyncContext.id = 262;

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.setToken = function (token) {
        return this.storage.set('token', token);
    };
    StorageService.prototype.getToken = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(this.storage.get('token'));
    };
    StorageService.prototype.getTokenPromise = function () {
        return this.storage.get('token');
    };
    StorageService.prototype.removeToken = function () {
        return this.storage.remove('token');
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators_password_validator__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_modal__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_alert_alert_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, authService, fb, modal, alertService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.fb = fb;
        this.modal = modal;
        this.alertService = alertService;
        this.initialiseForm();
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.register = function (user) {
        var _this = this;
        this.authService.register(user)
            .subscribe(function (success) {
            _this.alertService.showAlert('Verify Email', 'An email has been sent to the entered address for verification');
            _this.navCtrl.pop();
        }, function (errors) {
            console.log(JSON.stringify(errors));
            _this.errorModal(errors.error);
        });
    };
    SignupPage.prototype.initialiseForm = function () {
        this.userForm = this.fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(40)
                ])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(40)
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(80)
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(15)
                ])],
            confirmPassword: [''],
            accessCode: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(6)
                ])],
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_4__shared_validators_password_validator__["a" /* PasswordValidator */].MatchPassword
        });
    };
    SignupPage.prototype.errorModal = function (errors) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__error_modal__["a" /* SignupErrorPage */], { errors: errors });
        modal.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\auth\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Create New Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="userForm">\n    <ion-list>\n      <ion-list-header class="header">\n        <ion-icon name="people" item-start></ion-icon>\n        Account Details\n      </ion-list-header>\n\n      <ion-item>\n        <ion-input type="text" placeholder="First Name" formControlName="firstName"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.controls.firstName.hasError(\'maxlength\')">\n        Must be less than 40 characters.\n      </span>\n      <span class="error"\n            *ngIf="userForm.controls.firstName.hasError(\'required\') && userForm.controls.firstName.touched">\n        First name is required.\n      </span>\n\n\n      <ion-item>\n        <ion-input type="text" placeholder="Last Name" formControlName="lastName"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.controls.lastName.hasError(\'maxlength\')">\n        Must be less than 40 characters.\n      </span>\n      <span class="error" *ngIf="userForm.controls.lastName.hasError(\'required\') && userForm.controls.lastName.touched">\n        Last name is required.\n      </span>\n\n\n      <ion-item>\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.controls.email.hasError(\'required\') && userForm.controls.email.touched">\n        Email address is required.\n      </span>\n\n\n      <ion-item>\n        <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.controls.password.hasError(\'required\') && userForm.controls.password.touched">\n        Password is required.\n      </span>\n      <span class="error"\n            *ngIf="userForm.controls.password.hasError(\'maxlength\') && userForm.controls.password.touched">\n        Maximum length 15 characters.\n      </span>\n      <span class="error"\n            *ngIf="userForm.controls.password.hasError(\'min length\') && userForm.controls.password.touched">\n        Minimum length 8 characters.\n      </span>\n\n      <ion-item>\n        <ion-input type="password" placeholder="Confirm Password" formControlName="confirmPassword"></ion-input>\n      </ion-item>\n      <span class="error"\n            *ngIf="userForm.controls.confirmPassword.hasError(\'MatchPassword\') && userForm.controls.password.touched">\n        Passwords do not match.\n      </span>\n\n\n      <ion-item no-lines>\n        <ion-input type="text" placeholder="Organisation Reference" formControlName="accessCode"></ion-input>\n      </ion-item>\n      <span class="error"\n            *ngIf="userForm.controls.accessCode.hasError(\'required\') && userForm.controls.accessCode.touched">\n        <ul>\n          <li>Organisation ID is required.</li>\n          <li>This is provided by your account administrator.</li>\n        </ul>\n      </span>\n      <ion-item no-lines>\n        <ion-grid class="orgid">\n          <ion-row>\n            <ion-col col-1>\n              <ion-icon name="information-circle"></ion-icon>\n            </ion-col>\n            <ion-col col-11 text-wrap> Your organisation reference is a 6 digit code that identifies your organisation.\n              Obtain this from your account administrator.\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n\n<ion-footer class="light">\n  <ion-toolbar padding end>\n    <div *ngIf="userForm.valid">\n      <ion-badge color="secondary">\n        <ion-icon name="checkmark"></ion-icon>\n      </ion-badge>\n      Great work! Now hit sign up...\n    </div>\n    <ion-buttons end right>\n      <button ion-button (click)="register(userForm.value)" [disabled]="!userForm.valid">Sign up</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\auth\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__shared_alert_alert_service__["a" /* AlertService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupErrorPage = /** @class */ (function () {
    function SignupErrorPage(view, navParams) {
        this.view = view;
        this.navParams = navParams;
        this.errors = null;
        this.errors = this.navParams.get('errors');
    }
    SignupErrorPage.prototype.close = function () {
        this.view.dismiss();
    };
    SignupErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-header>\n          \n              <ion-navbar>\n                <ion-title>Oops.. something went wrong!</ion-title>\n              </ion-navbar>\n          \n            </ion-header>\n          \n            <ion-content padding>\n              <h2>Sign up could not be compeleted.</h2>\n              <p>Please check the following items and try again...</p>\n              <ul>\n                <li *ngFor=\"let error of errors.validationErrors\">{{ error }}</li>\n              </ul>\n            </ion-content>\n          <ion-footer>\n            <ion-toolbar padding end>\n              <ion-buttons end right>\n                <button ion-button (click)=\"close()\">CLOSE</button>\n              </ion-buttons>\n            </ion-toolbar>\n          </ion-footer>",
            selector: 'page-signup-error'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SignupErrorPage);
    return SignupErrorPage;
}());

//# sourceMappingURL=error.modal.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_auth_auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_admin_location_locations__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_auth_signin_signin__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_admin_retailer_retailer__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_schedule_schedule_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_admin_products_products__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_brand_brands__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_users_user_list_user_list__ = __webpack_require__(500);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppMenuPage = /** @class */ (function () {
    function AppMenuPage(navCtrl, authService, appCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.appCtrl = appCtrl;
        this.pages = [];
    }
    AppMenuPage.prototype.ionViewCanEnter = function () {
        return this.authService.isLoggedIn();
    };
    AppMenuPage.prototype.ionViewWillEnter = function () {
        this.user = this.authService.user;
        if (this.authService.isAdmin()) {
            this.pages = [
                { title: 'Visits', component: __WEBPACK_IMPORTED_MODULE_6__pages_schedule_schedule_component__["a" /* SchedulePage */], icon: 'calendar' },
                { title: 'User Management', component: __WEBPACK_IMPORTED_MODULE_9__pages_admin_users_user_list_user_list__["a" /* UserListPage */], icon: 'people' },
                { title: 'Brands', component: __WEBPACK_IMPORTED_MODULE_8__pages_admin_brand_brands__["a" /* BrandsPage */], icon: 'brush' },
                { title: 'Products', component: __WEBPACK_IMPORTED_MODULE_7__pages_admin_products_products__["a" /* ProductsPage */], icon: 'cube' },
                { title: 'Locations', component: __WEBPACK_IMPORTED_MODULE_3__pages_admin_location_locations__["a" /* LocationsPage */], icon: 'navigate' },
                { title: 'Retailers', component: __WEBPACK_IMPORTED_MODULE_5__pages_admin_retailer_retailer__["a" /* RetailersPage */], icon: 'basket' },
            ];
            this.openPage(__WEBPACK_IMPORTED_MODULE_6__pages_schedule_schedule_component__["a" /* SchedulePage */]);
        }
        else {
            this.pages = [
                { title: 'Visits', component: __WEBPACK_IMPORTED_MODULE_6__pages_schedule_schedule_component__["a" /* SchedulePage */], icon: 'calendar' }
            ];
            this.openPage(__WEBPACK_IMPORTED_MODULE_6__pages_schedule_schedule_component__["a" /* SchedulePage */]);
        }
    };
    AppMenuPage.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    AppMenuPage.prototype.signOut = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_auth_signin_signin__["a" /* SigninPage */]);
        this.authService.signOut();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], AppMenuPage.prototype, "nav", void 0);
    AppMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\app\app.menu.component.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>{{ user?.firstName }}</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p.component)">\n\n        <ion-icon name="{{ p.icon }}"></ion-icon>\n\n        {{p.title}}\n\n      </button>\n\n      <button menuClose ion-item (click)="signOut()">\n\n        <ion-icon name="exit"></ion-icon>\n\n        Sign Out\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n<ion-nav #content main [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\app\app.menu.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__pages_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], AppMenuPage);
    return AppMenuPage;
}());

//# sourceMappingURL=app.menu.page.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locations_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_modal__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocationsPage = /** @class */ (function () {
    function LocationsPage(locationsService, modalCtrl, errorAlert, loadingCtrl) {
        this.locationsService = locationsService;
        this.modalCtrl = modalCtrl;
        this.errorAlert = errorAlert;
        this.loadingCtrl = loadingCtrl;
        this.locations = [];
        this.getAll();
    }
    LocationsPage.prototype.create = function () {
        var _this = this;
        var createModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__location_modal__["a" /* LocationModal */], { edit: false });
        createModal.onDidDismiss(function (results) {
            if (results) {
                _this.locations.push(results.location);
            }
        });
        createModal.present();
    };
    LocationsPage.prototype.openLocation = function (location) {
        var _this = this;
        var createModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__location_modal__["a" /* LocationModal */], { location: location, edit: true });
        createModal.onDidDismiss(function (results) {
            if (results && results.edited) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["pull"](_this.locations, location);
                _this.locations.push(results.location);
            }
            if (results && results.deleted) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["pull"](_this.locations, location);
            }
        });
        createModal.present();
    };
    LocationsPage.prototype.getAll = function (refresher) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting locations...' });
        loading.present();
        this.locationsService.getLocations()
            .subscribe(function (locations) {
            if (locations) {
                _this.locations = locations;
                if (refresher) {
                    refresher.complete();
                }
            }
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not refresh locations', error.error.message);
            if (refresher) {
                refresher.complete();
            }
            loading.dismiss();
        });
    };
    LocationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-locations',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\location\locations.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Locations</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-refresher (ionRefresh)="getAll($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <!--ACTION FAB BUTTON-->\n  <ion-fab bottom right>\n    <button ion-fab color="secondary" (click)="create()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n  <!--LIST WITH SLIDING ITEMS AND ACTIONS-->\n  <ion-list>\n    <button ion-item *ngFor="let location of locations" (click)="openLocation(location)">\n      {{ location?.name }} / {{ location?.type }}\n      <ion-badge color="primary" item-right>\n        <ion-icon name="basket"></ion-icon>\n        {{ location.retailers ? location.retailers.length : 0 }}</ion-badge>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\location\locations.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__locations_service__["a" /* LocationsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LocationsPage);
    return LocationsPage;
}());

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locations_service__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationModal = /** @class */ (function () {
    function LocationModal(navParams, fb, viewCtrl, loadingCtrl, alertCtrl, errorAlert, locationService) {
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.errorAlert = errorAlert;
        this.locationService = locationService;
        this.location = null;
        //Grab the account object passed in from the caller
        this.location = this.navParams.get('location');
        this.edit = this.navParams.get('edit');
        //Initialise form
        this.initialiseForm(this.location);
    }
    LocationModal.prototype.initialiseForm = function (location) {
        this.locationForm = this.fb.group({
            name: [location ? location.name : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30)
                ])],
            type: [location ? location.type : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
                ])]
        });
    };
    LocationModal.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Saving retailer...' });
        loading.present();
        if (this.edit) {
            this.location = Object.assign(this.location, this.locationForm.getRawValue());
            this.locationService.editLocation(this.location)
                .subscribe(function (updatedLocation) {
                loading.dismiss();
                _this.viewCtrl.dismiss({ location: updatedLocation, edited: _this.edit });
            }, function (error) {
                loading.dismiss();
                _this.errorAlert.showAlert('Could not edit retailer', error.error.message);
            });
        }
        if (!this.edit) {
            this.location = this.locationForm.getRawValue();
            this.locationService.addLocation(this.location)
                .subscribe(function (createdLocation) {
                loading.dismiss();
                _this.viewCtrl.dismiss({ location: createdLocation, edited: _this.edit });
            }, function (error) {
                loading.dismiss();
                _this.errorAlert.showAlert('Could not add new retailer', error.error.message);
            });
        }
    };
    LocationModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LocationModal.prototype.delete = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Deleting retailer...' });
        var confirm = this.alertCtrl.create({
            title: "Confirm delete",
            message: "Are you sure you want to delete " + this.location.name + ", you will not be able to undo this action?",
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Yes, delete it!',
                    handler: function () {
                        loading.present();
                        _this.locationService.deleteLocation(_this.location)
                            .subscribe(function () {
                            _this.viewCtrl.dismiss({ location: _this.location, deleted: true });
                            loading.dismiss();
                        }, function (error) {
                            _this.errorAlert.showAlert('Could not delete retailer', error.error.message);
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    LocationModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-location',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\location\location-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>\n      {{ location ? \'Edit \' + location.name : \'Create New Location\' }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="locationForm" novalidate>\n    <ion-item-divider>\n      Location Details\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>Location Name</ion-label>\n      <ion-input type="text" formControlName="name" placeholder="Give the location a name..."></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="locationForm.get(\'name\').hasError(\'maxlength\')">\n        Must be less than 30 characters.\n      </span>\n    <span class="error" *ngIf="locationForm.get(\'name\').hasError(\'minlength\')">\n        Must be more than 3 characters.\n      </span>\n    <span class="error" *ngIf="locationForm.get(\'name\').hasError(\'required\')\n      && locationForm.get(\'name\').touched">\n        Location name is required.\n      </span>\n\n\n    <ion-item>\n      <ion-label>Location Type</ion-label>\n      <ion-input type="text" formControlName="type" placeholder="i.e. Retail, High Street etc"></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="locationForm.get(\'type\').hasError(\'maxlength\')">\n        Must be less than 20 characters.\n      </span>\n  </form>\n\n  <div *ngIf="location">\n    <ion-item-divider>\n      Linked Retailers\n    </ion-item-divider>\n    <ion-list>\n      <ion-item *ngIf="location.retailers?.length == 0">There are no retailers linked to this location.</ion-item>\n      <ion-item *ngFor="let retailer of location?.retailers">\n        {{ retailer.name }} - {{ retailer.type }}\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button *ngIf="location" ion-button icon-left color="danger" (click)="delete()">\n            <ion-icon name="trash" color></ion-icon>\n            Delete\n          </button>\n        </ion-col>\n        <ion-col>\n          <button [disabled]="!locationForm.valid" ion-button icon-left color="secondary" (click)="save()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\location\location-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__locations_service__["a" /* LocationsService */]])
    ], LocationModal);
    return LocationModal;
}());

//# sourceMappingURL=location-modal.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__retailer_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__retailer_modal__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RetailersPage = /** @class */ (function () {
    function RetailersPage(retailerService, modalCtrl, errorAlert, loadingCtrl) {
        this.retailerService = retailerService;
        this.modalCtrl = modalCtrl;
        this.errorAlert = errorAlert;
        this.loadingCtrl = loadingCtrl;
        this.retailers = [];
        this.getAll();
    }
    RetailersPage.prototype.create = function () {
        var _this = this;
        var createModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__retailer_modal__["a" /* RetailerModal */], { edit: false });
        createModal.onDidDismiss(function (results) {
            if (results) {
                _this.retailers.push(results.retailer);
            }
        });
        createModal.present();
    };
    RetailersPage.prototype.openRetailer = function (retailer) {
        var _this = this;
        var createModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__retailer_modal__["a" /* RetailerModal */], { retailer: retailer, edit: true });
        createModal.onDidDismiss(function (results) {
            if (results && results.edited) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["pull"](_this.retailers, retailer);
                _this.retailers.push(results.retailer);
            }
            if (results && results.deleted) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["pull"](_this.retailers, retailer);
            }
        });
        createModal.present();
    };
    RetailersPage.prototype.getAll = function (refresher) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting retailers...' });
        loading.present();
        this.retailerService.getRetailers()
            .subscribe(function (retailers) {
            if (retailers) {
                _this.retailers = retailers;
                if (refresher) {
                    refresher.complete();
                }
            }
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not refresh retailers', error.error.message);
            if (refresher) {
                refresher.complete();
            }
            loading.dismiss();
        });
    };
    RetailersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-retailer',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\retailer\retailer.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Retailers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-refresher (ionRefresh)="getAll($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <!--ACTION FAB BUTTON-->\n  <ion-fab bottom right>\n    <button ion-fab color="secondary" (click)="create()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n  <!--LIST WITH SLIDING ITEMS AND ACTIONS-->\n  <ion-list>\n    <button ion-item *ngFor="let retailer of retailers" (click)="openRetailer(retailer)">\n      {{ retailer?.name }} / {{ retailer?.type }}\n      <ion-badge color="primary" item-right>\n        <ion-icon name="navigate"></ion-icon>\n        {{ retailer.locations ? retailer.locations.length : 0 }}</ion-badge>\n\n      <ion-badge color="light" item-right>\n        <ion-icon name="brush"></ion-icon>\n        {{ retailer.brands ? retailer.brands.length : 0 }}</ion-badge>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\retailer\retailer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__retailer_service__["a" /* RetailerService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], RetailersPage);
    return RetailersPage;
}());

//# sourceMappingURL=retailer.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailerModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__retailer_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_locations_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__brand_brands_service__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RetailerModal = /** @class */ (function () {
    function RetailerModal(navParams, fb, viewCtrl, loadingCtrl, alertCtrl, errorAlert, retailerService, locationService, brandService) {
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.errorAlert = errorAlert;
        this.retailerService = retailerService;
        this.locationService = locationService;
        this.brandService = brandService;
        this.retailer = null;
        this.locations = [];
        this.filteredLocations = [];
        this.searchTerm = '';
        this.showLocations = false;
        this.brands = [];
        this.filteredBrands = [];
        this.brandSearchTerm = '';
        this.showBrands = false;
        //Grab the account object passed in from the caller
        this.retailer = this.navParams.get('retailer');
        this.edit = this.navParams.get('edit');
        // Get all available locations & brands
        this.getAllLocations();
        this.getAllBrands();
        //Initialise form
        this.initialiseForm(this.retailer);
    }
    RetailerModal.prototype.initialiseForm = function (retailer) {
        this.retailerForm = this.fb.group({
            name: [retailer ? retailer.name : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
                ])],
            type: [retailer ? retailer.type : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
                ])]
        });
    };
    RetailerModal.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Saving retailer...' });
        loading.present();
        if (this.edit) {
            this.retailer = Object.assign(this.retailer, this.retailerForm.getRawValue());
            this.retailerService.editRetailer(this.retailer)
                .subscribe(function (updatedRetailer) {
                loading.dismiss();
                _this.viewCtrl.dismiss({ retailer: updatedRetailer, edited: _this.edit });
            }, function (error) {
                loading.dismiss();
                _this.errorAlert.showAlert('Could not edit retailer', error.error.message);
            });
        }
        if (!this.edit) {
            this.retailer = this.retailerForm.getRawValue();
            this.retailerService.addRetailer(this.retailer)
                .subscribe(function (createdRetailer) {
                loading.dismiss();
                _this.viewCtrl.dismiss({ retailer: createdRetailer, edited: _this.edit });
            }, function (error) {
                loading.dismiss();
                _this.errorAlert.showAlert('Could not add new retailer', error.error.message);
            });
        }
    };
    RetailerModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RetailerModal.prototype.delete = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Deleting retailer...' });
        var confirm = this.alertCtrl.create({
            title: "Confirm delete",
            message: "Are you sure you want to delete " + this.retailer.name + ", you will not be able to undo this action?",
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Yes, delete it!',
                    handler: function () {
                        loading.present();
                        _this.retailerService.deleteRetailer(_this.retailer)
                            .subscribe(function () {
                            _this.viewCtrl.dismiss({ retailer: _this.retailer, deleted: true });
                            loading.dismiss();
                        }, function (error) {
                            _this.errorAlert.showAlert('Could not delete retailer', error.error.message);
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    /// BRAND ASSIGNMENT CONTROLS ///
    RetailerModal.prototype.getAllBrands = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting brands...' });
        loading.present();
        this.brandService.getBrands()
            .subscribe(function (brands) {
            if (brands) {
                _this.brands = brands;
                _this.filteredBrands = brands;
            }
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not get brands', error.error.message);
            loading.dismiss();
        });
    };
    RetailerModal.prototype.brandChecked = function (ev, brand) {
        if (ev.value) {
            this.retailer.brands.push(brand);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_6_lodash__["remove"](this.retailer.brands, { id: brand.id });
        }
    };
    RetailerModal.prototype.isBrandLinked = function (brand) {
        return __WEBPACK_IMPORTED_MODULE_6_lodash__["find"](this.retailer.brands, { id: brand.id });
    };
    RetailerModal.prototype.filterBrands = function () {
        var _this = this;
        this.filteredBrands = this.brands.filter(function (brand) {
            return brand.name.toLowerCase().indexOf(_this.brandSearchTerm.toLowerCase()) > -1;
        });
    };
    RetailerModal.prototype.toggleBrands = function () {
        this.showBrands = !this.showBrands;
        return this.showBrands;
    };
    /// LOCATION ASSIGNMENT CONTROLS ///
    RetailerModal.prototype.getAllLocations = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting locations...' });
        loading.present();
        this.locationService.getLocations()
            .subscribe(function (locations) {
            if (locations) {
                _this.locations = locations;
                _this.filteredLocations = locations;
            }
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not get locations', error.error.message);
            loading.dismiss();
        });
    };
    RetailerModal.prototype.locationChecked = function (ev, location) {
        if (ev.value) {
            this.retailer.locations.push(location);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_6_lodash__["remove"](this.retailer.locations, { id: location.id });
        }
    };
    RetailerModal.prototype.isLocationLinked = function (location) {
        return __WEBPACK_IMPORTED_MODULE_6_lodash__["find"](this.retailer.locations, { id: location.id });
    };
    RetailerModal.prototype.filterLocations = function () {
        var _this = this;
        this.filteredLocations = this.locations.filter(function (location) {
            return location.name.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    RetailerModal.prototype.toggleLocations = function () {
        this.showLocations = !this.showLocations;
        return this.showLocations;
    };
    RetailerModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-retailer',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\retailer\retailer-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Close</button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      {{ retailer ? \'Edit \' + retailer.name : \'Create New Retailer\' }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <h3 padding-left>Retailer Details</h3>\n\n  <form [formGroup]="retailerForm" novalidate padding-bottom>\n\n    <ion-item>\n\n      <ion-label>Retailer Name</ion-label>\n\n      <ion-input type="text" formControlName="name" placeholder="Give the retailer a name..."></ion-input>\n\n    </ion-item>\n\n    <span class="error" *ngIf="retailerForm.get(\'name\').hasError(\'maxlength\')">\n\n        Must be less than 20 characters.\n\n      </span>\n\n    <span class="error" *ngIf="retailerForm.get(\'name\').hasError(\'minlength\')">\n\n        Must be more than 3 characters.\n\n      </span>\n\n    <span class="error" *ngIf="retailerForm.get(\'name\').hasError(\'required\')\n\n      && retailerForm.get(\'name\').touched">\n\n        Retailer name is required.\n\n      </span>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Retailer Type</ion-label>\n\n      <ion-input type="text" formControlName="type" placeholder="i.e. Department Store, Pharmacy etc"></ion-input>\n\n    </ion-item>\n\n    <span class="error" *ngIf="retailerForm.get(\'type\').hasError(\'maxlength\')">\n\n        Must be less than 20 characters.\n\n      </span>\n\n  </form>\n\n\n\n  <div *ngIf="retailer">\n\n    <h2 padding-left>Links</h2>\n\n    <button ion-button icon-left full color="light" (click)="toggleLocations()">\n\n      <ion-icon name="{{ showLocations ? \'arrow-dropup-circle\' : \'arrow-dropdown-circle\' }}"></ion-icon>\n\n      Locations ({{ retailer.locations?.length ? retailer.locations.length : 0 }})\n\n     </button>\n\n\n\n    <div *ngIf="showLocations">\n\n      <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="filterLocations()"></ion-searchbar>\n\n      <ion-list>\n\n        <ion-item *ngIf="retailer.locations?.length == 0">There are no locations linked to this retailer.</ion-item>\n\n        <ion-item *ngFor="let location of filteredLocations">\n\n          <ion-label>{{ location.name }}</ion-label>\n\n          <ion-checkbox (ionChange)="locationChecked($event, location)"\n\n                        [checked]="isLocationLinked(location)"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="retailer">\n\n    <button ion-button icon-left full color="light" (click)="toggleBrands()">\n\n      <ion-icon name="{{ showBrands ? \'arrow-dropup-circle\' : \'arrow-dropdown-circle\' }}"></ion-icon>\n\n      Brands ({{ retailer.brands?.length }})\n\n    </button>\n\n\n\n    <div *ngIf="showBrands">\n\n      <ion-searchbar [(ngModel)]="brandSearchTerm" (ionInput)="filterBrands()"></ion-searchbar>\n\n      <ion-list>\n\n        <ion-item *ngIf="retailer.brands?.length == 0">There are no brands linked to this retailer.</ion-item>\n\n        <ion-item *ngFor="let brand of filteredBrands">\n\n          <ion-label>{{ brand.name }}</ion-label>\n\n          <ion-checkbox (ionChange)="brandChecked($event, brand)"\n\n                        [checked]="isBrandLinked(brand)"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-buttons>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button *ngIf="retailer" ion-button icon-left color="danger" (click)="delete()">\n\n            <ion-icon name="trash" color></ion-icon>\n\n            Delete\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button [disabled]="!retailerForm.valid" ion-button icon-left color="secondary" (click)="save()" float-right>\n\n            <ion-icon name="checkmark" color></ion-icon>\n\n            Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-buttons>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\retailer\retailer-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__retailer_service__["a" /* RetailerService */],
            __WEBPACK_IMPORTED_MODULE_5__location_locations_service__["a" /* LocationsService */],
            __WEBPACK_IMPORTED_MODULE_7__brand_brands_service__["a" /* BrandsService */]])
    ], RetailerModal);
    return RetailerModal;
}());

//# sourceMappingURL=retailer-modal.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_new_schedule_new_modal_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__visit_report_visit_report_modal_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_pipes_visit_filter_pipe__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__check_in_action_checklist_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_complete_visit_edit_complete_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__expenses_expenses_modal_component__ = __webpack_require__(494);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SchedulePage = /** @class */ (function () {
    function SchedulePage(navCtrl, navParams, modalCtrl, loadingCtrl, scheduleService, errorAlert, actionSheetCtrl, alertCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.scheduleService = scheduleService;
        this.errorAlert = errorAlert;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.rawData = [];
        this.visits = [];
        this.showCompleted = false;
        this.showScheduled = true;
        this.searchText = '';
        this.getVisits();
    }
    SchedulePage.prototype.isAdmin = function () {
        if (this.authService.isLoggedIn()) {
            return this.authService.isAdmin();
        }
        else {
            return false;
        }
    };
    SchedulePage.prototype.newAppointment = function () {
        var _this = this;
        var newAppointmentModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_new_schedule_new_modal_component__["a" /* ScheduleNewModal */]);
        newAppointmentModal.onDidDismiss(function (results) {
            if (results && !results.edited) {
                _this.rawData.push(results.visit);
                _this.visitFilters();
            }
        });
        newAppointmentModal.present();
    };
    SchedulePage.prototype.getVisits = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting available appointments...' });
        loading.present();
        this.scheduleService.getVisits()
            .subscribe(function (visits) {
            _this.rawData = visits;
            _this.visitFilters();
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not load available appointments', error.error.message);
            loading.dismiss();
        });
    };
    SchedulePage.prototype.openVisit = function (visit) {
        var _this = this;
        var buttons = [];
        if (!visit.actualArrival) {
            buttons.push({
                text: 'Check In',
                handler: function () {
                    _this.checkIn(visit);
                }
            });
        }
        if (!visit.actualArrival)
            buttons.push({
                text: 'Edit Visit Details',
                handler: function () {
                    _this.editVisit(visit);
                }
            });
        if (!visit.actualArrival) {
            buttons.push({
                text: 'Delete Scheduled Visit',
                role: 'destructive',
                handler: function () {
                    _this.deleteVisit(visit);
                }
            });
        }
        if (visit.actualArrival && !visit.actualDeparture) {
            buttons.push({
                text: 'Update Record',
                handler: function () {
                    _this.updateActions(visit);
                }
            });
        }
        if (visit.actualArrival && visit.actualDeparture) {
            buttons.push({
                text: 'View Visit Report',
                handler: function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__visit_report_visit_report_modal_component__["a" /* VisitReportModal */], { visit: visit });
                }
            });
        }
        if (visit.actualArrival && visit.actualDeparture && this.isAdmin()) {
            buttons.push({
                text: 'Edit Completed Visit',
                handler: function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__edit_complete_visit_edit_complete_component__["a" /* EditCompleteComponent */], { visit: visit });
                }
            });
        }
        if (visit.actualArrival && visit.actualDeparture) {
            buttons.push({
                text: 'Expenses & Travel',
                handler: function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__expenses_expenses_modal_component__["a" /* ExpensesModal */], { visit: visit });
                }
            });
        }
        var actions = this.actionSheetCtrl.create({
            title: 'What next?',
            buttons: buttons
        });
        actions.present();
    };
    SchedulePage.prototype.editVisit = function (visit) {
        var _this = this;
        var newAppointmentModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_new_schedule_new_modal_component__["a" /* ScheduleNewModal */], { visit: visit, edit: true });
        newAppointmentModal.onDidDismiss(function (results) {
            if (results && results.edited) {
                __WEBPACK_IMPORTED_MODULE_6_lodash__["pull"](_this.rawData, visit);
                _this.rawData.push(results.visit);
                _this.visitFilters();
            }
        });
        newAppointmentModal.present();
    };
    SchedulePage.prototype.checkIn = function (visit) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Checking in...' });
        var checkInTime = __WEBPACK_IMPORTED_MODULE_5_moment__().utc();
        var confirm = this.alertCtrl.create({
            title: "Confirm Check-in",
            message: "Are you sure you want to check-in now, the time recorded will be " + checkInTime.local().format('DD/MM/YYYY HH:mm Z'),
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        loading.present();
                        visit.actualArrival = checkInTime.utc();
                        visit.hourlyRate = _this.getHourlyRate(visit);
                        visit.travelRate = _this.getTravelRate(visit);
                        visit.expenses = [];
                        _this.scheduleService.editVisit(visit)
                            .subscribe(function (updated) {
                            _this.visitFilters();
                            loading.dismiss();
                        }, function (error) {
                            _this.errorAlert.showAlert('Could not check in', error.error.message);
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    SchedulePage.prototype.deleteVisit = function (visit) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Deleting visit...' });
        var confirm = this.alertCtrl.create({
            title: "Confirm delete",
            message: "Are you sure you want to delete this visit, you will not be able to undo this action?",
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Yes, delete it!',
                    handler: function () {
                        loading.present();
                        _this.scheduleService.deleteVisit(visit)
                            .subscribe(function () {
                            __WEBPACK_IMPORTED_MODULE_6_lodash__["pull"](_this.rawData, visit);
                            _this.visitFilters();
                            loading.dismiss();
                        }, function (error) {
                            _this.errorAlert.showAlert('Could not delete visit', error.error.message);
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    SchedulePage.prototype.updateActions = function (visit) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__check_in_action_checklist_component__["a" /* ActionChecklistComponent */], { visit: visit }, { enableBackdropDismiss: false });
        var loading = this.loadingCtrl.create({ content: 'Updating visit...' });
        modal.onDidDismiss(function (data) {
            loading.present();
            _this.scheduleService.editVisit(data)
                .subscribe(function (updatedVisit) {
                __WEBPACK_IMPORTED_MODULE_6_lodash__["pull"](_this.rawData, visit);
                _this.rawData.push(updatedVisit);
                _this.visitFilters();
                loading.dismiss();
            }, function (error) {
                _this.errorAlert.showAlert('Could not update visit', error.error.message);
                loading.dismiss();
            });
        });
        modal.present();
    };
    SchedulePage.prototype.visitFilters = function () {
        this.rawData.forEach(function (visit) {
            if (!visit.actualArrival) {
                visit.state = 'Scheduled';
            }
            if (visit.actualArrival && !visit.actualDeparture) {
                visit.state = 'Checked In';
            }
            if (visit.actualArrival && visit.actualDeparture) {
                visit.state = 'Completed';
            }
        });
        this.searchVisits();
    };
    SchedulePage.prototype.getVisitBadgeColor = function (visit) {
        if (!visit.actualArrival) {
            return 'primary';
        }
        if (visit.actualArrival && !visit.actualDeparture) {
            return 'secondary';
        }
        if (visit.actualArrival && visit.actualDeparture) {
            return 'dark';
        }
    };
    SchedulePage.prototype.searchVisits = function () {
        var _this = this;
        this.filteredVisits = new __WEBPACK_IMPORTED_MODULE_8__shared_pipes_visit_filter_pipe__["a" /* VisitFilterPipe */]()
            .transform(this.rawData, { userInput: this.searchText, showCompleted: this.showCompleted, showScheduled: this.showScheduled });
        this.visits = [];
        this.filteredVisits.forEach(function (visit) {
            _this.visits.push(visit);
        });
    };
    SchedulePage.prototype.timeCheckedIn = function (visit) {
        return __WEBPACK_IMPORTED_MODULE_5_moment__(__WEBPACK_IMPORTED_MODULE_5_moment__()).diff(visit.actualArrival, 'hours', true).toFixed(2);
    };
    SchedulePage.prototype.timeSpent = function (visit) {
        return __WEBPACK_IMPORTED_MODULE_5_moment__(visit.actualDeparture).diff(visit.actualArrival, 'hours', true).toFixed(2);
    };
    SchedulePage.prototype.totalSales = function (visit) {
        var total = 0;
        if (visit.stock) {
            for (var _i = 0, _a = visit.stock; _i < _a.length; _i++) {
                var check = _a[_i];
                total += check.qtySold * check.price;
            }
        }
        return total;
    };
    SchedulePage.prototype.getHourlyRate = function (visit) {
        var result = __WEBPACK_IMPORTED_MODULE_6_lodash__["find"](visit.user.brandRates, { 'brandId': visit.brand.id });
        if (result) {
            return result.rate;
        }
        else {
            return 0;
        }
    };
    SchedulePage.prototype.getTravelRate = function (visit) {
        var result = __WEBPACK_IMPORTED_MODULE_6_lodash__["find"](visit.user.brandRates, { 'brandId': visit.brand.id });
        if (result) {
            return result.travelRate;
        }
        else {
            return 0;
        }
    };
    SchedulePage.prototype.expensesTotal = function (visit) {
        var total = 0;
        visit.expenses.forEach(function (ex) {
            total = +total + +ex.amount;
        });
        return total;
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-schedule',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\schedule.view.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Merchify</ion-title>\n\n  </ion-navbar>\n\n  <ion-searchbar (ionInput)="searchVisits()" [(ngModel)]="searchText"></ion-searchbar>\n\n  <div class="filters">\n\n    <div float-start class="my-checkbox">\n\n      <ion-label text-uppercase>Completed</ion-label>\n\n      <ion-checkbox [(ngModel)]="showCompleted" (ionChange)="searchVisits()">\n\n      </ion-checkbox>\n\n    </div>\n\n    <div float-start class="my-checkbox">\n\n      <ion-label text-uppercase>Scheduled</ion-label>\n\n      <ion-checkbox [(ngModel)]="showScheduled" (ionChange)="searchVisits()">\n\n      </ion-checkbox>\n\n    </div>\n\n  </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n\n\n  <ion-list>\n\n    <ion-item *ngIf="visits.length === 0">\n\n      No visits found, better get cracking!\n\n    </ion-item>\n\n    <ion-item-group *ngFor="let group of visits | groupBy : \'state\'">\n\n      <ion-item-divider color="light">\n\n        {{ group.key }} ({{ group.list.length }})\n\n      </ion-item-divider>\n\n      <ion-item *ngFor="let visit of group.list" (click)="openVisit(visit)">\n\n        <h3>{{ visit.retailer.name }} ({{ visit.location.name }})</h3>\n\n        <h3>{{ (visit.actualArrival ? visit.actualArrival : visit.scheduledArrival) | amDateFormat:\'dddd MMMM Do YYYY\' }}</h3>\n\n        <p>On behalf of {{ visit.brand.name }}</p>\n\n        <p *ngIf="isAdmin()">{{ visit.user.firstName + \' \' + visit.user.lastName }}</p>\n\n        <ion-badge text-left color="{{ getVisitBadgeColor(visit) }}" item-end>\n\n          <div>{{ visit.state }}</div>\n\n          <div>\n\n            {{ visit.state == \'Checked In\'\n\n            ? ((timeCheckedIn(visit) | number: \'1.2-2\').toString() + \'hrs\') : \'\'}}\n\n\n\n            {{ visit.state == \'Completed\'\n\n            ? ( \'Hours Worked \' + (timeSpent(visit) | number: \'1.2-2\').toString()) : \'\'}}\n\n          </div>\n\n          <div>\n\n            {{ (visit.state == \'Completed\')\n\n            ? \' Cost £\' + ((timeSpent(visit) * visit.hourlyRate) | number: \'1.2-2\') : \'\'}}\n\n          </div>\n\n          <div>\n\n            {{ (visit.state == \'Completed\') && expensesTotal(visit) > 0\n\n            ? \' Expenses £\' + (expensesTotal(visit) | number: \'1.2-2\') : \'\'}}\n\n          </div>\n\n          <div>\n\n            {{ (visit.state == \'Completed\') && visit.travelTime > 0\n\n            ? \' Travel Time \' + (visit.travelTime | number: \'1.2-2\') : \'\'}}\n\n          </div>\n\n        </ion-badge>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right *ngIf="!activeVisit">\n\n    <button ion-fab color="secondary" (click)="newAppointment()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\schedule.view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleNewModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_retailer_retailer_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_brand_brands_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jsonwebtoken__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ScheduleNewModal = /** @class */ (function () {
    function ScheduleNewModal(view, storageService, loadingCtrl, errorAlert, retailerService, brandService, scheduleService, navParams) {
        this.view = view;
        this.storageService = storageService;
        this.loadingCtrl = loadingCtrl;
        this.errorAlert = errorAlert;
        this.retailerService = retailerService;
        this.brandService = brandService;
        this.scheduleService = scheduleService;
        this.navParams = navParams;
        this.brands = [];
        this.retailers = [];
        this.locations = [];
        this.edit = false;
        this.visit = {
            scheduledArrival: __WEBPACK_IMPORTED_MODULE_0_moment__().toISOString(),
            brand: null
        };
        if (this.navParams.get('visit')) {
            this.visit = this.navParams.get('visit');
            this.edit = this.navParams.get('edit');
        }
        this.setup();
    }
    ScheduleNewModal.prototype.dismiss = function () {
        this.view.dismiss();
    };
    ScheduleNewModal.prototype.setup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting available brands...' });
        loading.present();
        this.storageService.get('token')
            .then(function (token) {
            var decoded = __WEBPACK_IMPORTED_MODULE_7_jsonwebtoken__["decode"](token);
            console.log(decoded.brands);
            _this.brands = decoded.brands;
            _this.visit.user = decoded;
            if (_this.edit) {
                _this.setupEdit();
            }
            loading.dismiss();
        }).catch(function (error) {
            _this.errorAlert.showAlert('Could not load available brands', error.message);
        });
    };
    ScheduleNewModal.prototype.setupEdit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting available retailers & locations...' });
        loading.present();
        this.brandService.getBrand(this.visit.brand.id)
            .subscribe(function (brand) {
            _this.retailers = brand.retailers;
            _this.retailerService.getRetailerById(_this.visit.retailer.id)
                .subscribe(function (retailer) {
                _this.locations = retailer.locations;
                loading.dismiss();
            }, function (error) {
                _this.errorAlert.showAlert('Could not load available locations', error.error.message);
                loading.dismiss();
            });
        }, function (error) {
            _this.errorAlert.showAlert('Could not load available retailers', error.error.message);
            loading.dismiss();
        });
    };
    ScheduleNewModal.prototype.brandSelected = function (ev) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting available retailers...' });
        loading.present();
        this.brandService.getBrand(ev.id)
            .subscribe(function (brand) {
            _this.retailers = brand.retailers;
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not load available retailers', error.error.message);
            loading.dismiss();
        });
    };
    ScheduleNewModal.prototype.retailerSelected = function (ev) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting available locations...' });
        loading.present();
        this.retailerService.getRetailerById(ev.id)
            .subscribe(function (retailer) {
            _this.locations = retailer.locations;
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not load available locations', error.error.message);
            loading.dismiss();
        });
    };
    ScheduleNewModal.prototype.save = function () {
        var _this = this;
        if (!this.edit) {
            this.visit.scheduledArrival = __WEBPACK_IMPORTED_MODULE_0_moment__(this.visit.scheduledArrival.toString()).format('YYYY-MM-DD');
            this.scheduleService.addVisit(this.visit)
                .subscribe(function (visit) {
                if (visit) {
                    _this.view.dismiss({ visit: visit, edited: false });
                }
            }, function (error) {
                _this.errorAlert.showAlert('Could not edit visit', error.error.message);
            });
        }
        if (this.edit) {
            this.scheduleService.editVisit(this.visit)
                .subscribe(function (visit) {
                if (visit) {
                    _this.view.dismiss({ visit: visit, edited: true });
                }
            }, function (error) {
                _this.errorAlert.showAlert('Could not schedule new visit', error.error.message);
            });
        }
    };
    ScheduleNewModal.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    ScheduleNewModal.prototype.isValid = function () {
        return !this.visit.brand || !this.visit.retailer || !this.visit.location;
    };
    ScheduleNewModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\add-new\schedule-new-modal.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>\n      New Visit\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item-divider color="light">\n      <ion-icon name="calendar" icon-start></ion-icon>\n      Scheduling\n    </ion-item-divider>\n\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YY" [(ngModel)]="visit.scheduledArrival"></ion-datetime>\n    </ion-item>\n\n    <ion-item-divider color="light">\n      <ion-icon name="calendar" icon-start></ion-icon>\n      Appointment Particulars\n    </ion-item-divider>\n\n    <ion-item>\n      <ion-label>Brand</ion-label>\n        <ion-select [(ngModel)]="visit.brand" (ionChange)="brandSelected($event)"\n        [compareWith]="compareFn">\n          <ion-option *ngFor="let brand of brands" [value]="brand">{{ brand.name }}</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Retailer</ion-label>\n      <ion-select [(ngModel)]="visit.retailer" [disabled]="!visit.brand" (ionChange)="retailerSelected($event)"\n                  [compareWith]="compareFn">\n        <ion-option *ngFor="let retailer of retailers" [value]="retailer">{{ retailer.name }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label>Location</ion-label>\n      <ion-select #locationSelect [(ngModel)]="visit.location" [disabled]="!visit.retailer"\n                  [compareWith]="compareFn">\n        <ion-option *ngFor="let location of locations" [value]="location">{{ location.name }}</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button *ngIf="user" ion-button icon-left color="danger" (click)="delete()">\n            <ion-icon name="trash" color></ion-icon>\n            Delete\n          </button>\n        </ion-col>\n        <ion-col>\n          <button [disabled]="isValid()" ion-button icon-left color="secondary" (click)="save()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\add-new\schedule-new-modal.view.html"*/,
            selector: 'page-schedule-new-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__admin_retailer_retailer_service__["a" /* RetailerService */],
            __WEBPACK_IMPORTED_MODULE_5__admin_brand_brands_service__["a" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_6__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], ScheduleNewModal);
    return ScheduleNewModal;
}());

//# sourceMappingURL=schedule-new-modal.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitReportModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisitReportModal = /** @class */ (function () {
    function VisitReportModal(navParams, view) {
        this.navParams = navParams;
        this.view = view;
        this.visit = this.navParams.get('visit');
    }
    VisitReportModal.prototype.timeSpent = function (arrival, departure) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__(arrival).diff(departure, 'hours', true).toFixed(2);
    };
    VisitReportModal.prototype.dismiss = function () {
        this.view.dismiss();
    };
    VisitReportModal.prototype.totalSales = function () {
        var total = 0;
        for (var _i = 0, _a = this.visit.stock; _i < _a.length; _i++) {
            var check = _a[_i];
            total += check.qtySold * check.price;
        }
        return total;
    };
    VisitReportModal.prototype.getHourlyRate = function () {
        return this.visit.hourlyRate;
    };
    VisitReportModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\visit-report\visit-report-modal.view.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Visit Report\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n  <ion-grid no-padding>\n\n\n\n    <ion-row class="header-row">\n\n      <ion-col><p>Visit Details</p></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Name</b></ion-col>\n\n      <ion-col col-9>{{ visit.user.firstName + \' \' + visit.user.lastName }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Brand</b></ion-col>\n\n      <ion-col col-9>{{ visit.brand.name }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Location</b></ion-col>\n\n      <ion-col col-4>{{ visit.location.name }}</ion-col>\n\n      <ion-col col-5>{{ visit.location.type }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Retailer</b></ion-col>\n\n      <ion-col col-4>{{ visit.retailer.name }}</ion-col>\n\n      <ion-col col-5>{{ visit.retailer.type }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row margin-top class="header-row">\n\n      <ion-col><p>Time Reporting (Local time)</p></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6><b>Scheduled</b></ion-col>\n\n      <ion-col col-3>{{ visit.scheduledArrival | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n\n      <ion-col col-3></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6><b>Check In</b></ion-col>\n\n      <ion-col col-3>{{ visit.actualArrival | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n\n      <ion-col col-3>{{ visit.actualArrival | amLocal | amDateFormat: \'HH:mm Z\' }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6><b>Check Out</b></ion-col>\n\n      <ion-col col-3>{{ visit.actualDeparture | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n\n      <ion-col col-3>{{ visit.actualDeparture | amLocal | amDateFormat: \'HH:mm Z\' }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6><b>Time On Site</b></ion-col>\n\n      <ion-col col-3></ion-col>\n\n      <ion-col col-3>{{ timeSpent(visit.actualDeparture, visit.actualArrival) }} hrs</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="total-row">\n\n    <ion-col col-6><b>Visit Total</b></ion-col>\n\n    <ion-col col-3>£{{ getHourlyRate() }}/hr</ion-col>\n\n    <ion-col col-3>£{{ (timeSpent(visit.actualDeparture, visit.actualArrival) * getHourlyRate()) | number: \'1.2-2\' }}</ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row margin-top class="header-row">\n\n      <ion-col><p>Store Details</p></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="total-row">\n\n      <ion-col><b>Store Contact</b></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-9>{{ visit.siteContact ? visit.siteContact : \'No contact name recorded\' }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="total-row">\n\n      <ion-col><b>Activities/Notes</b></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>{{ visit.visitNotes ? visit.visitNotes : \'No notes recorded\' }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row margin-top class="header-row">\n\n      <ion-col><p>Stock Check</p></ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="visit.stock.length === 0">\n\n      <p>No data to display</p>\n\n    </ion-row>\n\n    <ion-row class="total-row">\n\n      <ion-col col-6>Product</ion-col>\n\n      <ion-col col-2>Size</ion-col>\n\n      <ion-col col-2>On Hand</ion-col>\n\n      <ion-col col-2></ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let check of visit.stock | stock: \'stock\'">\n\n      <ion-col col-6>{{ check.product.description }}</ion-col>\n\n      <ion-col col-2>{{ check.product.size }}</ion-col>\n\n      <ion-col col-2>{{ check.onHand }}</ion-col>\n\n      <ion-col col-2></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row margin-top class="header-row">\n\n      <ion-col><p>Sales Report</p></ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="visit.stock.length === 0">\n\n      <p>No data to display</p>\n\n    </ion-row>\n\n    <ion-row class="total-row">\n\n      <ion-col col-6>Product</ion-col>\n\n      <ion-col col-2>Size</ion-col>\n\n      <ion-col col-2>Sold</ion-col>\n\n      <ion-col col-2>Value</ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let check of visit.stock | stock: \'eod\'">\n\n      <ion-col col-6>{{ check.product.description }}</ion-col>\n\n      <ion-col col-2>{{ check.product.size }}</ion-col>\n\n      <ion-col col-2>{{ check.qtySold }}</ion-col>\n\n      <ion-col col-2>£{{ (check.qtySold * check.product.retailPrice) | number: \'1.2-2\' }}</ion-col>\n\n    </ion-row>\n\n    <ion-row class="total-row">\n\n      <ion-col col-6></ion-col>\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-2>£{{ totalSales() | number: \'1.2-2\' }}</ion-col>\n\n    </ion-row>\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\visit-report\visit-report-modal.view.html"*/,
            selector: 'page-visit-report-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], VisitReportModal);
    return VisitReportModal;
}());

//# sourceMappingURL=visit-report-modal.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var VisitFilterPipe = /** @class */ (function () {
    function VisitFilterPipe() {
    }
    VisitFilterPipe.prototype.transform = function (visits, params) {
        var userInput = params.userInput;
        var showCompleted = params.showCompleted;
        var showScheduled = params.showScheduled;
        var checked = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](visits, function (visit) {
            if (visit.state == 'Checked In') {
                return true;
            }
        });
        var filtered = __WEBPACK_IMPORTED_MODULE_1_lodash__["concat"](checked, __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](visits, function (visit) {
            if (showCompleted && visit.state == 'Completed') {
                return true;
            }
        }));
        var final = __WEBPACK_IMPORTED_MODULE_1_lodash__["concat"](filtered, __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](visits, function (visit) {
            if (showScheduled && visit.state == 'Scheduled') {
                return true;
            }
        }));
        visits = __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](final, function (visit) {
            if (userInput == '' || !userInput) {
                return true;
            }
            return (visit.retailer.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
                || visit.user.firstName.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
                || visit.user.lastName.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
                || visit.brand.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
                || visit.location.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase()));
        });
        return visits;
    };
    VisitFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'searchVisits'
        })
    ], VisitFilterPipe);
    return VisitFilterPipe;
}());

//# sourceMappingURL=visit-filter.pipe.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionChecklistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visit_action_visit_action_modal_component__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_check_stock_check_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActionChecklistComponent = /** @class */ (function () {
    function ActionChecklistComponent(alertCtrl, modalCtrl, navParams, view) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.view = view;
        this.activeVisit = this.navParams.get('visit');
    }
    ActionChecklistComponent.prototype.recordManagerName = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Record Contact Name',
            message: "Enter a name for a store contact",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Fred Bloggs',
                    value: this.activeVisit.siteContact
                },
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.activeVisit.siteContact = data.name;
                    }
                }
            ]
        });
        prompt.present();
    };
    ActionChecklistComponent.prototype.recordVisitNotes = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__visit_action_visit_action_modal_component__["a" /* VisitActionModal */], { notes: this.activeVisit.visitNotes });
        modal.onDidDismiss(function (data) {
            if (data && data.notes) {
                _this.activeVisit.visitNotes = data.notes;
            }
        });
        modal.present();
    };
    ActionChecklistComponent.prototype.recordStockCheck = function (endOfDay) {
        var _this = this;
        var stock = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__stock_check_stock_check_component__["a" /* StockCheckModal */], { visit: this.activeVisit, sales: endOfDay });
        stock.onDidDismiss(function (data) {
            if (data && data.stockCheck) {
                _this.activeVisit.stock = data.stockCheck;
            }
        });
        stock.present();
    };
    ActionChecklistComponent.prototype.endOfDayComplete = function () {
        var complete = false;
        if (this.activeVisit.stock) {
            this.activeVisit.stock.forEach(function (item) {
                if (item.onHand != null || item.onHand == 0) {
                    complete = item.qtySold != null || item.onHand == 0;
                }
            });
            return complete;
        }
        else {
            return false;
        }
    };
    ActionChecklistComponent.prototype.stockcheckComplete = function () {
        console.log(this.activeVisit);
        if (this.activeVisit.stock) {
            for (var _i = 0, _a = this.activeVisit.stock; _i < _a.length; _i++) {
                var item = _a[_i];
                return item.onHand != null;
            }
        }
        else {
            return false;
        }
    };
    ActionChecklistComponent.prototype.checkOut = function (visit) {
        var _this = this;
        if (!this.activeVisit) {
            this.alertCtrl.create({
                title: 'Not checked in',
                message: "You are not checked in, please check-in and try again.",
                buttons: [
                    { text: 'OK' }
                ]
            }).present();
        }
        else {
            var checkOutTime_1 = __WEBPACK_IMPORTED_MODULE_4_moment__().utc();
            var confirm_1 = this.alertCtrl.create({
                title: "Confirm Check-out",
                message: "Are you sure you want to check-out now, the time recorded will be " + checkOutTime_1.local().format('DD/MM/YYYY HH:mm Z'),
                buttons: [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            visit.actualDeparture = checkOutTime_1.utc();
                            _this.saveVisit();
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    ActionChecklistComponent.prototype.saveVisit = function () {
        this.view.dismiss(this.activeVisit);
    };
    ActionChecklistComponent.prototype.dismiss = function () {
        this.view.dismiss();
    };
    ActionChecklistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-action-checklist',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\check-in\action-checklist.view.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Record Visit Actions\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Visit Info\n\n        </ion-list-header>\n\n        <ion-item>\n\n          <ion-icon name="basket" item-start></ion-icon>{{ activeVisit?.retailer.name }}\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="brush" item-start></ion-icon>{{ activeVisit?.brand.name }}\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="navigate" item-start></ion-icon>\n\n          {{ activeVisit?.location.name }}\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="time" item-start></ion-icon>\n\n           Arrived {{ activeVisit?.actualArrival | amLocal | amDateFormat: \'DD/MM/YYYY HH:mm Z\' }}\n\n        </ion-item>\n\n\n\n        <ion-list-header>\n\n          Visit Actions\n\n        </ion-list-header>\n\n        <button ion-item (click)="recordStockCheck()">\n\n          <ion-icon name="radio-button-on" color="secondary" item-start></ion-icon>\n\n          Stock Check\n\n        </button>\n\n\n\n        <button ion-item (click)="recordStockCheck(true)">\n\n          <ion-icon name="radio-button-on" color="secondary" item-start></ion-icon>\n\n          End of Day Sales\n\n        </button>\n\n\n\n        <button ion-item (click)="recordVisitNotes()">\n\n          <ion-icon name="radio-button-on" color="secondary" item-start></ion-icon>\n\n          Notes\n\n        </button>\n\n\n\n        <button ion-item no-lines (click)="checkOut(activeVisit)">\n\n          <ion-icon name="time" color="primary" item-start></ion-icon>\n\n          Checkout\n\n        </button>\n\n\n\n      </ion-list>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-buttons>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button icon-left color="secondary" (click)="saveVisit()" float-right>\n\n            <ion-icon name="checkmark" color></ion-icon>\n\n            Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-buttons>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\check-in\action-checklist.view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ViewController */]])
    ], ActionChecklistComponent);
    return ActionChecklistComponent;
}());

//# sourceMappingURL=action-checklist.component.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitActionModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisitActionModal = /** @class */ (function () {
    function VisitActionModal(view, navParams) {
        this.view = view;
        this.navParams = navParams;
        this.notes = '';
        if (this.navParams.get('notes')) {
            this.notes = this.navParams.get('notes');
        }
    }
    VisitActionModal.prototype.save = function () {
        this.view.dismiss({ notes: this.notes });
    };
    VisitActionModal.prototype.dismiss = function () {
        this.view.dismiss();
    };
    VisitActionModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\visit-action\visit-action-modal.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>\n      Record Visit Actions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item no-lines>\n      <ion-textarea placeholder="Enter a description of the activities conducted in store..." [(ngModel)]="notes"\n                    rows="10"></ion-textarea>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left color="secondary" (click)="save()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\visit-action\visit-action-modal.view.html"*/,
            selector: 'page-visit-action-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], VisitActionModal);
    return VisitActionModal;
}());

//# sourceMappingURL=visit-action-modal.component.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockCheckModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_products_products_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockCheckModal = /** @class */ (function () {
    function StockCheckModal(navParams, view, error, loading, productService) {
        this.navParams = navParams;
        this.view = view;
        this.error = error;
        this.loading = loading;
        this.productService = productService;
        this.endOfDay = false;
        if (this.navParams.get('visit')) {
            this.visit = this.navParams.get('visit');
            this.endOfDay = this.navParams.get('sales');
            if (!this.visit.stock) {
                this.visit.stock = [];
            }
            if (this.visit.stock.length == 0) {
                this.getProducts();
            }
        }
    }
    StockCheckModal.prototype.getProducts = function () {
        var _this = this;
        var loading = this.loading.create({ content: 'Loading products... ' });
        loading.present();
        this.productService.getProductsByBrand(this.visit.brand)
            .subscribe(function (products) {
            products.forEach(function (product) {
                var stock = {
                    productId: product.id,
                    visitId: _this.visit.id,
                    product: product,
                    onHand: 0,
                    qtySold: 0,
                    price: product.retailPrice
                };
                _this.visit.stock.push(stock);
            });
            loading.dismiss();
        }, function (error) {
            _this.error.showAlert('Could not load products', error.error.message);
            loading.dismiss();
        });
    };
    StockCheckModal.prototype.saveStock = function () {
        this.view.dismiss({ stockCheck: this.visit.stock });
    };
    StockCheckModal.prototype.dismiss = function () {
        this.view.dismiss();
    };
    StockCheckModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\stock-check\stock-check.view.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Close</button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      {{ endOfDay ? \'Record Sales\' : \'Record Inventory\' }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n        <ion-grid no-padding>\n\n          <ion-row class="header-row">\n\n            <ion-col col-9>Item</ion-col>\n\n            <ion-col col-3>{{ endOfDay ? \'Qty Sold\' : \'On Hand\' }}</ion-col>\n\n          </ion-row>\n\n          <ion-row class="row" *ngFor="let item of visit.stock | stockSold: endOfDay">\n\n            <ion-col col-9>\n\n              <p><b>{{item.product.description}}</b> {{item.product.size}}<br/>\n\n              SKU {{item.product.sku}} / {{item.product.barcode}}</p>\n\n            </ion-col>\n\n            <ion-col col-3 align-self-center>\n\n              <ion-input item-end class="stock-input" no-padding *ngIf="!endOfDay" type="number" placeholder="0" [(ngModel)]="item.onHand"></ion-input>\n\n              <ion-input item-end class="stock-input" no-padding *ngIf="endOfDay" type="number" placeholder="0" [(ngModel)]="item.qtySold"></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-buttons>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button icon-left color="secondary" (click)="saveStock()" float-right>\n\n            <ion-icon name="checkmark" color></ion-icon>\n\n            Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-buttons>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\stock-check\stock-check.view.html"*/,
            selector: 'page-stock-check-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__admin_products_products_service__["a" /* ProductsService */]])
    ], StockCheckModal);
    return StockCheckModal;
}());

//# sourceMappingURL=stock-check.component.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCompleteComponent = /** @class */ (function () {
    function EditCompleteComponent(navParams, view, scheduleService, toast, loading) {
        this.navParams = navParams;
        this.view = view;
        this.scheduleService = scheduleService;
        this.toast = toast;
        this.loading = loading;
        this.visit = this.navParams.get('visit');
        this.visit.actualArrival = __WEBPACK_IMPORTED_MODULE_2_moment__(this.visit.actualArrival).local().toISOString(true);
        this.visit.actualDeparture = __WEBPACK_IMPORTED_MODULE_2_moment__(this.visit.actualDeparture).local().toISOString(true);
    }
    EditCompleteComponent.prototype.timeSpent = function (arrival, departure) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__(arrival).diff(departure, 'hours', true).toFixed(2);
    };
    EditCompleteComponent.prototype.dismiss = function () {
        this.view.dismiss();
    };
    EditCompleteComponent.prototype.totalSales = function () {
        var total = 0;
        for (var _i = 0, _a = this.visit.stock; _i < _a.length; _i++) {
            var check = _a[_i];
            total += check.qtySold * check.product.retailPrice;
        }
        return total;
    };
    EditCompleteComponent.prototype.saveVisit = function () {
        var _this = this;
        this.visit.actualArrival = __WEBPACK_IMPORTED_MODULE_2_moment__(this.visit.actualArrival).utc().toString();
        this.visit.actualDeparture = __WEBPACK_IMPORTED_MODULE_2_moment__(this.visit.actualDeparture).utc().toString();
        var loading = this.loading.create({ content: 'Checking in...' });
        loading.present();
        this.scheduleService.editVisit(this.visit)
            .subscribe(function (success) {
            if (success) {
                loading.dismiss();
                _this.toast.create({
                    message: 'Visit updated successfully',
                    duration: 3000,
                    position: 'top'
                }).present();
            }
        }, function (error) {
            loading.dismiss();
            _this.toast.create({
                message: 'Could not update visit',
                duration: 3000,
                position: 'top'
            }).present();
        });
    };
    EditCompleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-complete',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\edit-complete-visit\edit.complete.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Visit Editor\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n  <ion-grid no-padding>\n\n\n\n    <ion-row class="header-row">\n\n      <ion-col><p>Visit Details</p></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Name</b></ion-col>\n\n      <ion-col col-9>{{ visit.user.firstName + \' \' + visit.user.lastName }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Brand</b></ion-col>\n\n      <ion-col col-9>{{ visit.brand.name }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Location</b></ion-col>\n\n      <ion-col col-4>{{ visit.location.name }}</ion-col>\n\n      <ion-col col-5>{{ visit.location.type }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Retailer</b></ion-col>\n\n      <ion-col col-4>{{ visit.retailer.name }}</ion-col>\n\n      <ion-col col-5>{{ visit.retailer.type }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row margin-top class="header-row">\n\n      <ion-col><p>Time Reporting (Local time)</p></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Check In</b></ion-col>\n\n      <ion-col col-9> <ion-datetime displayFormat="DD-MMM-YYYY HH:mm" pickerFormat="DD MMM YY HH mm" [(ngModel)]="visit.actualArrival"></ion-datetime></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Check Out</b></ion-col>\n\n      <ion-col col-9> <ion-datetime displayFormat="DD-MMM-YYYY HH:mm" pickerFormat="DD MMM YY HH mm" [(ngModel)]="visit.actualDeparture"></ion-datetime></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row margin-top class="header-row">\n\n      <ion-col><p>Stock Check</p></ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="visit.stock.length === 0">\n\n      <p>No data to display</p>\n\n    </ion-row>\n\n    <ion-row class="total-row">\n\n      <ion-col col-8>Product</ion-col>\n\n      <ion-col col-2>Size</ion-col>\n\n      <ion-col col-2>On Hand</ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let check of visit.stock">\n\n      <ion-col col-8>{{ check.product.description }}</ion-col>\n\n      <ion-col col-2>{{ check.product.size }}</ion-col>\n\n      <ion-col col-2><ion-input type="number" [(ngModel)]="check.onHand"></ion-input></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row margin-top class="header-row">\n\n      <ion-col><p>Sales Report</p></ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="visit.stock.length === 0">\n\n      <p>No data to display</p>\n\n    </ion-row>\n\n    <ion-row class="total-row">\n\n      <ion-col col-6>Product</ion-col>\n\n      <ion-col col-2>Size</ion-col>\n\n      <ion-col col-2>Sold</ion-col>\n\n      <ion-col col-2>Value</ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let check of visit.stock">\n\n      <ion-col col-6>{{ check.product.description }}</ion-col>\n\n      <ion-col col-2>{{ check.product.size }}</ion-col>\n\n      <ion-col col-2><ion-input type="number" [(ngModel)]="check.qtySold"></ion-input></ion-col>\n\n      <ion-col col-2>£{{ (check.qtySold * check.product.retailPrice) | number: \'1.2-2\' }}</ion-col>\n\n    </ion-row>\n\n    <ion-row class="total-row">\n\n      <ion-col col-6></ion-col>\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-2>£{{ totalSales() | number: \'1.2-2\' }}</ion-col>\n\n    </ion-row>\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-buttons>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button icon-left color="secondary" (click)="saveVisit()" float-right>\n\n            <ion-icon name="checkmark" color></ion-icon>\n\n            Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-buttons>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\edit-complete-visit\edit.complete.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], EditCompleteComponent);
    return EditCompleteComponent;
}());

//# sourceMappingURL=edit-complete.component.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_expense_modal__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExpensesModal = /** @class */ (function () {
    function ExpensesModal(navParams, view, modal, scheduleService, nav, loading, error, authService) {
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
        this.scheduleService = scheduleService;
        this.nav = nav;
        this.loading = loading;
        this.error = error;
        this.authService = authService;
        this.visit = this.navParams.get('visit');
    }
    ExpensesModal.prototype.isAdmin = function () {
        if (this.authService.isLoggedIn()) {
            return this.authService.isAdmin();
        }
        else {
            return false;
        }
    };
    ExpensesModal.prototype.showDialogToAdd = function () {
        var _this = this;
        this.newExpense = true;
        var newExpense = {
            amount: 0,
            description: '',
            expenseDate: __WEBPACK_IMPORTED_MODULE_2_moment__(this.visit.actualArrival).format('YYYY-MM-DD'),
            visitId: this.visit.id
        };
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__new_expense_modal__["a" /* NewExpenseModal */], { expense: newExpense }, { enableBackdropDismiss: false });
        modal.onDidDismiss(function (data) {
            if (data.expense && !data.delete) {
                _this.expense = data.expense;
                _this.save();
            }
        });
        modal.present();
    };
    ExpensesModal.prototype.onRowSelect = function (event) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__new_expense_modal__["a" /* NewExpenseModal */], { expense: event.data }, { enableBackdropDismiss: false });
        modal.onDidDismiss(function (data) {
            if (data.expense && !data.delete) {
                _this.expense = data.expense;
            }
            else if (data.expense && data.delete) {
                _this.delete(data.expense);
            }
        });
        modal.present();
    };
    ExpensesModal.prototype.save = function () {
        var expenses = this.visit.expenses.slice();
        if (this.newExpense)
            expenses.push(this.expense);
        else
            expenses[this.visit.expenses.indexOf(this.selectedExpense)] = this.expense;
        this.visit.expenses = expenses;
        this.expense = null;
        this.displayDialog = false;
    };
    ExpensesModal.prototype.delete = function (expense) {
        var index = this.visit.expenses.indexOf(expense);
        this.visit.expenses = this.visit.expenses.filter(function (val, i) { return i != index; });
        this.expense = null;
        this.displayDialog = false;
    };
    ExpensesModal.prototype.dismiss = function () {
        this.view.dismiss();
    };
    ExpensesModal.prototype.saveAndClose = function () {
        var _this = this;
        var loading = this.loading.create({ content: 'Checking in...' });
        loading.present();
        this.scheduleService.editVisit(this.visit)
            .subscribe(function (success) {
            if (success) {
                _this.nav.popToRoot();
                loading.dismiss();
            }
        }, function (error) {
            loading.dismiss();
            _this.error.showAlert('Could not update expenses', error.error.message);
        });
    };
    ExpensesModal.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'expenseDate', header: 'Date' },
            { field: 'description', header: 'Description' },
            { field: 'amount', header: 'Amount' },
        ];
    };
    ExpensesModal.prototype.expensesTotal = function () {
        var total = 0;
        this.visit.expenses.forEach(function (ex) {
            total = +total + +ex.amount;
        });
        return total;
    };
    ExpensesModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\expenses\expenses-modal.view.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Expenses\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n\n\n  <ion-grid no-padding>\n\n\n\n    <ion-row class="header-row">\n\n      <ion-col><p>Visit Details</p></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Name</b></ion-col>\n\n      <ion-col col-9>{{ visit.user.firstName + \' \' + visit.user.lastName }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Brand</b></ion-col>\n\n      <ion-col col-9>{{ visit.brand.name }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Location</b></ion-col>\n\n      <ion-col col-4>{{ visit.location.name }}</ion-col>\n\n      <ion-col col-5>{{ visit.location.type }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-3><b>Retailer</b></ion-col>\n\n      <ion-col col-4>{{ visit.retailer.name }}</ion-col>\n\n      <ion-col col-5>{{ visit.retailer.type }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row margin-top class="header-row">\n\n      <ion-col><p>Time Reporting (Local time)</p></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6><b>Scheduled</b></ion-col>\n\n      <ion-col col-3>{{ visit.scheduledArrival | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n\n      <ion-col col-3></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6><b>Check In</b></ion-col>\n\n      <ion-col col-3>{{ visit.actualArrival | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n\n      <ion-col col-3>{{ visit.actualArrival | amLocal | amDateFormat: \'HH:mm Z\' }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6><b>Check Out</b></ion-col>\n\n      <ion-col col-3>{{ visit.actualDeparture | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n\n      <ion-col col-3>{{ visit.actualDeparture | amLocal | amDateFormat: \'HH:mm Z\' }}</ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row class="header-row" margin-top>\n\n      <ion-col><p>Expense Report</p></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <p-table [columns]="cols" [value]="visit.expenses" selectionMode="single" [(selection)]="selectedExpense"\n\n           (onRowSelect)="onRowSelect($event)">\n\n    <ng-template pTemplate="caption">\n\n      Click row to edit or delete\n\n    </ng-template>\n\n    <ng-template pTemplate="header" let-columns>\n\n      <tr>\n\n        <th *ngFor="let col of columns" [pSortableColumn]="col.field">\n\n          {{col.header}}\n\n        </th>\n\n      </tr>\n\n    </ng-template>\n\n    <ng-template pTemplate="body" let-rowData let-columns="columns">\n\n      <tr [pSelectableRow]="rowData">\n\n        <td>\n\n          {{ rowData[\'expenseDate\'] | amLocal | amDateFormat: \'DD/MM/YY\' }}\n\n        </td>\n\n        <td>\n\n          {{ rowData[\'description\'] }}\n\n        </td>\n\n        <td>\n\n          £{{ rowData[\'amount\'] | number: \'1.2-2\'}}\n\n        </td>\n\n      </tr>\n\n    </ng-template>\n\n    <ng-template pTemplate="footer">\n\n      <tr>\n\n        <td>Total</td>\n\n        <td></td>\n\n        <td>\n\n          £{{ expensesTotal() | number: \'1.2-2\' }}\n\n        </td>\n\n      </tr>\n\n    </ng-template>\n\n    <ng-template pTemplate="summary" let-rowData>\n\n      <div style="text-align:left">\n\n        <button ion-button icon-end (click)="showDialogToAdd()">Add\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </div>\n\n    </ng-template>\n\n\n\n  </p-table>\n\n\n\n  <ion-grid no-padding>\n\n    <ion-row class="header-row" margin-top>\n\n      <ion-col><p>Travel Report</p></ion-col>\n\n    </ion-row>\n\n    <ion-row class="total-row">\n\n      <ion-col col-4>Time</ion-col>\n\n      <ion-col col-4>Rate</ion-col>\n\n      <ion-col col-4>Total</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <ion-input type="number" [(ngModel)]="visit.travelTime"></ion-input>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <ion-label>£{{ visit.travelRate | number: \'1.2-2\' }}</ion-label>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <ion-label>£{{ visit.travelRate * visit.travelTime | number: \'1.2-2\' }}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="isAdmin()" class="header-row" margin-top>\n\n      <ion-col><p>Expense Management</p></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-list *ngIf="isAdmin()">\n\n    <ion-item>\n\n      <ion-label>Approved Expenses</ion-label>\n\n      <ion-toggle [(ngModel)]="visit.approvedExpenses"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Paid Expenses</ion-label>\n\n      <ion-toggle [(ngModel)]="visit.paidExpenses"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-buttons>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button icon-left color="secondary" (click)="saveAndClose()" float-right>\n\n            <ion-icon name="checkmark" color></ion-icon>\n\n            Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-buttons>\n\n</ion-footer>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\expenses\expenses-modal.view.html"*/,
            selector: 'page-expenses-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__["a" /* AuthService */]])
    ], ExpensesModal);
    return ExpensesModal;
}());

//# sourceMappingURL=expenses-modal.component.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewExpenseModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewExpenseModal = /** @class */ (function () {
    function NewExpenseModal(navParms, view) {
        this.navParms = navParms;
        this.view = view;
        this.expense = this.navParms.get('expense');
    }
    NewExpenseModal.prototype.save = function () {
        this.view.dismiss({ expense: this.expense, delete: false });
    };
    NewExpenseModal.prototype.deleteExpense = function () {
        this.view.dismiss({ expense: this.expense, delete: true });
    };
    NewExpenseModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-expense-modal',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\expenses\new-expense-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{ expense.description == \'\' ? \'New Expense\' : \'Edit Expense\'}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n<ion-list>\n\n  <ion-item>\n\n    <ion-label color="primary" stacked>Date</ion-label>\n\n    <ion-datetime [(ngModel)]="expense.expenseDate"></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" stacked>Description</ion-label>\n\n    <ion-input type="text" [(ngModel)]="expense.description"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" stacked>Amount</ion-label>\n\n    <ion-input type="number" [(ngModel)]="expense.amount"></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-buttons>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button icon-left color="danger" (click)="deleteExpense()">\n\n            <ion-icon name="trash" color></ion-icon>\n\n            Delete\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button icon-left color="secondary" (click)="save()" float-right>\n\n            <ion-icon name="checkmark" color></ion-icon>\n\n            Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-buttons>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\expenses\new-expense-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], NewExpenseModal);
    return NewExpenseModal;
}());

//# sourceMappingURL=new-expense-modal.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_modal__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsPage = /** @class */ (function () {
    function ProductsPage(productService, modalCtrl, errorAlert, loadingCtrl) {
        this.productService = productService;
        this.modalCtrl = modalCtrl;
        this.errorAlert = errorAlert;
        this.loadingCtrl = loadingCtrl;
        this.products = [];
        this.getAll();
    }
    ProductsPage.prototype.create = function () {
        var _this = this;
        var createModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__product_modal__["a" /* ProductModal */], { edit: false });
        createModal.onDidDismiss(function (results) {
            if (results) {
                _this.products.push(results.product);
            }
        });
        createModal.present();
    };
    ProductsPage.prototype.openProduct = function (product) {
        var _this = this;
        var createModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__product_modal__["a" /* ProductModal */], { product: product, edit: true });
        createModal.onDidDismiss(function (results) {
            if (results && results.edited) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["pull"](_this.products, product);
                _this.products.push(results.product);
            }
            if (results && results.deleted) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["pull"](_this.products, product);
            }
        });
        createModal.present();
    };
    ProductsPage.prototype.getAll = function (refresher) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting products...' });
        loading.present();
        this.productService.getProducts()
            .subscribe(function (products) {
            if (products) {
                _this.products = products;
                if (refresher) {
                    refresher.complete();
                }
            }
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not edit product', error.error.message);
            if (refresher) {
                refresher.complete();
            }
            loading.dismiss();
        });
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\products\products.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Products</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <!--ACTION FAB BUTTON-->\n  <ion-fab bottom right>\n    <button ion-fab color="secondary" (click)="create()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n  <!--LIST WITH SLIDING ITEMS AND ACTIONS-->\n  <ion-list>\n    <ion-item *ngFor="let product of products" (click)="openProduct(product)">\n      <h2>{{ product.description }}</h2>\n      <p>{{ product.sku }} | {{ product.brand.name }}\n        <ion-badge item-end>{{ product.size }}</ion-badge>\n      </p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\products\products.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brand_brands_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductModal = /** @class */ (function () {
    function ProductModal(navParams, fb, loadingCtrl, viewCtrl, errorAlert, alertCtrl, productService, brandsService) {
        this.navParams = navParams;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.errorAlert = errorAlert;
        this.alertCtrl = alertCtrl;
        this.productService = productService;
        this.brandsService = brandsService;
        this.brands = [];
        // Grab the account object passed in from the caller
        this.product = this.navParams.get('product');
        this.edit = this.navParams.get('edit');
        // Get all brands for the dropdown menu
        this.getAllBrands();
        // Initialise form
        this.initialiseForm(this.product);
    }
    ProductModal.prototype.initialiseForm = function (product) {
        this.productForm = this.fb.group({
            sku: [product ? product.sku : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
                ])],
            description: [product ? product.description : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(50)
                ])],
            size: [product ? product.size : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)
                ])],
            promoCode: [product ? product.promoCode : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)
                ])],
            brand: [product ? product.brand.id : null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ])],
            retailPrice: [product ? product.retailPrice : 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].min(0),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].max(99999.99)
                ])],
        });
    };
    ProductModal.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Saving product...' });
        loading.present();
        if (this.edit) {
            this.product = Object.assign(this.product, this.productForm.getRawValue());
            this.product.brand = this.brands.find(function (brand) { return brand.id == _this.productForm.controls.brand.value; });
            this.productService.updateProduct(this.product)
                .subscribe(function (updatedProduct) {
                loading.dismiss();
                _this.viewCtrl.dismiss({ product: updatedProduct, edited: _this.edit });
            }, function (error) {
                loading.dismiss();
                _this.errorAlert.showAlert('Could not edit product', error.error.message);
            });
        }
        if (!this.edit) {
            this.product = this.productForm.getRawValue();
            this.product.brand = this.brands.find(function (brand) { return brand.id == _this.productForm.controls.brand.value; });
            this.productService.addProduct(this.product)
                .subscribe(function (createdProduct) {
                loading.dismiss();
                _this.viewCtrl.dismiss({ product: createdProduct, edited: _this.edit });
            }, function (error) {
                loading.dismiss();
                _this.errorAlert.showAlert('Could not add new product', error.error.message);
            });
        }
    };
    ProductModal.prototype.delete = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Deleting product...' });
        var confirm = this.alertCtrl.create({
            title: "Confirm delete",
            message: "Are you sure you want to delete " + this.product.description + ", you will not be able to undo this action?",
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Yes, delete it!',
                    handler: function () {
                        loading.present();
                        _this.productService.deleteProduct(_this.product)
                            .subscribe(function () {
                            _this.viewCtrl.dismiss({ brand: _this.product, deleted: true });
                            loading.dismiss();
                        }, function (error) {
                            _this.errorAlert.showAlert('Could not delete product', error.error.message);
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ProductModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProductModal.prototype.getAllBrands = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting brands...' });
        loading.present();
        this.brandsService.getBrands()
            .subscribe(function (brands) {
            if (brands) {
                _this.brands = brands;
            }
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not edit brand', error.error.message);
            loading.dismiss();
        });
    };
    ProductModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-product',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\products\product-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>\n      {{ brand ? \'Edit \' + product.description : \'Create New Product\' }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="productForm" novalidate>\n\n    <ion-item>\n      <ion-label>SKU</ion-label>\n      <ion-input type="text" formControlName="sku"></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="productForm.get(\'sku\').hasError(\'maxlength\')">\n        Must be less than 20 characters.\n      </span>\n    <span class="error" *ngIf="productForm.get(\'sku\').hasError(\'minlength\')">\n        Must be more than 2 characters.\n      </span>\n    <span class="error" *ngIf="productForm.get(\'sku\').hasError(\'required\')\n      && productForm.get(\'sku\').touched">\n        Product SKU is required.\n      </span>\n\n\n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-input type="text" formControlName="description"></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="productForm.get(\'description\').hasError(\'maxlength\')">\n        Must be less than 50 characters.\n      </span>\n    <span class="error" *ngIf="productForm.get(\'description\').hasError(\'minlength\')">\n        Must be more than 2 characters.\n      </span>\n    <span class="error" *ngIf="productForm.get(\'description\').hasError(\'required\')\n      && productForm.get(\'description\').touched">\n        Product description is required.\n      </span>\n\n    <ion-item>\n      <ion-label>Size</ion-label>\n      <ion-input type="text" formControlName="size"></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="productForm.get(\'size\').hasError(\'maxlength\')">\n        Must be less than 10 characters.\n      </span>\n    <span class="error" *ngIf="productForm.get(\'size\').hasError(\'minlength\')">\n        Must be more than 1 characters.\n      </span>\n    <span class="error" *ngIf="productForm.get(\'size\').hasError(\'required\')\n      && productForm.get(\'size\').touched">\n        Product size is required.\n      </span>\n\n\n\n    <ion-item>\n      <ion-label>Brand</ion-label>\n      <ion-select formControlName="brand">\n        <ion-option *ngFor="let brand of brands" [value]="brand.id">{{ brand.name }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <span class="error" *ngIf="productForm.get(\'brand\').hasError(\'required\')\n      && productForm.get(\'brand\').touched">\n        Product brand is required.\n      </span>\n\n\n    <ion-item>\n      <ion-label>Retail Price</ion-label>\n      <ion-input type="text" formControlName="retailPrice"></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="productForm.get(\'retailPrice\').hasError(\'min\')">\n        Price cannot be less than 0.00\n      </span>\n    <span class="error" *ngIf="productForm.get(\'retailPrice\').hasError(\'max\')">\n        Price cannot be more than 99999.99\n      </span>\n\n    <ion-item>\n      <ion-label>Promo Code</ion-label>\n      <ion-input type="text" formControlName="promoCode"></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="productForm.get(\'promoCode\').hasError(\'maxlength\')">\n        Must be less than 10 characters.\n      </span>\n\n\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button *ngIf="product" ion-button icon-left color="danger" (click)="delete()">\n            <ion-icon name="trash" color></ion-icon>\n            Delete\n          </button>\n        </ion-col>\n        <ion-col>\n          <button [disabled]="!productForm.valid" ion-button icon-left color="secondary" (click)="save()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\products\product-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_4__brand_brands_service__["a" /* BrandsService */]])
    ], ProductModal);
    return ProductModal;
}());

//# sourceMappingURL=product-modal.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brands_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brand_modal__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BrandsPage = /** @class */ (function () {
    function BrandsPage(brandService, modalCtrl, errorAlert, loadingCtrl) {
        this.brandService = brandService;
        this.modalCtrl = modalCtrl;
        this.errorAlert = errorAlert;
        this.loadingCtrl = loadingCtrl;
        this.brands = [];
        this.getAll();
    }
    BrandsPage.prototype.create = function () {
        var _this = this;
        var createModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__brand_modal__["a" /* BrandModal */], { edit: false });
        createModal.onDidDismiss(function (results) {
            if (results) {
                _this.brands.push(results.brand);
            }
        });
        createModal.present();
    };
    BrandsPage.prototype.openBrand = function (brand) {
        var _this = this;
        var createModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__brand_modal__["a" /* BrandModal */], { brand: brand, edit: true });
        createModal.onDidDismiss(function (results) {
            if (results && results.edited) {
                __WEBPACK_IMPORTED_MODULE_3_lodash__["pull"](_this.brands, brand);
                _this.brands.push(results.brand);
            }
            if (results && results.deleted) {
                __WEBPACK_IMPORTED_MODULE_3_lodash__["pull"](_this.brands, brand);
            }
        });
        createModal.present();
    };
    BrandsPage.prototype.getAll = function (refresher) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting brands...' });
        loading.present();
        this.brandService.getBrands()
            .subscribe(function (brands) {
            if (brands) {
                _this.brands = brands;
                if (refresher) {
                    refresher.complete();
                }
            }
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not edit brand', error.error.message);
            if (refresher) {
                refresher.complete();
            }
            loading.dismiss();
        });
    };
    BrandsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-brands',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\brand\brands.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Brands</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-refresher (ionRefresh)="getAll($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n\n  <!--ACTION FAB BUTTON-->\n  <ion-fab bottom right>\n    <button ion-fab color="secondary" (click)="create()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n  <!--LIST WITH SLIDING ITEMS AND ACTIONS-->\n  <ion-list>\n    <button ion-item *ngFor="let brand of brands" (click)="openBrand(brand)">\n      {{ brand?.name }}\n      <ion-badge color="primary" item-right>\n        <ion-icon name="cube"></ion-icon>\n        {{ brand.products ? brand.products.length : 0 }}</ion-badge>\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\brand\brands.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__brands_service__["a" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], BrandsPage);
    return BrandsPage;
}());

//# sourceMappingURL=brands.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brands_service__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrandModal = /** @class */ (function () {
    function BrandModal(navParams, fb, viewCtrl, loadingCtrl, alertCtrl, errorAlert, brandService) {
        this.navParams = navParams;
        this.fb = fb;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.errorAlert = errorAlert;
        this.brandService = brandService;
        this.brand = null;
        //Grab the account object passed in from the caller
        this.brand = this.navParams.get('brand');
        this.edit = this.navParams.get('edit');
        //Initialise form
        this.initialiseForm(this.brand);
    }
    BrandModal.prototype.initialiseForm = function (brand) {
        this.brandForm = this.fb.group({
            name: [brand ? brand.name : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
                ])]
        });
    };
    BrandModal.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Saving brand...' });
        loading.present();
        if (!this.edit) {
            this.brand = {
                name: this.brandForm.controls.name.value
            };
        }
        else {
            this.brand.name = this.brandForm.controls.name.value;
        }
        console.log(this.brand);
        if (this.edit) {
            this.brandService.editBrand(this.brand)
                .subscribe(function (createdBrand) {
                loading.dismiss();
                _this.viewCtrl.dismiss({ brand: createdBrand, edited: _this.edit });
            }, function (error) {
                loading.dismiss();
                _this.errorAlert.showAlert('Could not edit brand', error.error.message);
            });
        }
        if (!this.edit) {
            this.brandService.addBrand(this.brand)
                .subscribe(function (createdBrand) {
                loading.dismiss();
                _this.viewCtrl.dismiss({ brand: createdBrand, edited: _this.edit });
            }, function (error) {
                loading.dismiss();
                _this.errorAlert.showAlert('Could not add new brand', error.error.message);
            });
        }
    };
    BrandModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BrandModal.prototype.delete = function (brand) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Deleting brand...' });
        var confirm = this.alertCtrl.create({
            title: "Confirm delete",
            message: "Are you sure you want to delete " + this.brand.name + ", you will not be able to undo this action?",
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Yes, delete it!',
                    handler: function () {
                        loading.present();
                        _this.brandService.deleteBrand(_this.brand)
                            .subscribe(function () {
                            _this.viewCtrl.dismiss({ brand: _this.brand, deleted: true });
                            loading.dismiss();
                        }, function (error) {
                            _this.errorAlert.showAlert('Could not delete brand', error.error.message);
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    BrandModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal-brand',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\brand\brand-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Close</button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      {{ brand ? \'Edit \' + brand.name : \'Create New Brand\' }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]="brandForm" novalidate>\n\n    <ion-item-divider>\n\n      Brand Details\n\n    </ion-item-divider>\n\n    <ion-item>\n\n      <ion-label>Brand Name</ion-label>\n\n      <ion-input type="text" formControlName="name" placeholder="Give the brand name..."></ion-input>\n\n    </ion-item>\n\n    <span class="error" *ngIf="brandForm.get(\'name\').hasError(\'maxlength\')">\n\n        Must be less than 20 characters.\n\n      </span>\n\n    <span class="error" *ngIf="brandForm.get(\'name\').hasError(\'minlength\')">\n\n        Must be more than 2 characters.\n\n      </span>\n\n    <span class="error" *ngIf="brandForm.get(\'name\').hasError(\'required\')\n\n      && brandForm.get(\'name\').touched">\n\n        Brand name is required.\n\n      </span>\n\n  </form>\n\n\n\n  <div *ngIf="brand">\n\n    <ion-item-divider>\n\n      Linked Products\n\n    </ion-item-divider>\n\n    <ion-list>\n\n      <ion-item *ngIf="!brand.products">There are no products linked to this brand.</ion-item>\n\n      <ion-item *ngFor="let product of brand?.products">\n\n        {{ product.sku }} - {{ product.description }}\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-buttons>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button *ngIf="brand" ion-button icon-left color="danger" (click)="delete()">\n\n            <ion-icon name="trash" color></ion-icon>\n\n            Delete\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button [disabled]="!brandForm.valid" ion-button icon-left color="secondary" (click)="save()" float-right>\n\n            <ion-icon name="checkmark" color></ion-icon>\n\n            Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-buttons>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\brand\brand-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__brands_service__["a" /* BrandsService */]])
    ], BrandModal);
    return BrandModal;
}());

//# sourceMappingURL=brand-modal.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_edit_user_edit__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserListPage = /** @class */ (function () {
    function UserListPage(navCtrl, navParams, userService, loadingCtrl, alert, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.alert = alert;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.getUsers();
        this.getOrganisation();
    }
    UserListPage.prototype.toggleUserApproval = function (user, status) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Updating account status...' });
        user.organisationApproved = status;
        loading.present();
        this.userService.updateUser(user)
            .subscribe(function (updated) {
            if (updated) {
                _this.getUsers();
                loading.dismiss();
            }
        }, function (error) {
            _this.alert.showAlert('Could not approve user', error.error.message);
            loading.dismiss();
        });
    };
    UserListPage.prototype.getUsers = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting users...' });
        loading.present();
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            loading.dismiss();
        }, function (error) {
            _this.alert.showAlert('Could not load users', error.error.message);
            loading.dismiss();
        });
    };
    UserListPage.prototype.getOrganisation = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting access code...' });
        loading.present();
        this.userService.getOrganisation()
            .subscribe(function (tenant) {
            console.log(tenant);
            _this.tenant = tenant;
            loading.dismiss();
        }, function (error) {
            _this.alert.showAlert('Could not retrieve organisation details', error.error.message);
            loading.dismiss();
        });
    };
    UserListPage.prototype.resendToken = function (user) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting access code...' });
        var alert = this.alertCtrl.create({
            title: 'Resend welcome email?',
            message: "Are you sure you want to resend the verification link email to " + user.email + ", this user will not be able to login until they have clicked the link?",
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Yes, send it!',
                    handler: function () {
                        loading.present();
                        _this.userService.resendWelcomeEmail(user)
                            .subscribe(function (success) {
                            _this.alert.showAlert("Email sent", "Ask the user to check their inbox");
                            _this.getUsers();
                            loading.dismiss();
                        }, function (error) {
                            _this.alert.showAlert('Could not delete user', error.error.message);
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    UserListPage.prototype.openUser = function (user) {
        var _this = this;
        var editModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__user_edit_user_edit__["a" /* UserEditPage */], { user: user });
        editModal.onDidDismiss(function (results) {
            if (results && results.edited) {
                __WEBPACK_IMPORTED_MODULE_5_lodash__["pull"](_this.users, user);
                _this.users.push(results.user);
            }
            if (results && results.deleted) {
                __WEBPACK_IMPORTED_MODULE_5_lodash__["pull"](_this.users, user);
            }
        });
        editModal.present();
    };
    UserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-list',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\users\user-list\user-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Manage Users</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list>\n    <ion-item *ngFor="let user of users" (click)="openUser(user)">\n        <h2>{{ user.firstName + \' \' + user.lastName}}</h2>\n        <p>{{ user.email }}</p>\n        <button *ngIf="!user.organisationApproved" ion-button icon-left color="danger"\n                (click)="toggleUserApproval(user, true);$event.stopPropagation();">\n          <ion-icon name="cloud-outline"></ion-icon>\n          Pending Approval\n        </button>\n        <button *ngIf="user.organisationApproved" ion-button icon-left color="secondary"\n                (click)="toggleUserApproval(user, false);$event.stopPropagation();">\n          <ion-icon name="cloud-done"></ion-icon>\n          Approved\n        </button>\n        <button *ngIf="!user.emailVerified" ion-button icon-left color="danger" tappable (click)="resendToken(user);$event.stopPropagation();">\n          <ion-icon name="mail"></ion-icon>\n          Pending Email Verification\n        </button>\n        <button *ngIf="user.emailVerified" ion-button icon-left color="secondary" tappable (click)="resendToken(user);$event.stopPropagation();">\n          <ion-icon name="mail"></ion-icon>\n          Email Verified\n        </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer padding text-center>\n  <h3>Organisation ID {{ tenant?.accessCode }}</h3>\n  <p>This identifier is required by users during sign up.</p>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\users\user-list\user-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__brand_brands_service__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserEditPage = /** @class */ (function () {
    function UserEditPage(navCtrl, navParams, fb, view, loadingCtrl, userService, brandService, alert, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.view = view;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.brandService = brandService;
        this.alert = alert;
        this.alertCtrl = alertCtrl;
        this.roles = ['User', 'Admin'];
        this.brands = [];
        this.filteredBrands = [];
        this.brandSearchTerm = '';
        this.showBrands = true;
        this.showUserDetails = false;
        // Get user from params
        this.user = this.navParams.get('user');
        // Get brands for assignment to user
        this.getAllBrands();
        // Set up form
        this.initialiseForm(this.user);
    }
    UserEditPage.prototype.hasRole = function (user, role) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["includes"](user.roles, role);
    };
    UserEditPage.prototype.roleChecked = function (ev, role) {
        if (ev.value) {
            this.user.roles.push(role);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["pull"](this.user.roles, role);
        }
    };
    UserEditPage.prototype.filterBrandsWithNoProducts = function (brands) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](brands, function (brand) { return brand.products.length >= 1; });
    };
    UserEditPage.prototype.initialiseForm = function (user) {
        this.userForm = this.fb.group({
            firstName: [user.firstName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(40)
                ])],
            lastName: [user.lastName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(40)
                ])],
            email: [user.email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(80)
                ])],
            telephone: [user.telephone, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
                ])],
            analysis1: [user.analysis1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)
                ])],
            analysis2: [user.analysis2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)
                ])],
            analysis3: [user.analysis3, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10)
                ])],
            startDate: [new Date(user.startDate).toJSON(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                ])],
            jobTitle: [user.jobTitle,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30)
                ])],
            organisationApproved: [user.organisationApproved],
            address: this.fb.group({
                line1: [user.address.line1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(80)
                    ])],
                line2: [user.address.line2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(80)
                    ])],
                town: [user.address.town, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(80)
                    ])],
                county: [user.address.county, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(80)
                    ])],
                postcode: [user.address.postcode, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(8)
                    ])],
                country: [user.address.country, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20)
                    ])]
            })
        });
    };
    UserEditPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    UserEditPage.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Saving user...' });
        loading.present();
        this.user = Object.assign(this.user, this.userForm.getRawValue());
        this.user.startDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.user.startDate).format('YYYY-MM-DD');
        this.userService.updateUser(this.user)
            .subscribe(function (updatedUser) {
            if (updatedUser) {
                _this.view.dismiss({ user: updatedUser, edited: true });
            }
            loading.dismiss();
        }, function (error) {
            _this.alert.showAlert('Could not update user', error.error.message);
            loading.dismiss();
        });
    };
    UserEditPage.prototype.delete = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Deleting brand...' });
        var confirm = this.alertCtrl.create({
            title: "Confirm delete",
            message: "Are you sure you want to delete " + this.user.firstName + ", you will not be able to undo this action?",
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Yes, delete it!',
                    handler: function () {
                        loading.present();
                        _this.userService.deleteUser(_this.user)
                            .subscribe(function () {
                            _this.view.dismiss({ user: _this.user, deleted: true });
                            loading.dismiss();
                        }, function (error) {
                            _this.alert.showAlert('Could not delete user', error.error.message);
                            loading.dismiss();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    /// BRAND ASSIGNMENT CONTROLS ///
    UserEditPage.prototype.getAllBrands = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting brands...' });
        loading.present();
        this.brandService.getBrands()
            .subscribe(function (brands) {
            if (brands) {
                _this.brands = _this.filterBrandsWithNoProducts(brands);
                _this.filteredBrands = _this.filterBrandsWithNoProducts(brands);
            }
            loading.dismiss();
        }, function (error) {
            _this.alert.showAlert('Could not get brands', error.error.message);
            loading.dismiss();
        });
    };
    UserEditPage.prototype.brandChecked = function (ev, brand) {
        if (ev.value) {
            this.user.brands.push(brand);
            this.showBrandRatePrompt(brand);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](this.user.brands, { id: brand.id });
            __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](this.user.brandRates, { brandId: brand.id });
        }
    };
    UserEditPage.prototype.showBrandRatePrompt = function (brand) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Brand Rates',
            message: "Enter a the hourly rate for " + brand.name + " for " + (this.user.firstName + ' ' + this.user.lastName),
            inputs: [
                {
                    name: 'rate',
                    placeholder: 'Pay Rate',
                    type: 'text',
                    value: this.getUserBrandRate(brand)
                },
                {
                    name: 'travelRate',
                    placeholder: 'Travel Rate',
                    type: 'text',
                    value: this.getUserTravelRate(brand)
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.user.brandRates.push({ brandId: brand.id, rate: data.rate, travelRate: data.travelRate });
                    }
                }
            ]
        });
        prompt.present();
    };
    UserEditPage.prototype.getUserBrandRate = function (brand) {
        if (this.isBrandLinked(brand)) {
            var result = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.user.brandRates, { 'brandId': brand.id });
            if (result) {
                return result.rate;
            }
            else {
                return null;
            }
        }
    };
    UserEditPage.prototype.getUserTravelRate = function (brand) {
        if (this.isBrandLinked(brand)) {
            var result = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.user.brandRates, { 'brandId': brand.id });
            if (result) {
                return result.travelRate;
            }
            else {
                return null;
            }
        }
    };
    UserEditPage.prototype.isBrandLinked = function (brand) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](this.user.brands, { id: brand.id });
    };
    UserEditPage.prototype.filterBrands = function () {
        var _this = this;
        this.filteredBrands = this.brands.filter(function (brand) {
            return brand.name.toLowerCase().indexOf(_this.brandSearchTerm.toLowerCase()) > -1;
        });
    };
    UserEditPage.prototype.toggleBrands = function () {
        this.showBrands = !this.showBrands;
        return this.showBrands;
    };
    UserEditPage.prototype.toggleUserDetails = function () {
        this.showUserDetails = !this.showUserDetails;
        return this.showUserDetails;
    };
    UserEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-edit',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\users\user-edit\user-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Close</button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Edit {{ user.firstName + \' \' + user.lastName}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n\n\n  <div *ngIf="user">\n\n    <button ion-button icon-left full color="light" (click)="toggleBrands()">\n\n      <ion-icon name="{{ showBrands ? \'arrow-dropup-circle\' : \'arrow-dropdown-circle\' }}"></ion-icon>\n\n      Brands ({{ user.brands.length }})\n\n    </button>\n\n\n\n    <div *ngIf="showBrands">\n\n      <p padding-left>Assign brands to the user to make linked products, retailers and locations available to them. Only brands that have one or more products linked can\n\n      be linked to a user and therefore actively used throughout Merchify.</p>\n\n      <ion-searchbar [(ngModel)]="brandSearchTerm" (ionInput)="filterBrands()"></ion-searchbar>\n\n      <ion-list>\n\n        <ion-item *ngIf="user.brands?.length == 0">There are no brands linked to this user.</ion-item>\n\n        <ion-item *ngFor="let brand of filteredBrands">\n\n          <ion-label>{{ isBrandLinked(brand) ? brand.name + \' (£\' + getUserBrandRate(brand) + \'/hr pay) (£\' + getUserTravelRate(brand) + \'/hr travel)\' : brand.name }}</ion-label>\n\n          <ion-checkbox (ionChange)="brandChecked($event, brand)"\n\n                        [checked]="isBrandLinked(brand)"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf="user">\n\n    <button ion-button icon-left full color="light" (click)="toggleUserDetails()">\n\n      <ion-icon name="{{ showUserDetails ? \'arrow-dropup-circle\' : \'arrow-dropdown-circle\' }}"></ion-icon>\n\n      User Details\n\n    </button>\n\n\n\n  <form [formGroup]="userForm" novalidate *ngIf="showUserDetails">\n\n    <ion-list>\n\n      <ion-item-divider color="light">\n\n        <ion-icon name="contact" icon-start></ion-icon>\n\n        Personal Details\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-label> Account Approved</ion-label>\n\n        <ion-toggle formControlName="organisationApproved"></ion-toggle>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="First Name" formControlName="firstName"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.controls.firstName.hasError(\'maxlength\')">\n\n        Must be less than 40 characters.\n\n      </span>\n\n      <span class="error"\n\n            *ngIf="userForm.controls.firstName.hasError(\'required\') && userForm.controls.firstName.touched">\n\n        First name is required.\n\n      </span>\n\n\n\n\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Last Name" formControlName="lastName"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.controls.lastName.hasError(\'maxlength\')">\n\n        Must be less than 40 characters.\n\n      </span>\n\n      <span class="error" *ngIf="userForm.controls.lastName.hasError(\'required\') && userForm.controls.lastName.touched">\n\n        Last name is required.\n\n      </span>\n\n\n\n\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.controls.email.hasError(\'required\') && userForm.controls.email.touched">\n\n        Email address is required.\n\n      </span>\n\n\n\n      <ion-item no-lines>\n\n        <ion-input type="tel" placeholder="Phone number" formControlName="telephone"></ion-input>\n\n      </ion-item>\n\n      <span class="error"\n\n            *ngIf="userForm.controls.telephone.hasError(\'required\') && userForm.controls.telephone.touched">\n\n        Telephone is required.\n\n      </span>\n\n\n\n      <ion-item-divider color="light">\n\n        <ion-icon name="home" icon-start></ion-icon>\n\n        Address\n\n      </ion-item-divider>\n\n\n\n    <div formGroupName="address">\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Address Line 1" formControlName="line1"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'line1\').hasError(\'maxlength\')">\n\n        Must be less than 80 characters.\n\n      </span>\n\n      <span class="error"\n\n            *ngIf="userForm.get(\'address\').get(\'line1\').hasError(\'required\')\n\n              && userForm.get(\'address\').get(\'line1\').touched">\n\n        Address line 1 is required\n\n      </span>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Address Line 2" formControlName="line2"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'line2\').hasError(\'maxlength\')">\n\n        Must be less than 80 characters.\n\n      </span>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Town/City" formControlName="town"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'town\').hasError(\'maxlength\')">\n\n        Must be less than 80 characters.\n\n      </span>\n\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'town\').hasError(\'required\')\n\n      && userForm.get(\'address\').get(\'town\').touched">\n\n        Town is required.\n\n      </span>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="County/Region" formControlName="county"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'county\').hasError(\'maxlength\')">\n\n        Must be less than 40 characters.\n\n      </span>\n\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'county\').hasError(\'required\')\n\n      && userForm.get(\'address\').get(\'county\').touched">\n\n        County/Region is required.\n\n      </span>\n\n\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Postal Code" formControlName="postcode"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'postcode\').hasError(\'required\')\n\n      && userForm.get(\'address\').get(\'postcode\').touched">\n\n        Postcode is required.\n\n      </span>\n\n\n\n      <ion-item>\n\n        <ion-label>Country</ion-label>\n\n        <ion-select formControlName="country">\n\n          <ion-option value="GB">United Kingdom</ion-option>\n\n          <ion-option value="IRE">Ireland</ion-option>\n\n          <ion-option value="ES">Spain</ion-option>\n\n          <ion-option value="DE">Germany</ion-option>\n\n          <ion-option value="FR">France</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'country\').hasError(\'required\')\n\n      && userForm.get(\'address\').get(\'country\').touched">\n\n        Country is required.\n\n      </span>\n\n    </div>\n\n\n\n      <ion-item-divider color="light">\n\n        <ion-icon name="briefcase" icon-start></ion-icon>\n\n        Employment\n\n      </ion-item-divider>\n\n\n\n      <ion-item>\n\n        <ion-label>Start Date</ion-label>\n\n        <ion-datetime displayFormat="D MMM YYYY" pickerFormat="D MMM YYYY" formControlName="startDate" placeholder="Start Date"></ion-datetime>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'startDate\').hasError(\'required\')\n\n      && userForm.get(\'startDate\').touched">\n\n        County/Region is required.\n\n      </span>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="jobTitle" placeholder="Job Title"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'analysis1\').hasError(\'maxlength\')">\n\n        Must be less than 30 characters.\n\n      </span>\n\n\n\n      <ion-item-divider color="light">\n\n        <ion-icon name="pie" icon-start></ion-icon>\n\n        Analysis Codes\n\n      </ion-item-divider>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="analysis1" placeholder="Analysis Code 1"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'analysis1\').hasError(\'maxlength\')">\n\n        Must be less than 20 characters.\n\n      </span>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="analysis2" placeholder="Analysis Code 2"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'analysis2\').hasError(\'maxlength\')">\n\n        Must be less than 20 characters.\n\n      </span>\n\n      <ion-item>\n\n        <ion-input type="text" formControlName="analysis3" placeholder="Analysis Code 3"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="userForm.get(\'analysis3\').hasError(\'maxlength\')">\n\n        Must be less than 20 characters.\n\n      </span>\n\n    </ion-list>\n\n\n\n\n\n    <ion-item-divider color="light">\n\n      <ion-icon name="pie" icon-start></ion-icon>\n\n      Roles\n\n    </ion-item-divider>\n\n\n\n    <ion-item-group>\n\n      <ion-item *ngFor="let role of roles">\n\n        <ion-label>{{ role }}</ion-label>\n\n        <ion-checkbox (ionChange)="roleChecked($event, role)" [checked]="hasRole(user, role)"></ion-checkbox>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  </form>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-buttons>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button *ngIf="user" ion-button icon-left color="danger" (click)="delete()">\n\n            <ion-icon name="trash" color></ion-icon>\n\n            Delete\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button [disabled]="!userForm.valid" ion-button icon-left color="secondary" (click)="save()" float-right>\n\n            <ion-icon name="checkmark" color></ion-icon>\n\n            Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-buttons>\n\n</ion-footer>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\users\user-edit\user-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__brand_brands_service__["a" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], UserEditPage);
    return UserEditPage;
}());

//# sourceMappingURL=user-edit.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        return this.auth.getToken().mergeMap(function (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
            return next.handle(request);
        });
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

//# sourceMappingURL=token.interceptor.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_storage_storage_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    AuthService.prototype.register = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "users", user);
    };
    AuthService.prototype.signIn = function (accountDetails) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "users/login", accountDetails)
                .subscribe(function (result) {
                _this.user = __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__["decode"](result);
                _this.storageService.setToken(result);
                resolve(true);
            }, function (error) {
                resolve(false);
            });
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getToken().subscribe(function (result) {
                if (result) {
                    var jwt = __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__["decode"](result);
                    _this.user = __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__["decode"](result);
                    resolve(new Date().getTime() / 1000 < jwt.exp);
                }
                else {
                    resolve(false);
                }
            }, function (error) {
                resolve(false);
            });
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.user != null;
    };
    AuthService.prototype.isAdmin = function () {
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["includes"](this.user.roles, 'Admin');
    };
    AuthService.prototype.signOut = function () {
        this.storageService.removeToken();
        this.user = null;
    };
    AuthService.prototype.getToken = function () {
        return this.storageService.getToken();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__shared_storage_storage_service__["a" /* StorageService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    PRODUCTION: false,
    API: 'https://merchify-server.herokuapp.com/',
    HEADERS: {}
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(614);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandsService = /** @class */ (function () {
    function BrandsService(http) {
        this.http = http;
    }
    BrandsService.prototype.getBrands = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "brand");
    };
    BrandsService.prototype.getBrand = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "brand/" + id);
    };
    BrandsService.prototype.addBrand = function (brand) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "brand", brand, {});
    };
    BrandsService.prototype.deleteBrand = function (brand) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "brand/" + brand.id);
    };
    BrandsService.prototype.editBrand = function (brand) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "brand", brand, {});
    };
    BrandsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BrandsService);
    return BrandsService;
}());

//# sourceMappingURL=brands.service.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_admin_admin_module__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth_module__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_storage_storage_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_alert_alert_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule_module__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_menu_page__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__app_menu_page__["a" /* AppMenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule_module__["a" /* ScheduleModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_menu_page__["a" /* AppMenuPage */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__shared_storage_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_alert_alert_service__["a" /* AlertService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_auth_signin_signin__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_auth_signin_signin__["a" /* SigninPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.platform.ready().then(function () {
                    _this.statusBar.styleDefault();
                    _this.splashScreen.hide();
                });
                return [2 /*return*/];
            });
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.validator.js.map

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 365,
	"./af.js": 365,
	"./ar": 366,
	"./ar-dz": 367,
	"./ar-dz.js": 367,
	"./ar-kw": 368,
	"./ar-kw.js": 368,
	"./ar-ly": 369,
	"./ar-ly.js": 369,
	"./ar-ma": 370,
	"./ar-ma.js": 370,
	"./ar-sa": 371,
	"./ar-sa.js": 371,
	"./ar-tn": 372,
	"./ar-tn.js": 372,
	"./ar.js": 366,
	"./az": 373,
	"./az.js": 373,
	"./be": 374,
	"./be.js": 374,
	"./bg": 375,
	"./bg.js": 375,
	"./bm": 376,
	"./bm.js": 376,
	"./bn": 377,
	"./bn.js": 377,
	"./bo": 378,
	"./bo.js": 378,
	"./br": 379,
	"./br.js": 379,
	"./bs": 380,
	"./bs.js": 380,
	"./ca": 381,
	"./ca.js": 381,
	"./cs": 382,
	"./cs.js": 382,
	"./cv": 383,
	"./cv.js": 383,
	"./cy": 384,
	"./cy.js": 384,
	"./da": 385,
	"./da.js": 385,
	"./de": 386,
	"./de-at": 387,
	"./de-at.js": 387,
	"./de-ch": 388,
	"./de-ch.js": 388,
	"./de.js": 386,
	"./dv": 389,
	"./dv.js": 389,
	"./el": 390,
	"./el.js": 390,
	"./en-au": 391,
	"./en-au.js": 391,
	"./en-ca": 392,
	"./en-ca.js": 392,
	"./en-gb": 393,
	"./en-gb.js": 393,
	"./en-ie": 394,
	"./en-ie.js": 394,
	"./en-il": 395,
	"./en-il.js": 395,
	"./en-nz": 396,
	"./en-nz.js": 396,
	"./eo": 397,
	"./eo.js": 397,
	"./es": 398,
	"./es-do": 399,
	"./es-do.js": 399,
	"./es-us": 400,
	"./es-us.js": 400,
	"./es.js": 398,
	"./et": 401,
	"./et.js": 401,
	"./eu": 402,
	"./eu.js": 402,
	"./fa": 403,
	"./fa.js": 403,
	"./fi": 404,
	"./fi.js": 404,
	"./fo": 405,
	"./fo.js": 405,
	"./fr": 406,
	"./fr-ca": 407,
	"./fr-ca.js": 407,
	"./fr-ch": 408,
	"./fr-ch.js": 408,
	"./fr.js": 406,
	"./fy": 409,
	"./fy.js": 409,
	"./gd": 410,
	"./gd.js": 410,
	"./gl": 411,
	"./gl.js": 411,
	"./gom-latn": 412,
	"./gom-latn.js": 412,
	"./gu": 413,
	"./gu.js": 413,
	"./he": 414,
	"./he.js": 414,
	"./hi": 415,
	"./hi.js": 415,
	"./hr": 416,
	"./hr.js": 416,
	"./hu": 417,
	"./hu.js": 417,
	"./hy-am": 418,
	"./hy-am.js": 418,
	"./id": 419,
	"./id.js": 419,
	"./is": 420,
	"./is.js": 420,
	"./it": 421,
	"./it.js": 421,
	"./ja": 422,
	"./ja.js": 422,
	"./jv": 423,
	"./jv.js": 423,
	"./ka": 424,
	"./ka.js": 424,
	"./kk": 425,
	"./kk.js": 425,
	"./km": 426,
	"./km.js": 426,
	"./kn": 427,
	"./kn.js": 427,
	"./ko": 428,
	"./ko.js": 428,
	"./ky": 429,
	"./ky.js": 429,
	"./lb": 430,
	"./lb.js": 430,
	"./lo": 431,
	"./lo.js": 431,
	"./lt": 432,
	"./lt.js": 432,
	"./lv": 433,
	"./lv.js": 433,
	"./me": 434,
	"./me.js": 434,
	"./mi": 435,
	"./mi.js": 435,
	"./mk": 436,
	"./mk.js": 436,
	"./ml": 437,
	"./ml.js": 437,
	"./mn": 438,
	"./mn.js": 438,
	"./mr": 439,
	"./mr.js": 439,
	"./ms": 440,
	"./ms-my": 441,
	"./ms-my.js": 441,
	"./ms.js": 440,
	"./mt": 442,
	"./mt.js": 442,
	"./my": 443,
	"./my.js": 443,
	"./nb": 444,
	"./nb.js": 444,
	"./ne": 445,
	"./ne.js": 445,
	"./nl": 446,
	"./nl-be": 447,
	"./nl-be.js": 447,
	"./nl.js": 446,
	"./nn": 448,
	"./nn.js": 448,
	"./pa-in": 449,
	"./pa-in.js": 449,
	"./pl": 450,
	"./pl.js": 450,
	"./pt": 451,
	"./pt-br": 452,
	"./pt-br.js": 452,
	"./pt.js": 451,
	"./ro": 453,
	"./ro.js": 453,
	"./ru": 454,
	"./ru.js": 454,
	"./sd": 455,
	"./sd.js": 455,
	"./se": 456,
	"./se.js": 456,
	"./si": 457,
	"./si.js": 457,
	"./sk": 458,
	"./sk.js": 458,
	"./sl": 459,
	"./sl.js": 459,
	"./sq": 460,
	"./sq.js": 460,
	"./sr": 461,
	"./sr-cyrl": 462,
	"./sr-cyrl.js": 462,
	"./sr.js": 461,
	"./ss": 463,
	"./ss.js": 463,
	"./sv": 464,
	"./sv.js": 464,
	"./sw": 465,
	"./sw.js": 465,
	"./ta": 466,
	"./ta.js": 466,
	"./te": 467,
	"./te.js": 467,
	"./tet": 468,
	"./tet.js": 468,
	"./tg": 469,
	"./tg.js": 469,
	"./th": 470,
	"./th.js": 470,
	"./tl-ph": 471,
	"./tl-ph.js": 471,
	"./tlh": 472,
	"./tlh.js": 472,
	"./tr": 473,
	"./tr.js": 473,
	"./tzl": 474,
	"./tzl.js": 474,
	"./tzm": 475,
	"./tzm-latn": 476,
	"./tzm-latn.js": 476,
	"./tzm.js": 475,
	"./ug-cn": 477,
	"./ug-cn.js": 477,
	"./uk": 478,
	"./uk.js": 478,
	"./ur": 479,
	"./ur.js": 479,
	"./uz": 480,
	"./uz-latn": 481,
	"./uz-latn.js": 481,
	"./uz.js": 480,
	"./vi": 482,
	"./vi.js": 482,
	"./x-pseudo": 483,
	"./x-pseudo.js": 483,
	"./yo": 484,
	"./yo.js": 484,
	"./zh-cn": 485,
	"./zh-cn.js": 485,
	"./zh-hk": 486,
	"./zh-hk.js": 486,
	"./zh-tw": 487,
	"./zh-tw.js": 487
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 765;

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brand_brands__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brand_brands_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__brand_brand_modal__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_token_interceptor__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_product_modal__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_user_edit_user_edit__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_user_list_user_list__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_user_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__location_locations__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__location_location_modal__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__location_locations_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__retailer_retailer__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__retailer_retailer_modal__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__retailer_retailer_service__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__brand_brands__["a" /* BrandsPage */],
                __WEBPACK_IMPORTED_MODULE_6__brand_brand_modal__["a" /* BrandModal */],
                __WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_11__users_user_edit_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_12__users_user_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_10__products_product_modal__["a" /* ProductModal */],
                __WEBPACK_IMPORTED_MODULE_14__location_locations__["a" /* LocationsPage */],
                __WEBPACK_IMPORTED_MODULE_15__location_location_modal__["a" /* LocationModal */],
                __WEBPACK_IMPORTED_MODULE_17__retailer_retailer__["a" /* RetailersPage */],
                __WEBPACK_IMPORTED_MODULE_18__retailer_retailer_modal__["a" /* RetailerModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__brand_brands__["a" /* BrandsPage */],
                __WEBPACK_IMPORTED_MODULE_6__brand_brand_modal__["a" /* BrandModal */],
                __WEBPACK_IMPORTED_MODULE_8__products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_10__products_product_modal__["a" /* ProductModal */],
                __WEBPACK_IMPORTED_MODULE_12__users_user_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_11__users_user_edit_user_edit__["a" /* UserEditPage */],
                __WEBPACK_IMPORTED_MODULE_14__location_locations__["a" /* LocationsPage */],
                __WEBPACK_IMPORTED_MODULE_15__location_location_modal__["a" /* LocationModal */],
                __WEBPACK_IMPORTED_MODULE_17__retailer_retailer__["a" /* RetailersPage */],
                __WEBPACK_IMPORTED_MODULE_18__retailer_retailer_modal__["a" /* RetailerModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__brand_brands_service__["a" /* BrandsService */],
                __WEBPACK_IMPORTED_MODULE_13__users_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_7__products_products_service__["a" /* ProductsService */],
                __WEBPACK_IMPORTED_MODULE_16__location_locations_service__["a" /* LocationsService */],
                __WEBPACK_IMPORTED_MODULE_19__retailer_retailer_service__["a" /* RetailerService */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_9__auth_token_interceptor__["a" /* TokenInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AdminModule);
    return AdminModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_error_modal__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__signup_error_modal__["a" /* SignupErrorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__signup_error_modal__["a" /* SignupErrorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_token_interceptor__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pipes_visit_status_pipe__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__schedule_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__visit_action_visit_action_modal_component__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_new_schedule_new_modal_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stock_check_stock_check_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_pipes_stock_sold_pipe__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__visit_report_visit_report_modal_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_pipes_group_by_pipe__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_pipes_visit_filter_pipe__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__check_in_action_checklist_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_pipes_stock_check_pipe__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__edit_complete_visit_edit_complete_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__expenses_expenses_modal_component__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_table__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_button__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__expenses_new_expense_modal__ = __webpack_require__(495);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var ScheduleModule = /** @class */ (function () {
    function ScheduleModule() {
    }
    ScheduleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__schedule_component__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_10__add_new_schedule_new_modal_component__["a" /* ScheduleNewModal */],
                __WEBPACK_IMPORTED_MODULE_9__visit_action_visit_action_modal_component__["a" /* VisitActionModal */],
                __WEBPACK_IMPORTED_MODULE_11__stock_check_stock_check_component__["a" /* StockCheckModal */],
                __WEBPACK_IMPORTED_MODULE_13__visit_report_visit_report_modal_component__["a" /* VisitReportModal */],
                __WEBPACK_IMPORTED_MODULE_19__expenses_expenses_modal_component__["a" /* ExpensesModal */],
                __WEBPACK_IMPORTED_MODULE_18__edit_complete_visit_edit_complete_component__["a" /* EditCompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_pipes_visit_status_pipe__["a" /* VisitStatusPipe */],
                __WEBPACK_IMPORTED_MODULE_12__shared_pipes_stock_sold_pipe__["a" /* StockSoldPipe */],
                __WEBPACK_IMPORTED_MODULE_14__shared_pipes_group_by_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_15__shared_pipes_visit_filter_pipe__["a" /* VisitFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_16__check_in_action_checklist_component__["a" /* ActionChecklistComponent */],
                __WEBPACK_IMPORTED_MODULE_17__shared_pipes_stock_check_pipe__["a" /* StockCheckPipe */],
                __WEBPACK_IMPORTED_MODULE_23__expenses_new_expense_modal__["a" /* NewExpenseModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_22_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_table__["TableModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__schedule_component__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_10__add_new_schedule_new_modal_component__["a" /* ScheduleNewModal */],
                __WEBPACK_IMPORTED_MODULE_9__visit_action_visit_action_modal_component__["a" /* VisitActionModal */],
                __WEBPACK_IMPORTED_MODULE_11__stock_check_stock_check_component__["a" /* StockCheckModal */],
                __WEBPACK_IMPORTED_MODULE_13__visit_report_visit_report_modal_component__["a" /* VisitReportModal */],
                __WEBPACK_IMPORTED_MODULE_19__expenses_expenses_modal_component__["a" /* ExpensesModal */],
                __WEBPACK_IMPORTED_MODULE_16__check_in_action_checklist_component__["a" /* ActionChecklistComponent */],
                __WEBPACK_IMPORTED_MODULE_18__edit_complete_visit_edit_complete_component__["a" /* EditCompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_23__expenses_new_expense_modal__["a" /* NewExpenseModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__schedule_service__["a" /* ScheduleService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_4__auth_token_interceptor__["a" /* TokenInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitStatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var VisitStatusPipe = /** @class */ (function () {
    function VisitStatusPipe() {
    }
    VisitStatusPipe.prototype.transform = function (visits, status) {
        switch (status) {
            case 'scheduled': {
                return __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](visits, function (v) {
                    return v.actualArrival == null && v.actualDeparture == null;
                });
            }
            case 'completed': {
                return __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](visits, function (v) {
                    return v.actualArrival != null && v.actualDeparture != null;
                });
            }
            case 'active': {
                return __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](visits, function (v) {
                    return v.actualArrival != null && v.actualDeparture == null;
                });
            }
        }
    };
    VisitStatusPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'visitStatus', pure: false })
    ], VisitStatusPipe);
    return VisitStatusPipe;
}());

//# sourceMappingURL=visit-status.pipe.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockSoldPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StockSoldPipe = /** @class */ (function () {
    function StockSoldPipe() {
    }
    StockSoldPipe.prototype.transform = function (stock, sold) {
        if (sold) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](stock, function (item) {
                if (item.onHand > 0) {
                    return item;
                }
            });
        }
        else {
            return stock;
        }
    };
    StockSoldPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'stockSold', pure: false })
    ], StockSoldPipe);
    return StockSoldPipe;
}());

//# sourceMappingURL=stock-sold.pipe.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (value, groupByKey) {
        var events = [];
        var groupedElements = {};
        value.forEach(function (obj) {
            if (!(obj[groupByKey] in groupedElements)) {
                groupedElements[obj[groupByKey]] = [];
            }
            groupedElements[obj[groupByKey]].push(obj);
            groupedElements[obj[groupByKey]].sort(function (a, b) {
                if (!a.actualArrival && !b.actualArrival ||
                    ((a.actualArrival || b.actualArrival) && (!a.actualDeparture || !b.actualArrival))) {
                    return new Date(a.scheduledArrival) < new Date(b.scheduledArrival) ? -1 : 1;
                }
                if (a.actualArrival || b.actualArrival) {
                    return new Date(a.actualArrival) < new Date(b.actualArrival) ? 1 : -1;
                }
            });
        });
        for (var prop in groupedElements) {
            if (groupedElements.hasOwnProperty(prop)) {
                events.push({
                    key: prop,
                    list: groupedElements[prop]
                });
            }
        }
        events.sort(function (a, b) {
            var aStatus = 0;
            if (a.key == 'Checked In') {
                aStatus = -1;
            }
            else if (a.key == 'Scheduled') {
                aStatus = 0;
            }
            else if (a.key == 'Completed') {
                aStatus = 1;
            }
            var bStatus = 0;
            if (b.key == 'Checked In') {
                bStatus = -1;
            }
            else if (b.key == 'Scheduled') {
                bStatus = 0;
            }
            else if (b.key == 'Completed') {
                bStatus = 1;
            }
            return aStatus - bStatus;
        });
        return events;
    };
    GroupByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'groupBy',
            pure: false
        })
    ], GroupByPipe);
    return GroupByPipe;
}());

//# sourceMappingURL=group-by.pipe.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockCheckPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StockCheckPipe = /** @class */ (function () {
    function StockCheckPipe() {
    }
    StockCheckPipe.prototype.transform = function (stock, params) {
        var type = params;
        var items = [];
        if (type == 'stock') {
            stock.filter(function (item) {
                if (item.onHand) {
                    items.push(item);
                }
            });
        }
        if (type == 'eod') {
            stock.filter(function (item) {
                if (item.qtySold) {
                    items.push(item);
                }
            });
        }
        return items;
    };
    StockCheckPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'stock'
        })
    ], StockCheckPipe);
    return StockCheckPipe;
}());

//# sourceMappingURL=stock-check.pipe.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleService = /** @class */ (function () {
    function ScheduleService(http) {
        this.http = http;
    }
    ScheduleService.prototype.addVisit = function (visit) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "visit", visit, {});
    };
    ScheduleService.prototype.getVisits = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "visit");
    };
    ScheduleService.prototype.editVisit = function (visit) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "visit", visit);
    };
    ScheduleService.prototype.deleteVisit = function (visit) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "visit/" + visit.id);
    };
    ScheduleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ScheduleService);
    return ScheduleService;
}());

//# sourceMappingURL=schedule.service.js.map

/***/ })

},[609]);
//# sourceMappingURL=main.js.map