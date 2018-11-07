webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_storage_storage_service__ = __webpack_require__(352);
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
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "auth", accountDetails)
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
    AuthService.prototype.signOut = function () {
        this.storageService.removeToken();
        this.user = null;
    };
    AuthService.prototype.getToken = function () {
        return this.storageService.getToken();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__shared_storage_storage_service__["a" /* StorageService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brand_brands_service__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_locations_service__ = __webpack_require__(1048);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__retailer_retailer_service__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_token_interceptor__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_moment__["MomentModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__location_locations_service__["a" /* LocationsService */],
                __WEBPACK_IMPORTED_MODULE_6__retailer_retailer_service__["a" /* RetailerService */],
                __WEBPACK_IMPORTED_MODULE_3__brand_brands_service__["a" /* BrandsService */],
                __WEBPACK_IMPORTED_MODULE_4__products_products_service__["a" /* ProductsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_7__pages_auth_token_interceptor__["a" /* TokenInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], ServicesModule);
    return ServicesModule;
}());

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(60);
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

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelfStockCheckModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_products_service__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShelfStockCheckModal = /** @class */ (function () {
    function ShelfStockCheckModal(navParams, view, error, loading, productService) {
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
    ShelfStockCheckModal.prototype.getProducts = function () {
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
    ShelfStockCheckModal.prototype.saveStock = function () {
        this.view.dismiss({ stockCheck: this.visit.stock });
    };
    ShelfStockCheckModal.prototype.dismiss = function () {
        this.view.dismiss();
    };
    ShelfStockCheckModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\shelf-stock-check\shelf-stock-check.view.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Close</button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      {{ endOfDay ? \'Record Sales\' : \'Record Inventory\' }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n        <ion-grid no-padding>\n\n          <ion-row class="header-row">\n\n            <ion-col col-9>Item</ion-col>\n\n            <ion-col col-3>{{ endOfDay ? \'Qty Sold\' : \'On Hand\' }}</ion-col>\n\n          </ion-row>\n\n          <ion-row class="row" *ngFor="let item of visit.stock | stockSold: endOfDay">\n\n            <ion-col col-9>\n\n              <p><b>{{item.product.description}}</b> {{item.product.size}}<br/>\n\n              SKU {{item.product.sku}} / {{item.product.barcode}}</p>\n\n            </ion-col>\n\n            <ion-col col-3 align-self-center>\n\n              <ion-input item-end class="stock-input" no-padding *ngIf="!endOfDay" type="number" placeholder="0" [(ngModel)]="item.onHand"></ion-input>\n\n              <ion-input item-end class="stock-input" no-padding *ngIf="endOfDay" type="number" placeholder="0" [(ngModel)]="item.qtySold"></ion-input>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-buttons>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button icon-left color="secondary" (click)="saveStock()" float-right>\n\n            <ion-icon name="checkmark" color></ion-icon>\n\n            Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-buttons>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\shelf-stock-check\shelf-stock-check.view.html"*/,
            selector: 'page-shelf-stock-check-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_products_products_service__["a" /* ProductsService */]])
    ], ShelfStockCheckModal);
    return ShelfStockCheckModal;
}());

//# sourceMappingURL=shelf-stock-check.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_schedule_component__ = __webpack_require__(354);
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__schedule_schedule_component__["a" /* SchedulePage */]);
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__schedule_schedule_component__["a" /* SchedulePage */]);
                loading.dismiss();
            }
            else {
                _this.alertService.showAlert('Sign In Failed', 'Please check your credentials and try again!');
                loading.dismiss();
            }
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\auth\signin\signin.html"*/'<ion-content no-padding class="vertical-align-content">\n  <ion-grid>\n    <ion-row justify-content-center>\n      <img src="../../../assets/imgs/MerchifyLogo.png" height="167" width="200"/>\n    </ion-row>\n    <ion-row padding-bottom="1em">\n      <ion-col></ion-col>\n    </ion-row>\n    <form [formGroup]="signinForm">\n      <ion-row justify-content-center>\n\n        <ion-list>\n          <!-- USER NAME INPUT -->\n          <ion-item>\n            <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n          </ion-item>\n          <span class="error"\n                *ngIf="signinForm.controls.email.hasError(\'required\') && signinForm.controls.email.touched">\n          Email is required.\n      </span>\n          <!-- PASSWORD INPUT -->\n          <ion-item>\n            <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n          </ion-item>\n          <span class="error"\n                *ngIf="signinForm.controls.password.hasError(\'required\') && signinForm.controls.password.touched">\n          Password is required.\n      </span>\n        </ion-list>\n      </ion-row>\n      <ion-row justify-content-center>\n        <button ion-button type="submit" (click)="signIn(signinForm.value)"\n                [disabled]="!signinForm.valid">Sign In\n        </button>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\auth\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(60);
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

/***/ 217:
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
webpackEmptyAsyncContext.id = 217;

/***/ }),

/***/ 261:
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
webpackEmptyAsyncContext.id = 261;

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(353);
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

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_new_schedule_new_modal_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__visit_report_visit_report_modal_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_pipes_visit_filter_pipe__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__check_in_action_checklist_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__expenses_expenses_modal_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_signin_signin__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(191);
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
    function SchedulePage(navCtrl, navParams, modalCtrl, loadingCtrl, scheduleService, errorAlert, actionSheetCtrl, alertCtrl, auth, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.scheduleService = scheduleService;
        this.errorAlert = errorAlert;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.geolocation = geolocation;
        this.rawData = [];
        this.visits = [];
        this.showCompleted = false;
        this.showScheduled = true;
        this.searchText = '';
        this.skip = 0;
        this.take = 2;
        this.recordsPerPage = 15;
        this.getVisits();
    }
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
    SchedulePage.prototype.getVisits = function (refresher) {
        var _this = this;
        this.skip = 0;
        this.take = this.recordsPerPage;
        var loading = this.loadingCtrl.create({ content: 'Getting available appointments...' });
        loading.present();
        this.scheduleService.getVisits(this.skip, this.take)
            .subscribe(function (data) {
            _this.rawData = data.completed.concat(data.scheduled, data.checkedIn);
            _this.visitFilters();
            if (refresher) {
                refresher.complete();
            }
            loading.dismiss();
        }, function (error) {
            _this.errorAlert.showAlert('Could not load available appointments', error.error.message);
            loading.dismiss();
        });
    };
    SchedulePage.prototype.getTotalVisits = function (refresher) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Getting available appointments...' });
        loading.present();
        this.scheduleService.getVisits(this.skip, this.take).subscribe(function (data) {
            _this.totalVisits = data.total;
            loading.dismiss();
            if (refresher) {
                _this.getVisits(refresher);
            }
            else {
                _this.getVisits();
            }
        }, function (error) {
            _this.errorAlert.showAlert('Could not get total appointments', error.error.message);
            loading.dismiss();
        });
    };
    SchedulePage.prototype.doRefresh = function (refresher) {
        this.skip = 0;
        this.take = 0;
        this.getTotalVisits(refresher);
    };
    SchedulePage.prototype.getMoreVisits = function (infiniteScroll) {
        var _this = this;
        if ((this.skip + this.recordsPerPage) < this.totalVisits) {
            this.skip = this.skip + this.recordsPerPage;
            this.take = this.take + this.recordsPerPage;
            this.scheduleService.getVisits(this.skip, this.take).subscribe(function (data) {
                _this.rawData = _this.rawData.concat(data.completed);
                _this.visitFilters();
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
            }, function (err) {
                if (infiniteScroll) {
                    infiniteScroll.complete();
                }
            });
        }
        else {
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        }
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
        if (visit.actualArrival && visit.actualDeparture) {
            buttons.push({
                text: 'Expenses & Travel',
                handler: function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__expenses_expenses_modal_component__["a" /* ExpensesModal */], { visit: visit });
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
        this.geolocation.getCurrentPosition().then(function (position) {
            console.log(position);
            var confirm = _this.alertCtrl.create({
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
                            visit.hourlyRate = visit.brand.hourlyRate;
                            visit.travelRate = visit.brand.travelTimeRate;
                            visit.mileageRate = visit.brand.mileageRate;
                            visit.travelTimeThreshold = visit.brand.travelTimePayableThreshold;
                            visit.mileageThreshold = visit.brand.mileagePayableThreshold;
                            visit.expenses = [];
                            visit.checkInLocation = { long: position.coords.longitude, lat: position.coords.latitude };
                            visit.checkOutLocation = { long: null, lat: null };
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
        });
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
    SchedulePage.prototype.signOut = function () {
        this.auth.signOut();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__auth_signin_signin__["a" /* SigninPage */]);
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-schedule',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\schedule.view.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title><img src="../../assets/imgs/logo.png" height="20" width="133"/></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="signOut()">\n        <ion-icon name="close" icon-left></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar (ionInput)="searchVisits()" [(ngModel)]="searchText"></ion-searchbar>\n  <div class="filters">\n    <div float-start class="my-checkbox">\n      <ion-label text-uppercase>Completed</ion-label>\n      <ion-checkbox [(ngModel)]="showCompleted" (ionChange)="searchVisits()">\n      </ion-checkbox>\n    </div>\n    <div float-start class="my-checkbox">\n      <ion-label text-uppercase>Scheduled</ion-label>\n      <ion-checkbox [(ngModel)]="showScheduled" (ionChange)="searchVisits()">\n      </ion-checkbox>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ion-item *ngIf="visits.length === 0">\n      No visits found, better get cracking!\n    </ion-item>\n    <ion-item-group *ngFor="let group of visits | groupBy : \'state\'">\n      <ion-item-divider color="light">\n        {{ group.key }} ({{ group.list.length }})\n      </ion-item-divider>\n      <ion-item *ngFor="let visit of group.list" (click)="openVisit(visit)">\n        <h3>{{ visit.retailer.name }} ({{ visit.location.name }})</h3>\n        <p>{{ (visit.actualArrival ? visit.actualArrival : visit.scheduledArrival) | amDateFormat:\'ddd, DD/MM/YY\' }}</p>\n        <p>{{ visit.brand.name }}</p>\n        <ion-badge text-left color="{{ getVisitBadgeColor(visit) }}" item-end>\n          <div *ngIf="visit.state == \'Checked In\' || visit.state == \'Scheduled\'">{{visit.state }}</div>\n          <div>\n            {{ visit.state == \'Checked In\'\n            ? ((timeCheckedIn(visit) | number: \'1.2-2\').toString() + \'hrs\') : \'\'}}\n\n            {{ visit.state == \'Completed\'\n            ? ( \'Hours \' + (timeSpent(visit) | number: \'1.2-2\').toString()) : \'\'}}\n          </div>\n          <div>\n            {{ (visit.state == \'Completed\')\n            ? \' Sales £\' + (totalSales(visit) | number: \'1.2-2\') : \'\'}}\n          </div>\n          <div>\n            {{ (visit.state == \'Completed\') && expensesTotal(visit) > 0\n            ? \' Expenses £\' + (expensesTotal(visit) | number: \'1.2-2\') : \'\'}}\n          </div>\n          <div>\n            {{ (visit.state == \'Completed\') && visit.travelTime > 0\n            ? \' Travel Time \' + (visit.travelTime | number: \'1.2-2\') : \'\'}}\n          </div>\n        </ion-badge>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-fab bottom right *ngIf="!activeVisit">\n    <button ion-fab color="secondary" (click)="newAppointment()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-infinite-scroll (ionInfinite)="getMoreVisits($event)" loadingSpinner="bubbles" loadingText="Loading More Visits...">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\schedule.view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleNewModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_retailer_retailer_service__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_brand_brands_service__ = __webpack_require__(480);
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
            var decoded = __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__["decode"](token);
            console.log(decoded.brands);
            _this.brands = decoded.brands;
            _this.visit.user = decoded;
            _this.visit.checkInLocation = { long: null, lat: null };
            _this.visit.checkOutLocation = { long: null, lat: null };
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\add-new\schedule-new-modal.view.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Close</button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      New Visit\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-divider color="light">\n\n      <ion-icon name="calendar" icon-start></ion-icon>\n\n      Scheduling\n\n    </ion-item-divider>\n\n\n\n    <ion-item>\n\n      <ion-label>Date</ion-label>\n\n      <ion-datetime displayFormat="DD-MMM-YYYY" pickerFormat="DD MMM YY" [(ngModel)]="visit.scheduledArrival"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item-divider color="light">\n\n      <ion-icon name="calendar" icon-start></ion-icon>\n\n      Appointment Particulars\n\n    </ion-item-divider>\n\n\n\n    <ion-item>\n\n      <ion-label>Brand</ion-label>\n\n        <ion-select [(ngModel)]="visit.brand" (ionChange)="brandSelected($event)"\n\n        [compareWith]="compareFn">\n\n          <ion-option *ngFor="let brand of brands | orderBy: \'name\'" [value]="brand">{{ brand.name }}</ion-option>\n\n        </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Retailer</ion-label>\n\n      <ion-select [(ngModel)]="visit.retailer" [disabled]="!visit.brand" (ionChange)="retailerSelected($event)"\n\n                  [compareWith]="compareFn">\n\n        <ion-option *ngFor="let retailer of retailers | orderBy: \'name\'" [value]="retailer">{{ retailer.name }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item no-lines>\n\n      <ion-label>Location</ion-label>\n\n      <ion-select #locationSelect [(ngModel)]="visit.location" [disabled]="!visit.retailer"\n\n                  [compareWith]="compareFn">\n\n        <ion-option *ngFor="let location of locations | orderBy: \'name\'" [value]="location">{{ location.name }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-buttons>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button *ngIf="user" ion-button icon-left color="danger" (click)="delete()">\n\n            <ion-icon name="trash" color></ion-icon>\n\n            Delete\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button [disabled]="isValid()" ion-button icon-left color="secondary" (click)="save()" float-right>\n\n            <ion-icon name="checkmark" color></ion-icon>\n\n            Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-buttons>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\add-new\schedule-new-modal.view.html"*/,
            selector: 'page-schedule-new-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_7__services_retailer_retailer_service__["a" /* RetailerService */],
            __WEBPACK_IMPORTED_MODULE_8__services_brand_brands_service__["a" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_4__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], ScheduleNewModal);
    return ScheduleNewModal;
}());

//# sourceMappingURL=schedule-new-modal.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(60);
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

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(60);
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

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitReportModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\visit-report\visit-report-modal.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Visit Report\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-grid no-padding>\n\n    <ion-row class="header-row">\n      <ion-col><p>Visit Details</p></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Name</b></ion-col>\n      <ion-col col-9>{{ visit.user.firstName + \' \' + visit.user.lastName }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Brand</b></ion-col>\n      <ion-col col-9>{{ visit.brand.name }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Location</b></ion-col>\n      <ion-col col-4>{{ visit.location.name }}</ion-col>\n      <ion-col col-5>{{ visit.location.type }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Retailer</b></ion-col>\n      <ion-col col-4>{{ visit.retailer.name }}</ion-col>\n      <ion-col col-5>{{ visit.retailer.type }}</ion-col>\n    </ion-row>\n\n    <ion-row margin-top class="header-row">\n      <ion-col><p>Time Reporting (Local time)</p></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Scheduled</b></ion-col>\n      <ion-col col-3>{{ visit.scheduledArrival | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n      <ion-col col-3></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Check In</b></ion-col>\n      <ion-col col-3>{{ visit.actualArrival | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n      <ion-col col-3>{{ visit.actualArrival | amLocal | amDateFormat: \'HH:mm Z\' }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Check Out</b></ion-col>\n      <ion-col col-3>{{ visit.actualDeparture | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n      <ion-col col-3>{{ visit.actualDeparture | amLocal | amDateFormat: \'HH:mm Z\' }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Time On Site</b></ion-col>\n      <ion-col col-3></ion-col>\n      <ion-col col-3>{{ timeSpent(visit.actualDeparture, visit.actualArrival) }} hrs</ion-col>\n    </ion-row>\n\n    <ion-row class="total-row">\n    <ion-col col-6><b>Visit Total</b></ion-col>\n    <ion-col col-3>£{{ getHourlyRate() }}/hr</ion-col>\n    <ion-col col-3>£{{ (timeSpent(visit.actualDeparture, visit.actualArrival) * getHourlyRate()) | number: \'1.2-2\' }}</ion-col>\n    </ion-row>\n\n\n    <ion-row margin-top class="header-row">\n      <ion-col><p>Notes</p></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>{{ visit.visitNotes ? visit.visitNotes : \'No notes recorded\' }}</ion-col>\n    </ion-row>\n\n    <ion-row margin-top class="header-row">\n      <ion-col><p>Inventory</p></ion-col>\n    </ion-row>\n\n    <ion-row class="total-row">\n      <ion-col col-6>Product</ion-col>\n      <ion-col col-2>Size</ion-col>\n      <ion-col col-2>System</ion-col>\n      <ion-col col-2>Shelf</ion-col>\n    </ion-row>\n    <ion-row *ngFor="let check of visit.stock | stock: \'stock\'">\n      <ion-col col-6>{{ check.product.description }}</ion-col>\n      <ion-col col-2>{{ check.product.size }}</ion-col>\n      <ion-col col-2>{{ check.systemQty }}</ion-col>\n      <ion-col col-2>{{ check.onHand }}</ion-col>\n    </ion-row>\n    <ion-row *ngIf="visit.stock.length === 0">\n      <p>No data to display</p>\n    </ion-row>\n\n    <ion-row margin-top class="header-row">\n      <ion-col><p>Sales Report</p></ion-col>\n    </ion-row>\n\n    <ion-row class="total-row">\n      <ion-col col-6>Product</ion-col>\n      <ion-col col-2>Size</ion-col>\n      <ion-col col-2>Sold</ion-col>\n      <ion-col col-2>Value</ion-col>\n    </ion-row>\n    <ion-row *ngFor="let check of visit.stock | stock: \'eod\'">\n      <ion-col col-6>{{ check.product.description }}</ion-col>\n      <ion-col col-2>{{ check.product.size }}</ion-col>\n      <ion-col col-2>{{ check.qtySold }}</ion-col>\n      <ion-col col-2>£{{ (check.qtySold * check.product.retailPrice) | number: \'1.2-2\' }}</ion-col>\n    </ion-row>\n    <ion-row *ngIf="visit.stock.length === 0">\n      <p>No data to display</p>\n    </ion-row>\n    <ion-row class="total-row">\n      <ion-col col-6></ion-col>\n      <ion-col col-2></ion-col>\n      <ion-col col-2></ion-col>\n      <ion-col col-2>£{{ totalSales() | number: \'1.2-2\' }}</ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\visit-report\visit-report-modal.view.html"*/,
            selector: 'page-visit-report-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], VisitReportModal);
    return VisitReportModal;
}());

//# sourceMappingURL=visit-report-modal.component.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(111);
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

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionChecklistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visit_action_visit_action_modal_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_check_stock_check_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__photos_photo_modal_component__ = __webpack_require__(486);
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
    function ActionChecklistComponent(alertCtrl, modalCtrl, navParams, view, geolocation) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.view = view;
        this.geolocation = geolocation;
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
    ActionChecklistComponent.prototype.recordStockCheck = function (type) {
        var _this = this;
        var stock = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__stock_check_stock_check_component__["a" /* StockCheckModal */], { visit: this.activeVisit, type: type });
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
                            _this.geolocation.getCurrentPosition().then(function (position) {
                                visit.actualDeparture = checkOutTime_1.utc();
                                visit.checkOutLocation = { long: position.coords.longitude, lat: position.coords.latitude };
                            });
                            _this.saveVisit();
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    ActionChecklistComponent.prototype.takePhotos = function () {
        var _this = this;
        var photos = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__photos_photo_modal_component__["a" /* PhotoModal */], { visit: this.activeVisit });
        photos.onDidDismiss(function (data) {
            if (data && data.photos) {
                _this.activeVisit.photos = data.photos;
            }
        });
        photos.present();
    };
    ActionChecklistComponent.prototype.saveVisit = function () {
        this.view.dismiss(this.activeVisit);
    };
    ActionChecklistComponent.prototype.dismiss = function () {
        this.view.dismiss();
    };
    ActionChecklistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-action-checklist',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\check-in\action-checklist.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Record Visit Actions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n      <ion-list>\n        <ion-list-header>\n          Visit Info\n        </ion-list-header>\n        <ion-item>\n          <ion-icon name="basket" item-start></ion-icon>{{ activeVisit?.retailer.name }}\n        </ion-item>\n        <ion-item>\n          <ion-icon name="brush" item-start></ion-icon>{{ activeVisit?.brand.name }}\n        </ion-item>\n        <ion-item>\n          <ion-icon name="navigate" item-start></ion-icon>\n          {{ activeVisit?.location.name }}\n        </ion-item>\n        <ion-item>\n          <ion-icon name="time" item-start></ion-icon>\n           Arrived {{ activeVisit?.actualArrival | amLocal | amDateFormat: \'DD/MM/YYYY HH:mm Z\' }}\n        </ion-item>\n\n        <ion-list-header>\n          Visit Actions\n        </ion-list-header>\n        <button ion-item (click)="recordStockCheck(\'system\')">\n          <ion-icon name="desktop" color="primary" item-start></ion-icon>\n          System Inventory\n        </button>\n\n        <button ion-item (click)="recordStockCheck(\'shelf\')">\n          <ion-icon name="barcode" color="primary" item-start></ion-icon>\n          Shelf Inventory\n        </button>\n\n        <button ion-item (click)="recordStockCheck(\'sales\')">\n          <ion-icon name="cash" color="primary" item-start></ion-icon>\n          End of Day Sales\n        </button>\n\n        <button ion-item (click)="takePhotos()">\n          <ion-icon name="camera" color="primary" item-start></ion-icon>\n          Visit Photos\n        </button>\n\n        <button ion-item (click)="recordVisitNotes()">\n          <ion-icon name="create" color="primary" item-start></ion-icon>\n          Notes\n        </button>\n\n        <button ion-item no-lines (click)="checkOut(activeVisit)">\n          <ion-icon name="log-out" color="secondary" item-start></ion-icon>\n          Checkout\n        </button>\n\n      </ion-list>\n\n\n</ion-content>\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left color="secondary" (click)="saveVisit()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\check-in\action-checklist.view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]])
    ], ActionChecklistComponent);
    return ActionChecklistComponent;
}());

//# sourceMappingURL=action-checklist.component.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitActionModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\visit-action\visit-action-modal.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>\n      Record Visit Actions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item no-lines>\n      <ion-textarea placeholder="Enter a description of the activities conducted in store..." [(ngModel)]="notes"\n                    rows="40"></ion-textarea>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left color="secondary" (click)="save()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\visit-action\visit-action-modal.view.html"*/,
            selector: 'page-visit-action-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], VisitActionModal);
    return VisitActionModal;
}());

//# sourceMappingURL=visit-action-modal.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockCheckModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_products_products_service__ = __webpack_require__(190);
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
        if (this.navParams.get('visit')) {
            this.visit = this.navParams.get('visit');
            this.type = this.navParams.get('type');
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
                    systemQty: 0,
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\stock-check\stock-check.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>\n      {{ type === \'sales\' ? \'Record Sales\' : type === \'shelf\' ? \'Shelf Inventory\' : \'System Inventory\' }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n        <ion-grid no-padding>\n          <ion-row class="header-row">\n            <ion-col col-9>Item</ion-col>\n            <ion-col col-3>{{ type === \'sales\' ? \'Qty Sold\' : \'Qty\' }}</ion-col>\n          </ion-row>\n          <ion-row class="row" *ngFor="let item of visit.stock | stockSold: type">\n            <ion-col col-9>\n              <p><b>{{item.product.description}}</b> {{item.product.size}}<br/>\n              SKU {{item.product.sku}} / {{item.product.barcode}}</p>\n              <span *ngIf="type === \'shelf\' && item.systemQty !== item.onHand">Shelf qty does not match system qty.</span>\n            </ion-col>\n            <ion-col col-3 align-self-center>\n              <ion-input item-end class="stock-input" no-padding *ngIf="type === \'system\'" type="number" placeholder="0" [(ngModel)]="item.systemQty"></ion-input>\n              <ion-input item-end class="stock-input" no-padding *ngIf="type === \'shelf\'" type="number" placeholder="0" [(ngModel)]="item.onHand"></ion-input>\n\n              <ion-input item-end class="stock-input" no-padding *ngIf="type === \'sales\'" type="number" placeholder="0" [(ngModel)]="item.qtySold"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left color="secondary" (click)="saveStock()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\stock-check\stock-check.view.html"*/,
            selector: 'page-stock-check-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_products_products_service__["a" /* ProductsService */]])
    ], StockCheckModal);
    return StockCheckModal;
}());

//# sourceMappingURL=stock-check.component.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhotoModal = /** @class */ (function () {
    function PhotoModal(navParams, view, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl) {
        this.navParams = navParams;
        this.view = view;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.lastImage = null;
        this.visit = this.navParams.get('visit');
    }
    PhotoModal.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    PhotoModal.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    // Always get the accurate path to your apps folder
    PhotoModal.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            console.log(cordova.file.dataDirectory + img);
            return cordova.file.dataDirectory + img;
        }
    };
    PhotoModal.prototype.dismiss = function () {
        this.view.dismiss();
    };
    // Create a new name for the image
    PhotoModal.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    PhotoModal.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    PhotoModal.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    PhotoModal.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        var url = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].API + 'visit/images';
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        console.log(this.lastImage);
        var options = {
            fileName: filename,
            chunkedMode: false,
            params: { 'fileName': filename }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            _this.presentToast('Image successfully uploaded.');
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
    };
    PhotoModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\photos\photo-modal.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Visit Photos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <img src="{{pathForImage(lastImage)}}" style="width: 100%" [hidden]="lastImage === null">\n  <h3 [hidden]="lastImage !== null">Please Select Image!</h3>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar color="primary">\n    <ion-buttons>\n      <button ion-button icon-left (click)="presentActionSheet()">\n        <ion-icon name="camera"></ion-icon>Select Image\n      </button>\n      <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n        <ion-icon name="cloud-upload"></ion-icon>Upload\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\photos\photo-modal.view.html"*/,
            selector: 'page-photo-modal'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_transfer__["a" /* Transfer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _k || Object])
    ], PhotoModal);
    return PhotoModal;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=photo-modal.component.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensesModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_expense_modal__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__ = __webpack_require__(58);
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
    function ExpensesModal(navParams, view, modal, scheduleService, nav, loading, error) {
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
        this.scheduleService = scheduleService;
        this.nav = nav;
        this.loading = loading;
        this.error = error;
        this.visit = this.navParams.get('visit');
    }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\expenses\expenses-modal.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Expenses\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n\n  <ion-grid no-padding>\n\n    <ion-row class="header-row">\n      <ion-col><p>Visit Details</p></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Name</b></ion-col>\n      <ion-col col-9>{{ visit.user.firstName + \' \' + visit.user.lastName }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Brand</b></ion-col>\n      <ion-col col-9>{{ visit.brand.name }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Location</b></ion-col>\n      <ion-col col-4>{{ visit.location.name }}</ion-col>\n      <ion-col col-5>{{ visit.location.type }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Retailer</b></ion-col>\n      <ion-col col-4>{{ visit.retailer.name }}</ion-col>\n      <ion-col col-5>{{ visit.retailer.type }}</ion-col>\n    </ion-row>\n\n    <ion-row margin-top class="header-row">\n      <ion-col><p>Time Reporting (Local time)</p></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Scheduled</b></ion-col>\n      <ion-col col-3>{{ visit.scheduledArrival | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n      <ion-col col-3></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Check In</b></ion-col>\n      <ion-col col-3>{{ visit.actualArrival | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n      <ion-col col-3>{{ visit.actualArrival | amLocal | amDateFormat: \'HH:mm Z\' }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Check Out</b></ion-col>\n      <ion-col col-3>{{ visit.actualDeparture | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n      <ion-col col-3>{{ visit.actualDeparture | amLocal | amDateFormat: \'HH:mm Z\' }}</ion-col>\n    </ion-row>\n\n\n    <ion-row class="header-row" margin-top>\n      <ion-col><p>Expense Report</p></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p-table [columns]="cols" [value]="visit.expenses" selectionMode="single" [(selection)]="selectedExpense"\n           (onRowSelect)="onRowSelect($event)">\n    <ng-template pTemplate="caption">\n      Click row to edit or delete\n    </ng-template>\n    <ng-template pTemplate="header" let-columns>\n      <tr>\n        <th *ngFor="let col of columns" [pSortableColumn]="col.field">\n          {{col.header}}\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate="body" let-rowData let-columns="columns">\n      <tr [pSelectableRow]="rowData">\n        <td>\n          {{ rowData[\'expenseDate\'] | amLocal | amDateFormat: \'DD/MM/YY\' }}\n        </td>\n        <td>\n          {{ rowData[\'description\'] }}\n        </td>\n        <td>\n          £{{ rowData[\'amount\'] | number: \'1.2-2\'}}\n        </td>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate="footer">\n      <tr>\n        <td>Total</td>\n        <td></td>\n        <td>\n          £{{ expensesTotal() | number: \'1.2-2\' }}\n        </td>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate="summary" let-rowData>\n      <div style="text-align:left">\n        <button ion-button icon-end (click)="showDialogToAdd()" *ngIf="!visit.approvedExpenses">Add\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </div>\n    </ng-template>\n\n  </p-table>\n\n  <ion-grid no-padding>\n    <ion-row class="header-row" margin-top>\n      <ion-col><p>Travel Report</p></ion-col>\n    </ion-row>\n    <ion-row class="total-row">\n      <ion-col col-3>Time</ion-col>\n      <ion-col>Threshold</ion-col>\n      <ion-col col-3>Rate/hr</ion-col>\n      <ion-col col-3>Total</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3>\n        <ion-input type="number" [(ngModel)]="visit.travelTime" [disabled]="visit.approvedExpenses"></ion-input>\n      </ion-col>\n      <ion-col col-3>\n        <ion-label>{{ visit.travelTimeThreshold | number: \'1.2-2\' }}hrs</ion-label>\n      </ion-col>\n      <ion-col col-3>\n        <ion-label>£{{ visit.travelRate | number: \'1.2-2\' }}/hr</ion-label>\n      </ion-col>\n      <ion-col col-3>\n        <ion-label>£{{ ((visit.travelRate * (visit.travelTime - visit.travelTimeThreshold)) > 0 ?\n          (visit.travelRate * (visit.travelTime - visit.travelTimeThreshold)) : 0) | number: \'1.2-2\' }}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class="total-row">\n      <ion-col col-3>Miles</ion-col>\n      <ion-col>Threshold</ion-col>\n      <ion-col col-3>Rate/m</ion-col>\n      <ion-col col-3>Total</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3>\n        <ion-input type="number" [(ngModel)]="visit.mileage" [disabled]="visit.approvedExpenses"></ion-input>\n      </ion-col>\n      <ion-col col-3>\n        <ion-label>{{ visit.mileageThreshold | number: \'1.2-2\' }} miles</ion-label>\n      </ion-col>\n      <ion-col col-3>\n        <ion-label>£{{ visit.mileageRate | number: \'1.2-2\' }}</ion-label>\n      </ion-col>\n      <ion-col col-3>\n        <ion-label>£{{ ((visit.mileage - visit.mileageThreshold) * visit.mileageRate) > 0 ?\n          ((visit.mileage - visit.mileageThreshold) * visit.mileageRate) : 0 | number: \'1.2-2\' }}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n    <ion-grid>\n      <ion-row align-items-center>\n          <ion-col *ngIf="!visit.approvedExpenses && !visit.paidExpenses"><h2>Status: Pending</h2></ion-col>\n          <ion-col *ngIf="visit.approvedExpenses && !visit.paidExpenses"><h2>Status: Approved</h2></ion-col>\n          <ion-col *ngIf="visit.approvedExpenses && visit.paidExpenses"><h2>Status: Paid</h2></ion-col>\n\n        <ion-col align-self-end style="text-align: right">\n          <button ion-button icon-left color="secondary" (click)="saveAndClose()">\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\expenses\expenses-modal.view.html"*/,
            selector: 'page-expenses-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__["a" /* AlertService */]])
    ], ExpensesModal);
    return ExpensesModal;
}());

//# sourceMappingURL=expenses-modal.component.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewExpenseModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], NewExpenseModal);
    return NewExpenseModal;
}());

//# sourceMappingURL=new-expense-modal.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(102);
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

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(604);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    PRODUCTION: false,
    API: 'http://192.168.0.19:3000/',
    HEADERS: {}
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth_module__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_storage_storage_service__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_alert_alert_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule_module__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__(506);
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
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule_module__["a" /* ScheduleModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__shared_storage_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_alert_alert_service__["a" /* AlertService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_auth_signin_signin__ = __webpack_require__(170);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 655:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 356,
	"./af.js": 356,
	"./ar": 357,
	"./ar-dz": 358,
	"./ar-dz.js": 358,
	"./ar-kw": 359,
	"./ar-kw.js": 359,
	"./ar-ly": 360,
	"./ar-ly.js": 360,
	"./ar-ma": 361,
	"./ar-ma.js": 361,
	"./ar-sa": 362,
	"./ar-sa.js": 362,
	"./ar-tn": 363,
	"./ar-tn.js": 363,
	"./ar.js": 357,
	"./az": 364,
	"./az.js": 364,
	"./be": 365,
	"./be.js": 365,
	"./bg": 366,
	"./bg.js": 366,
	"./bm": 367,
	"./bm.js": 367,
	"./bn": 368,
	"./bn.js": 368,
	"./bo": 369,
	"./bo.js": 369,
	"./br": 370,
	"./br.js": 370,
	"./bs": 371,
	"./bs.js": 371,
	"./ca": 372,
	"./ca.js": 372,
	"./cs": 373,
	"./cs.js": 373,
	"./cv": 374,
	"./cv.js": 374,
	"./cy": 375,
	"./cy.js": 375,
	"./da": 376,
	"./da.js": 376,
	"./de": 377,
	"./de-at": 378,
	"./de-at.js": 378,
	"./de-ch": 379,
	"./de-ch.js": 379,
	"./de.js": 377,
	"./dv": 380,
	"./dv.js": 380,
	"./el": 381,
	"./el.js": 381,
	"./en-au": 382,
	"./en-au.js": 382,
	"./en-ca": 383,
	"./en-ca.js": 383,
	"./en-gb": 384,
	"./en-gb.js": 384,
	"./en-ie": 385,
	"./en-ie.js": 385,
	"./en-il": 386,
	"./en-il.js": 386,
	"./en-nz": 387,
	"./en-nz.js": 387,
	"./eo": 388,
	"./eo.js": 388,
	"./es": 389,
	"./es-do": 390,
	"./es-do.js": 390,
	"./es-us": 391,
	"./es-us.js": 391,
	"./es.js": 389,
	"./et": 392,
	"./et.js": 392,
	"./eu": 393,
	"./eu.js": 393,
	"./fa": 394,
	"./fa.js": 394,
	"./fi": 395,
	"./fi.js": 395,
	"./fo": 396,
	"./fo.js": 396,
	"./fr": 397,
	"./fr-ca": 398,
	"./fr-ca.js": 398,
	"./fr-ch": 399,
	"./fr-ch.js": 399,
	"./fr.js": 397,
	"./fy": 400,
	"./fy.js": 400,
	"./gd": 401,
	"./gd.js": 401,
	"./gl": 402,
	"./gl.js": 402,
	"./gom-latn": 403,
	"./gom-latn.js": 403,
	"./gu": 404,
	"./gu.js": 404,
	"./he": 405,
	"./he.js": 405,
	"./hi": 406,
	"./hi.js": 406,
	"./hr": 407,
	"./hr.js": 407,
	"./hu": 408,
	"./hu.js": 408,
	"./hy-am": 409,
	"./hy-am.js": 409,
	"./id": 410,
	"./id.js": 410,
	"./is": 411,
	"./is.js": 411,
	"./it": 412,
	"./it.js": 412,
	"./ja": 413,
	"./ja.js": 413,
	"./jv": 414,
	"./jv.js": 414,
	"./ka": 415,
	"./ka.js": 415,
	"./kk": 416,
	"./kk.js": 416,
	"./km": 417,
	"./km.js": 417,
	"./kn": 418,
	"./kn.js": 418,
	"./ko": 419,
	"./ko.js": 419,
	"./ky": 420,
	"./ky.js": 420,
	"./lb": 421,
	"./lb.js": 421,
	"./lo": 422,
	"./lo.js": 422,
	"./lt": 423,
	"./lt.js": 423,
	"./lv": 424,
	"./lv.js": 424,
	"./me": 425,
	"./me.js": 425,
	"./mi": 426,
	"./mi.js": 426,
	"./mk": 427,
	"./mk.js": 427,
	"./ml": 428,
	"./ml.js": 428,
	"./mn": 429,
	"./mn.js": 429,
	"./mr": 430,
	"./mr.js": 430,
	"./ms": 431,
	"./ms-my": 432,
	"./ms-my.js": 432,
	"./ms.js": 431,
	"./mt": 433,
	"./mt.js": 433,
	"./my": 434,
	"./my.js": 434,
	"./nb": 435,
	"./nb.js": 435,
	"./ne": 436,
	"./ne.js": 436,
	"./nl": 437,
	"./nl-be": 438,
	"./nl-be.js": 438,
	"./nl.js": 437,
	"./nn": 439,
	"./nn.js": 439,
	"./pa-in": 440,
	"./pa-in.js": 440,
	"./pl": 441,
	"./pl.js": 441,
	"./pt": 442,
	"./pt-br": 443,
	"./pt-br.js": 443,
	"./pt.js": 442,
	"./ro": 444,
	"./ro.js": 444,
	"./ru": 445,
	"./ru.js": 445,
	"./sd": 446,
	"./sd.js": 446,
	"./se": 447,
	"./se.js": 447,
	"./si": 448,
	"./si.js": 448,
	"./sk": 449,
	"./sk.js": 449,
	"./sl": 450,
	"./sl.js": 450,
	"./sq": 451,
	"./sq.js": 451,
	"./sr": 452,
	"./sr-cyrl": 453,
	"./sr-cyrl.js": 453,
	"./sr.js": 452,
	"./ss": 454,
	"./ss.js": 454,
	"./sv": 455,
	"./sv.js": 455,
	"./sw": 456,
	"./sw.js": 456,
	"./ta": 457,
	"./ta.js": 457,
	"./te": 458,
	"./te.js": 458,
	"./tet": 459,
	"./tet.js": 459,
	"./tg": 460,
	"./tg.js": 460,
	"./th": 461,
	"./th.js": 461,
	"./tl-ph": 462,
	"./tl-ph.js": 462,
	"./tlh": 463,
	"./tlh.js": 463,
	"./tr": 464,
	"./tr.js": 464,
	"./tzl": 465,
	"./tzl.js": 465,
	"./tzm": 466,
	"./tzm-latn": 467,
	"./tzm-latn.js": 467,
	"./tzm.js": 466,
	"./ug-cn": 468,
	"./ug-cn.js": 468,
	"./uk": 469,
	"./uk.js": 469,
	"./ur": 470,
	"./ur.js": 470,
	"./uz": 471,
	"./uz-latn": 472,
	"./uz-latn.js": 472,
	"./uz.js": 471,
	"./vi": 473,
	"./vi.js": 473,
	"./x-pseudo": 474,
	"./x-pseudo.js": 474,
	"./yo": 475,
	"./yo.js": 475,
	"./zh-cn": 476,
	"./zh-cn.js": 476,
	"./zh-hk": 477,
	"./zh-hk.js": 477,
	"./zh-tw": 478,
	"./zh-tw.js": 478
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
webpackContext.id = 754;

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_order_pipe__ = __webpack_require__(492);
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
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_order_pipe__["a" /* OrderModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pipes_visit_status_pipe__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__schedule_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visit_action_visit_action_modal_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_new_schedule_new_modal_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stock_check_stock_check_component__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_pipes_stock_sold_pipe__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__visit_report_visit_report_modal_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_pipes_group_by_pipe__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_pipes_visit_filter_pipe__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__check_in_action_checklist_component__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_pipes_stock_check_pipe__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__edit_complete_visit_edit_complete_component__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__expenses_expenses_modal_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_table__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_button__ = __webpack_require__(1045);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__expenses_new_expense_modal__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_order_pipe__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_services_module__ = __webpack_require__(1047);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__auth_token_interceptor__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shelf_stock_check_shelf_stock_check_component__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__photos_photo_modal_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_transfer__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_path__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_file__ = __webpack_require__(755);
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
                __WEBPACK_IMPORTED_MODULE_7__schedule_component__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_9__add_new_schedule_new_modal_component__["a" /* ScheduleNewModal */],
                __WEBPACK_IMPORTED_MODULE_8__visit_action_visit_action_modal_component__["a" /* VisitActionModal */],
                __WEBPACK_IMPORTED_MODULE_10__stock_check_stock_check_component__["a" /* StockCheckModal */],
                __WEBPACK_IMPORTED_MODULE_27__shelf_stock_check_shelf_stock_check_component__["a" /* ShelfStockCheckModal */],
                __WEBPACK_IMPORTED_MODULE_12__visit_report_visit_report_modal_component__["a" /* VisitReportModal */],
                __WEBPACK_IMPORTED_MODULE_18__expenses_expenses_modal_component__["a" /* ExpensesModal */],
                __WEBPACK_IMPORTED_MODULE_17__edit_complete_visit_edit_complete_component__["a" /* EditCompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_pipes_visit_status_pipe__["a" /* VisitStatusPipe */],
                __WEBPACK_IMPORTED_MODULE_11__shared_pipes_stock_sold_pipe__["a" /* StockSoldPipe */],
                __WEBPACK_IMPORTED_MODULE_13__shared_pipes_group_by_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_14__shared_pipes_visit_filter_pipe__["a" /* VisitFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_15__check_in_action_checklist_component__["a" /* ActionChecklistComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_pipes_stock_check_pipe__["a" /* StockCheckPipe */],
                __WEBPACK_IMPORTED_MODULE_22__expenses_new_expense_modal__["a" /* NewExpenseModal */],
                __WEBPACK_IMPORTED_MODULE_28__photos_photo_modal_component__["a" /* PhotoModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_21_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_23_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_24__services_services_module__["a" /* ServicesModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__schedule_component__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_9__add_new_schedule_new_modal_component__["a" /* ScheduleNewModal */],
                __WEBPACK_IMPORTED_MODULE_8__visit_action_visit_action_modal_component__["a" /* VisitActionModal */],
                __WEBPACK_IMPORTED_MODULE_10__stock_check_stock_check_component__["a" /* StockCheckModal */],
                __WEBPACK_IMPORTED_MODULE_27__shelf_stock_check_shelf_stock_check_component__["a" /* ShelfStockCheckModal */],
                __WEBPACK_IMPORTED_MODULE_12__visit_report_visit_report_modal_component__["a" /* VisitReportModal */],
                __WEBPACK_IMPORTED_MODULE_18__expenses_expenses_modal_component__["a" /* ExpensesModal */],
                __WEBPACK_IMPORTED_MODULE_15__check_in_action_checklist_component__["a" /* ActionChecklistComponent */],
                __WEBPACK_IMPORTED_MODULE_17__edit_complete_visit_edit_complete_component__["a" /* EditCompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_22__expenses_new_expense_modal__["a" /* NewExpenseModal */],
                __WEBPACK_IMPORTED_MODULE_28__photos_photo_modal_component__["a" /* PhotoModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__schedule_service__["a" /* ScheduleService */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_25__auth_token_interceptor__["a" /* TokenInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitStatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(111);
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

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockSoldPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(111);
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
        if (sold === 'sales') {
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](stock, function (item) {
                if (item.onHand > 0 || item.systemQty > 0) {
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

/***/ 761:
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

/***/ 762:
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

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_service__ = __webpack_require__(80);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EditCompleteComponent);
    return EditCompleteComponent;
}());

//# sourceMappingURL=edit-complete.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(60);
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
    ScheduleService.prototype.getVisits = function (skip, take) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "visit/app/infinite", {
            skip: skip,
            take: take,
            filters: {},
            sortOrder: 1,
            sortField: 'scheduleDate'
        });
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

},[599]);
//# sourceMappingURL=main.js.map