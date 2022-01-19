import { TestBed } from '@angular/core/testing';

import { SfondiService } from './sfondi.service';

describe('SfondiService', () => {
  let service: SfondiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfondiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
