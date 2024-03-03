import { rl, vecVertices } from "../utils/readlineModule.mjs";
import { Vertice } from "../models/Vertice.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function adicionarVertice() {
  try {
    rl.question(
      "Digite as coordenadas do vértice (formato: x y): ",
      (input) => {
        const [x, y] = input.split(" ").map(Number);
        vecVertices.push(new Vertice(x, y));
        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { adicionarVertice };
