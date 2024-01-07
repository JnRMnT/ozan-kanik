var config = require("../config.json");
export class CacheManager {

    public get(key: string): Promise<any> {
        return this.cache[key];
    };
    public set(key: string, value: any): Promise<any> {
        return this.cache[key] = value;
    };
    private cache = {};
}

module.exports = new CacheManager();