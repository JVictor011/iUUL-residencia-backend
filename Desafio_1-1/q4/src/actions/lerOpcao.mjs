import { adicionarAluno } from "./adicionarAluno.mjs";
import { criarTurma } from "./criarTurma.mjs";
import { lancarNota } from "./lancarNota.mjs";
import { removerAluno } from "./removeAluno.mjs";
import { exibirAlunos} from "./exibirAlunos.mjs";
import { rl, turma } from "../utils/readlineModule.mjs";
import { exibirMenu } from "./exibirMenu.mjs";

function lerOpcao() {
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        criarTurma();
        break;
      case "2":
        adicionarAluno();
        break;
      case "3":
        lancarNota();
        break;
      case "4":
        removerAluno();
        break;
      case "5":
        exibirAlunos();
        break;
      case "6":
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
