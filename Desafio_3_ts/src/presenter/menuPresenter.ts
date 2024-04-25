import MainController from '../controller/mainController';
import { exibirMenu } from '../view/exibirMenu';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';
import MenuPaciente from './menuPaciente';
import MenuClinica from './menuClinica';

class MenuPresenter {
	private controller: any;

	constructor(controller: any) {
		this.controller = controller;
	}

	async run() {
		exibirMenu();
		const opcao = await question('Opção: ');
		switch (opcao) {
			case '1':
				const menuPaciente = new MenuPaciente(this.controller);
				break;
			case '2':
				const menuClinica = new MenuClinica(this.controller);
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

export default MenuPresenter;
