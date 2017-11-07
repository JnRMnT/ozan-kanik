"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configurationManager = require('../managers/configuration-manager');
var nodemailer = require('nodemailer');
var q = require("q");
var EmailManager = (function () {
    function EmailManager() {
    }
    EmailManager.prototype.sendMail = function (from, to, subject, body) {
        var deferred = q.defer();
        var smtpServer = configurationManager.getConfiguration("smtpServer");
        var mailUsername = configurationManager.getConfiguration("mailUsername");
        var mailPassword = configurationManager.getConfiguration("mailPassword");
        var transporter = nodemailer.createTransport({
            host: smtpServer,
            port: 465,
            secure: true,
            auth: {
                user: mailUsername,
                pass: mailPassword
            }
        });
        var mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: body
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                deferred.reject();
            }
            deferred.resolve();
        });
        return deferred.promise;
    };
    return EmailManager;
}());
exports.EmailManager = EmailManager;
module.exports = new EmailManager();
//# sourceMappingURL=email-manager.js.map