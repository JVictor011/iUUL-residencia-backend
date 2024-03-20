import {
  rl,
  vecUsers,
  appointmentVector,
} from "../../utils/readlineModule.mjs";
import { Patients } from "../../models/Patients.mjs";
import { exibirMenuPaciente } from "../exibirMenuPaciente.mjs";
import { lerOpcaoPatient } from "../lerOpcaoPatient.mjs";

var registerPatientModule = new Patients();

function askName(cpf) {
  try {
    rl.question("Nome: ", (name) => {
      if (!registerPatientModule.validateName(name)) {
        askName(cpf);
      } else {
        askBirthDate(cpf, name);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function askBirthDate(cpf, name) {
  rl.question("Data de nascimento: ", (dateOfBirth) => {
    if (!registerPatientModule.validateDateOfBirth(dateOfBirth)) {
      askBirthDate(cpf, name);
    } else {
      if (registerPatientModule.registerPatient(cpf, name, dateOfBirth)) {
        registerPatientModule.registerPatient(cpf, name, dateOfBirth);
        vecUsers.push(registerPatientModule);
      }
      exibirMenuPaciente();
      lerOpcaoPatient();
    }
  });
}

function askCpf() {
  try {
    rl.question("CPF: ", (cpf) => {
      if (!registerPatientModule.validateCPF(cpf)) {
        askCpf();
      } else {
        askName(cpf);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function registerPatient() {
  try {
    askCpf();
  } catch (error) {
    console.log(error);
  }
}

export { registerPatient };
