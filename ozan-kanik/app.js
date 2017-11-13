"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get dependencies
var express = require("express");
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var globalConfiguration = require('../global-config.json');
// Get our API routes
var api = require('./routes/api');
var app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../ozan-kanik-angular/dist')));
// Set our api routes
var defaultAppUrl = globalConfiguration.availableApps.find(function (app) { return app.isDefault; }).location;
var defaultWebUrl = path.resolve(globalConfiguration.availableWebs.find(function (app) { return app.isDefault; }).location);
app.use(function (request, response, next) {
    if (request.get("App-Selection")) {
        request["appUrl"] = globalConfiguration.availableApps.find(function (app) { return app.identifier === request.get("App-Selection"); }).location;
    }
    else {
        request["appUrl"] = defaultAppUrl;
    }
    if (request.get("Web-Selection")) {
        request["webUrl"] = path.resolve(globalConfiguration.availableWebs.find(function (app) { return app.identifier === request.get("Web-Selection"); }).location);
    }
    else {
        request["webUrl"] = defaultWebUrl;
    }
    next();
});
app.use('/api', api);
// Catch all other routes and return the index file
app.get('*', function (req, res) {
    res.sendFile(req["webUrl"]);
});
/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || 1334;
app.set('port', port);
/**
 * Create HTTP server.
 */
var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () { return console.log("API running on localhost:" + port); });
//# sourceMappingURL=app.js.map