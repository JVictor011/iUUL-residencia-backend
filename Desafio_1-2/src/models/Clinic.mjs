import { rl, vecUsers, appointmentVector } from "../utils/readlineModule.mjs";

class Clinic {
  #appointmentDate;
  #appointmentTimeStart;
  #appointmentTimeEnd;
  #patientCpf;

  constructor() {
    this.#appointmentDate = null;
    this.#appointmentTimeStart = null;
    this.#patientCpf = "";
  }
  minutesValidate(minuteStartParam, minuteEndParam) {
    const invalidMinutes = ["00", "15", "30", "45"];
    if (invalidMinutes.includes(minuteStartParam)) {
      console.log(
        "Horario inicial invalido são validas apenas em (XX:00, XX:15, XX:30, XX:45)!"
      );
      return false;
    } else if (invalidMinutes.includes(minuteEndParam)) {
      console.log(
        "Horario final invalido são validas apenas em (XX:00, XX:15, XX:30, XX:45)!"
      );
      return false;
    }
    return true;
  }

  timeValidate(
    patientCpfParam,
    appointmentTimeStartParam,
    appointmentTimeEndParam
  ) {
    if (appointmentTimeStartParam > appointmentTimeEndParam) {
      console.log(
        "O horario da consulta inicial deve ser menor do que o horario final da consulta!"
      );
      return false;
    }
    let i = appointmentVector(
      (appointmentVector) =>
        appointmentVector.getPatientCpf() === patientCpfParam
    );
    if (i !== -1) {
      console.log(
        "Um paciente com uma consulta agendada futura não pode ter outra consulta!"
      );
      return false;
    }
  }

  dateValidation(
    patientCpfParam,
    appointmentDateParam,
    appointmentTimeStartParam,
    appointmentTimeEndParam
  ) {
    let currentDate = new Date();
    let [day, month, year] = appointmentDateParam.split("/");
    let hour = parseInt(appointmentTimeStartParam.substring(0, 2));
    let hourEnd = parseInt(appointmentTimeEndParam.substring(0, 2));
    let minute = parseInt(appointmentTimeStartParam.substring(2));
    let minuteEnd = parseInt(appointmentTimeEndParam.substring(2));
    let date = new Date(year, month, day);
    if (
      date < currentDate ||
      (date == currentDate && hour < currentDate.getHours()) ||
      (date == currentDate &&
        hour == currentDate.getHours() &&
        minute < currentDate.getMinutes())
    ) {
      console.log("Data inválida!");
      return false;
    }
    if (
      !this.timeValidate(
        patientCpfParam,
        appointmentTimeStartParam,
        appointmentTimeEndParam
      )
    ) {
      return false;
    }

    if (
      hour < 8 ||
      hour >= 19 ||
      hourEnd < 8 ||
      hourEnd > 19 ||
      (hourEnd == 19 && minuteEnd != 0)
    ) {
      console.log("Horario inválido!");
      return false;
    }
    if (!this.minutesValidate(minute, minuteEnd)) {
      return false;
    }
    return true;
  }

  makeAnAppointment(
    patientCpfParam,
    appointmentDateParam,
    appointmentTimeStartParam,
    appointmentTimeEndParam
  ) {
    let i = vecUsers.indexOf((patient) => patient.getCpf() === patientCpfParam);
    if (i === -1) {
      console.log("O CPF não está cadastrado!");
      return false;
    }
    if (
      !this.dateValidation(
        patientCpfParam,
        appointmentDateParam,
        appointmentTimeStartParam,
        appointmentTimeEndParam
      )
    ) {
      return false;
    }
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
  get getappointmentTimeStart() {
    return this.#appointmentTimeStart;
  }
  get getPatientCpf() {
    return this.#patientCpf;
  }

  set setAppointmentDate(appointmentDate) {
    this.#appointmentDate = appointmentDate;
  }
  set setappointmentTimeStart(appointmentTimeStart) {
    this.#appointmentTimeStart = appointmentTimeStart;
  }
  set setPatientCpf(patientCpf) {
    this.#patientCpf = patientCpf;
  }
}

export { Clinic };
