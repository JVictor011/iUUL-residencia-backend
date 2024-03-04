import { rl, poligono } from "../utils/readlineModule.mjs";
import { Poligono } from "../models/Poligono.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function adicionarVertice() {
  try {
    rl.question(
      "Digite as coordenadas do vértice (formato: x y): ",
      (input) => {
        const [x, y] = input.split(" ").map(Number);
        poligono.addVertice(x, y);
        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { adicionarVertice };
