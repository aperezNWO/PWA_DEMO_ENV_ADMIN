import { TestBed             } from '@angular/core/testing';
import { devPagesListService } from './devPagesList.service';

describe('DemoService', () => {
  let service: devPagesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(devPagesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
