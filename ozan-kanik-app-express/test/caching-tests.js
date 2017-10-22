"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../typings/index.d.ts" />
var assert = require("assert");
var cacheManager = require("../managers/cache-manager");
describe("Caching Tests", function () {
    it("Basic get/set Test", function () {
        return cacheManager.set("key", "value")
            .then(function (success) {
            return cacheManager.get("key").then(function (value) {
                assert.equal(value, "value");
            }, function (fail) {
                assert.fail();
            });
        }, function (fail) {
            assert.fail();
        });
    });
});
//# sourceMappingURL=caching-tests.js.map