/// <reference path="../typings/index.d.ts" />
import assert = require('assert');
import { ConfigurationManager } from '../managers/configuration-manager';
import { EmailManager } from '../managers/email-manager';
const configurationManager: ConfigurationManager = require('../managers/configuration-manager');
const emailManager: EmailManager = require('../managers/email-manager');

describe("Mail Tests", () => {
    it("Simple mail send test", () => {
        return configurationManager.initializeConfigurations().then(() => {
            emailManager.sendMail('"Ozan KANIK" <ozankanik@gmail.com>', 'ozankanik@gmail.com', 'Test Mail', 'This is a test body').then(
                () => { assert.ok(true); },
                () => { assert.fail(); });
        }, () => { assert.fail(); });
    });
});