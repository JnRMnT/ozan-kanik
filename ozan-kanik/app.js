"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get dependencies
var express = require("express");
var env = process.env.NODE_ENV || 'development';
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var globalConfigurationPath = "./global-config.json";
if (env === 'development') {
    globalConfigurationPath = "../global-config.json";
}
var globalConfiguration = require(globalConfigurationPath);
var appInsights = require('applicationinsights');
// Get our API routes
var api = require('./routes/api');
if (env !== 'development') {
    appInsights.setup().start();
}
var app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../ozan-kanik-angular/dist')));
app.use(express.static(path.join(__dirname, './angular')));
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
var port = process.env.PORT || 80;
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