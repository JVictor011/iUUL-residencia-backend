import { rl, vecUsers } from "../utils/readlineModule.mjs";
import { User } from "../models/User.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function criarTurma() {
  try {
    rl.question(
      "Digite os dados de usuario (formato: João 11111111111 11/01/2000 3500,10 S 2): ",
      (input) => {
        const [
          nome,
          cpf,
          dataNascimento,
          rendaMensal,
          estadoCivil,
          dependentes,
        ] = input.split(" ").map(Number);

        try {
          const contruindoUsers = new User(
            nome,
            cpf,
            dataNascimento,
            rendaMensal,
            estadoCivil,
            dependentes
          );
          vecUsers = contruindoUsers;
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
