import { rl, vecUsers } from "../utils/readlineModule.mjs";
import { User } from "../models/User.mjs";
import { exibirMenu } from "./exibirMenu.mjs";
import { lerOpcao } from "./lerOpcao.mjs";

function exibirAlunos() {
  try {
    vecUsers.exibirUser();
    exibirMenu();
    lerOpcao();
  } catch (error) {
    console.log(error);
  }
}

export { exibirAlunos };
