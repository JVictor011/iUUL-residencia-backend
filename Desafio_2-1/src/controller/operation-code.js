//Classe responsavel por mostrar se a validação Falhou ou teve Sucesso
class OperationStatus {
	static get SUCCESS() {
		return 1;
	}
	static get FAILURE() {
		return 2;
	}
}

//Classe responsavel por definir os possiveis erros de validação
class OperationErrors {
	static get INVALID_NAME() {
		return 'Nome invalido';
	}
	static get INVALID_CPF() {
		return 'CPF invalido';
	}
	static get INVALID_BIRTHDATE() {
		return 'Data de nascimento invalida';
	}
	static get INVALID_MONTHLY_INCOME() {
		return 'Renda mensal invalida';
	}
	static get INVALID_CIVIL_STATUS() {
		return 'Status civil invalido';
	}
	static get MANDATORY_FIELD() {
		return 'Campo obrigatorio ausente!';
	}
}

export { OperationErrors, OperationStatus };
