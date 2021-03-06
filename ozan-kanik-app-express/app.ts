﻿import debug = require('debug');
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
const globalAny: any = global;
let appInsights = require('applicationinsights');
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    globalAny.globalConfigPath = "../global-config.json";
} else {
    globalAny.globalConfigPath = "./global-config.json";
}

import routes from './routes/index';
import summaryInfoRoutes from './routes/summaryInfo';
import skillsRoutes from './routes/skills';
import workExperiencesRoutes from './routes/workExperiences';
import projectsRoutes from './routes/projects';
import resourcesRoutes from './routes/resources';
import contactMessageRoutes from './routes/contactMessage';
import maintenanceRoutes from './routes/maintenance';
import { ConfigurationManager } from './managers/configuration-manager';
const configurationManager: ConfigurationManager = require('./managers/configuration-manager');

const globalConfig = require(globalAny.globalConfigPath);
if (env !== 'development') {
    appInsights.setup(globalConfig.appInstrumentationKey).start();
}
var app = express();

// view engine setup
app.set('view engine', 'pug');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/summaryInfo', summaryInfoRoutes);
app.use('/skills', skillsRoutes);
app.use('/workExperiences', workExperiencesRoutes);
app.use('/projects', projectsRoutes);
app.use('/resources', resourcesRoutes);
app.use('/contactMessage', contactMessageRoutes);
app.use('/maintenance', maintenanceRoutes);

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
    app.use((err: any, req, res, next) => {
        res.sendStatus(err['status'] || 500);
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req, res, next) => {
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
