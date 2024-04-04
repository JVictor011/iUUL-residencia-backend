import Users from '../model/Users.js';
import FileReader from '../utils/file-reader.js';
import { OperationErrors, OperationStatus } from './operation-code.js';

class MainController {
	constructor() {
		this.model = new Users();
	}

	//Verifica se o json esta vazio ou se ele tem apenas '[]'
	validateJdonMandatory(data) {
		if (
			data === null ||
			data === undefined ||
			JSON.stringify(data) === '[]'
		) {
			return false;
		}
		return true;
	}

	//Faz as validações para cada usuario
	async validateUserData(data) {
		if (!validateJdonMandatory(data)) {
			return {
				status: OperationStatus.FAILURE,
				fileName: 'FAILURE',
			};
		}
		let errors = [];
		for (let i = 0; i < data.length; i++) {
			const user = data[i];
			let userErrors = [];

			const nome = this.model.validateName(user.nome);
			if (!nome) {
				userErrors.push({
					campo: 'nome',
					mensagem: OperationErrors.INVALID_NAME,
				});
			} else if (nome === 'mandatory') {
				userErrors.push({
					campo: 'nome',
					mensagem: OperationErrors.MANDATORY_FIELD,
				});
			}

			const cpf = this.model.validateCPF(user.cpf);
			if (!cpf) {
				userErrors.push({
					campo: 'cpf',
					mensagem: OperationErrors.INVALID_CPF,
				});
			} else if (cpf === 'mandatory') {
				userErrors.push({
					campo: 'cpf',
					mensagem: OperationErrors.MANDATORY_FIELD,
				});
			}

			const dateOfBirth = this.model.validateDateOfBirth(
				user.dt_nascimento
			);
			if (!dateOfBirth) {
				userErrors.push({
					campo: 'dt_nascimento',
					mensagem: OperationErrors.INVALID_BIRTHDATE,
				});
			} else if (dateOfBirth === 'mandatory') {
				userErrors.push({
					campo: 'dt_nascimento',
					mensagem: OperationErrors.MANDATORY_FIELD,
				});
			}

			if (!this.model.validateMonthlyIncome(user.renda_mensal)) {
				userErrors.push({
					campo: 'renda_mensal',
					mensagem: OperationErrors.INVALID_MONTHLY_INCOME,
				});
			}

			if (!this.model.validateCivilStatus(user.estado_civil)) {
				userErrors.push({
					campo: 'estado_civil',
					mensagem: OperationErrors.INVALID_CIVIL_STATUS,
				});
			}

			if (userErrors.length > 0) {
				errors.push({ dados: user, erros: userErrors });
			}
		}

		//Caso tenha erros de validação no json e criado um arquivo com os dados dos usuarios com erros e seus devidos erros
		if (errors.length > 0) {
			try {
				const fileName = await FileReader.writeErrorsToFile(errors);
				return {
					status: OperationStatus.FAILURE,
					fileName: fileName,
				};
			} catch (error) {
				return {
					status: OperationStatus.FAILURE,
					fileName: 'FAILURE',
				};
			}
		}

		//Caso não seja detectado nenhum erro e criado um arquivo json contendo apenas '[]'
		try {
			const fileName = await FileReader.writeFileEmpty();
			return {
				status: OperationStatus.SUCCESS,
				fileName: fileName,
			};
		} catch (error) {
			return {
				status: OperationStatus.FAILURE,
				fileName: 'FAILURE',
			};
		}
	}
}

export default MainController;
