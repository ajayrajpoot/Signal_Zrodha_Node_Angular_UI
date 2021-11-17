import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanvasMobileMenuComponent } from './off-canvas-mobile-menu.component';

describe('OffCanvasMobileMenuComponent', () => {
  let component: OffCanvasMobileMenuComponent;
  let fixture: ComponentFixture<OffCanvasMobileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffCanvasMobileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffCanvasMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
