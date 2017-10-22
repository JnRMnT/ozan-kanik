"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = require("../config.json");
var jmdb = require("jm-dbprovider");
var q = require("q");
module.exports.getDBProvider = function () {
    var deferred = q.defer();
    jmdb.connect(config.databaseConfiguration.userName, config.databaseConfiguration.password, config.databaseConfiguration.databaseName, config.databaseConfiguration.serverName).then(function () {
        deferred.resolve(jmdb);
    }, function (reason) {
        deferred.reject(reason);
    });
    return deferred.promise;
};
module.exports.closeConnection = function () {
    jmdb.close();
};
//# sourceMappingURL=db-manager.js.map