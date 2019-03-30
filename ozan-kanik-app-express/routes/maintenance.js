"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/statusCheck', (req, res) => {
    res.sendStatus(200);
});
exports.default = router;
//# sourceMappingURL=maintenance.js.map