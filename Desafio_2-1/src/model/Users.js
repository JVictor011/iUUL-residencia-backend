class Users {
	constructor() {}

	//Método responsável pela validação o nome do usuario
	validateName(name) {
		if (name.trim().length === 0) {
			return 'mandatory';
		}
		if (name.length < 5 && name.length > 60) {
			return false;
		}
		return true;
	}

	//Método responsável pela validação de tamanho do CPF
	validateCpfLanght(cpf) {
		if (cpf.trim().length === 0) {
			return 'mandatory';
		}
		if (cpf.length != 11) {
			return false;
		}

		let aux = 0;
		for (let i = 0; i < cpf.length; i++) {
			if (cpf[i] == cpf[i + 1]) {
				aux++;
			}
			if (aux === 10) {
				return false;
			}
		}
		return true;
	}

	//Método responsável pela validação do penúltimo dígito do CPF
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

	//Método responsável pela validação do último dígito do CPF
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

	//Método responsável pela validação do CPF
	validateCPF(cpf) {
		try {
			if (!this.validateCpfLanght(cpf)) {
				return false;
			}
			let DddFirstPart = this.validateCpfDddFirstPart(cpf);
			let DddSecondPart = this.validateCpfDddSecondPart(cpf);
			if (
				!(
					parseInt(cpf[9]) == DddFirstPart &&
					parseInt(cpf[10]) == DddSecondPart
				)
			) {
				return false;
			}
			return true;
		} catch (error) {
			return false;
		}
	}

	//Método responsável pela validação da data de nascimento
	validateDateOfBirth(dateOfBirth) {
		if (dateOfBirth.trim().length === 0) {
			return 'mandatory';
		}

		if (!/^\d{8}$/.test(dateOfBirth)) {
			return false;
		}

		let day = parseInt(dateOfBirth.substring(0, 2));
		let month = parseInt(dateOfBirth.substring(2, 4)) - 1;
		let year = parseInt(dateOfBirth.substring(4, 8));

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

		if (age < 18) {
			return false;
		}
		return true;
	}

	//Método responsável pela validação do salário mensal
	validateMonthlyIncome(monthlyIncome) {
		if (monthlyIncome == null || monthlyIncome == '') {
			return true;
		}
		if (!/^(\d{1,6}[.,]\d{2})$/.test(monthlyIncome)) {
			return false;
		}
		return true;
	}

	//Método responsável pela validação do estado civil
	validateCivilStatus(civilStatus) {
		switch (civilStatus.toUpperCase()) {
			case 'C':
				return true;
			case 'S':
				return true;
			case 'V':
				return true;
			case 'D':
				return true;
			case '':
				return true;
			default:
				return false;
		}
	}
}

export default Users;
