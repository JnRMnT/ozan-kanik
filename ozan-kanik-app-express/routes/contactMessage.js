"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var emailManager = require('../managers/email-manager');
var configurationManager = require('../managers/configuration-manager');
//contactMail
router.post('/', function (req, res) {
    var request = req.body;
    var senderInfo = '"' + request.fullName + '" <' + request.emailAddress + '>';
    emailManager.sendMail(senderInfo, configurationManager.getConfiguration("contactMail"), request.subject, request.message).then(function () {
        res.sendStatus(200);
    }, function () {
        res.sendStatus(500);
    });
});
exports.default = router;
//# sourceMappingURL=contactMessage.js.map