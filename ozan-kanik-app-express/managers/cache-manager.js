"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = require("../config.json");
const RedisCache = require("node-cache-redis");
const cache = new RedisCache({
    "redisOptions": config.redisConfiguration
});
class CacheManager {
    get(key) {
        return cache.get(key);
    }
    ;
    set(key, value) {
        return cache.set(key, value);
    }
    ;
}
exports.CacheManager = CacheManager;
module.exports = new CacheManager();
//# sourceMappingURL=cache-manager.js.map