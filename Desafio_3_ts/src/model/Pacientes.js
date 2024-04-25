"use strict";
class Paciente {
    constructor(nome, cpf, dataNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }
    validarNome(name) {
        if (name.length < 5) {
            return false;
        }
        return name;
    }
    validarDataNascimento(dateOfBirth) {
        const [dayStr, monthStr, yearStr] = dateOfBirth.split('/');
        const day = parseInt(dayStr);
        const month = parseInt(monthStr) - 1;
        const year = parseInt(yearStr);
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            return false;
        }
        const date = new Date(year, month, day);
        if (isNaN(date.getTime())) {
            return false;
        }
        const currentDate = new Date();
        let age = currentDate.getFullYear() - date.getFullYear();
        const monthOfAge = currentDate.getMonth() - date.getMonth();
        if (monthOfAge < 0 ||
            (monthOfAge === 0 && currentDate.getDate() < date.getDate())) {
            age--;
        }
        if (age < 13) {
            return false;
        }
        return date;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(value) {
        this.nome = value;
    }
    get getCpf() {
        return this.cpf;
    }
    set setCpf(value) {
        this.cpf = value;
    }
    get getDataNascimento() {
        return this.dataNascimento;
    }
    set setDataNascimento(value) {
        this.dataNascimento = value;
    }
}
