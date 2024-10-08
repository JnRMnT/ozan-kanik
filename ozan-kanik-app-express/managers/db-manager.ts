var config = require("../config.json");
var jmdb: JMDBProvider;

import q = require("q");

module.exports.getDBProvider = async (): Promise<JMDBProvider> => {
    if (!jmdb) {
        jmdb = await import("jm-dbprovider") as any;
    }
    var deferred = q.defer<JMDBProvider>();
    jmdb.connect(config.databaseConfiguration.userName,
        config.databaseConfiguration.password,
        config.databaseConfiguration.databaseName,
        config.databaseConfiguration.serverName).then(function () {
            deferred.resolve(jmdb);
        }, function (reason) {
            deferred.reject(reason);
        });

    return deferred.promise;
};

module.exports.closeConnection = (): void => {
    jmdb.close();
};