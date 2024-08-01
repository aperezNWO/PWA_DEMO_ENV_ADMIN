import { TestBed } from '@angular/core/testing';

import { NetcoreconfigService } from './netcoreconfig.service';

describe('NetcoreconfigService', () => {
  let service: NetcoreconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetcoreconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
