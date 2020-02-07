import { TestBed } from '@angular/core/testing';

import { NGXMomoService } from './ngxmomo.service';

describe('NGXMomoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NGXMomoService = TestBed.get(NGXMomoService);
    expect(service).toBeTruthy();
  });
});
