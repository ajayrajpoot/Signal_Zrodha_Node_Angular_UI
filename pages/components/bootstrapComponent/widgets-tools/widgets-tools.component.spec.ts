import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsToolsComponent } from './widgets-tools.component';

describe('WidgetsToolsComponent', () => {
  let component: WidgetsToolsComponent;
  let fixture: ComponentFixture<WidgetsToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
