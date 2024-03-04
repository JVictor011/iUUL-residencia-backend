import { rl, turma } from "../utils/readlineModule.mjs";
import { Turma } from "../models/Turma.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function adicionarAluno() {
  try {
    rl.question(
      "Digite o nome e matricula do aluno (formato: João 11111111): ",
      (input) => {
        const [nome, matricula] = input.split(" ").map(Number);
        turma.addAluno(nome, matricula);
        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { adicionarAluno };
