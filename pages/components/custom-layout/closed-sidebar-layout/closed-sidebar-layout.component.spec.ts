import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedSidebarLayoutComponent } from './closed-sidebar-layout.component';

describe('ClosedSidebarLayoutComponent', () => {
  let component: ClosedSidebarLayoutComponent;
  let fixture: ComponentFixture<ClosedSidebarLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedSidebarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedSidebarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
