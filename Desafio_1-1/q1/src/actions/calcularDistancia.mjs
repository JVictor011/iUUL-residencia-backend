import { rl, vecVertices } from "../utils/readlineModule.mjs";
import { Vertice } from "../models/Vertice.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function calcularDistancia() {
  try {
    rl.question(
      "Digite o numero dos vértice (formato: vértice1 vértice2): ",
      (input) => {
        const [vertice1, vertice2] = input.split(" ").map(Number);

        const distancia = vecVertices[vertice1].distancia(
          vecVertices[vertice2]
        );
        console.log(`Distância entre os vértices: ${distancia}`);

        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { calcularDistancia };
