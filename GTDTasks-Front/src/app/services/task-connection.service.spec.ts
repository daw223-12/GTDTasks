import { TestBed } from '@angular/core/testing';

import { TaskConnectionService } from './task-connection.service';

describe('TaskConnectionService', () => {
  let service: TaskConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
