import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibernatingPageComponent } from './hibernating-page.component';

describe('HibernatingPageComponent', () => {
  let component: HibernatingPageComponent;
  let fixture: ComponentFixture<HibernatingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HibernatingPageComponent]
    });
    fixture = TestBed.createComponent(HibernatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
