import MainController from '../controller/mainController';
import { exibirMenu } from '../view/exibirMenu';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';
import { formataCPF, validarCpf } from '../utils/validaCpf';
import Pacientes from '../model/Pacientes';
import { validarDataNascimento } from '../utils/validarDataNascimento';
import { OperationErrors, OperationStatus } from '../controller/operation-code';
import Agendamento from '../model/Agendamento';

class ExcluirAgendamento {
	private controller: any;

	constructor(controller: any) {
		this.controller = controller;
	}
	async run() {
		try {
			const agendamento = new Agendamento();
			const cpf = await question('CPF: ');
			const data = await question('Data: ');
			const hora = await question('Hora inicial: ');
			const resposta = await agendamento.cancelarAgendamento(
				cpf,
				data,
				hora
			);
			if (resposta?.status === OperationStatus.FAILURE) {
				if (
					resposta.code ===
					OperationErrors.FAILURE_TO_REMOVE_SCHEDULED_APPOINTMENTS
				) {
					erros.falha();
				} else {
					erros.erro();
				}
			}
		} catch (erro) {
			erros.falha();
		}
	}
}

export default ExcluirAgendamento;
