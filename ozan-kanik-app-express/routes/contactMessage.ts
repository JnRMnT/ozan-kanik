import express = require('express');
const router = express.Router();
import { ContactInfoModel } from '../models/contactInfo';
import { EmailManager } from '../managers/email-manager';
const emailManager: EmailManager = require('../managers/email-manager');
import { ConfigurationManager } from '../managers/configuration-manager';
const configurationManager: ConfigurationManager = require('../managers/configuration-manager');
//contactMail
router.post('/', (req: express.Request, res: express.Response) => {
    let request: ContactInfoModel = req.body;
    let senderInfo = '"' + request.fullName + '(' + request.emailAddress + ')" <' + request.emailAddress + '>';
    emailManager.sendMail(senderInfo, configurationManager.getConfiguration("contactMail"), request.subject, request.message).then(
        () => {
            res.sendStatus(200);
        }, () => {
            res.sendStatus(500);
        });
});

export default router;