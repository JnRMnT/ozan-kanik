"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var dbManager = require('../managers/db-manager');
router.get('/', function (req, res) {
    dbManager.getDBProvider().then(function (jmdbProvider) {
        jmdbProvider.find("resources").then(function (resources) {
            res.json(resources);
        }, function () {
            res.sendStatus(500);
        });
    });
});
exports.default = router;
//# sourceMappingURL=resources.js.map