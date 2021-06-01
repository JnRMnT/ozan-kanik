import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WorkExperienceComponent } from './work-experience.component';
import { WorkExperience } from './work-experience';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should sort experiences', () => {
    var dummyExperiences: WorkExperience[] = [
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
