import { rl, turma } from "../utils/readlineModule.mjs";
import { Turma } from "../models/Turma.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function removerAluno() {
  try {
    rl.question(
      "Digite a matricula do aluno (formato: 11111111): ",
      (input) => {
        const matricula = input.split(" ").map(Number);
        turma.removeAluno(matricula);
        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { removerAluno };
