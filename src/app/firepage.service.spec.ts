import { TestBed } from '@angular/core/testing';

import { FirepageService } from './firepage.service';

describe('FirepageService', () => {
  let service: FirepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
