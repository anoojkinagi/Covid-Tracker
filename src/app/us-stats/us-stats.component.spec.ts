import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsStatsComponent } from './us-stats.component';

describe('UsStatsComponent', () => {
  let component: UsStatsComponent;
  let fixture: ComponentFixture<UsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
