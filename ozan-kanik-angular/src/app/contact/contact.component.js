"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var contact_info_1 = require("./contact-info");
var ContactComponent = (function () {
    function ContactComponent(httpService, toastsManager, translateService) {
        this.httpService = httpService;
        this.toastsManager = toastsManager;
        this.translateService = translateService;
        this.contactInfo = new contact_info_1.ContactInfo();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.submitContactInfo = function (form) {
        var me = this;
        me.httpService.post("contactMessage", me.contactInfo).subscribe(function (success) {
            me.toastsManager.success(me.translateService.translate("Description.MailSuccess"), me.translateService.translate("Title.Success"));
        }, function (fail) {
            me.toastsManager.error(me.translateService.translate("Description.MailError"), me.translateService.translate("Title.Error"));
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.less']
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map