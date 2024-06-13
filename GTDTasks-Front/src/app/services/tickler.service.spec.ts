import { TestBed } from '@angular/core/testing';

import { TicklerService } from './tickler.service';

describe('TicklerService', () => {
  let service: TicklerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicklerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
