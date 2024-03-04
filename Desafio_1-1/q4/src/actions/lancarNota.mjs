import { rl, turma } from "../utils/readlineModule.mjs";
import { Turma } from "../models/Turma.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function lancarNota() {
  try {
    rl.question(
      "Digite a matricula a prova e a nota do aluno (formato: 11111111 p1 10): ",
      (input) => {
        const [matricula, prova, nota] = input.split(" ").map(Number);
        turma.lancarNota(matricula, prova, nota);
        exibirMenu();
        lerOpcao();
      }
    );
  } catch (error) {
    console.log(error);
  }
}

export { lancarNota };
