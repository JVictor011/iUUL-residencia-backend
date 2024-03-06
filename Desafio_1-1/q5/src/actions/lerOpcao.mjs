import { criarUser } from "./criarUser.mjs";
import { exibirUser} from "./exibirUser.mjs";
import { rl, vecUsers } from "../utils/readlineModule.mjs";
import { exibirMenu } from "./exibirMenu.mjs";

function lerOpcao() {
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        criarUser();
        break;
      case "2":
        exibirUser();
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
