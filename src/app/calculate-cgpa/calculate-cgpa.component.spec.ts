import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateCGPAComponent } from './calculate-cgpa.component';

describe('CalculateCGPAComponent', () => {
  let component: CalculateCGPAComponent;
  let fixture: ComponentFixture<CalculateCGPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateCGPAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateCGPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
