"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../http.service");
var translate_service_1 = require("../translate.service");
var common_1 = require("@angular/common");
var AppInitializerModule = (function () {
    function AppInitializerModule() {
    }
    return AppInitializerModule;
}());
AppInitializerModule = __decorate([
    core_1.NgModule({
        providers: [
            {
                provide: core_1.APP_INITIALIZER,
                useFactory: initializeResources,
                multi: true,
                deps: [http_service_1.HttpService, translate_service_1.TranslateService]
            }
        ],
        imports: [
            common_1.CommonModule
        ],
        declarations: []
    })
], AppInitializerModule);
exports.AppInitializerModule = AppInitializerModule;
function initializeResources(httpService, translateService) {
    return function () {
        return translateService.initialize();
    };
}
exports.initializeResources = initializeResources;
//# sourceMappingURL=app-initializer.module.js.map