import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sessionReverseGuard } from './session-reverse.guard';

describe('sessionReverseGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sessionReverseGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
