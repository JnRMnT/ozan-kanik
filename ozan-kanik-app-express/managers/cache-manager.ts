var config = require("../config.json");
const RedisCache = require("node-cache-redis");
const cache = new RedisCache({
    "redisOptions": config.redisConfiguration
});

export class CacheManager {

    public get(key: string): Promise<any> {
        return cache.get(key);
    };
    public set(key: string, value: any): Promise<any> {
        return cache.set(key, value);
    };
}

module.exports = new CacheManager();