import { TestBed } from '@angular/core/testing';

import { NodeJsConfigService } from './node-js-config.service';

describe('NodeJsConfigService', () => {
  let service: NodeJsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeJsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
