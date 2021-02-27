import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SGPAComponent } from './sgpa.component';

describe('SGPAComponent', () => {
  let component: SGPAComponent;
  let fixture: ComponentFixture<SGPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SGPAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SGPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
