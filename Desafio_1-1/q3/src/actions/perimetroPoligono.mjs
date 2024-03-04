import { rl, poligono } from "../utils/readlineModule.mjs";
import { Poligono } from "../models/Poligono.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function perimetroPoligono() {
  try {
    const perimetro = poligono.perimetro();
    console.log(perimetro);
    exibirMenu();
    lerOpcao();
  } catch (error) {
    console.log(error);
  }
}

export { perimetroPoligono };
