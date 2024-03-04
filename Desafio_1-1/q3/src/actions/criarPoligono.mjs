import { rl, poligono } from "../utils/readlineModule.mjs";
import { Poligono } from "../models/Poligono.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function criarPoligono() {
  try {
    rl.question(
      "Digite as coordenadas do vértice (formato: x1 y1 x2 y2...): ",
      (input) => {
        const vecVertices = input.split(" ").map(Number);

        try {
          const novoPoligono = new Poligono(...vecVertices);
          poligono = novoPoligono;
          exibirMenu();
          lerOpcao();
        } catch (error) {
          console.log(`Erro ao criar polígono: ${error.message}`);
          exibirMenu();
          lerOpcao();
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { criarPoligono };
