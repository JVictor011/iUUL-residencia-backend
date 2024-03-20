import {
  rl,
  vecUsers,
  appointmentVector,
} from "../../utils/readlineModule.mjs";
import { Patients } from "../../models/Patients.mjs";
import { exibirMenuPaciente } from "../exibirMenuPaciente.mjs";
import { lerOpcaoPatient } from "../lerOpcaoPatient.mjs";

function excludePatient() {
  rl.question("CPF: ",(cpf)=>{
    var patient = new Patients();
    patient.excludePatient(cpf);
    exibirMenuPaciente();
    lerOpcaoPatient();
  });
}

export { excludePatient };
