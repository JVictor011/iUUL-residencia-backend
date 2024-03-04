import { rl, turma } from "../utils/readlineModule.mjs";
import { Turma } from "../models/Turma.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function exibirAlunos() {
  try {
    turma.exibirAlunos();
    exibirMenu();
    lerOpcao();
  } catch (error) {
    console.log(error);
  }
}

export { exibirAlunos };
