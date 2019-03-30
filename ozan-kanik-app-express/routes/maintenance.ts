import express = require('express');
const router = express.Router();

router.get('/statusCheck', (req: express.Request, res: express.Response) => {
    res.sendStatus(200);
});

export default router;