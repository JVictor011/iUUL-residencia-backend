import { rl, vecUsers, appointmentVector } from "../utils/readlineModule.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcaoClinic } from "./lerOpcaoClinic.mjs";
import { exibirMenuClinica } from "./exibirMenuClinica.mjs";
import { lerOpcaoPatient } from "./lerOpcaoPatient.mjs";
import { exibirMenuPaciente } from "./exibirMenuPaciente.mjs";

function lerOpcao() {
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        exibirMenuPaciente();
        lerOpcaoPatient();
        break;
      case "2":
        exibirMenuClinica();
        lerOpcaoClinic();
        break;
      case "3":
        console.log("Saindo...");
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        exibirMenu();
        lerOpcao();
    }
  });
}

export { lerOpcao };
