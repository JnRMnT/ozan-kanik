"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../typings/index.d.ts" />
const assert = require("assert");
const cacheManager = require("../managers/cache-manager");
describe("Caching Tests", () => {
    it("Basic get/set Test", () => {
        return cacheManager.set("key", "value")
            .then(success => {
            return cacheManager.get("key").then((value) => {
                assert.equal(value, "value");
            }, fail => {
                assert.fail();
            });
        }, fail => {
            assert.fail();
        });
    });
});
//# sourceMappingURL=caching-tests.js.map