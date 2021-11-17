import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicPageHeadComponent } from './classic-page-head.component';

describe('ClassicPageHeadComponent', () => {
  let component: ClassicPageHeadComponent;
  let fixture: ComponentFixture<ClassicPageHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicPageHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicPageHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
