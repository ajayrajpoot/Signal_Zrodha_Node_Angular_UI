import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MENUMASTERComponent } from './menu-master.component';

describe('MENUMASTERComponent', () => {
  let component: MENUMASTERComponent;
  let fixture: ComponentFixture<MENUMASTERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MENUMASTERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MENUMASTERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
