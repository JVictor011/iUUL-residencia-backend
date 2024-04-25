import MainController from '../controller/mainController';
import { exibirmenuClinica } from '../view/exibirmenuClinica';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';

class MenuClinica {
	private controller: any;

	constructor(controller: any) {
		this.controller = controller;
	}

	async run() {
		exibirmenuClinica();
		const opcao = await question('Opção: ');
		switch (opcao) {
			case '1':
				// registerPatient();
				break;
			case '2':
				this.controller.cancelarConsulta();
				break;
			case '3':
				this.controller.listarAgenda();
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

export default MenuClinica;
