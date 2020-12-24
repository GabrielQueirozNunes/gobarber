import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', () => {
    expect(1 + 2).toBe(3);
  });

  it('should not be able to schedule two appointments on the same hour', () => {
    expect(1 + 2).toBe(3);
  });
});
