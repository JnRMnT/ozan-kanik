"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
let appInsights = require('applicationinsights');
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    global.globalConfigPath = "../global-config.json";
}
else {
    global.globalConfigPath = "./global-config.json";
}
const index_1 = require("./routes/index");
const summaryInfo_1 = require("./routes/summaryInfo");
const skills_1 = require("./routes/skills");
const workExperiences_1 = require("./routes/workExperiences");
const projects_1 = require("./routes/projects");
const resources_1 = require("./routes/resources");
const contactMessage_1 = require("./routes/contactMessage");
const maintenance_1 = require("./routes/maintenance");
const configurationManager = require('./managers/configuration-manager');
if (env !== 'development') {
    appInsights.setup().start();
}
var app = express();
// view engine setup
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index_1.default);
app.use('/summaryInfo', summaryInfo_1.default);
app.use('/skills', skills_1.default);
app.use('/workExperiences', workExperiences_1.default);
app.use('/projects', projects_1.default);
app.use('/resources', resources_1.default);
app.use('/contactMessage', contactMessage_1.default);
app.use('/maintenance', maintenance_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.sendStatus(err['status'] || 500);
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.sendStatus(err['status'] || 500);
});
app.set('port', process.env.PORT || 1337);
configurationManager.initializeConfigurations().then(() => {
    var server = app.listen(app.get('port'), function () {
        debug('Express server listening on port ' + server.address().port);
    });
}, () => {
    debug('Error getting configurations for the server');
});
//# sourceMappingURL=app.js.map