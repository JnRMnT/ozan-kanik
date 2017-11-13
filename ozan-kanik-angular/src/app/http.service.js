"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var HttpService = (function () {
    function HttpService(preferencesService, http, loadingService) {
        this.preferencesService = preferencesService;
        this.http = http;
        this.loadingService = loadingService;
    }
    HttpService.prototype.get = function (url) {
        var _this = this;
        var me = this;
        return Observable_1.Observable.create(function (observer) {
            me.loadingService.activeLoading();
            me.preferencesService.whenReady().then(function (resolve) {
                me.http.get(_this.getApiUrl(url), me.getHttpConfig()).subscribe(function (data) {
                    me.loadingService.attemptToDeactivate();
                    observer.next(data);
                    observer.complete();
                }, function (error) {
                    me.loadingService.attemptToDeactivate();
                    observer.error(error);
                });
            }, function (error) {
                me.loadingService.attemptToDeactivate();
                observer.error(error);
            });
        });
    };
    HttpService.prototype.post = function (url, requestObject) {
        var _this = this;
        var me = this;
        return Observable_1.Observable.create(function (observer) {
            me.loadingService.activeLoading();
            me.preferencesService.whenReady().then(function (resolve) {
                me.http.post(_this.getApiUrl(url), requestObject, me.getHttpConfig()).subscribe(function (data) {
                    me.loadingService.attemptToDeactivate();
                    observer.next(data);
                    observer.complete();
                }, function (error) {
                    me.loadingService.attemptToDeactivate();
                    observer.error(error);
                });
            }, function (error) {
                me.loadingService.attemptToDeactivate();
                observer.error(error);
            });
        });
    };
    HttpService.prototype.getApiUrl = function (url) {
        if (url.substr(0, 4) == "http") {
            return url;
        }
        else {
            return "api/" + url;
        }
    };
    HttpService.prototype.getHttpConfig = function () {
        var headers = new http_1.HttpHeaders();
        headers = headers.append("App-Selection", this.preferencesService.getSelectedAppIdentifier());
        return {
            headers: headers
        };
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable()
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map