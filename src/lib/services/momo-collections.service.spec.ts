import { TestBed } from '@angular/core/testing';

import { MomoCollectionsService } from './momo-collections.service';

describe('MomoCollectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MomoCollectionsService = TestBed.get(MomoCollectionsService);
    expect(service).toBeTruthy();
  });
});
