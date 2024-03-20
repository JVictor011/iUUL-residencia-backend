import {
  rl,
  vecUsers,
  appointmentVector,
} from "../../utils/readlineModule.mjs";
import { Patients } from "../../models/Patients.mjs";
import { Clinic } from "../../models/Clinic.mjs";
import { exibirMenuPaciente } from "../exibirMenuPaciente.mjs";
import { lerOpcaoPatient } from "../lerOpcaoPatient.mjs";

function listPatients() {
  try {
    var patient = new Clinic();
    patient.patientsList();
  } catch (error) {
    console.log(error);
  }
}

export { listPatients };
