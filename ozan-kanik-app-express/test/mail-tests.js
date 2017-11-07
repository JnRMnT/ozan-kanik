"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../typings/index.d.ts" />
var assert = require("assert");
var configurationManager = require('../managers/configuration-manager');
var emailManager = require('../managers/email-manager');
describe("Mail Tests", function () {
    it("Simple mail send test", function () {
        return configurationManager.initializeConfigurations().then(function () {
            emailManager.sendMail('"Ozan KANIK" <ozankanik@gmail.com>', 'ozankanik@gmail.com', 'Test Mail', 'This is a test body').then(function () { assert.ok(true); }, function () { assert.fail(); });
        }, function () { assert.fail(); });
    });
});
//# sourceMappingURL=mail-tests.js.map