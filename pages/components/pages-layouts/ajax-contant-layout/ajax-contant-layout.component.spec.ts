import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxContantLayoutComponent } from './ajax-contant-layout.component';

describe('AjaxContantLayoutComponent', () => {
  let component: AjaxContantLayoutComponent;
  let fixture: ComponentFixture<AjaxContantLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxContantLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxContantLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
