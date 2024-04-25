import { MainController } from '../controller/mainController';
import { exibirMenu } from '../view/exibirMenu';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';
import { formataCPF, validarCpf } from '../utils/validaCpf';
import Pacientes from '../model/Pacientes';
import { validarDataNascimento } from '../utils/validarDataNascimento';
import { OperationErrors, OperationStatus } from '../controller/operation-code';

class PacientePresenter {
	private controller: MainController;

	constructor(controller: MainController) {
		this.controller = controller;
	}
	async run() {
		try {
			const paciente = new Pacientes();
			const cpf = await question('CPF: ');
			const validaCpf = validarCpf(cpf);
			if (!validaCpf) {
				erros.valorInvalida();
				this.run();
			} else {
				const resposta = await paciente.removerPaciente(cpf);
				if (resposta.status === OperationStatus.FAILURE) {
					if (resposta.code === OperationErrors.PACIENTE_NOT_FOUND) {
						erros.pacienteNaoExiste();
						this.run();
					} else if (
						resposta.code ===
						OperationErrors.PATIENT_HAS_FUTURE_APPOINTMENT
					) {
						erros.existeUmaConsultaFutura();
						this.run();
					}
					erros.falha();
				}
			}
		} catch (erro) {
			erros.falha();
		}
	}
}