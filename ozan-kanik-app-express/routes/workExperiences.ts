import express = require('express');
const router = express.Router();
import { SortDirection } from 'jm-dbprovider';
let dbManager = require('../managers/db-manager');

router.get('/', (req: express.Request, res: express.Response) => {
    dbManager.getDBProvider().then((jmdbProvider: JMDBProvider) => {
        jmdbProvider.find("workExperiences", undefined, undefined, [{
            direction: SortDirection.Descending,
            fieldName: "beginDate"
        }]).then((experiences: any[]) => {
            res.json(experiences);
        }, () => {
            res.sendStatus(500);
        });
    });
});

export default router;