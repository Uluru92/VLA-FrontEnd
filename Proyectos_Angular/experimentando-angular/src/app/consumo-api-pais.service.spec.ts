import { TestBed } from '@angular/core/testing';

import { ConsumoApiPaisService } from './consumo-api-pais.service';

describe('ConsumoApiPaisService', () => {
  let service: ConsumoApiPaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoApiPaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
