import { TestBed } from '@angular/core/testing';

import { FeaturesPagesListService } from './features-pages-list.service';

describe('FeaturesPagesListService', () => {
  let service: FeaturesPagesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturesPagesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
