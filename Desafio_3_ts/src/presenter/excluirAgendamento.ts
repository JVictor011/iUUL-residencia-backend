import { MainController } from '../controller/mainController';
import { exibirMenu } from '../view/exibirMenu';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';
import { formataCPF, validarCpf } from '../utils/validaCpf';
import Pacientes from '../model/Pacientes';
import { validarDataNascimento } from '../utils/validarDataNascimento';
import { OperationErrors, OperationStatus } from '../controller/operation-code';
import Agendamento from '../model/Agendamento';

class PacientePresenter {
	private controller: MainController;

	constructor(controller: MainController) {
		this.controller = controller;
	}
	async run() {
		try {
			const agendamento = new Agendamento();
			const cpf = await question('CPF: ');
			const opcao = await question(
				'Apresentar a agenda T-Toda ou P-Periodo: '
			);
			if (opcao == 'P') {
			}
		} catch (erro) {
			erros.falha();
		}
	}
}
