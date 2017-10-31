"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var express = require("express");
var path = require("path");
var index_1 = require("./routes/index");
var summaryInfo_1 = require("./routes/summaryInfo");
var skills_1 = require("./routes/skills");
var workExperiences_1 = require("./routes/workExperiences");
var projects_1 = require("./routes/projects");
var resources_1 = require("./routes/resources");
var app = express();
// view engine setup
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index_1.default);
app.use('/summaryInfo', summaryInfo_1.default);
app.use('/skills', skills_1.default);
app.use('/workExperiences', workExperiences_1.default);
app.use('/projects', projects_1.default);
app.use('/resources', resources_1.default);
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
    app.use(function (err, req, res, next) {
        res.sendStatus(err['status'] || 500);
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.sendStatus(err['status'] || 500);
});
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
//# sourceMappingURL=app.js.map