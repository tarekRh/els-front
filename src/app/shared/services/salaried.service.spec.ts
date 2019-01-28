import { TestBed } from '@angular/core/testing';

import { SalariedService } from './salaried.service';

describe('SalariedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalariedService = TestBed.get(SalariedService);
    expect(service).toBeTruthy();
  });
});
