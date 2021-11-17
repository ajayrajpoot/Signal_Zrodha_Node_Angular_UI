import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAppComponent } from './other-app.component';

describe('OtherAppComponent', () => {
  let component: OtherAppComponent;
  let fixture: ComponentFixture<OtherAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
