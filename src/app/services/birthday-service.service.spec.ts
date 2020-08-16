import { TestBed } from '@angular/core/testing';

import { BirthdayServiceService } from './birthday-service.service';

describe('BirthdayServiceService', () => {
  let service: BirthdayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirthdayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
