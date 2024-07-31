import { TestBed } from '@angular/core/testing';

import { NetcoreDemoService } from './netcore-demo.service';

describe('NetcoreDemoService', () => {
  let service: NetcoreDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetcoreDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
