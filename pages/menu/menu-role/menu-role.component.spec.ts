import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MENUROLEComponent } from './menu-role.component';

describe('MENUROLEComponent', () => {
  let component: MENUROLEComponent;
  let fixture: ComponentFixture<MENUROLEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MENUROLEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MENUROLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
