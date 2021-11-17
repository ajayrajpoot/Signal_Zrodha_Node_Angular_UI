import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputMaskComponent } from './form-input-mask.component';

describe('FormInputMaskComponent', () => {
  let component: FormInputMaskComponent;
  let fixture: ComponentFixture<FormInputMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
