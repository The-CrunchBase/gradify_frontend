import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FYPageComponent } from './fypage.component';

describe('FYPageComponent', () => {
  let component: FYPageComponent;
  let fixture: ComponentFixture<FYPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FYPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FYPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
