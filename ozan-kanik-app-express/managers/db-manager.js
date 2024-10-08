"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var config = require("../config.json");
var jmdb;
const q = require("q");
module.exports.getDBProvider = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!jmdb) {
        jmdb = (yield Promise.resolve().then(() => require("jm-dbprovider")));
    }
    var deferred = q.defer();
    jmdb.connect(config.databaseConfiguration.userName, config.databaseConfiguration.password, config.databaseConfiguration.databaseName, config.databaseConfiguration.serverName).then(function () {
        deferred.resolve(jmdb);
    }, function (reason) {
        deferred.reject(reason);
    });
    return deferred.promise;
});
module.exports.closeConnection = () => {
    jmdb.close();
};
//# sourceMappingURL=db-manager.js.map