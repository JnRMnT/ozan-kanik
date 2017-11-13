"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var work_experience_component_1 = require("./work-experience.component");
describe('WorkExperienceComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [work_experience_component_1.WorkExperienceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(work_experience_component_1.WorkExperienceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should sort experiences', function () {
        var dummyExperiences = [
            {
                beginDate: new Date(2014, 8, 1),
                company: "DummyCompany1",
                title: "Software Developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora."
            },
            {
                beginDate: new Date(2012, 8, 1),
                company: "DummyCompany2",
                title: "Software Developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora."
            },
            {
                beginDate: new Date(2013, 8, 1),
                endDate: new Date(2014, 8, 1),
                company: "DummyCompany3",
                title: "Software Developer",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora."
            }
        ];
        component.workExperiences = dummyExperiences;
        component.sortExperiences();
        expect(component.workExperiences[2].company).toEqual("DummyCompany2");
        expect(component.workExperiences[0].company).toEqual("DummyCompany1");
    });
});
//# sourceMappingURL=work-experience.component.spec.js.map