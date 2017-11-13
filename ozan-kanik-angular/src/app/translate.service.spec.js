"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var translate_service_1 = require("./translate.service");
describe('TranslateService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [translate_service_1.TranslateService]
        });
    });
    it('should be created', testing_1.inject([translate_service_1.TranslateService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=translate.service.spec.js.map