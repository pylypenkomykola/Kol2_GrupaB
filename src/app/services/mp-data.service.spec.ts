import { TestBed } from '@angular/core/testing';

import { MPDataService } from './mp-data.service';

describe('MPDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MPDataService = TestBed.get(MPDataService);
    expect(service).toBeTruthy();
  });
});
