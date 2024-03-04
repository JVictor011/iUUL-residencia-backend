class Turma {
  constructor(nome, matricula) {
    this.turma = [];
    const aluno = { nome: nome, matricula: matricula, p1: null, p2: null };
    this.turma.push(aluno);
  }

  addAluno(nome, matricula) {
    const aluno = { nome: nome, matricula: matricula, p1: null, p2: null };
    const i = this.turma.indexOf(
      (alunoTurma) => alunoTurma.matricula === matricula
    );
    if (i == -1) {
      this.turma.push(aluno);
      return "Aluno adicionado com sucesso";
    }
    return "Matrícula já existente";
  }

  removeAluno(matricula) {
    const i = this.turma.indexOf(
      (alunoTurma) => alunoTurma.matricula === matricula
    );
    if (i !== -1) {
      this.turma.splice(i, 1);
      return "Aluno removido com sucesso";
    }
    return "Matrícula não encontrada";
  }

  lancarNota(matricula, numProva, nota) {
    const i = this.turma.indexOf(
      (alunoTurma) => alunoTurma.matricula === matricula
    );
    if (i !== -1) {
      if (numProva == "p1" && this.turma[i].p1 == null) {
        this.turma[i].p1 = nota;
        return "Nota da prova P1 adicionada!";
      }
      if (numProva == "p2" && this.turma[i].p2 == null) {
        this.turma[i].p2 = nota;
        return "Nota da prova P2 adicionada!";
      }
      return "Prova já lançada para esta matrícula";
    }
    return "Matrícula não encontrada";
  }

  exibirAlunos() {
    console.log("—---------------------------------------");
    console.log("Matrícula\t\tNome\t\tP1\t\tP2\t\tNF");
    console.log("—---------------------------------------");

    const alunosOrdemAlfabetica = this.turma
      .slice()
      .sort((a, b) => a.nome.localeCompare(b.nome));

    alunosOrdemAlfabetica.forEach((aluno) => {
      let nf;
      if (aluno.p1 !== null && aluno.p2 !== null) {
        nf = (aluno.p1 + aluno.p2) / 2;
      } else if (aluno.p1 == null && aluno.p2 == null) {
        nf = 0;
      } else if (aluno.p1 !== null && aluno.p2 == null) {
        nf = aluno.p1 / 2;
      } else {
        nf = aluno.p2 / 2;
      }
      console.log(
        `${aluno.matricula}\t\t${aluno.nome}\t\t${aluno.p1}\t\t${aluno.p2}\t\t${nf}`
      );
    });
    console.log("—---------------------------------------");
  }
}

export { Turma };
