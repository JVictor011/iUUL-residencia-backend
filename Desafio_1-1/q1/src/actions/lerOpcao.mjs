import { adicionarVertice } from "./adicionarVertice.mjs";
import { calcularDistancia } from "./calcularDistancia.mjs";
import { verticesIguais } from "./verticesIguais.mjs";
import { listarVertices } from "./listarVertices.mjs";
import { mudarVertice } from "./mudarVertice.mjs";
import { rl, vecVertices } from "../utils/readlineModule.mjs";
import { exibirMenu } from "./exibirMenu.mjs";

function lerOpcao() {
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        adicionarVertice();
        break;
      case "2":
        calcularDistancia();
        break;
      case "3":
        listarVertices();
        break;
      case "4":
        verticesIguais();
        break;
      case "5":
        mudarVertice();
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
