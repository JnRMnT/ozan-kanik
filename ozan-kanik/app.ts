// Get dependencies
import express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const globalConfiguration = require('../global-config.json');

// Get our API routes
const api = require('./routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../ozan-kanik-angular/dist')));

// Set our api routes
const defaultAppUrl = globalConfiguration.availableApps.find((app) => app.isDefault).location;
const defaultWebUrl = path.resolve(globalConfiguration.availableWebs.find((app) => app.isDefault).location);
app.use((request, response, next) => {
    if (request.get("App-Selection")) {
        request["appUrl"] = globalConfiguration.availableApps.find((app) => app.identifier === request.get("App-Selection")).location;
    } else {
        request["appUrl"] = defaultAppUrl;
    }
    
    if (request.get("Web-Selection")) {
        request["webUrl"] = path.resolve(globalConfiguration.availableWebs.find((app) => app.identifier === request.get("Web-Selection")).location);
    } else {
        request["webUrl"] = defaultWebUrl;
    }
    next();
});
app.use('/api', api);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(req["webUrl"]);
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 80;
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
