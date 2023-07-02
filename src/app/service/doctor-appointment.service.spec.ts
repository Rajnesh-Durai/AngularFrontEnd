import { TestBed } from '@angular/core/testing';

import { DoctorAppointmentService } from './doctor-appointment.service';

describe('DoctorAppointmentService', () => {
  let service: DoctorAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
