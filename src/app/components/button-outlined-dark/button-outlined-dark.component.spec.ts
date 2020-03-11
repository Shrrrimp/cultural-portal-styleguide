import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutlinedDarkComponent } from './button-outlined-dark.component';

describe('ButtonOutlinedDarkComponent', () => {
  let component: ButtonOutlinedDarkComponent;
  let fixture: ComponentFixture<ButtonOutlinedDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonOutlinedDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOutlinedDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
