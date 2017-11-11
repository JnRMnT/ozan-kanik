import express = require('express');
const router = express.Router();
import { Project } from '../models/project';
import { SortDirection } from 'jm-dbprovider';
let dbManager = require('../managers/db-manager');

router.get('/', (req: express.Request, res: express.Response) => {
    dbManager.getDBProvider().then((jmdbProvider: JMDBProvider) => {
        jmdbProvider.find("projects", undefined, undefined, [{
            direction: SortDirection.Descending,
            fieldName: "beginDate"
        },
        {
            direction: SortDirection.Descending,
            fieldName: "endDate"
        }]).then((projects: Project[]) => {
            res.json(projects);
        }, () => {
            res.sendStatus(500);
        });
    });
});

export default router;