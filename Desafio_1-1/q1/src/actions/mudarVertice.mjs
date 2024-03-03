import { rl, vecVertices } from "../utils/readlineModule.mjs";
import { Vertice } from "../models/Vertice.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function mudarVertice() {
  try {
    rl.question(
      "Digite o numero do vértice e as suas novas coordenadas (formato: vértice y z):  ",
      (input) => {
        const [vertice, x, y] = input.split(" ").map(Number);

        vecVertices[vertice].mover(x, y);

        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { mudarVertice };
