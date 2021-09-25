import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApplyFeesComponent } from './student-apply-fees.component';

describe('StudentApplyFeesComponent', () => {
  let component: StudentApplyFeesComponent;
  let fixture: ComponentFixture<StudentApplyFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentApplyFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentApplyFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
