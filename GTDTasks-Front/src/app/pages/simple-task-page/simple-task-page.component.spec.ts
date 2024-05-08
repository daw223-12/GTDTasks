import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTaskPageComponent } from './simple-task-page.component';

describe('SimpleTaskPageComponent', () => {
  let component: SimpleTaskPageComponent;
  let fixture: ComponentFixture<SimpleTaskPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleTaskPageComponent]
    });
    fixture = TestBed.createComponent(SimpleTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
