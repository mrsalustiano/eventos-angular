import { TestBed } from '@angular/core/testing';

import { EspetaculoServiceService } from './espetaculo-service.service';

describe('EspetaculoServiceService', () => {
  let service: EspetaculoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspetaculoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
