import { adicionarVertice } from "./adicionarVertice.mjs";
import { criarPoligono } from "./criarPoligono.mjs";
import { perimetroPoligono } from "./perimetroPoligono.mjs";
import { qtdVertices } from "./qtdVertices.mjs";
import { rl, poligono } from "../utils/readlineModule.mjs";
import { exibirMenu } from "./exibirMenu.mjs";

function lerOpcao() {
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        criarPoligono();
        break;
      case "2":
        adicionarVertice();
        break;
      case "3":
        perimetroPoligono();
        break;
      case "4":
        qtdVertices();
        break;
      case "5":
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
