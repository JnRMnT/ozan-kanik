"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var loading_service_1 = require("./loading.service");
describe('LoadingService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [loading_service_1.LoadingService]
        });
    });
    it('should be created', testing_1.inject([loading_service_1.LoadingService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=loading.service.spec.js.map