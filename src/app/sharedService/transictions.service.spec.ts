import { TestBed } from '@angular/core/testing';

import { TransictionsService } from './transictions.service';

describe('TransictionsService', () => {
  let service: TransictionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransictionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
