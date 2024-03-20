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

      console.log("Agendamento realizado com sucesso!");
      return true;
    } catch (error) {
      return false;
    }
  }

  registeredPatient(patientCpfParam) {
    let patientIndex = -1;
    for (let i = 0; i < vecUsers.length; i++) {
      if (vecUsers[i].getCpf() === patientCpfParam) {
        patientIndex = i;
        break;
      }
    }

    if (patientIndex === -1) {
      console.log("Paciente não cadastrado.");
      return false;
    }
    return true;
  }

  cancelAppointment(
    patientCpfParam,
    appointmentDateParam,
    appointmentTimeStartParam
  ) {
    const currentDate = new Date();
    if (!(currentDate > appointmentDateParam)) {
      return false;
    }

    let hour = parseInt(appointmentTimeStartParam.substring(0, 2));
    let minute = parseInt(appointmentTimeStartParam.substring(2));
    if (
      currentDate.getTime() === appointmentDateParam.getTime() &&
      (hour > currentDate.getHours() ||
        (hour === currentDate.getHours() && minute >= currentDate.getMinutes()))
    ) {
      let appointmentIndex = -1;
      for (let i = 0; i < appointmentVector.length; i++) {
        if (appointmentVector[i].getPatientCpf() === patientCpfParam) {
          appointmentIndex = i;
          break;
        }
      }

      if (appointmentIndex !== -1) {
        appointmentVector.splice(appointmentIndex, 1);
        console.log("Agendamento cancelado com sucesso!");
        return true;
      } else {
        console.log("Agendamento não encontrado.");
        return false;
      }
    }
  }

  patientsList() {
    try {
      let patients = [];
      vecUsers.forEach((user) => {
        let appointmentDate = "";
        let hInicialFormated = "";
        let hFinalFormated = "";

        for (let i = 0; i < appointmentVector.length; i++) {
          if (appointmentVector[i].getPatientCpf() === user.getCpf()) {
            appointmentDate = appointmentVector[i].getappointmentDate();
            hInicialFormated =
              appointmentVector[i].getappointmentTimeStart().substring(0, 2) +
              ":" +
              appointmentVector[i].getappointmentTimeStart().substring(2);
            hFinalFormated =
              appointmentVector[i].getappointmentTimeEnd().substring(0, 2) +
              ":" +
              appointmentVector[i].getappointmentTimeEnd().substring(2);
            break;
          }
        }

        const [day, month, year] = user.getDateOfBirth().split("/");
        const date = new Date(year, month, day);
        const currentDate = new Date();

        let age = currentDate.getFullYear() - date.getFullYear();
        const monthOfAge = currentDate.getMonth() - date.getMonth();
        if (
          monthOfAge < 0 ||
          (monthOfAge === 0 && currentDate.getDate() < date.getDate())
        ) {
          age--;
        }

        let value = [
          user.getCpf(),
          user.getName(),
          user.getDateOfBirth(),
          age,
          hInicialFormated,
          hFinalFormated,
          appointmentDate,
        ];
        patients.push(value);
      });
      Tools.patientsList(patients);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  agendaList() {
    let correspondingSchedule = [];
    appointmentVector.forEach((appointment) => {
      let userIndex = -1;
      for (let i = 0; i < vecUsers.length; i++) {
        if (vecUsers[i].getCpf() === appointment.getPatientCpf()) {
          userIndex = i;
          break;
        }
      }

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

      const name = vecUsers[userIndex].getName();
      const dateOfBirth = vecUsers[userIndex].getDateOfBirth();

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
      let userIndex = -1;
      for (let i = 0; i < vecUsers.length; i++) {
        if (vecUsers[i].getCpf() === appointment.getPatientCpf()) {
          userIndex = i;
          break;
        }
      }

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

        const name = userIndex !== -1 ? vecUsers[userIndex].getName() : "";
        const dateOfBirth =
          userIndex !== -1 ? vecUsers[userIndex].getDateOfBirth() : "";

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

  getAppointmentDate() {
    return this.#appointmentDate;
  }
  getappointmentTimeStart() {
    return this.#appointmentTimeStart;
  }
  getappointmentTimeEnd() {
    return this.#appointmentTimeEnd;
  }
  getPatientCpf() {
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
