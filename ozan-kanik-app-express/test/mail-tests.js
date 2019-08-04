"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const configurationManager = require('../managers/configuration-manager');
const emailManager = require('../managers/email-manager');
describe("Mail Tests", () => {
    it("Simple mail send test", () => {
        return configurationManager.initializeConfigurations().then(() => {
            emailManager.sendMail('"Ozan KANIK" <ozankanik@gmail.com>', 'ozankanik@gmail.com', 'Test Mail', 'This is a test body').then(() => { assert.ok(true); }, () => { assert.fail(); });
        }, () => { assert.fail(); });
    });
});
//# sourceMappingURL=mail-tests.js.map