"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
let dbManager = require('../managers/db-manager');
router.get('/', (req, res) => {
    dbManager.getDBProvider().then((jmdbProvider) => {
        jmdbProvider.find("resources").then((resources) => {
            res.json(resources);
        }, () => {
            res.sendStatus(500);
        });
    });
});
exports.default = router;
//# sourceMappingURL=resources.js.map