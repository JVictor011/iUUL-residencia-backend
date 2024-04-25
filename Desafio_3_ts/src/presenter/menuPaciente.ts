import { MainController } from '../controller/mainController';
import { exibirMenuPaciente } from '../view/exibirMenuPaciente';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';

class MenuPaciente {
	private controller: MainController;

	constructor(controller: MainController) {
		this.controller = controller;
	}

	async run() {
		exibirMenuPaciente();
		const opcao = await question('Opção: ');
		switch (opcao) {
			case '1':
				// registerPatient();
				break;
			case '2':
				// excludePatient();
				break;
			case '3':
				// listPatients();
				break;
			case '4':
				erros.encerrarPrograma();
				break;
			default:
				erros.opcaoInvalida();
				this.run();
		}
	}
}
