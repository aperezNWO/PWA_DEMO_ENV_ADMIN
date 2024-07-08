import { TestBed } from '@angular/core/testing';

import { NodeJsFeaturesService } from './node-js-features.service';

describe('NodeJsFeaturesService', () => {
  let service: NodeJsFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeJsFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
