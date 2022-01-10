import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterStateInServiceComponent } from './counter-state-in-service.component';

describe('CounterStateInServiceComponent', () => {
  let component: CounterStateInServiceComponent;
  let fixture: ComponentFixture<CounterStateInServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterStateInServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterStateInServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
