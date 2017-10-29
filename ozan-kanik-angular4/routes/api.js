const globalConfiguration = require('../../global-config.json');
const express = require('express');
const router = express.Router();
const request = require('request');
const defaultAppUrl = globalConfiguration.availableApps.find((app) => app.isDefault);

function getPreferredAppUrl(req) {
  if (req.get("App-Selection")) {
    return globalConfiguration.availableApps.find((app) => app.identifier === req.get("App-Selection")).location;
  } else {
    return defaultAppUrl;
  }
}

function getRelativeUrl(req) {
  const relativeUrl = req.originalUrl.split('api/')[1];
  let url = getPreferredAppUrl(req) + relativeUrl;
  return url;
}

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
    formData: req.body,
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
