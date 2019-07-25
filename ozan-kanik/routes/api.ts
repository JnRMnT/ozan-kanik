const express = require('express');
const router = express.Router();
const request = require('request');

function getRelativeUrl(req) {
    const relativeUrl = req.originalUrl.split('api/')[1];
    let url = req.appUrl + relativeUrl;
    return url;
}

router.get('/ping', (req, res) => {
    res.send("pong");
});

router.get('*', (req, res) => {
    const url = getRelativeUrl(req);
    request.get(url, { json: true }, (error, response, body) => {
        if (!response) {
            res.sendStatus(504);
        }
        else if (response.statusCode === 200) {
            res.json(body);
        } else {
            res.sendStatus(response.statusCode);
        }
    });
});
router.post('*', (req, res) => {
    const url = getRelativeUrl(req);
    request.post(url, {
        body: req.body,
        json: true
    }, (error, response, body) => {
        if (!response) {
            res.sendStatus(504);
        }
        else if (response.statusCode === 200) {
            res.json(body);
        } else {
            res.sendStatus(response.statusCode);
        }
    });
});

module.exports = router;
