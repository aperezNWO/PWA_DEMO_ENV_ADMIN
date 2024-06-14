import { TestBed } from '@angular/core/testing';

import { mainPagesListService } from './mainPagesList.service';

describe('DemoService', () => {
  let service: mainPagesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(mainPagesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
