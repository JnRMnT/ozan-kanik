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
  request.get(getPreferredAppUrl(req) + url).on("response", (response) => {
    if (response.statusCode === 200) {
      res.json(response.body);
    } else {
      res.sendStatus(response.statusCode);
    }
  }).on("error", () => {
    res.sendStatus(500);
  });
});
router.post('*', (req, res) => {
  const url = getRelativeUrl(req);
  request.post(getPreferredAppUrl(req) + url, req.body).on("response", (response) => {
    if (response.statusCode === 200) {
      res.json(response.body);
    } else {
      res.sendStatus(response.statusCode);
    }
  }).on("error", () => {
    res.sendStatus(500);
  });
});

module.exports = router;
