import { rl, vecTriangulo } from "../utils/readlineModule.mjs";
import { Triangulo } from "../models/Triangulo.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function tipoTriangulo() {
  try {
    rl.question(
      "Digite o numero do triangulo (formato: numero): ",
      (input) => {
        const [triangulo] = input.split(" ").map(Number);

        const tipoTriangulo = vecTriangulo[triangulo].tipoTriangulo();
        console.log(`Tipó: ${tipoTriangulo}`);

        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { tipoTriangulo };
