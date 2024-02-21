import { TestBed } from '@angular/core/testing';

import { GetServicioService } from './get-servicio.service';

describe('GetServicioService', () => {
  let service: GetServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
