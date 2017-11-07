"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globalConfig = require("../../global-config.json");
var dbManager = require("./db-manager");
var cacheManager = require("./cache-manager");
var q = require("q");
var ConfigurationManager = (function () {
    function ConfigurationManager() {
    }
    ConfigurationManager.prototype.initializeConfigurations = function () {
        var deferred = q.defer();
        dbManager.getDBProvider().then(function (jmdbProvider) {
            jmdbProvider.find(("configurationParameters")).then(function (configurationParameters) {
                global.configurationParameters = configurationParameters;
                cacheManager.set("configurationParameters", configurationParameters);
                deferred.resolve(configurationParameters);
            }, function (error) { deferred.reject(error); });
        }, function (error) { deferred.reject(error); });
        return deferred.promise;
    };
    ;
    ConfigurationManager.prototype.getConfigurations = function () {
        var me = this;
        if (global.configurationParameters) {
            return global.configurationParameters;
        }
        else {
            cacheManager.get("configurationParameters").then(function (configurationParameters) {
                if (configurationParameters) {
                    global.configurationParameters = configurationParameters;
                }
                else {
                    me.initializeConfigurations().then(function (configurationParameters) {
                        cacheManager.set("configurationParameters", configurationParameters);
                        global.configurationParameters = configurationParameters;
                    });
                }
            });
            return undefined;
        }
    };
    ;
    ConfigurationManager.prototype.getConfiguration = function (key) {
        var configurationParameters = this.getConfigurations();
        if (configurationParameters) {
            var foundParameters = configurationParameters.filter(function (parameter) {
                return parameter.key == key;
            });
            if (foundParameters && foundParameters.length > 0) {
                return foundParameters[0].value;
            }
            else {
                return "";
            }
        }
    };
    ;
    return ConfigurationManager;
}());
exports.ConfigurationManager = ConfigurationManager;
;
module.exports = new ConfigurationManager();
//# sourceMappingURL=configuration-manager.js.map