import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MANAGEMENUROLEComponent } from './manage-menu-role.component';

describe('MANAGEMENUROLEComponent', () => {
  let component: MANAGEMENUROLEComponent;
  let fixture: ComponentFixture<MANAGEMENUROLEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MANAGEMENUROLEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MANAGEMENUROLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
