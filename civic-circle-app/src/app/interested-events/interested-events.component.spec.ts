import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedEventsComponent } from './interested-events.component';

describe('InterestedEventsComponent', () => {
  let component: InterestedEventsComponent;
  let fixture: ComponentFixture<InterestedEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestedEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
