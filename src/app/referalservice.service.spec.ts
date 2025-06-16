import { TestBed } from '@angular/core/testing';

import { ReferalserviceService } from './referalservice.service';

describe('ReferalserviceService', () => {
  let service: ReferalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
