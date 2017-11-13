"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const emailManager = require('../managers/email-manager');
const configurationManager = require('../managers/configuration-manager');
//contactMail
router.post('/', (req, res) => {
    let request = req.body;
    let senderInfo = '"' + request.fullName + '(' + request.emailAddress + ')" <' + request.emailAddress + '>';
    emailManager.sendMail(senderInfo, configurationManager.getConfiguration("contactMail"), request.subject, request.message).then(() => {
        res.sendStatus(200);
    }, () => {
        res.sendStatus(500);
    });
});
exports.default = router;
//# sourceMappingURL=contactMessage.js.map