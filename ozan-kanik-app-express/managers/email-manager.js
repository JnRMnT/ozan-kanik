"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configurationManager = require('../managers/configuration-manager');
const nodemailer = require('nodemailer');
const q = require("q");
class EmailManager {
    sendMail(from, to, subject, body) {
        let deferred = q.defer();
        const smtpServer = configurationManager.getConfiguration("smtpServer");
        const mailUsername = configurationManager.getConfiguration("mailUsername");
        const mailPassword = configurationManager.getConfiguration("mailPassword");
        let transporter = nodemailer.createTransport({
            host: smtpServer,
            port: 465,
            secure: true,
            auth: {
                user: mailUsername,
                pass: mailPassword
            }
        });
        let mailOptions = {
            from: from,
            to: to,
            subject: subject,
            text: body
        };
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                deferred.reject();
            }
            deferred.resolve();
        });
        return deferred.promise;
    }
}
exports.EmailManager = EmailManager;
module.exports = new EmailManager();
//# sourceMappingURL=email-manager.js.map