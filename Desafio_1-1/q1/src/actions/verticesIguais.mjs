import { rl, vecVertices } from "../utils/readlineModule.mjs";
import { Vertice } from "../models/Vertice.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function verticesIguais() {
  try {
    rl.question(
      "Digite o numero dos vértice (formato: vértice1 vértice2):  ",
      (input) => {
        const [vertice1, vertice2] = input.split(" ").map(Number);

        vecVertices[vertice1].equals(vecVertices[vertice2]);

        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { verticesIguais };
