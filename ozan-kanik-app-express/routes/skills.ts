import express = require('express');
const router = express.Router();
import { Skill } from '../models/skill';
import { SortDirection } from 'jm-dbprovider';
let dbManager = require('../managers/db-manager');

router.get('/', (req: express.Request, res: express.Response) => {
    dbManager.getDBProvider().then((jmdbProvider: JMDBProvider) => {
        jmdbProvider.find("skills", undefined, undefined, [{
            direction: SortDirection.Ascending,
            fieldName: "order"
        }]).then((skills: Skill[]) => {
            res.json(skills);
        }, () => {
            res.sendStatus(500);
        });
    });
});

export default router;