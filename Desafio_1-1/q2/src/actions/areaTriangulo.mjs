import { rl, vecTriangulo } from "../utils/readlineModule.mjs";
import { Triangulo } from "../models/Triangulo.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function areaTriangulo() {
  try {
    rl.question(
      "Digite o numero do triangulo (formato: numero): ",
      (input) => {
        const [triangulo] = input.split(" ").map(Number);

        const area = vecTriangulo[triangulo].areaTriangulo();
        console.log(`Aréa: ${area}`);

        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { areaTriangulo };
