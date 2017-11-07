/// <reference path="../typings/index.d.ts" />
import assert = require('assert');
let jmdbProvider: JMDBProvider = require('jm-dbprovider');
const configuration = require('../config');
import { SummaryInfo, TestSummaryInfoContent } from "../models/summaryInfo";

describe("DB Connectivity Tests", () => {
    it("Open connection test", () => {
        return jmdbProvider.connect(configuration.databaseConfiguration.userName,
            configuration.databaseConfiguration.password,
            configuration.databaseConfiguration.databaseName,
            configuration.databaseConfiguration.serverName)
            .then(success => {
                assert.ok(true, "Successfully connected to database.");
            }, fail => {
                assert.fail();
            });
    });

    it("Summary info crud test", () => {
        return jmdbProvider.connect(configuration.databaseConfiguration.userName,
            configuration.databaseConfiguration.password,
            configuration.databaseConfiguration.databaseName,
            configuration.databaseConfiguration.serverName)
            .then(success => {
                let dummySummaryInfo = new SummaryInfo();
                dummySummaryInfo.type = "test";
                dummySummaryInfo.content = new TestSummaryInfoContent();
                dummySummaryInfo.content.testValue = "value";

                jmdbProvider.insert("summaryInfo", dummySummaryInfo).then(success => {
                    jmdbProvider.find("summaryInfo", 1, { type: "test" }).then((foundInfo) => {
                        assert.equal(foundInfo[0].content.testValue, "value");
                        jmdbProvider.delete("summaryInfo", { type: "test" }).then(success => {
                            jmdbProvider.find("summaryInfo", 1, { type: "test" }).then((foundInfo) => {
                                assert.equal(foundInfo.length, 0);
                            }, fail => {
                                assert.fail();
                            });
                        }, fail => {
                            assert.fail();
                        });
                    }, fail => {
                        assert.fail();
                    });
                }, fail => {
                    assert.fail();
                });
            }, fail => {
                assert.fail();
            });
    });
}); 