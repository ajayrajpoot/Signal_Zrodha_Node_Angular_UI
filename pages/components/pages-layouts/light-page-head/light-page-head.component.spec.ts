import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightPageHeadComponent } from './light-page-head.component';

describe('LightPageHeadComponent', () => {
  let component: LightPageHeadComponent;
  let fixture: ComponentFixture<LightPageHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightPageHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightPageHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
