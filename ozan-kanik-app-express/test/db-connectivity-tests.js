"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../typings/index.d.ts" />
var assert = require("assert");
var jmdbProvider = require('jm-dbprovider');
var configuration = require('../config');
var summaryInfo_1 = require("../models/summaryInfo");
describe("DB Connectivity Tests", function () {
    it("Open connection test", function () {
        jmdbProvider.connect(configuration.databaseConfiguration.userName, configuration.databaseConfiguration.password, configuration.databaseConfiguration.databaseName, configuration.databaseConfiguration.serverName)
            .then(function (success) {
            assert.ok(true, "Successfully connected to database.");
        }, function (fail) {
            assert.fail();
        });
    });
    it("Summary info crud test", function () {
        jmdbProvider.connect(configuration.databaseConfiguration.userName, configuration.databaseConfiguration.password, configuration.databaseConfiguration.databaseName, configuration.databaseConfiguration.serverName)
            .then(function (success) {
            var dummySummaryInfo = new summaryInfo_1.SummaryInfo();
            dummySummaryInfo.type = "test";
            dummySummaryInfo.content = new summaryInfo_1.TestSummaryInfoContent();
            dummySummaryInfo.content.testValue = "value";
            jmdbProvider.insert("summaryInfo", dummySummaryInfo).then(function (success) {
                jmdbProvider.find("summaryInfo", 1, { type: "test" }).then(function (foundInfo) {
                    assert.equal(foundInfo[0].content.testValue, "value");
                    jmdbProvider.delete("summaryInfo", { type: "test" }).then(function (success) {
                        jmdbProvider.find("summaryInfo", 1, { type: "test" }).then(function (foundInfo) {
                            assert.equal(foundInfo.length, 0);
                        }, function (fail) {
                            assert.fail();
                        });
                    }, function (fail) {
                        assert.fail();
                    });
                }, function (fail) {
                    assert.fail();
                });
            }, function (fail) {
                assert.fail();
            });
        }, function (fail) {
            assert.fail();
        });
    });
});
//# sourceMappingURL=db-connectivity-tests.js.map