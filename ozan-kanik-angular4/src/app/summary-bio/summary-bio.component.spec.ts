import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBioComponent } from './summary-bio.component';

describe('SummaryBioComponent', () => {
  let component: SummaryBioComponent;
  let fixture: ComponentFixture<SummaryBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
