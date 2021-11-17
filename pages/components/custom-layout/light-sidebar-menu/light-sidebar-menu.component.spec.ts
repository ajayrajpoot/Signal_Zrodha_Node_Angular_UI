import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSidebarMenuComponent } from './light-sidebar-menu.component';

describe('LightSidebarMenuComponent', () => {
  let component: LightSidebarMenuComponent;
  let fixture: ComponentFixture<LightSidebarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSidebarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
