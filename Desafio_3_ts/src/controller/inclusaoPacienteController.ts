import Pacientes from '../model/Pacientes';
import { OperationErrors, OperationStatus } from '../controller/operation-code';

class InclusaoPacienteController {
	async run(cpf: string, nome: string, validacaoDataNascimento: Date) {
		try {
			const paciente = new Pacientes();
			const resultado = await paciente.registrarPaciente(
				cpf,
				nome,
				validacaoDataNascimento
			);
			if (resultado.status === OperationStatus.FAILURE) {
				return OperationStatus.FAILURE;
			}
			return OperationStatus.SUCCESS;
		} catch (erro) {
			return OperationStatus.FAILURE;
		}
	}
}
export default InclusaoPacienteController;
