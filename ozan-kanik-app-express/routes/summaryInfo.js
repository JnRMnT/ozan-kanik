"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
let dbManager = require('../managers/db-manager');
let getSummaryInfo = (res, type) => {
    dbManager.getDBProvider().then((jmdbProvider) => {
        let findCriteria = undefined;
        if (type) {
            findCriteria = { type: type };
        }
        jmdbProvider.find("summaryInfo", 1, findCriteria).then((summaryInfo) => {
            if (summaryInfo && summaryInfo.length > 0) {
                let contents = summaryInfo.map((item) => {
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
    }, () => {
        res.sendStatus(500);
    });
};
router.get('/', (req, res) => {
    getSummaryInfo(res);
});
router.get('/:type', (req, res) => {
    let type = req.params.type;
    getSummaryInfo(res, type);
});
exports.default = router;
//# sourceMappingURL=summaryInfo.js.map