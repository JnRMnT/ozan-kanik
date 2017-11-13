"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const jm_dbprovider_1 = require("jm-dbprovider");
let dbManager = require('../managers/db-manager');
router.get('/', (req, res) => {
    dbManager.getDBProvider().then((jmdbProvider) => {
        jmdbProvider.find("workExperiences", undefined, undefined, [{
                direction: jm_dbprovider_1.SortDirection.Descending,
                fieldName: "beginDate"
            }]).then((experiences) => {
            res.json(experiences);
        }, () => {
            res.sendStatus(500);
        });
    });
});
exports.default = router;
//# sourceMappingURL=workExperiences.js.map