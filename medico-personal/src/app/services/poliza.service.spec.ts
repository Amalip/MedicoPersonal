import { TestBed, inject } from '@angular/core/testing';

import { PolizaService } from './poliza.service';

describe('PolizaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolizaService]
    });
  });

  it('should be created', inject([PolizaService], (service: PolizaService) => {
    expect(service).toBeTruthy();
  }));
});
