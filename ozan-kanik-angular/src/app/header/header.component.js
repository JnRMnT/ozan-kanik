"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent(translateService) {
        this.translateService = translateService;
        this.cultureChanged = new core_1.EventEmitter();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        new SmoothScroll('.smooth');
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        $(".lang-selection a").tooltip({
            container: "body"
        });
    };
    HeaderComponent.prototype.changeLanguage = function (cultureCode) {
        var me = this;
        me.translateService.use(cultureCode);
        me.cultureChanged.emit(cultureCode);
    };
    return HeaderComponent;
}());
__decorate([
    core_1.Output()
], HeaderComponent.prototype, "cultureChanged", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.less']
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map