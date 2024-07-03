import { TestBed } from '@angular/core/testing';

import { CppFeaturesService } from './cpp-features.service';

describe('CppFeaturesService', () => {
  let service: CppFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CppFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
