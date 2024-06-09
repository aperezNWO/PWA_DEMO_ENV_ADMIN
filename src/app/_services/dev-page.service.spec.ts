import { TestBed } from '@angular/core/testing';

import { DevPageService } from './dev-page.service';

describe('DevPageService', () => {
  let service: DevPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
