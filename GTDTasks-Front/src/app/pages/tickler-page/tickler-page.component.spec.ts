import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicklerPageComponent } from './tickler-page.component';

describe('TicklerPageComponent', () => {
  let component: TicklerPageComponent;
  let fixture: ComponentFixture<TicklerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicklerPageComponent]
    });
    fixture = TestBed.createComponent(TicklerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
