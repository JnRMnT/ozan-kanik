"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const jm_dbprovider_1 = require("jm-dbprovider");
let dbManager = require('../managers/db-manager');
router.get('/', (req, res) => {
    dbManager.getDBProvider().then((jmdbProvider) => {
        jmdbProvider.find("skills", undefined, undefined, [{
                direction: jm_dbprovider_1.SortDirection.Ascending,
                fieldName: "order"
            }]).then((skills) => {
            res.json(skills);
        }, () => {
            res.sendStatus(500);
        });
    });
});
exports.default = router;
//# sourceMappingURL=skills.js.map