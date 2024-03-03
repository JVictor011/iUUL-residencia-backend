import { rl, vecTriangulo } from "../utils/readlineModule.mjs";
import { Triangulo } from "../models/Triangulo.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function adicionarTriangulo() {
  try {
    rl.question(
      "Digite as coordenadas dos vértice (formato: x1 y1 x2 y2 x3 y3): ",
      (input) => {
        const [x1, y1, x2, y2, x3, y3] = input.split(" ").map(Number);
        vecTriangulo.push(new Triangulo(x1, y1, x2, y2, x3, y3));
        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { adicionarTriangulo };
