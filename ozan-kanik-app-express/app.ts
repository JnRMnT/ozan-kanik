import debug = require('debug');
import express = require('express');
import path = require('path');

import routes from './routes/index';
import summaryInfoRoutes from './routes/summaryInfo';
import skillsRoutes from './routes/skills';
import workExperiencesRoutes from './routes/workExperiences';

var app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/summaryInfo', summaryInfoRoutes);
app.use('/skills', skillsRoutes);
app.use('/workExperiences', workExperiencesRoutes);

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

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
