var express = require('express');
var router = express.Router();
var request = require('request');
function getRelativeUrl(req) {
    var relativeUrl = req.originalUrl.split('api/')[1];
    var url = req.appUrl + relativeUrl;
    return url;
}
router.get('*', function (req, res) {
    var url = getRelativeUrl(req);
    request.get(url, { json: true }, function (error, response, body) {
        if (!response) {
            res.sendStatus(504);
        }
        else if (response.statusCode === 200) {
            res.json(body);
        }
        else {
            res.sendStatus(response.statusCode);
        }
    });
});
router.post('*', function (req, res) {
    var url = getRelativeUrl(req);
    request.post(url, {
        body: req.body,
        json: true
    }, function (error, response, body) {
        if (!response) {
            res.sendStatus(504);
        }
        else if (response.statusCode === 200) {
            res.json(body);
        }
        else {
            res.sendStatus(response.statusCode);
        }
    });
});
module.exports = router;
//# sourceMappingURL=api.js.map