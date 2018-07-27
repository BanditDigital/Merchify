webpackJsonp([0],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromPromise__ = __webpack_require__(640);
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

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_new_schedule_new_modal_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jsonwebtoken__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__visit_report_visit_report_modal_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_pipes_visit_filter_pipe__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__check_in_action_checklist_component__ = __webpack_require__(429);
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
    function SchedulePage(navCtrl, navParams, modalCtrl, loadingCtrl, scheduleService, errorAlert, actionSheetCtrl, alertCtrl, camera, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.scheduleService = scheduleService;
        this.errorAlert = errorAlert;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.authService = authService;
        this.rawData = [];
        this.visits = [];
        this.showCompleted = false;
        this.showScheduled = true;
        this.searchText = '';
        this.options = {
            quality: 10,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.getVisits();
        this.checkAdminRole();
    }
    // public takePhoto() {
    //   this.camera.getPicture(this.options).then((imageData) => {
    //     // imageData is either a base64 encoded string or a file URI
    //     // If it's base64:
    //     let base64Image = 'data:image/jpeg;base64,' + imageData;
    //     this.activeVisit.photo = base64Image;
    //     this.saveVisit();
    //   }, (err) => {
    //     // Handle error
    //   });
    // }
    SchedulePage.prototype.checkAdminRole = function () {
        var _this = this;
        this.authService.getToken()
            .subscribe(function (token) {
            if (token) {
                var user = __WEBPACK_IMPORTED_MODULE_9_jsonwebtoken__["decode"](token);
                _this.isAdmin = __WEBPACK_IMPORTED_MODULE_6_lodash__["includes"](user.roles, 'Admin');
                _this.userId = user.userId;
            }
            else {
                _this.isAdmin = false;
            }
        }, function (error) {
            console.log(error);
        });
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
                    _this.viewVisitReport(visit);
                }
            });
        }
        var actions = this.actionSheetCtrl.create({
            title: 'What next?',
            buttons: buttons
        });
        actions.present();
    };
    SchedulePage.prototype.viewVisitReport = function (visit) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__visit_report_visit_report_modal_component__["a" /* VisitReportModal */], { visit: visit });
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
        if (this.activeVisit) {
            this.alertCtrl.create({
                title: 'Already checked in',
                message: "You are already checked in at " + this.activeVisit.retailer.name + ", " + this.activeVisit.location.name + " on behalf of " + this.activeVisit.brand.name + ".\n        Please checkout before attempting another check-in.",
                buttons: [
                    { text: 'OK' }
                ]
            }).present();
        }
        else {
            var loading_1 = this.loadingCtrl.create({ content: 'Checking in...' });
            var checkInTime_1 = __WEBPACK_IMPORTED_MODULE_5_moment__();
            var confirm_1 = this.alertCtrl.create({
                title: "Confirm Check-in",
                message: "Are you sure you want to check-in now, the time recorded will be " + checkInTime_1.format('DD/MM/YYYY HH:mm'),
                buttons: [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            loading_1.present();
                            visit.actualArrival = checkInTime_1.format('YYYY-MM-DD HH:mm:ss');
                            _this.scheduleService.editVisit(visit)
                                .subscribe(function (updated) {
                                _this.activeVisit = updated;
                                _this.visitFilters();
                                loading_1.dismiss();
                            }, function (error) {
                                _this.errorAlert.showAlert('Could not check in', error.error.message);
                                loading_1.dismiss();
                            });
                        }
                    }
                ]
            });
            confirm_1.present();
        }
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__check_in_action_checklist_component__["a" /* ActionChecklistComponent */], { visit: visit }, { enableBackdropDismiss: false });
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
        this.filteredVisits = new __WEBPACK_IMPORTED_MODULE_11__shared_pipes_visit_filter_pipe__["a" /* VisitFilterPipe */]()
            .transform(this.rawData, { userInput: this.searchText, showCompleted: this.showCompleted, showScheduled: this.showScheduled });
        this.visits = [];
        this.filteredVisits.forEach(function (visit) {
            _this.visits.push(visit);
        });
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-schedule',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\schedule.view.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Merchify</ion-title>\n  </ion-navbar>\n  <ion-searchbar (ionInput)="searchVisits()" [(ngModel)]="searchText"></ion-searchbar>\n  <div class="filters">\n    <div float-start class="my-checkbox">\n      <ion-label text-uppercase>Completed</ion-label>\n      <ion-checkbox [(ngModel)]="showCompleted" (ionChange)="searchVisits()">\n      </ion-checkbox>\n    </div>\n    <div float-start class="my-checkbox">\n      <ion-label text-uppercase>Scheduled</ion-label>\n      <ion-checkbox [(ngModel)]="showScheduled" (ionChange)="searchVisits()">\n      </ion-checkbox>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <ion-list>\n    <ion-item *ngIf="visits.length === 0">\n      No visits found, better get cracking!\n    </ion-item>\n    <ion-item-group *ngFor="let group of visits | groupBy : \'state\'">\n      <ion-item-divider color="light">\n        {{ group.key }} ({{ group.list.length }})\n      </ion-item-divider>\n      <ion-item *ngFor="let visit of group.list" (click)="openVisit(visit)">\n        <h3>{{ visit.retailer.name }} ({{ visit.location.name }})</h3>\n        <h3>{{ (visit.actualArrival ? visit.actualArrival : visit.scheduledArrival) | amDateFormat:\'dddd MMMM Do YYYY\' }}</h3>\n        <p>On behalf of {{ visit.brand.name }}</p>\n        <p *ngIf="isAdmin">{{ visit.user.firstName + \' \' + visit.user.lastName }}</p>\n        <ion-badge color="{{ getVisitBadgeColor(visit) }}" item-end>{{ visit.state }}\n        {{ visit.state == \'Checked In\' ? ((visit.actualArrival | amDifference: today :\'hours\' : true | number: \'1.2-2\')*-1).toString() + \'hrs\' : \'\'}}\n        </ion-badge>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-fab bottom right *ngIf="!activeVisit">\n    <button ion-fab color="secondary" (click)="newAppointment()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\schedule.view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__["a" /* AuthService */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(46);
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

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(46);
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

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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

/***/ 211:
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
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brands_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brand_modal__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__ = __webpack_require__(17);
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
    function BrandsPage(brandService, modalCtrl, alertCtrl, navCtrl, errorAlert, loadingCtrl) {
        this.brandService = brandService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], BrandsPage);
    return BrandsPage;
}());

//# sourceMappingURL=brands.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brands_service__ = __webpack_require__(45);
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
            name: [brand ? brand.name : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)
                ])],
            hourlyRate: [brand ? brand.hourlyRate : 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    BrandModal.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Saving brand...' });
        loading.present();
        if (!this.edit) {
            this.brand = {
                name: this.brandForm.controls.name.value,
                hourlyRate: this.brandForm.controls.hourlyRate.value
            };
        }
        else {
            this.brand.name = this.brandForm.controls.name.value;
            this.brand.hourlyRate = this.brandForm.controls.hourlyRate.value;
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
            selector: 'modal-brand',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\brand\brand-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>\n      {{ brand ? \'Edit \' + brand.name : \'Create New Brand\' }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]="brandForm" novalidate>\n    <ion-item-divider>\n      Brand Details\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>Brand Name</ion-label>\n      <ion-input type="text" formControlName="name" placeholder="Give the brand name..."></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="brandForm.get(\'name\').hasError(\'maxlength\')">\n        Must be less than 20 characters.\n      </span>\n    <span class="error" *ngIf="brandForm.get(\'name\').hasError(\'minlength\')">\n        Must be more than 2 characters.\n      </span>\n    <span class="error" *ngIf="brandForm.get(\'name\').hasError(\'required\')\n      && brandForm.get(\'name\').touched">\n        Brand name is required.\n      </span>\n\n    <ion-item>\n    <ion-label>Hourly Rate</ion-label>\n    <ion-input type="text" formControlName="hourlyRate" placeholder="Set the hourly rate"></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="brandForm.get(\'hourlyRate\').hasError(\'required\')\n      && brandForm.get(\'hourlyRate\').touched">\n        Hourly rate is required.\n      </span>\n  </form>\n\n  <div *ngIf="brand">\n    <ion-item-divider>\n      Linked Products\n    </ion-item-divider>\n    <ion-list>\n      <ion-item *ngIf="!brand.products">There are no products linked to this brand.</ion-item>\n      <ion-item *ngFor="let product of brand?.products">\n        {{ product.sku }} - {{ product.description }}\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button *ngIf="brand" ion-button icon-left color="danger" (click)="delete()">\n            <ion-icon name="trash" color></ion-icon>\n            Delete\n          </button>\n        </ion-col>\n        <ion-col>\n          <button [disabled]="!brandForm.valid" ion-button icon-left color="secondary" (click)="save()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\brand\brand-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__brands_service__["a" /* BrandsService */]])
    ], BrandModal);
    return BrandModal;
}());

//# sourceMappingURL=brand-modal.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_storage_storage_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_forgot__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__schedule_schedule_component__ = __webpack_require__(156);
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
    function SigninPage(navCtrl, fb, authService, storageService, menuCtrl, alertService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.authService = authService;
        this.storageService = storageService;
        this.menuCtrl = menuCtrl;
        this.alertService = alertService;
        this.loadingCtrl = loadingCtrl;
        this.initialiseForm();
        this.menuCtrl.swipeEnable(false);
    }
    SigninPage.prototype.initialiseForm = function () {
        this.signinForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    SigninPage.prototype.signIn = function (accountDetails) {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Logging in...' });
        loading.present();
        this.authService.signIn(accountDetails)
            .subscribe(function (data) {
            _this.storageService.setToken(data['token']);
            _this.menuCtrl.swipeEnable(true);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__schedule_schedule_component__["a" /* SchedulePage */]);
            loading.dismiss();
        }, function (err) {
            _this.alertService.showAlert('Login Failed', err.error.message);
            loading.dismiss();
        });
    };
    SigninPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__forgot_forgot__["a" /* ForgotPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\auth\signin\signin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list-header class="header">\n    <ion-icon name="people" item-start></ion-icon>\n    Account Details\n  </ion-list-header>\n\n  <form [formGroup]="signinForm">\n    <ion-list>\n      <!-- USER NAME INPUT -->\n      <ion-item>\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="signinForm.controls.email.hasError(\'required\') && signinForm.controls.email.touched">\n          Email is required.\n      </span>\n      <!-- PASSWORD INPUT -->\n      <ion-item>\n        <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="signinForm.controls.password.hasError(\'required\') && signinForm.controls.password.touched">\n          Password is required.\n      </span>\n    </ion-list>\n  </form>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar padding end>\n      <ion-buttons>\n        <button [disabled]="true" ion-button (click)="forgot()">Forgot?</button>\n        <button ion-button (click)="signUp()">Sign Up</button>\n      </ion-buttons>\n      <ion-buttons end right>\n            <button ion-button (click)="signIn(signinForm.value)"\n                    [disabled]="!signinForm.valid">Sign In</button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\auth\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_storage_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validators_password_validator__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_modal__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_alert_alert_service__ = __webpack_require__(17);
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
            firstName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(40)
                ])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(40)
                ])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(80)
                ])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(15)
                ])],
            confirmPassword: [''],
            accessCode: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(6)
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__shared_alert_alert_service__["a" /* AlertService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SignupErrorPage);
    return SignupErrorPage;
}());

//# sourceMappingURL=error.modal.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = /** @class */ (function () {
    function ForgotPage(navCtrl, navParams, fb, loadingCtrl, authService, alertService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertService = alertService;
        this.initialiseForm();
    }
    ForgotPage.prototype.initialiseForm = function () {
        this.forgotForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])]
        });
    };
    ForgotPage.prototype.submit = function (emailAddress) {
        var loading = this.loadingCtrl.create({ content: 'Sending...' });
        loading.present();
        this.authService.forgot(emailAddress);
        this.alertService.showAlert('Reset Request Sent', 'You will soon receive an email with instructions on how to reset your password');
        loading.dismiss();
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\auth\forgot\forgot.html"*/'<!--\n\n  Generated template for the ForgotPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>forgot</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list-header class="header">\n\n    <ion-icon name="mail" item-start></ion-icon>\n\n    Email Details\n\n  </ion-list-header>\n\n\n\n  <form [formGroup]="forgotForm">\n\n    <ion-list>\n\n      <!-- EMAIL INPUT -->\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n\n      </ion-item>\n\n      <span class="error" *ngIf="forgotForm.controls.email.hasError(\'required\') && forgotForm.controls.email.touched">\n\n          Email is required.\n\n      </span>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar padding end>\n\n    <ion-buttons end right>\n\n      <button ion-button (click)="submit(forgotForm.value)"\n\n              [disabled]="!forgotForm.valid">Sign In</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\auth\forgot\forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__["a" /* AlertService */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleNewModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_retailer_retailer_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_brand_brands_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jsonwebtoken__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(86);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__admin_retailer_retailer_service__["a" /* RetailerService */],
            __WEBPACK_IMPORTED_MODULE_5__admin_brand_brands_service__["a" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_6__schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], ScheduleNewModal);
    return ScheduleNewModal;
}());

//# sourceMappingURL=schedule-new-modal.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_storage_storage_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(86);
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






var AuthService = /** @class */ (function () {
    function AuthService(http, storageService, storage) {
        this.http = http;
        this.storageService = storageService;
        this.storage = storage;
    }
    AuthService.prototype.register = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "users", user);
    };
    AuthService.prototype.signIn = function (accountDetails) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + "users/login", accountDetails);
    };
    AuthService.prototype.signOut = function () {
        this.storageService.removeToken();
    };
    AuthService.prototype.forgot = function (emailAddress) {
        // return this.http.post(`${environment.API}users/forgot`, emailAddress);
    };
    AuthService.prototype.getToken = function () {
        return this.storageService.getToken();
    };
    AuthService.prototype.isAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var auth, token, jwt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        auth = false;
                        return [4 /*yield*/, this.storageService.getTokenPromise()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            jwt = __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__["decode"](token);
                            auth = (new Date().getTime() / 1000 < jwt.exp);
                        }
                        return [2 /*return*/, auth];
                }
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__shared_storage_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitReportModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
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
            total += check.qtySold * check.product.retailPrice;
        }
        return total;
    };
    VisitReportModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\visit-report\visit-report-modal.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Visit Report\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-grid no-padding>\n\n    <ion-row class="header-row">\n      <ion-col><p>Visit Details</p></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Name</b></ion-col>\n      <ion-col col-9>{{ visit.user.firstName + \' \' + visit.user.lastName }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Brand</b></ion-col>\n      <ion-col col-9>{{ visit.brand.name }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Location</b></ion-col>\n      <ion-col col-4>{{ visit.location.name }}</ion-col>\n      <ion-col col-5>{{ visit.location.type }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3><b>Retailer</b></ion-col>\n      <ion-col col-4>{{ visit.retailer.name }}</ion-col>\n      <ion-col col-5>{{ visit.retailer.type }}</ion-col>\n    </ion-row>\n\n    <ion-row margin-top class="header-row">\n      <ion-col><p>Time Reporting</p></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Scheduled</b></ion-col>\n      <ion-col col-3>{{ visit.scheduledArrival | amLocale:\'en\' | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n      <ion-col col-3>{{ visit.scheduledArrival | amLocale:\'en\' | amDateFormat: \'hh:mm\' }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Check In</b></ion-col>\n      <ion-col col-3>{{ visit.actualArrival | amLocal | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n      <ion-col col-3>{{ visit.actualArrival | amLocal | amDateFormat: \'hh:mm\' }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Check Out</b></ion-col>\n      <ion-col col-3>{{ visit.actualDeparture | amLocale:\'en\' | amDateFormat: \'DD/MM/YY\' }}</ion-col>\n      <ion-col col-3>{{ visit.actualDeparture | amLocale:\'en\' | amDateFormat: \'hh:mm\' }}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6><b>Time On Site</b></ion-col>\n      <ion-col col-3></ion-col>\n      <ion-col col-3>{{ timeSpent(visit.actualDeparture, visit.actualArrival) }} hrs</ion-col>\n    </ion-row>\n\n    <ion-row class="total-row">\n    <ion-col col-6><b>Visit Total</b></ion-col>\n    <ion-col col-3>£{{ visit.brand.hourlyRate}}/hr</ion-col>\n    <ion-col col-3>£{{ (timeSpent(visit.actualDeparture, visit.actualArrival) * visit.brand.hourlyRate) | number: \'1.2-2\' }}</ion-col>\n    </ion-row>\n\n\n    <ion-row margin-top class="header-row">\n      <ion-col><p>Store Details</p></ion-col>\n    </ion-row>\n\n    <ion-row class="total-row">\n      <ion-col><b>Store Contact</b></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-9>{{ visit.siteContact ? visit.siteContact : \'No contact name recorded\' }}</ion-col>\n    </ion-row>\n\n    <ion-row class="total-row">\n      <ion-col><b>Activities/Notes</b></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>{{ visit.visitNotes ? visit.visitNotes : \'No notes recorded\' }}</ion-col>\n    </ion-row>\n\n    <ion-row margin-top class="header-row">\n      <ion-col><p>Stock Check</p></ion-col>\n    </ion-row>\n    <ion-row *ngIf="visit.stock.length === 0">\n      <p>No data to display</p>\n    </ion-row>\n    <ion-row class="total-row">\n      <ion-col col-8>Product</ion-col>\n      <ion-col col-2>Size</ion-col>\n      <ion-col col-2>On Hand</ion-col>\n    </ion-row>\n    <ion-row *ngFor="let check of visit.stock | stock: \'stock\'">\n      <ion-col col-8>{{ check.product.description }}</ion-col>\n      <ion-col col-2>{{ check.product.size }}</ion-col>\n      <ion-col col-2>{{ check.onHand }}</ion-col>\n    </ion-row>\n\n    <ion-row margin-top class="header-row">\n      <ion-col><p>Sales Report</p></ion-col>\n    </ion-row>\n    <ion-row *ngIf="visit.stock.length === 0">\n      <p>No data to display</p>\n    </ion-row>\n    <ion-row class="total-row">\n      <ion-col col-6>Product</ion-col>\n      <ion-col col-2>Size</ion-col>\n      <ion-col col-2>Sold</ion-col>\n      <ion-col col-2>Value</ion-col>\n    </ion-row>\n    <ion-row *ngFor="let check of visit.stock | stock: \'eod\'">\n      <ion-col col-6>{{ check.product.description }}</ion-col>\n      <ion-col col-2>{{ check.product.size }}</ion-col>\n      <ion-col col-2>{{ check.qtySold }}</ion-col>\n      <ion-col col-2>£{{ (check.qtySold * check.product.retailPrice) | number: \'1.2-2\' }}</ion-col>\n    </ion-row>\n    <ion-row class="total-row">\n      <ion-col col-6></ion-col>\n      <ion-col col-2></ion-col>\n      <ion-col col-2></ion-col>\n      <ion-col col-2>£{{ totalSales() | number: \'1.2-2\' }}</ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\visit-report\visit-report-modal.view.html"*/,
            selector: 'page-visit-report-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], VisitReportModal);
    return VisitReportModal;
}());

//# sourceMappingURL=visit-report-modal.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(23);
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionChecklistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visit_action_visit_action_modal_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_check_stock_check_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
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
                if (item.onHand != null) {
                    complete = item.qtySold != null;
                }
            });
            return complete;
        }
        else {
            return false;
        }
    };
    ActionChecklistComponent.prototype.stockcheckComplete = function () {
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
            var checkOutTime_1 = __WEBPACK_IMPORTED_MODULE_4_moment__();
            var confirm_1 = this.alertCtrl.create({
                title: "Confirm Check-out",
                message: "Are you sure you want to check-out now, the time recorded will be " + checkOutTime_1.format('DD/MM/YYYY HH:mm'),
                buttons: [
                    {
                        text: 'Cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            visit.actualDeparture = checkOutTime_1.format('YYYY-MM-DD HH:mm:ss');
                            _this.saveVisit();
                        }
                    }
                ]
            });
            confirm_1.present();
        }
    };
    ActionChecklistComponent.prototype.readyToCheckout = function () {
        if (this.stockcheckComplete() &&
            this.endOfDayComplete()) {
            return true;
        }
        else {
            return false;
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
            selector: 'page-action-checklist',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\check-in\action-checklist.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Record Visit Actions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n      <ion-list>\n        <ion-item>\n          <ion-icon name="basket" item-start></ion-icon>{{ activeVisit?.retailer.name }}\n        </ion-item>\n        <ion-item>\n          <ion-icon name="brush" item-start></ion-icon>{{ activeVisit?.brand.name }}\n        </ion-item>\n        <ion-item>\n          <ion-icon name="navigate" item-start></ion-icon>\n          {{ activeVisit?.location.name }} - Arrived {{ activeVisit?.actualArrival | amDateFormat: \'DD/MM/YYYY hh:mm\' }}\n        </ion-item>\n        <button ion-item (click)="recordStockCheck()">\n          <ion-icon name="{{ stockcheckComplete() ? \'checkmark-circle\' :  \'close-circle\' }}"\n                    color="{{ stockcheckComplete() ? \'secondary\' :  \'caution\' }}" item-start></ion-icon>\n          Stock Check\n        </button>\n\n        <button ion-item (click)="recordStockCheck(true)" [disabled]="!stockcheckComplete()">\n          <ion-icon name="{{ endOfDayComplete() ? \'checkmark-circle\' :  \'close-circle\' }}"\n                    color="{{ endOfDayComplete() ? \'secondary\' :  \'caution\' }}" item-start></ion-icon>\n          End of Day Sales\n        </button>\n\n        <button ion-item (click)="recordManagerName()">\n          <ion-icon name="checkmark-circle" *ngIf="activeVisit.siteContact" color="secondary" item-start></ion-icon>\n          <ion-icon name="close-circle" *ngIf="!activeVisit.siteContact" color="caution" item-start></ion-icon>\n          Store Contact Name\n        </button>\n\n        <button ion-item (click)="recordVisitNotes()">\n          <ion-icon name="checkmark-circle" *ngIf="activeVisit.visitNotes" color="secondary" item-start></ion-icon>\n          <ion-icon name="close-circle" *ngIf="!activeVisit.visitNotes" color="caution" item-start></ion-icon>\n          Activity Notes\n        </button>\n\n        <button ion-item [disabled]="true">\n          <ion-icon name="close-circle" color="secondary" item-start></ion-icon>\n          Location Photo (coming soon)\n        </button>\n\n        <button ion-item no-lines (click)="checkOut(activeVisit)" [disabled]="!readyToCheckout()">\n          <ion-icon name="time" color="primary" item-start></ion-icon>\n          Checkout\n        </button>\n\n      </ion-list>\n\n\n</ion-content>\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left color="secondary" (click)="saveVisit()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\check-in\action-checklist.view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */]])
    ], ActionChecklistComponent);
    return ActionChecklistComponent;
}());

//# sourceMappingURL=action-checklist.component.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitActionModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], VisitActionModal);
    return VisitActionModal;
}());

//# sourceMappingURL=visit-action-modal.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockCheckModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_products_products_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(17);
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
            console.log(this.visit);
            this.endOfDay = this.navParams.get('sales');
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
                    onHand: null,
                    qtySold: null
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\stock-check\stock-check.view.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>\n      {{ endOfDay ? \'Record Sales\' : \'Record Inventory\' }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n        <ion-grid no-padding>\n          <ion-row class="header-row">\n            <ion-col col-9>Item</ion-col>\n            <ion-col col-3>{{ endOfDay ? \'Qty Sold\' : \'On Hand\' }}</ion-col>\n          </ion-row>\n          <ion-row class="row" *ngFor="let item of visit.stock | stockSold: endOfDay">\n            <ion-col col-9>\n              <p><b>{{item.product.description}}</b> {{item.product.size}}<br/>\n              SKU {{item.product.sku}} / {{item.product.barcode}}</p>\n            </ion-col>\n            <ion-col col-3 align-self-center>\n              <ion-input item-end class="stock-input" no-padding *ngIf="!endOfDay" type="number" placeholder="0" [(ngModel)]="item.onHand"></ion-input>\n              <ion-input item-end class="stock-input" no-padding *ngIf="endOfDay" type="number" placeholder="0" [(ngModel)]="item.qtySold"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left color="secondary" (click)="saveStock()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\schedule\stock-check\stock-check.view.html"*/,
            selector: 'page-stock-check-modal'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__admin_products_products_service__["a" /* ProductsService */]])
    ], StockCheckModal);
    return StockCheckModal;
}());

//# sourceMappingURL=stock-check.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_edit_user_edit__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
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
    function UserListPage(navCtrl, navParams, userService, loadingCtrl, alert, alertCtrl, modalCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.alert = alert;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
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
                __WEBPACK_IMPORTED_MODULE_6_lodash__["pull"](_this.users, user);
                _this.users.push(results.user);
            }
            if (results && results.deleted) {
                __WEBPACK_IMPORTED_MODULE_6_lodash__["pull"](_this.users, user);
            }
        });
        editModal.present();
    };
    UserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-list',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\users\user-list\user-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Manage Users</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list>\n    <ion-item *ngFor="let user of users" (click)="openUser(user)">\n        <h2>{{ user.firstName + \' \' + user.lastName}}</h2>\n        <p>{{ user.email }}</p>\n        <button *ngIf="!user.organisationApproved" ion-button icon-left color="danger"\n                (click)="toggleUserApproval(user, true);$event.stopPropagation();">\n          <ion-icon name="cloud-outline"></ion-icon>\n          Pending Approval\n        </button>\n        <button *ngIf="user.organisationApproved" ion-button icon-left color="secondary"\n                (click)="toggleUserApproval(user, false);$event.stopPropagation();">\n          <ion-icon name="cloud-done"></ion-icon>\n          Approved\n        </button>\n        <button *ngIf="!user.emailVerified" ion-button icon-left color="danger" tappable (click)="resendToken(user);$event.stopPropagation();">\n          <ion-icon name="mail"></ion-icon>\n          Pending Email Verification\n        </button>\n        <button *ngIf="user.emailVerified" ion-button icon-left color="secondary" tappable (click)="resendToken(user);$event.stopPropagation();">\n          <ion-icon name="mail"></ion-icon>\n          Email Verified\n        </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer padding text-center>\n  <h3>Organisation ID {{ tenant?.accessCode }}</h3>\n  <p>This identifier is required by users during sign up.</p>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\users\user-list\user-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__brand_brands_service__ = __webpack_require__(45);
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
            firstName: [user.firstName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(40)
                ])],
            lastName: [user.lastName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(40)
                ])],
            email: [user.email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(80)
                ])],
            telephone: [user.telephone, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)
                ])],
            analysis1: [user.analysis1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)
                ])],
            analysis2: [user.analysis2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)
                ])],
            analysis3: [user.analysis3, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)
                ])],
            startDate: [new Date(user.startDate).toJSON(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            hourlyRate: [user.hourlyRate],
            jobTitle: [user.jobTitle,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)
                ])],
            organisationApproved: [user.organisationApproved],
            address: this.fb.group({
                line1: [user.address.line1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(80)
                    ])],
                line2: [user.address.line2, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(80)
                    ])],
                town: [user.address.town, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(80)
                    ])],
                county: [user.address.county, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(80)
                    ])],
                postcode: [user.address.postcode, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(8)
                    ])],
                country: [user.address.country, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)
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
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](this.user.brands, { id: brand.id });
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
            selector: 'page-user-edit',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\users\user-edit\user-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>\n      Edit {{ user.firstName + \' \' + user.lastName}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <div *ngIf="user">\n    <button ion-button icon-left full color="light" (click)="toggleBrands()">\n      <ion-icon name="{{ showBrands ? \'arrow-dropup-circle\' : \'arrow-dropdown-circle\' }}"></ion-icon>\n      Brands ({{ user.brands.length }})\n    </button>\n\n    <div *ngIf="showBrands">\n      <p padding-left>Assign brands to the user to make linked products, retailers and locations available to them. Only brands that have one or more products linked can\n      be linked to a user and therefore actively used throughout Merchify.</p>\n      <ion-searchbar [(ngModel)]="brandSearchTerm" (ionInput)="filterBrands()"></ion-searchbar>\n      <ion-list>\n        <ion-item *ngIf="user.brands?.length == 0">There are no brands linked to this user.</ion-item>\n        <ion-item *ngFor="let brand of filteredBrands">\n          <ion-label>{{ brand.name }}</ion-label>\n          <ion-checkbox (ionChange)="brandChecked($event, brand)"\n                        [checked]="isBrandLinked(brand)"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n  <div *ngIf="user">\n    <button ion-button icon-left full color="light" (click)="toggleUserDetails()">\n      <ion-icon name="{{ showUserDetails ? \'arrow-dropup-circle\' : \'arrow-dropdown-circle\' }}"></ion-icon>\n      User Details\n    </button>\n\n  <form [formGroup]="userForm" novalidate *ngIf="showUserDetails">\n    <ion-list>\n      <ion-item-divider color="light">\n        <ion-icon name="contact" icon-start></ion-icon>\n        Personal Details\n      </ion-item-divider>\n      <ion-item>\n        <ion-label> Account Approved</ion-label>\n        <ion-toggle formControlName="organisationApproved"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="First Name" formControlName="firstName"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.controls.firstName.hasError(\'maxlength\')">\n        Must be less than 40 characters.\n      </span>\n      <span class="error"\n            *ngIf="userForm.controls.firstName.hasError(\'required\') && userForm.controls.firstName.touched">\n        First name is required.\n      </span>\n\n\n      <ion-item>\n        <ion-input type="text" placeholder="Last Name" formControlName="lastName"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.controls.lastName.hasError(\'maxlength\')">\n        Must be less than 40 characters.\n      </span>\n      <span class="error" *ngIf="userForm.controls.lastName.hasError(\'required\') && userForm.controls.lastName.touched">\n        Last name is required.\n      </span>\n\n\n      <ion-item>\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.controls.email.hasError(\'required\') && userForm.controls.email.touched">\n        Email address is required.\n      </span>\n\n      <ion-item no-lines>\n        <ion-input type="tel" placeholder="Phone number" formControlName="telephone"></ion-input>\n      </ion-item>\n      <span class="error"\n            *ngIf="userForm.controls.telephone.hasError(\'required\') && userForm.controls.telephone.touched">\n        Telephone is required.\n      </span>\n\n      <ion-item-divider color="light">\n        <ion-icon name="home" icon-start></ion-icon>\n        Address\n      </ion-item-divider>\n\n    <div formGroupName="address">\n      <ion-item>\n        <ion-input type="text" placeholder="Address Line 1" formControlName="line1"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'line1\').hasError(\'maxlength\')">\n        Must be less than 80 characters.\n      </span>\n      <span class="error"\n            *ngIf="userForm.get(\'address\').get(\'line1\').hasError(\'required\')\n              && userForm.get(\'address\').get(\'line1\').touched">\n        Address line 1 is required\n      </span>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Address Line 2" formControlName="line2"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'line2\').hasError(\'maxlength\')">\n        Must be less than 80 characters.\n      </span>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Town/City" formControlName="town"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'town\').hasError(\'maxlength\')">\n        Must be less than 80 characters.\n      </span>\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'town\').hasError(\'required\')\n      && userForm.get(\'address\').get(\'town\').touched">\n        Town is required.\n      </span>\n\n      <ion-item>\n        <ion-input type="text" placeholder="County/Region" formControlName="county"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'county\').hasError(\'maxlength\')">\n        Must be less than 40 characters.\n      </span>\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'county\').hasError(\'required\')\n      && userForm.get(\'address\').get(\'county\').touched">\n        County/Region is required.\n      </span>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Postal Code" formControlName="postcode"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'postcode\').hasError(\'required\')\n      && userForm.get(\'address\').get(\'postcode\').touched">\n        Postcode is required.\n      </span>\n\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-select formControlName="country">\n          <ion-option value="GB">United Kingdom</ion-option>\n          <ion-option value="IRE">Ireland</ion-option>\n          <ion-option value="ES">Spain</ion-option>\n          <ion-option value="DE">Germany</ion-option>\n          <ion-option value="FR">France</ion-option>\n        </ion-select>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'address\').get(\'country\').hasError(\'required\')\n      && userForm.get(\'address\').get(\'country\').touched">\n        Country is required.\n      </span>\n    </div>\n\n      <ion-item-divider color="light">\n        <ion-icon name="briefcase" icon-start></ion-icon>\n        Employment\n      </ion-item-divider>\n\n      <ion-item>\n        <ion-input type="number" formControlName="hourlyRate" placeholder="Hourly Rate"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Start Date</ion-label>\n        <ion-datetime displayFormat="D MMM YYYY" pickerFormat="D MMM YYYY" formControlName="startDate" placeholder="Start Date"></ion-datetime>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'startDate\').hasError(\'required\')\n      && userForm.get(\'startDate\').touched">\n        County/Region is required.\n      </span>\n      <ion-item>\n        <ion-input type="text" formControlName="jobTitle" placeholder="Job Title"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'analysis1\').hasError(\'maxlength\')">\n        Must be less than 30 characters.\n      </span>\n\n      <ion-item-divider color="light">\n        <ion-icon name="pie" icon-start></ion-icon>\n        Analysis Codes\n      </ion-item-divider>\n      <ion-item>\n        <ion-input type="text" formControlName="analysis1" placeholder="Analysis Code 1"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'analysis1\').hasError(\'maxlength\')">\n        Must be less than 20 characters.\n      </span>\n      <ion-item>\n        <ion-input type="text" formControlName="analysis2" placeholder="Analysis Code 2"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'analysis2\').hasError(\'maxlength\')">\n        Must be less than 20 characters.\n      </span>\n      <ion-item>\n        <ion-input type="text" formControlName="analysis3" placeholder="Analysis Code 3"></ion-input>\n      </ion-item>\n      <span class="error" *ngIf="userForm.get(\'analysis3\').hasError(\'maxlength\')">\n        Must be less than 20 characters.\n      </span>\n    </ion-list>\n\n\n    <ion-item-divider color="light">\n      <ion-icon name="pie" icon-start></ion-icon>\n      Roles\n    </ion-item-divider>\n\n    <ion-item-group>\n      <ion-item *ngFor="let role of roles">\n        <ion-label>{{ role }}</ion-label>\n        <ion-checkbox (ionChange)="roleChecked($event, role)" [checked]="hasRole(user, role)"></ion-checkbox>\n      </ion-item>\n    </ion-item-group>\n  </form>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button *ngIf="user" ion-button icon-left color="danger" (click)="delete()">\n            <ion-icon name="trash" color></ion-icon>\n            Delete\n          </button>\n        </ion-col>\n        <ion-col>\n          <button [disabled]="!userForm.valid" ion-button icon-left color="secondary" (click)="save()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n\n\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\users\user-edit\user-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__brand_brands_service__["a" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], UserEditPage);
    return UserEditPage;
}());

//# sourceMappingURL=user-edit.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_modal__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__ = __webpack_require__(17);
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
    function ProductsPage(productService, modalCtrl, alertCtrl, errorAlert, loadingCtrl) {
        this.productService = productService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brand_brands_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__ = __webpack_require__(17);
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
            sku: [product ? product.sku : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)
                ])],
            description: [product ? product.description : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)
                ])],
            size: [product ? product.size : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)
                ])],
            promoCode: [product ? product.promoCode : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)
                ])],
            brand: [product ? product.brand.id : null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])],
            retailPrice: [product ? product.retailPrice : 0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].min(0),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].max(99999.99)
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_4__brand_brands_service__["a" /* BrandsService */]])
    ], ProductModal);
    return ProductModal;
}());

//# sourceMappingURL=product-modal.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locations_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_modal__ = __webpack_require__(437);
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
    function LocationsPage(locationsService, modalCtrl, alertCtrl, navCtrl, errorAlert, loadingCtrl) {
        this.locationsService = locationsService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LocationsPage);
    return LocationsPage;
}());

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locations_service__ = __webpack_require__(89);
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
            name: [location ? location.name : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)
                ])],
            type: [location ? location.type : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__locations_service__["a" /* LocationsService */]])
    ], LocationModal);
    return LocationModal;
}());

//# sourceMappingURL=location-modal.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__retailer_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__retailer_modal__ = __webpack_require__(439);
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
    function RetailersPage(retailerService, modalCtrl, alertCtrl, navCtrl, errorAlert, loadingCtrl) {
        this.retailerService = retailerService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RetailersPage);
    return RetailersPage;
}());

//# sourceMappingURL=retailer.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailerModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__retailer_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_locations_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__brand_brands_service__ = __webpack_require__(45);
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
            name: [retailer ? retailer.name : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)
                ])],
            type: [retailer ? retailer.type : '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20)
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
            selector: 'modal-retailer',template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\retailer\retailer-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>\n      {{ retailer ? \'Edit \' + retailer.name : \'Create New Retailer\' }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <h3 padding-left>Retailer Details</h3>\n  <form [formGroup]="retailerForm" novalidate padding-bottom>\n    <ion-item>\n      <ion-label>Retailer Name</ion-label>\n      <ion-input type="text" formControlName="name" placeholder="Give the retailer a name..."></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="retailerForm.get(\'name\').hasError(\'maxlength\')">\n        Must be less than 20 characters.\n      </span>\n    <span class="error" *ngIf="retailerForm.get(\'name\').hasError(\'minlength\')">\n        Must be more than 3 characters.\n      </span>\n    <span class="error" *ngIf="retailerForm.get(\'name\').hasError(\'required\')\n      && retailerForm.get(\'name\').touched">\n        Retailer name is required.\n      </span>\n\n\n    <ion-item>\n      <ion-label>Retailer Type</ion-label>\n      <ion-input type="text" formControlName="type" placeholder="i.e. Department Store, Pharmacy etc"></ion-input>\n    </ion-item>\n    <span class="error" *ngIf="retailerForm.get(\'type\').hasError(\'maxlength\')">\n        Must be less than 20 characters.\n      </span>\n  </form>\n\n  <div *ngIf="retailer">\n    <h2 padding-left>Links</h2>\n    <button ion-button icon-left full color="light" (click)="toggleLocations()">\n      <ion-icon name="{{ showLocations ? \'arrow-dropup-circle\' : \'arrow-dropdown-circle\' }}"></ion-icon>\n      Locations ({{ retailer.locations.length }})\n     </button>\n\n    <div *ngIf="showLocations">\n      <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="filterLocations()"></ion-searchbar>\n      <ion-list>\n        <ion-item *ngIf="retailer.locations?.length == 0">There are no locations linked to this retailer.</ion-item>\n        <ion-item *ngFor="let location of filteredLocations">\n          <ion-label>{{ location.name }}</ion-label>\n          <ion-checkbox (ionChange)="locationChecked($event, location)"\n                        [checked]="isLocationLinked(location)"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n  <div *ngIf="retailer">\n    <button ion-button icon-left full color="light" (click)="toggleBrands()">\n      <ion-icon name="{{ showBrands ? \'arrow-dropup-circle\' : \'arrow-dropdown-circle\' }}"></ion-icon>\n      Brands ({{ retailer.brands.length }})\n    </button>\n\n    <div *ngIf="showBrands">\n      <ion-searchbar [(ngModel)]="brandSearchTerm" (ionInput)="filterBrands()"></ion-searchbar>\n      <ion-list>\n        <ion-item *ngIf="retailer.brands?.length == 0">There are no brands linked to this retailer.</ion-item>\n        <ion-item *ngFor="let brand of filteredBrands">\n          <ion-label>{{ brand.name }}</ion-label>\n          <ion-checkbox (ionChange)="brandChecked($event, brand)"\n                        [checked]="isBrandLinked(brand)"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button *ngIf="retailer" ion-button icon-left color="danger" (click)="delete()">\n            <ion-icon name="trash" color></ion-icon>\n            Delete\n          </button>\n        </ion-col>\n        <ion-col>\n          <button [disabled]="!retailerForm.valid" ion-button icon-left color="secondary" (click)="save()" float-right>\n            <ion-icon name="checkmark" color></ion-icon>\n            Save\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\pages\admin\retailer\retailer-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
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

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(40);
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(46);
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

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(476);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 46:
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

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_admin_admin_module__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth_module__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_storage_storage_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_alert_alert_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule_module__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_moment__);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule_module__["a" /* ScheduleModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_moment__["MomentModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__shared_storage_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_alert_alert_service__["a" /* AlertService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_admin_brand_brands__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_auth_signin_signin__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_admin_users_user_list_user_list__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_products_products__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_location_locations__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_retailer_retailer__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jsonwebtoken__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule_component__ = __webpack_require__(156);
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
    function MyApp(platform, statusBar, splashScreen, authService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule_component__["a" /* SchedulePage */];
        this.initializeApp();
        this.checkAdminRole();
        this.pages = [
            { title: 'Visits', component: __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule_component__["a" /* SchedulePage */], icon: 'calendar' },
            { title: 'User Management', component: __WEBPACK_IMPORTED_MODULE_7__pages_admin_users_user_list_user_list__["a" /* UserListPage */], icon: 'people' },
            { title: 'Brands', component: __WEBPACK_IMPORTED_MODULE_4__pages_admin_brand_brands__["a" /* BrandsPage */], icon: 'brush' },
            { title: 'Products', component: __WEBPACK_IMPORTED_MODULE_8__pages_admin_products_products__["a" /* ProductsPage */], icon: 'cube' },
            { title: 'Locations', component: __WEBPACK_IMPORTED_MODULE_9__pages_admin_location_locations__["a" /* LocationsPage */], icon: 'navigate' },
            { title: 'Retailers', component: __WEBPACK_IMPORTED_MODULE_10__pages_admin_retailer_retailer__["a" /* RetailersPage */], icon: 'basket' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.platform.ready().then(function () {
                    _this.checkAuthenticated();
                    _this.statusBar.styleDefault();
                    _this.splashScreen.hide();
                });
                return [2 /*return*/];
            });
        });
    };
    // Checks if the user is authenticated i.e. Already logged in
    MyApp.prototype.checkAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.isAuthenticated()];
                    case 1:
                        if (_a.sent()) {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_schedule_schedule_component__["a" /* SchedulePage */];
                        }
                        else {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_auth_signin_signin__["a" /* SigninPage */];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.checkAdminRole = function () {
        var _this = this;
        this.authService.getToken()
            .subscribe(function (token) {
            if (token) {
                var user = __WEBPACK_IMPORTED_MODULE_11_jsonwebtoken__["decode"](token);
                _this.isAdmin = __WEBPACK_IMPORTED_MODULE_12_lodash__["includes"](user.roles, 'Admin');
            }
            else {
                _this.isAdmin = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.signOut = function () {
        this.authService.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_auth_signin_signin__["a" /* SigninPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\danny.varley\WebstormProjects\Merchify\src\app\app.html"*/'<ion-menu [content]="content" id="app-menu" *ngIf="isAdmin">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Admin</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{ p.icon }}"></ion-icon>\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="signOut()">\n        <ion-icon name="exit"></ion-icon>\n        Sign Out\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\danny.varley\WebstormProjects\Merchify\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__pages_auth_auth_service__["a" /* AuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 641:
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

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 303,
	"./af.js": 303,
	"./ar": 304,
	"./ar-dz": 305,
	"./ar-dz.js": 305,
	"./ar-kw": 306,
	"./ar-kw.js": 306,
	"./ar-ly": 307,
	"./ar-ly.js": 307,
	"./ar-ma": 308,
	"./ar-ma.js": 308,
	"./ar-sa": 309,
	"./ar-sa.js": 309,
	"./ar-tn": 310,
	"./ar-tn.js": 310,
	"./ar.js": 304,
	"./az": 311,
	"./az.js": 311,
	"./be": 312,
	"./be.js": 312,
	"./bg": 313,
	"./bg.js": 313,
	"./bm": 314,
	"./bm.js": 314,
	"./bn": 315,
	"./bn.js": 315,
	"./bo": 316,
	"./bo.js": 316,
	"./br": 317,
	"./br.js": 317,
	"./bs": 318,
	"./bs.js": 318,
	"./ca": 319,
	"./ca.js": 319,
	"./cs": 320,
	"./cs.js": 320,
	"./cv": 321,
	"./cv.js": 321,
	"./cy": 322,
	"./cy.js": 322,
	"./da": 323,
	"./da.js": 323,
	"./de": 324,
	"./de-at": 325,
	"./de-at.js": 325,
	"./de-ch": 326,
	"./de-ch.js": 326,
	"./de.js": 324,
	"./dv": 327,
	"./dv.js": 327,
	"./el": 328,
	"./el.js": 328,
	"./en-au": 329,
	"./en-au.js": 329,
	"./en-ca": 330,
	"./en-ca.js": 330,
	"./en-gb": 331,
	"./en-gb.js": 331,
	"./en-ie": 332,
	"./en-ie.js": 332,
	"./en-il": 333,
	"./en-il.js": 333,
	"./en-nz": 334,
	"./en-nz.js": 334,
	"./eo": 335,
	"./eo.js": 335,
	"./es": 336,
	"./es-do": 337,
	"./es-do.js": 337,
	"./es-us": 338,
	"./es-us.js": 338,
	"./es.js": 336,
	"./et": 339,
	"./et.js": 339,
	"./eu": 340,
	"./eu.js": 340,
	"./fa": 341,
	"./fa.js": 341,
	"./fi": 342,
	"./fi.js": 342,
	"./fo": 343,
	"./fo.js": 343,
	"./fr": 344,
	"./fr-ca": 345,
	"./fr-ca.js": 345,
	"./fr-ch": 346,
	"./fr-ch.js": 346,
	"./fr.js": 344,
	"./fy": 347,
	"./fy.js": 347,
	"./gd": 348,
	"./gd.js": 348,
	"./gl": 349,
	"./gl.js": 349,
	"./gom-latn": 350,
	"./gom-latn.js": 350,
	"./gu": 351,
	"./gu.js": 351,
	"./he": 352,
	"./he.js": 352,
	"./hi": 353,
	"./hi.js": 353,
	"./hr": 354,
	"./hr.js": 354,
	"./hu": 355,
	"./hu.js": 355,
	"./hy-am": 356,
	"./hy-am.js": 356,
	"./id": 357,
	"./id.js": 357,
	"./is": 358,
	"./is.js": 358,
	"./it": 359,
	"./it.js": 359,
	"./ja": 360,
	"./ja.js": 360,
	"./jv": 361,
	"./jv.js": 361,
	"./ka": 362,
	"./ka.js": 362,
	"./kk": 363,
	"./kk.js": 363,
	"./km": 364,
	"./km.js": 364,
	"./kn": 365,
	"./kn.js": 365,
	"./ko": 366,
	"./ko.js": 366,
	"./ky": 367,
	"./ky.js": 367,
	"./lb": 368,
	"./lb.js": 368,
	"./lo": 369,
	"./lo.js": 369,
	"./lt": 370,
	"./lt.js": 370,
	"./lv": 371,
	"./lv.js": 371,
	"./me": 372,
	"./me.js": 372,
	"./mi": 373,
	"./mi.js": 373,
	"./mk": 374,
	"./mk.js": 374,
	"./ml": 375,
	"./ml.js": 375,
	"./mn": 376,
	"./mn.js": 376,
	"./mr": 377,
	"./mr.js": 377,
	"./ms": 378,
	"./ms-my": 379,
	"./ms-my.js": 379,
	"./ms.js": 378,
	"./mt": 380,
	"./mt.js": 380,
	"./my": 381,
	"./my.js": 381,
	"./nb": 382,
	"./nb.js": 382,
	"./ne": 383,
	"./ne.js": 383,
	"./nl": 384,
	"./nl-be": 385,
	"./nl-be.js": 385,
	"./nl.js": 384,
	"./nn": 386,
	"./nn.js": 386,
	"./pa-in": 387,
	"./pa-in.js": 387,
	"./pl": 388,
	"./pl.js": 388,
	"./pt": 389,
	"./pt-br": 390,
	"./pt-br.js": 390,
	"./pt.js": 389,
	"./ro": 391,
	"./ro.js": 391,
	"./ru": 392,
	"./ru.js": 392,
	"./sd": 393,
	"./sd.js": 393,
	"./se": 394,
	"./se.js": 394,
	"./si": 395,
	"./si.js": 395,
	"./sk": 396,
	"./sk.js": 396,
	"./sl": 397,
	"./sl.js": 397,
	"./sq": 398,
	"./sq.js": 398,
	"./sr": 399,
	"./sr-cyrl": 400,
	"./sr-cyrl.js": 400,
	"./sr.js": 399,
	"./ss": 401,
	"./ss.js": 401,
	"./sv": 402,
	"./sv.js": 402,
	"./sw": 403,
	"./sw.js": 403,
	"./ta": 404,
	"./ta.js": 404,
	"./te": 405,
	"./te.js": 405,
	"./tet": 406,
	"./tet.js": 406,
	"./tg": 407,
	"./tg.js": 407,
	"./th": 408,
	"./th.js": 408,
	"./tl-ph": 409,
	"./tl-ph.js": 409,
	"./tlh": 410,
	"./tlh.js": 410,
	"./tr": 411,
	"./tr.js": 411,
	"./tzl": 412,
	"./tzl.js": 412,
	"./tzm": 413,
	"./tzm-latn": 414,
	"./tzm-latn.js": 414,
	"./tzm.js": 413,
	"./ug-cn": 415,
	"./ug-cn.js": 415,
	"./uk": 416,
	"./uk.js": 416,
	"./ur": 417,
	"./ur.js": 417,
	"./uz": 418,
	"./uz-latn": 419,
	"./uz-latn.js": 419,
	"./uz.js": 418,
	"./vi": 420,
	"./vi.js": 420,
	"./x-pseudo": 421,
	"./x-pseudo.js": 421,
	"./yo": 422,
	"./yo.js": 422,
	"./zh-cn": 423,
	"./zh-cn.js": 423,
	"./zh-hk": 424,
	"./zh-hk.js": 424,
	"./zh-tw": 425,
	"./zh-tw.js": 425
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
webpackContext.id = 642;

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brand_brands__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__brand_brands_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__brand_brand_modal__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_token_interceptor__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_product_modal__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__users_user_edit_user_edit__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_user_list_user_list__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_user_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__location_locations__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__location_location_modal__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__location_locations_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__retailer_retailer__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__retailer_retailer_modal__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__retailer_retailer_service__ = __webpack_require__(87);
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
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */],
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AdminModule);
    return AdminModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_error_modal__ = __webpack_require__(300);
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
                __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_8__signup_error_modal__["a" /* SignupErrorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_4__forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_8__signup_error_modal__["a" /* SignupErrorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_token_interceptor__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pipes_visit_status_pipe__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__schedule_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__visit_action_visit_action_modal_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_new_schedule_new_modal_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stock_check_stock_check_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_pipes_stock_sold_pipe__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__visit_report_visit_report_modal_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_pipes_group_by_pipe__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_pipes_visit_filter_pipe__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__check_in_action_checklist_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_pipes_stock_check_pipe__ = __webpack_require__(652);
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
                __WEBPACK_IMPORTED_MODULE_14__visit_report_visit_report_modal_component__["a" /* VisitReportModal */],
                __WEBPACK_IMPORTED_MODULE_7__shared_pipes_visit_status_pipe__["a" /* VisitStatusPipe */],
                __WEBPACK_IMPORTED_MODULE_12__shared_pipes_stock_sold_pipe__["a" /* StockSoldPipe */],
                __WEBPACK_IMPORTED_MODULE_15__shared_pipes_group_by_pipe__["a" /* GroupByPipe */],
                __WEBPACK_IMPORTED_MODULE_16__shared_pipes_visit_filter_pipe__["a" /* VisitFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_17__check_in_action_checklist_component__["a" /* ActionChecklistComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_pipes_stock_check_pipe__["a" /* StockCheckPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__schedule_component__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_10__add_new_schedule_new_modal_component__["a" /* ScheduleNewModal */],
                __WEBPACK_IMPORTED_MODULE_9__visit_action_visit_action_modal_component__["a" /* VisitActionModal */],
                __WEBPACK_IMPORTED_MODULE_11__stock_check_stock_check_component__["a" /* StockCheckModal */],
                __WEBPACK_IMPORTED_MODULE_14__visit_report_visit_report_modal_component__["a" /* VisitReportModal */],
                __WEBPACK_IMPORTED_MODULE_17__check_in_action_checklist_component__["a" /* ActionChecklistComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__schedule_service__["a" /* ScheduleService */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_4__auth_token_interceptor__["a" /* TokenInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], ScheduleModule);
    return ScheduleModule;
}());

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitStatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(23);
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

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockSoldPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(23);
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

/***/ 651:
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
            if (a.key == 'Checked In') {
                return -1;
            }
            else if (a.key == 'Scheduled') {
                return 0;
            }
            else {
                return 1;
            }
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

/***/ 652:
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

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(46);
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(46);
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(46);
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

/***/ })

},[455]);
//# sourceMappingURL=main.js.map