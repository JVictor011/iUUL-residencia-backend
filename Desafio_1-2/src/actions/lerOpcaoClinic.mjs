import { rl, vecUsers, appointmentVector } from "../utils/readlineModule.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";
import { exibirMenuClinica } from "./exibirMenuClinica.mjs";
import { listAppointment } from "./clinic/listAppointment.mjs";
import { cancelAppointment } from "./clinic/cancelAppointment.mjs";
import { registerAgenda } from "./clinic/registerAgenda.mjs";

function lerOpcaoClinic() {
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        registerAgenda();
        break;
      case "2":
        cancelAppointment();
        break;
      case "3":
        listAppointment();
        break;
      case "4":
        exibirMenu();
        lerOpcao();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        exibirMenuClinica();
        lerOpcaoClinic();
    }
  });
}

export { lerOpcaoClinic };
