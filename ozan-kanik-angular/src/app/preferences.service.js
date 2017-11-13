"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JM = require("jm-utilities");
var PreferencesService = (function () {
    function PreferencesService() {
        var me = this;
        System.import('../../../global-config.json').then(function (config) {
            me.globalConfig = config;
            me.initializePreferences();
        });
    }
    PreferencesService.prototype.initializePreferences = function () {
        var search = location.search.substring(1);
        var queryParams = {};
        if (search && search != "") {
            queryParams = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
        }
        var appFound = false;
        if (queryParams.app) {
            this.selectedApp = this.globalConfig.availableApps.find(function (e) { return e.identifier == queryParams.app; });
            if (this.selectedApp) {
                appFound = true;
            }
        }
        if (!appFound) {
            this.selectedApp = this.globalConfig.availableApps.find(function (e) { return e.isDefault; });
        }
        var webFound = false;
        if (queryParams.web) {
            this.selectedWeb = this.globalConfig.availableWebs.find(function (e) { return e.identifier == queryParams.web; });
            if (this.selectedWeb) {
                webFound = true;
            }
        }
        if (!webFound) {
            this.selectedWeb = this.globalConfig.availableWebs.find(function (e) { return e.isDefault; });
        }
    };
    PreferencesService.prototype.getAvailableAppProjects = function () {
        return this.globalConfig.availableApps;
    };
    PreferencesService.prototype.getAvailableWebProjects = function () {
        return this.globalConfig.availableWebs;
    };
    PreferencesService.prototype.getSelectedAppIdentifier = function () {
        return this.selectedApp.identifier;
    };
    PreferencesService.prototype.getSelectedWebUrl = function () {
        return this.selectedWeb.location;
    };
    PreferencesService.prototype.whenReady = function () {
        var me = this;
        var promise = new Promise(function (resolve, reject) {
            JM.waitFor(function () { return me.globalConfig != undefined; })
                .then(function () {
                resolve();
            }, function () {
                console.error("Global config error!");
            });
        });
        return promise;
    };
    return PreferencesService;
}());
PreferencesService = __decorate([
    core_1.Injectable()
], PreferencesService);
exports.PreferencesService = PreferencesService;
//# sourceMappingURL=preferences.service.js.map