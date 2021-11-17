import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySignalComponent } from './my-signal.component';

describe('MySignalComponent', () => {
  let component: MySignalComponent;
  let fixture: ComponentFixture<MySignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
