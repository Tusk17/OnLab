import { TestBed } from '@angular/core/testing';

import { RudService } from './rud.service';

describe('RudService', () => {
  let service: RudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
