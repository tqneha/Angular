import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeesSummaryComponent } from './student-fees-summary.component';

describe('StudentFeesSummaryComponent', () => {
  let component: StudentFeesSummaryComponent;
  let fixture: ComponentFixture<StudentFeesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFeesSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
