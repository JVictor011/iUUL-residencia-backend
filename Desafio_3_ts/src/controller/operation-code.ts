/**
 * Classe com os códigos de SUCESSO e FALHA de uma operação
 * no controller
 */
class OperationStatus {
	static get SUCCESS() {
		return 1;
	}
	static get FAILURE() {
		return 2;
	}
}

/**
 * Classe com todos os códigos de erro das operações
 */
class OperationErrors {
	static get PATIENT_NOT_REGISTERED() {
		return 1;
	}
	static get PATIENT_ALREADY_REGISTERED() {
		return 2;
	}
	static get INVALID_PATIENT_DOCUMENT() {
		return 3;
	}
	static get INVALID_PATIENT_NAME() {
		return 4;
	}
	static get INVALID_PATIENT_BIRTHDATE() {
		return 5;
	}
	static get INVALID_DATE() {
		return 6;
	}
	static get EXISTING_SCHEDULING() {
		return 7;
	}
	static get INVALID_DATE_OR_TIME() {
		return 8;
	}
	static get FAILURE_TO_REMOVE_SCHEDULED_APPOINTMENTS() {
		return 9;
	}
	static get NOT_FOUND() {
		return 10;
	}
	static get PATIENT_HAS_FUTURE_APPOINTMENT() {
		return 11;
	}
	static get PACIENTE_NOT_FOUND() {
		return 12;
	}
	static get PATIENT_REMOVAL_FAILED() {
		return 13;
	}
	static get PACIENTE_EXISTENTE() {
		return 14;
	}
	static get PACIENTE_REGISTRATION_FAILED() {
		return 15;
	}
	static get INVALID_TIME() {
		return 16;
	}
	static get FAILURE_TO_LIST_SCHEDULED_APPOINTMENTS() {
		return 17;
	}
	static get INVALID_DATE_FORMAT() {
		return 18;
	}
	static get FAILURE_TO_LIST_PATIENTS() {
        return 19;
    }
	static get FAILURE() {
        return 20;
    }
}

export { OperationErrors, OperationStatus };
