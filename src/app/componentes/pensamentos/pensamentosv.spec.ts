import { TestBed } from '@angular/core/testing';

import { Pensamentosv } from './pensamentosv';

describe('Pensamentosv', () => {
  let service: Pensamentosv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pensamentosv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
