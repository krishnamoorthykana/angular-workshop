import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenceeventandtwowayComponent } from './differenceeventandtwoway.component';

describe('DifferenceeventandtwowayComponent', () => {
  let component: DifferenceeventandtwowayComponent;
  let fixture: ComponentFixture<DifferenceeventandtwowayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DifferenceeventandtwowayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DifferenceeventandtwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
