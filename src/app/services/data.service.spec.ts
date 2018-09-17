import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { SampleAsset } from './su.blockchain';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService<SampleAsset> = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
