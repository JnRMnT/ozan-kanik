"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var dbManager = require('../managers/db-manager');
var getSummaryInfo = function (res, type) {
    dbManager.getDBProvider().then(function (jmdbProvider) {
        var findCriteria = undefined;
        if (type) {
            findCriteria = { type: type };
        }
        jmdbProvider.find("summaryInfo", 1, findCriteria).then(function (summaryInfo) {
            if (summaryInfo && summaryInfo.length > 0) {
                var contents = summaryInfo.map(function (item) {
                    return item.content;
                });
                if (type) {
                    res.json(contents[0]);
                }
                else {
                    res.json(contents);
                }
            }
            else {
                res.status(404);
            }
        });
    });
};
router.get('/', function (req, res) {
    getSummaryInfo(res);
});
router.get('/:type', function (req, res) {
    var type = req.params.type;
    getSummaryInfo(res, type);
});
exports.default = router;
//# sourceMappingURL=summaryInfo.js.map