import { rl, vecUsers, appointmentVector } from "../utils/readlineModule.mjs";

class Patients {
  #cpf;
  #name;
  #dateOfBirth;
  constructor(cpf, name, dateOfBirth) {
    this.registerPatient(cpf, name, dateOfBirth);
  }

  validateName(name) {
    if (name.langht < 5) {
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
  }
  validateCpfDddFirstPart(cpf) {
    try {
      let value = 10;
      let aux = 0;
      for (let i = 0; i < 9; i++) {
        aux += cpf[i] * value;
        value--;
      }
      let restOfDivision = aux % 11;
      let valueDdd = 0;
      if (restOfDivision == 0 || restOfDivision == 1) {
        return valueDdd;
      } else if (restOfDivision >= 2 && restOfDivision <= 10) {
        valueDdd = 11 - restOfDivision;
        return valueDdd;
      }
    } catch (error) {
      return false;
    }
  }
  validateCpfDddSecondPart(cpf) {
    try {
      let value = 11;
      let aux = 0;
      for (let i = 0; i < 10; i++) {
        aux += cpf[i] * value;
        value--;
      }
      let restOfDivision = aux % 11;
      let valueDdd = 0;
      if (restOfDivision == 0 || restOfDivision == 1) {
        return valueDdd;
      } else if (restOfDivision >= 2 && restOfDivision <= 10) {
        valueDdd = 11 - restOfDivision;
        return valueDdd;
      }
    } catch (error) {
      return false;
    }
  }
  validateCPF(cpf) {
    try {
      if (!validateCpfLanght(cpf)) {
        return false;
      }
      let DddFirstPart = validateCpfDddFirstPart(cpf);
      let DddSecondPart = validateCpfDddSecondPart(cpf);

      cpf[10] = DddFirstPart;
      cpf[11] = DddSecondPart;

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
      let i = vecUsers.indexOf((user) => user.getCpf() === cpf);
      if (i !== -1) {
        console.log("O CPF já está cadastrado!");
        return false;
      }
      let verifyDate = this.validateDateOfBirth(dateOfBirth);
      let verifyName = this.validateName(name);
      let verifyCpf = this.validateCPF(cpf);
      if (verifyDate && verifyName && verifyCpf) {
        this.#cpf = verifyCpf;
        this.#name = verifyName;
        this.#dateOfBirth = verifyDate;
      } else {
        console.log("Os dados não são validos!");
      }
    } catch (error) {
      throw error;
    }
  }
  excludePatient(cpf) {
    try {
      let i = vecUsers.indexOf((users) => users.getCpf() === cpf);
      if (i !== -1) {
        let j = appointmentVector.indexOf(
          (appointments) => appointments.getPatientCpf === cpf
        );
        if (j !== -1) {
          let currentDate = new Date();
          let appointmentDate = appointmentVector[j].getAppointmentDate();
          let hourAndMinute = appointmentVector[j].getAppointmentTime();
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
            console.log(
              "Um paciente com uma consulta agendada futura não pode ser excluído!"
            );
            return false;
          } else {
            appointmentVector.splice(j, 1);
            vecUsers.splice(i, 1);
          }
        } else {
          vecUsers.splice(i, 1);
        }
      }
    } catch (error) {
      throw error;
    }
  }
  get getCpf() {
    return this.#cpf;
  }
  get getName() {
    return this.#name;
  }
  get getDateOfBirth() {
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
}

export { Patients };
