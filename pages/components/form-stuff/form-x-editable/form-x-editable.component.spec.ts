import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormXEditableComponent } from './form-x-editable.component';

describe('FormXEditableComponent', () => {
  let component: FormXEditableComponent;
  let fixture: ComponentFixture<FormXEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormXEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormXEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
