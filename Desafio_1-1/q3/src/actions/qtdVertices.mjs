import { rl, poligono } from "../utils/readlineModule.mjs";
import { Poligono } from "../models/Poligono.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function qtdVertices() {
  try {
    const qtd = poligono.qtdVertices();
    console.log(qtd);
    exibirMenu();
    lerOpcao();
  } catch (error) {
    console.log(error);
  }
}

export { qtdVertices };
