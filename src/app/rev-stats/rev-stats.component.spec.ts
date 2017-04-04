import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevStatsComponent } from './rev-stats.component';

describe('RevStatsComponent', () => {
  let component: RevStatsComponent;
  let fixture: ComponentFixture<RevStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
