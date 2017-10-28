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
                let contents = summaryInfo.map((item) => {
                    return item.content;
                });
                if (type) {
                    res.json(contents[0]);
                } else {
                    res.json(contents);
                }
            } else {
                res.status(404);
            }
        });
    });
};

router.get('/', (req: express.Request, res: express.Response) => {
    getSummaryInfo(res);
});

router.get('/:type', (req: express.Request, res: express.Response) => {
    let type = req.params.type;
    getSummaryInfo(res, type);
});

export default router;