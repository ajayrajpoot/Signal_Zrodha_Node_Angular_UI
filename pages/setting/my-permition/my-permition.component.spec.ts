import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPermitionComponent } from './my-permition.component';

describe('MyPermitionComponent', () => {
  let component: MyPermitionComponent;
  let fixture: ComponentFixture<MyPermitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPermitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPermitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
