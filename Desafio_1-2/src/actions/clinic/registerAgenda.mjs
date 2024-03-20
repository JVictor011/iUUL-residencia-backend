import {
  rl,
  vecUsers,
  appointmentVector,
} from "../../utils/readlineModule.mjs";
import { Patients } from "../../models/Patients.mjs";
import { Clinic } from "../../models/Clinic.mjs";
import { exibirMenuClinica } from "../exibirMenuClinica.mjs";
import { lerOpcaoClinic } from "../lerOpcaoClinic.mjs";

var appointment = new Clinic();

function dataAndTime(cpf) {
  try {
    rl.question("Data da consulta: ", (appointmentDate) => {
      rl.question("Hora inicial: ", (appointmentTimeStart) => {
        rl.question("Hora final: ", (appointmentTimeEnd) => {
          appointment.makeAnAppointment(
            cpf,
            appointmentDate,
            appointmentTimeStart,
            appointmentTimeEnd
          );
          exibirMenuClinica();
          lerOpcaoClinic();
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
}

function askCpf() {
  try {
    rl.question("Digite o CPF: ", (cpf) => {
      if (!appointment.registeredPatient(cpf)) {
        askCpf();
      } else {
        dataAndTime(cpf);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function registerAgenda() {
  try {
    askCpf();
  } catch (error) {
    console.log(error);
  }
}

export { registerAgenda };
