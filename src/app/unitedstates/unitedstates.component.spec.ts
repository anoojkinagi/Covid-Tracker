import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedstatesComponent } from './unitedstates.component';

describe('UnitedstatesComponent', () => {
  let component: UnitedstatesComponent;
  let fixture: ComponentFixture<UnitedstatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitedstatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitedstatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
