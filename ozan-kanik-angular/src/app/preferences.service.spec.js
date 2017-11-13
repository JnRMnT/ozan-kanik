"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var preferences_service_1 = require("./preferences.service");
describe('PreferencesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [preferences_service_1.PreferencesService]
        });
    });
    it('should be created', testing_1.inject([preferences_service_1.PreferencesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=preferences.service.spec.js.map