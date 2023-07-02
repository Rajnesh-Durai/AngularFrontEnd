import { TestBed } from '@angular/core/testing';

import { IndividualRecordService } from './individual-record.service';

describe('IndividualRecordService', () => {
  let service: IndividualRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
