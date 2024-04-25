import Pacientes from '../model/Pacientes';
import { OperationErrors, OperationStatus } from '../controller/operation-code';

class ExclusaoPacienteController {
	async run(cpf: string) {
		const paciente = new Pacientes();
		const resposta = await paciente.removerPaciente(cpf);
		if (resposta.status === OperationStatus.FAILURE) {
			if (resposta.code === OperationErrors.PACIENTE_NOT_FOUND) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.PACIENTE_NOT_FOUND,
				};
			} else if (
				resposta.code === OperationErrors.PATIENT_HAS_FUTURE_APPOINTMENT
			) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.PATIENT_HAS_FUTURE_APPOINTMENT,
				};
			}
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.FAILURE,
			};
		}
		return { status: OperationStatus.SUCCESS };
	}
}

export default ExclusaoPacienteController;
