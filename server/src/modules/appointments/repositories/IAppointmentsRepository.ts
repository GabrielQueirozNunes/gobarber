import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import ICrateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

interface IAppointmentsRepository {
  create(data: ICrateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}

export default IAppointmentsRepository;
