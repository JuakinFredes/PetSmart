import { TestBed } from '@angular/core/testing';

import { DBSService } from './dbs.service';

describe('DBSService', () => {
  let service: DBSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
