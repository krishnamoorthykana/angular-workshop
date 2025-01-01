import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormValidationComponent } from './user-form-validation.component';

describe('UserFormValidationComponent', () => {
  let component: UserFormValidationComponent;
  let fixture: ComponentFixture<UserFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormValidationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
