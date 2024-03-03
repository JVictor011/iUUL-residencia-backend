import { rl, vecTriangulo } from "../utils/readlineModule.mjs";
import { Triangulo } from "../models/Triangulo.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function clonarTriangulo() {
  try {
    rl.question(
      "Digite o numero do triangulo (formato: numero): ",
      (input) => {
        const [triangulo] = input.split(" ").map(Number);

        vecTriangulo.push(Triangulo.clonarTriangulo(vecTriangulo[triangulo]));
        console.log("Clonado!");

        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { clonarTriangulo };
