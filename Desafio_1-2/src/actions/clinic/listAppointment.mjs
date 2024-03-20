import {
  rl,
  vecUsers,
  appointmentVector,
} from "../../utils/readlineModule.mjs";
import { Patients } from "../../models/Patients.mjs";
import { Clinic } from "../../models/Clinic.mjs";
import { exibirMenuClinica } from "../exibirMenuClinica.mjs";
import { lerOpcaoClinic } from "../lerOpcaoClinic.mjs";

function listAppointment() {
  try {
    rl.question("Apresentar a agenda T-Toda ou P-Periodo: ", (option) => {
      var appointment = new Clinic();
      if (option.toUpperCase() === "T") {
        appointment.agendaList();
      } else if (option.toUpperCase() === "P") {
        rl.question("Data inicial (DD/MM/AAAA): ", (startDate) => {
          rl.question("Data final (DD/MM/AAAA): ", (endDate) => {
            appointment.agendaList(startDate, endDate);
          });
        });
      } else {
        console.log("Opção inválida.");
      }
      exibirMenuClinica();
      lerOpcaoClinic();
    });
  } catch (error) {
    console.log(error);
  }
}

export { listAppointment };
