import { rl, vecUsers, appointmentVector } from "../utils/readlineModule.mjs";

class Patients {
  #cpf;
  #name;
  #dateOfBirth;

  constructor() {}

  getCpf() {
    return this.#cpf;
  }
  getName() {
    return this.#name;
  }
  getDateOfBirth() {
    return this.#dateOfBirth;
  }

  set setCpf(cpf) {
    this.#cpf = cpf;
  }
  set setName(name) {
    this.#name = name;
  }
  set setDateOfBirth(dateOfBirth) {
    this.#dateOfBirth = dateOfBirth;
  }

  validateName(name) {
    if (name.length < 5) {
      console.log("O nome tem que ter mais do que 5 caracteres");
      return false;
    }
    return name;
  }

  validateCpfLanght(cpf) {
    if (cpf.length != 11) {
      console.log("O CPF tem que ter 11 caracteres");
      return false;
    }

    let aux = 0;
    for (let i = 0; i < cpf.length; i++) {
      if (cpf[i] == cpf[i + 1]) {
        aux++;
      }
      if (aux === 10) {
        console.log("Todos os numeros não podem ser iguais!");
        return false;
      }
    }
    return true;
  }
  validateCpfDddFirstPart(cpf) {
    try {
      let sumValidate = 0;
      for (let i = 0; i < 9; i++) {
        sumValidate += parseInt(cpf[i]) * (10 - i);
      }
      let restOfDivision = sumValidate % 11;
      restOfDivision = restOfDivision < 2 ? 0 : 11 - restOfDivision;
      return restOfDivision;
    } catch (error) {
      return false;
    }
  }
  validateCpfDddSecondPart(cpf) {
    try {
      let sumValidate = 0;
      for (let i = 0; i < 10; i++) {
        sumValidate += parseInt(cpf[i]) * (11 - i);
      }
      let restOfDivision = sumValidate % 11;
      restOfDivision = restOfDivision < 2 ? 0 : 11 - restOfDivision;
      return restOfDivision;
    } catch (error) {
      return false;
    }
  }
  validateCPF(cpf) {
    try {
      if (!this.validateCpfLanght(cpf)) {
        return false;
      }
      let DddFirstPart = this.validateCpfDddFirstPart(cpf);
      let DddSecondPart = this.validateCpfDddSecondPart(cpf);
      if (
        !(
          parseInt(cpf[9]) == DddFirstPart && parseInt(cpf[10]) == DddSecondPart
        )
      ) {
        return false;
      }
      return cpf;
    } catch (error) {
      return false;
    }
  }
  validateDateOfBirth(dateOfBirth) {
    let [day, month, year] = dateOfBirth.split("/");
    let date = new Date(year, month, day);
    let currentDate = new Date();

    let age = currentDate.getFullYear() - date.getFullYear();
    let monthOfAge = currentDate.getMonth() - date.getMonth();
    if (
      monthOfAge < 0 ||
      (monthOfAge == 0 && currentDate.getDate() < date.getDate())
    ) {
      age--;
    }

    if (age < 13) {
      console.log("O paciente precisa ter no minimo 13 anos!");
      return false;
    }
    return date;
  }

  registerPatient(cpf, name, dateOfBirth) {
    try {
      let i = false;
      for (let j = 0; j < vecUsers.length; j++) {
        if (vecUsers[j].getCpf() === cpf) {
          i = true;
        }
      }
      if (!i) {
        console.log("O CPF já está cadastrado!");
        return false;
      }
      const verifyDate = this.validateDateOfBirth(dateOfBirth);
      const verifyName = this.validateName(name);
      const verifyCpf = this.validateCPF(cpf);
      if (verifyDate && verifyName && verifyCpf) {
        this.#cpf = verifyCpf;
        this.#name = verifyName;
        this.#dateOfBirth = verifyDate;
        console.log("Cadastrado com sucesso!");
      } else {
        console.log("Os dados não são validos!");
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
  excludePatient(cpf) {
    try {
      let userIndex = -1;
      for (let i = 0; i < vecUsers.length; i++) {
        if (vecUsers[i].getCpf() === cpf) {
          userIndex = i;
          break;
        }
      }

      if (userIndex !== -1) {
        let appointmentIndex = -1;
        for (let j = 0; j < appointmentVector.length; j++) {
          if (appointmentVector[j].getPatientCpf() === cpf) {
            appointmentIndex = j;
            break;
          }
        }

        if (appointmentIndex !== -1) {
          let currentDate = new Date();
          let appointmentDate =
            appointmentVector[appointmentIndex].getAppointmentDate();
          let hourAndMinute =
            appointmentVector[appointmentIndex].getAppointmentTime();
          let hour = parseInt(hourAndMinute.substring(0, 2));
          let minute = parseInt(hourAndMinute.substring(2));

          if (
            currentDate < appointmentDate ||
            (currentDate.getDate() === appointmentDate.getDate() &&
              currentDate.getHours() < hour) ||
            (currentDate.getDate() === appointmentDate.getDate() &&
              currentDate.getHours() === hour &&
              currentDate.getMinutes() < minute)
          ) {
            console.log("Paciente está agendado!");
            return false;
          } else {
            appointmentVector.splice(appointmentIndex, 1);
          }
        }

        vecUsers.splice(userIndex, 1);
        console.log("Paciente excluído com sucesso!");
        return true;
      } else {
        console.log("Paciente não cadastrado!");
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
}

export { Patients };
