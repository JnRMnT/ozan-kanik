const globalConfig = require("../../global-config.json");
const dbManager = require("./db-manager");
const cacheManager = require("./cache-manager");
import { ConfigurationParameter } from '../models/configurationParameter';
import q = require("q");

export class ConfigurationManager {
    public initializeConfigurations(): Q.IPromise<ConfigurationParameter[]> {
        let deferred = q.defer<ConfigurationParameter[]>();
        dbManager.getDBProvider().then((jmdbProvider: JMDBProvider) => {
            jmdbProvider.find<ConfigurationParameter>(("configurationParameters")).then((configurationParameters) => {
                global.configurationParameters = configurationParameters;
                cacheManager.set("configurationParameters", configurationParameters);
                deferred.resolve(configurationParameters);
            }, (error) => { deferred.reject(error); });
        }, (error) => { deferred.reject(error); });
        return deferred.promise;
    };
    public getConfigurations(): ConfigurationParameter[] {
        const me = this;
        if (global.configurationParameters) {
            return global.configurationParameters;
        } else {
            cacheManager.get("configurationParameters").then((configurationParameters: ConfigurationParameter[]) =>{
                if (configurationParameters) {
                    global.configurationParameters = configurationParameters;
                } else {
                    me.initializeConfigurations().then((configurationParameters: ConfigurationParameter[]) => {
                        cacheManager.set("configurationParameters", configurationParameters);
                        global.configurationParameters = configurationParameters;
                    });
                }
            });
            return undefined;
        }
    };
    public getConfiguration(key: string): string {
        let configurationParameters: ConfigurationParameter[] = this.getConfigurations();
        if (configurationParameters) {
            let foundParameters = configurationParameters.filter((parameter) => {
                return parameter.key == key;
            });

            if (foundParameters && foundParameters.length > 0) {
                return foundParameters[0].value;
            } else {
                return "";
            }
        }
    };
};

module.exports = new ConfigurationManager();