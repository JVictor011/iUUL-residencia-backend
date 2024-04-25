import { MainController } from '../controller/mainController';
import { exibirMenu } from '../view/exibirMenu';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';

class MenuPresenter {
	private controller: MainController;

	constructor(controller: MainController) {
		this.controller = controller;
	}

	async run() {
		exibirMenu();
		const opcao = await question('Opção: ');
		switch (opcao) {
			case '1':
				// exibirMenuPaciente();
				// lerOpcaoPatient();
				break;
			case '2':
				// exibirMenuClinica();
				// lerOpcaoClinic();
				break;
			case '3':
				erros.encerrarPrograma();
				break;
			default:
				erros.opcaoInvalida();
				this.run();
		}
	}
}
