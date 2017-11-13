"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TranslateService = (function () {
    function TranslateService(httpService) {
        this.httpService = httpService;
    }
    TranslateService.prototype.initialize = function () {
        var me = this;
        return new Promise(function (resolve, reject) {
            me.httpService.get("resources").subscribe(function (resources) {
                if (resources) {
                    me.allResources = resources;
                }
                me.use();
                resolve();
            }, function () { return reject(); });
        });
    };
    TranslateService.prototype.use = function (cultureCode) {
        var me = this;
        if (!cultureCode) {
            cultureCode = "en-US";
        }
        this.resources = {};
        this.allResources.filter(function (item) {
            return item.culture == cultureCode;
        }).forEach(function (resource) {
            me.resources[resource.key] = resource.value;
        });
        this.activeCulture = cultureCode;
    };
    TranslateService.prototype.translate = function (key) {
        if (!this.resources) {
            return "";
        }
        return this.resources[key];
    };
    return TranslateService;
}());
TranslateService = __decorate([
    core_1.Injectable()
], TranslateService);
exports.TranslateService = TranslateService;
//# sourceMappingURL=translate.service.js.map