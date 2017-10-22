"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = require("../config.json");
var RedisCache = require("node-cache-redis");
var cache = new RedisCache({
    "redisOptions": config.redisConfiguration
});
var CacheManager = (function () {
    function CacheManager() {
    }
    CacheManager.prototype.get = function (key) {
        return cache.get(key);
    };
    ;
    CacheManager.prototype.set = function (key, value) {
        return cache.set(key, value);
    };
    ;
    return CacheManager;
}());
exports.CacheManager = CacheManager;
module.exports = new CacheManager();
//# sourceMappingURL=cache-manager.js.map