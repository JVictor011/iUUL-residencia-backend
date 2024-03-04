import { rl, turma } from "../utils/readlineModule.mjs";
import { Turma } from "../models/Turma.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function criarTurma() {
  try {
    rl.question(
      "Digite o nome e matricula do aluno (formato: João 11111111): ",
      (input) => {
        const [nome, matricula] = input.split(" ").map(Number);

        try {
          const novaTurma = new Turma(nome, matricula);
          turma = novaTurma;
          exibirMenu();
          lerOpcao();
        } catch (error) {
          console.log(`Erro ao criar turma: ${error.message}`);
          exibirMenu();
          lerOpcao();
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { criarTurma };
