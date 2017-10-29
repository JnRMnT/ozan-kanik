"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var jm_dbprovider_1 = require("jm-dbprovider");
var dbManager = require('../managers/db-manager');
router.get('/', function (req, res) {
    dbManager.getDBProvider().then(function (jmdbProvider) {
        jmdbProvider.find("skills", undefined, undefined, [{
                direction: jm_dbprovider_1.SortDirection.Ascending,
                fieldName: "order"
            }]).then(function (skills) {
            res.json(skills);
        }, function () {
            res.sendStatus(500);
        });
    });
});
exports.default = router;
//# sourceMappingURL=skills.js.map