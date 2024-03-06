class User {
  #vecUsers = [];
  constructor(
    nome,
    cpf,
    dataNascimento,
    rendaMensal,
    estadoCivil,
    dependentes
  ) {
    try {
      this.verifyNome(nome);
      this.verifyCPF(cpf);
      this.verifyDataNascimento(dataNascimento);
      this.verifyRendaMensal(rendaMensal);
      this.verifyEstadoCivil(estadoCivil);
      this.verifyDependentes(dependentes);
      const user = {
        nome: nome,
        cpf: cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4"),
        dataNascimento: new Data(dataNascimento),
        rendaMensal: parseFloat(rendaMensal.replace(",", ".")).toFixed(2),
        estadoCivil: estadoCivil,
        dependentes: parseInt(dependentes),
      };
      this.#vecUsers.push(user);
    } catch (error) {
      console.log(error);
    }
  }
  verifyNome(nome) {
    if (nome.length < 5) {
      throw new Error("Não cadastrado, nome menor que 5 caracteres!");
    }
  }

  verifyCPF(cpf) {
    if (cpf.length !== 11) {
      throw new Error("Não cadastrado, cpf invalido!");
    }
  }

  verifyDataNascimento(dataNascimento) {
    const dataAtual = new Date();
    const idade = dataAtual - dataNascimento;
    if (idade < 18) {
      throw new Error("Não cadastrado, idade menor que 18 anos!");
    }
  }
  verifyRendaMensal(rendaMensal) {
    const valor = parseFloat(rendaMensal.replace(",", "."));
    if (isNaN(valor)) {
      throw new Error("Não cadastrado, valo invalido!");
    }
  }
  verifyEstadoCivil(estadoCivil) {
    const status = estadoCivil.toLowerCase();
    if (!("c" == status || "s" == status || "v" == status || "d" == status)) {
      throw new Error("Não cadastrado, estado civil invalido!");
    }
  }
  verifyDependentes(dependentes) {
    const valor = parseInt(dependentes);
    if (!isNaN(valor) && !(valor <= 10 && valor >= 0)) {
      throw new Error("Não cadastrado, dependentes invalido!");
    }
  }

  exibirUser() {
    console.log("—---------------------------------------");
    this.#vecUsers.forEach((user) => {
      console.log(
        `${user.nome}, ${user.cpf}, ${user.dataNascimento}, ${user.rendaMensal}, ${user.estadoCivil}, ${user.dependentes}`
      );
      console.log("—---------------------------------------");
    });
  }
}

export { User };
