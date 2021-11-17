import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchspinComponent } from './touchspin.component';

describe('TouchspinComponent', () => {
  let component: TouchspinComponent;
  let fixture: ComponentFixture<TouchspinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchspinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchspinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
