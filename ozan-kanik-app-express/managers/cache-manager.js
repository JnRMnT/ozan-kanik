"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheManager = void 0;
var config = require("../config.json");
class CacheManager {
    constructor() {
        this.cache = {};
    }
    get(key) {
        return this.cache[key];
    }
    ;
    set(key, value) {
        return this.cache[key] = value;
    }
    ;
}
exports.CacheManager = CacheManager;
module.exports = new CacheManager();
//# sourceMappingURL=cache-manager.js.map