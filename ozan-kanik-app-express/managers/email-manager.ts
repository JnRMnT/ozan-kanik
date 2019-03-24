import { ConfigurationManager } from '../managers/configuration-manager';
const configurationManager: ConfigurationManager = require('../managers/configuration-manager');
const nodemailer = require('nodemailer');
import q = require("q");

export class EmailManager {
    public sendMail(from: string, to: string, subject: string, body: string): Q.IPromise<any> {
        let deferred = q.defer<any>();
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
                deferred.reject(error);
            }
            deferred.resolve();
        });

        return deferred.promise;
    }
}

module.exports = new EmailManager();