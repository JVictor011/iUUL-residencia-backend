import { rl, vecVertices } from "../utils/readlineModule.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function listarVertices() {
  vecVertices.forEach((vertice, index) => {
    console.log(`Vertice ${index}: (${vertice.getX()}, ${vertice.getY()})`);
  });
  exibirMenu();
  lerOpcao();
}

export { listarVertices };
