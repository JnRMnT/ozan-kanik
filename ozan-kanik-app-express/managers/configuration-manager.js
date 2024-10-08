"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationManager = void 0;
const globalAny = global;
const globalConfig = require("../" + globalAny.globalConfigPath);
require("jm-dbprovider");
const dbManager = require("./db-manager");
const cacheManager = require("./cache-manager");
const q = require("q");
class ConfigurationManager {
    initializeConfigurations() {
        let deferred = q.defer();
        dbManager.getDBProvider().then((jmdbProvider) => {
            jmdbProvider.find(("configurationParameters")).then((configurationParameters) => {
                globalAny.configurationParameters = configurationParameters;
                cacheManager.set("configurationParameters", configurationParameters);
                deferred.resolve(configurationParameters);
            }, (error) => { deferred.reject(error); });
        }, (error) => { deferred.reject(error); });
        return deferred.promise;
    }
    ;
    getConfigurations() {
        const me = this;
        if (globalAny.configurationParameters) {
            return globalAny.configurationParameters;
        }
        else {
            cacheManager.get("configurationParameters").then((configurationParameters) => {
                if (configurationParameters) {
                    globalAny.configurationParameters = configurationParameters;
                }
                else {
                    me.initializeConfigurations().then((configurationParameters) => {
                        cacheManager.set("configurationParameters", configurationParameters);
                        globalAny.configurationParameters = configurationParameters;
                    });
                }
            });
            return undefined;
        }
    }
    ;
    getConfiguration(key) {
        let configurationParameters = this.getConfigurations();
        if (configurationParameters) {
            let foundParameters = configurationParameters.filter((parameter) => {
                return parameter.key == key;
            });
            if (foundParameters && foundParameters.length > 0) {
                return foundParameters[0].value;
            }
            else {
                return "";
            }
        }
    }
    ;
}
exports.ConfigurationManager = ConfigurationManager;
;
module.exports = new ConfigurationManager();
//# sourceMappingURL=configuration-manager.js.map