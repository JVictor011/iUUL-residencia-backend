import MainController from '../controller/mainController';
import { exibirMenuPaciente } from '../view/exibirMenuPaciente';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';

class MenuPaciente {
	private controller: any;

	constructor(controller: any) {
		this.controller = controller;
	}

	async run() {
		exibirMenuPaciente();
		const opcao = await question('Opção: ');
		switch (opcao) {
			case '1':
				this.controller.incluirPaciente();
				break;
			case '2':
				this.controller.excluirPaciente();
				break;
			case '3':
				this.controller.listarPacientes();
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

export default MenuPaciente;
