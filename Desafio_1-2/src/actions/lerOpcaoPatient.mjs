import { registerPatient } from "./patient/registerPatient.mjs";
import { excludePatient } from "./patient/excludePatient.mjs";
import { listPatients } from "./patient/listPatients.mjs";

import { rl, vecUsers, appointmentVector } from "../utils/readlineModule.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";
import { exibirMenuPaciente } from "./exibirMenuPaciente.mjs";

function lerOpcaoPatient() {
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        registerPatient();
        break;
      case "2":
        excludePatient();
        break;
      case "3":
        listPatients();
        break;
      case "4":
        exibirMenu();
        lerOpcao();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        exibirMenuPaciente();
        lerOpcaoPatient();
    }
  });
}

export { lerOpcaoPatient };
