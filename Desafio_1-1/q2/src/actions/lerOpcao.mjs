import { rl, vecTriangulo } from "../utils/readlineModule.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { adicionarTriangulo } from "./adicionarTriangulo.mjs";
import { calcularPerimetro } from "./calcularPerimetro.mjs";
import { tipoTriangulo } from "./tipoTriangulo.mjs";
import { clonarTriangulo } from "./clonarTriangulo.mjs";
import { areaTriangulo } from "./areaTriangulo.mjs";

function lerOpcao() {
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        adicionarTriangulo();
        break;
      case "2":
        calcularPerimetro();
        break;
      case "3":
        tipoTriangulo();
        break;
      case "4":
        clonarTriangulo();
        break;
      case "5":
        areaTriangulo();
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
