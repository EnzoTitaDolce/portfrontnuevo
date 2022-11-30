import { TestBed } from '@angular/core/testing';

import { DatosOfflineService } from './datos-offline.service';

describe('DatosOfflineService', () => {
  let service: DatosOfflineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosOfflineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
