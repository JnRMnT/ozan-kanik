"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var jm_dbprovider_1 = require("jm-dbprovider");
var dbManager = require('../managers/db-manager');
router.get('/', function (req, res) {
    dbManager.getDBProvider().then(function (jmdbProvider) {
        jmdbProvider.find("projects", undefined, undefined, [{
                direction: jm_dbprovider_1.SortDirection.Descending,
                fieldName: "order"
            }]).then(function (projects) {
            res.json(projects);
        }, function () {
            res.sendStatus(500);
        });
    });
});
exports.default = router;
//# sourceMappingURL=projects.js.map