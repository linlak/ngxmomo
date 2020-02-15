import { TestBed } from '@angular/core/testing';

import { NgxMomoService } from './ngxmomo.service';

describe('NgxMomoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMomoService = TestBed.get(NgxMomoService);
    expect(service).toBeTruthy();
  });
});
