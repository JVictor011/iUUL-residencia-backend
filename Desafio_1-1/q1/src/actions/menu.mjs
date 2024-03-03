import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function criarVertices() {
  exibirMenu();

  lerOpcao();
}

export { criarVertices };
