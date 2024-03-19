import { rl, vecUsers, appointmentVector } from "../utils/readlineModule.mjs";
import { Tools } from "./Tools.mjs";

class Clinic {
  #appointmentDate;
  #appointmentTimeStart;
  #appointmentTimeEnd;
  #patientCpf;

  constructor(
    patientCpfParam,
    appointmentDateParam,
    appointmentTimeStartParam,
    appointmentTimeEndParam
  ) {
    if (
      !this.makeAnAppointment(
        patientCpfParam,
        appointmentDateParam,
        appointmentTimeStartParam,
        appointmentTimeEndParam
      )
    ) {
      console.log("Não foi possível realizar a consulta!");
      return false;
    }
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
    try {
      let i = vecUsers.indexOf(
        (patient) => patient.getCpf() === patientCpfParam
      );
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
      this.#patientCpf = patientCpfParam;
      this.#appointmentDate = appointmentDateParam;
      this.#appointmentTimeStart = appointmentTimeStartParam;
      this.#appointmentTimeEnd = appointmentTimeEndParam;
      return true;
    } catch (error) {
      return false;
    }
  }

  cancelAppointment(
    patientCpfParam,
    appointmentDateParam,
    appointmentTimeStartParam
  ) {
    const patient = vecUsers.indexOf(
      (patientExists) => patientExists.getCpf() === patientCpfParam
    );
    if (patient === -1) {
      console.log("paciente não cadastrado");
      return false;
    }
    const currentDate = new Date();
    if (!(currentDate > appointmentDateParam)) {
      return false;
    }
    let hour = parseInt(appointmentTimeStartParam.substring(0, 2));
    let minute = parseInt(appointmentTimeStartParam.substring(2));
    if (
      currentDate == appointmentDateParam &&
      (hour > currentDate.getHours() ||
        (hour == currentDate.getHours() && minute >= currentDate.getMinutes()))
    ) {
      const i = appointmentVector.indexOf(
        (appointment) => appointment.getPatientCpf() === patientCpfParam
      );
      if (i !== -1) {
        appointmentVector.splice(i, 1);
        console.log("Agendamento cancelado com sucesso!");
        return true;
      } else {
        console.log("Agendamento não encontrado");
        return false;
      }
    }
  }

  patientsList() {
    //pass
  }

  agendaList() {
    let correspondingSchedule = [];
    appointmentVector.forEach((appointment) => {
      const hInicial = parseInt(
        appointment.getappointmentTimeStart().substring(0, 2)
      );
      const mInicial = parseInt(
        appointment.getappointmentTimeStart().substring(2)
      );
      const hInicialFormated = hInicial + ":" + mInicial;

      const hFinal = parseInt(
        appointment.getappointmentTimeEnd().substring(0, 2)
      );
      const mFinal = parseInt(appointment.getappointmentTimeEnd().substring(2));
      const hFinalFormated = hFinal + ":" + mFinal;

      const start = new Date(0, 0, 0, hInicial, mInicial);
      const end = new Date(0, 0, 0, hFinal, mFinal);
      let diffTime = (end - start) / (1000 * 60);

      const hour = Math.floor(diffTime / 60);
      const minute = diffTime % 60;
      const time =
        hour.toString().padStart(2, "0") +
        ":" +
        minute.toString().padStart(2, "0");

      const user = vecUsers.indexOf(
        (patient) => patient.getCpf() === appointment.getPatientCpf()
      );
      const name = vecUsers[user].getName();
      const dateOfBirth = vecUsers[user].getDateOfBirth();

      const value = [
        appointment.getAppointmentDate(),
        hInicialFormated,
        hFinalFormated,
        time,
        name,
        dateOfBirth,
      ];
      correspondingSchedule.push(value);
    });
    Tools.agendaList(correspondingSchedule);
  }

  agendaList(startDateDate, endDateParam) {
    const [startDay, startMonth, startYear] = startDateDate.split("/");
    const [endDay, endMonth, endYear] = endDateParam.split("/");

    const startDate = new Date(startYear, startMonth, startDay);
    const endDate = new Date(endYear, endMonth, endDay);

    let correspondingSchedule = [];
    appointmentVector.forEach((appointment) => {
      if (
        appointment.getappointmentTimeStart() >= startDate &&
        appointment.getappointmentTimeStart() <= endDate
      ) {
        const hInicial = parseInt(
          appointment.getappointmentTimeStart().substring(0, 2)
        );
        const mInicial = parseInt(
          appointment.getappointmentTimeStart().substring(2)
        );
        const hInicialFormated = hInicial + ":" + mInicial;

        const hFinal = parseInt(
          appointment.getappointmentTimeEnd().substring(0, 2)
        );
        const mFinal = parseInt(
          appointment.getappointmentTimeEnd().substring(2)
        );
        const hFinalFormated = hFinal + ":" + mFinal;

        const start = new Date(0, 0, 0, hInicial, mInicial);
        const end = new Date(0, 0, 0, hFinal, mFinal);
        let diffTime = (end - start) / (1000 * 60);

        const hour = Math.floor(diffTime / 60);
        const minute = diffTime % 60;
        const time =
          hour.toString().padStart(2, "0") +
          ":" +
          minute.toString().padStart(2, "0");

        const user = vecUsers.indexOf(
          (patient) => patient.getCpf() === appointment.getPatientCpf()
        );
        const name = vecUsers[user].getName();
        const dateOfBirth = vecUsers[user].getDateOfBirth();

        const value = [
          appointment.getAppointmentDate(),
          hInicialFormated,
          hFinalFormated,
          time,
          name,
          dateOfBirth,
        ];
        correspondingSchedule.push(value);
      }
    });
    Tools.agendaList(correspondingSchedule);
  }

  get getAppointmentDate() {
    return this.#appointmentDate;
  }
  get getappointmentTimeStart() {
    return this.#appointmentTimeStart;
  }
  get getappointmentTimeEnd() {
    return this.#appointmentTimeEnd;
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
