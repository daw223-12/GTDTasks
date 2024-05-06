import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionablePageComponent } from './actionable-page.component';

describe('ActionablePageComponent', () => {
  let component: ActionablePageComponent;
  let fixture: ComponentFixture<ActionablePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionablePageComponent]
    });
    fixture = TestBed.createComponent(ActionablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
