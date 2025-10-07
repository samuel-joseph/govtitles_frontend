import { TestBed } from '@angular/core/testing';

import { EcfrService } from './ecfr.service';

describe('EcfrService', () => {
  let service: EcfrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcfrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
