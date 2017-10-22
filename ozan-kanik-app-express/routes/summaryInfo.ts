import express = require('express');
const router = express.Router();
import { SummaryInfo } from '../models/summaryInfo';
let dbManager = require('../managers/db-manager');

let getSummaryInfo = (res: express.Response, type?: string) => {
    dbManager.getDBProvider().then((jmdbProvider: JMDBProvider) => {
        let findCriteria = undefined;
        if (type) {
            findCriteria = { type: type };
        }
        jmdbProvider.find("summaryInfo", 1, findCriteria).then((summaryInfo: SummaryInfo[]) => {
            if (summaryInfo && summaryInfo.length > 0) {
                if (type) {
                    res.json(summaryInfo[0]);
                } else {
                    res.json(summaryInfo);
                }
            } else {
                res.status(404);
            }
        });
    });
};

router.get('/summaryInfo/', (req: express.Request, res: express.Response) => {
    getSummaryInfo(res);
});

router.get('/summaryInfo/:type', (req: express.Request, res: express.Response) => {
    let type = req.params.type;
    getSummaryInfo(res, type);
});

export default router;