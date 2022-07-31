import { TestBed } from '@angular/core/testing';

import { AunteticantionService } from './aunteticantion.service';

describe('AunteticantionService', () => {
  let service: AunteticantionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AunteticantionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
