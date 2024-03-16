import { rl, vecUsers, appointmentVector } from "../utils/readlineModule.mjs";

class Clinic {
  #appointmentDate;
  #appointmentTime;
  #patientCpf;

  constructor() {
    this.#appointmentDate = null;
    this.#appointmentTime = null;
    this.#patientCpf = "";
  }

  makeAnAppointment(patientCpf, appointmentDate, appointmentTime) {
    //pass
  }

  cancelAppointment(cpf) {
    //pass
  }

  patientsList() {
    //pass
  }

  agendaList() {
    //pass
  }

  get getAppointmentDate() {
    return this.#appointmentDate;
  }
  get getAppointmentTime() {
    return this.#appointmentTime;
  }
  get getPatientCpf() {
    return this.#patientCpf;
  }

  set setAppointmentDate(appointmentDate) {
    this.#appointmentDate = appointmentDate;
  }
  set setAppointmentTime(appointmentTime) {
    this.#appointmentTime = appointmentTime;
  }
  set setPatientCpf(patientCpf) {
    this.#patientCpf = patientCpf;
  }
}

export { Clinic };
