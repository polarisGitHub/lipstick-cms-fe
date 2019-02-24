import { TestBed } from '@angular/core/testing';

import { SkuServiceService } from './sku-service.service';

describe('SkuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkuServiceService = TestBed.get(SkuServiceService);
    expect(service).toBeTruthy();
  });
});
