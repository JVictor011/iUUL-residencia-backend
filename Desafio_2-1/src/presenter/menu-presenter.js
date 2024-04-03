import { OperationStatus } from '../controller/operation-code.js';
import MenuView from '../view/menu-view.js';

class MenuPresenter {
	#controller;
	#view;
	constructor(controller) {
		this.#controller = controller;
		this.#view = new MenuView();
	}

	/*
		Método responsável por iniciar o controller para a validação dos dados dos usuarios
		é apos as validações são chamadas funções para a vizualização de status
	*/
	async run(jsonData) {
		this.#view.render();
		try {
			const result = await this.#controller.validateUserData(jsonData);

			if (result.fileName == 'FAILURE') {
				this.#view.failure();
			}
			if (result.status !== OperationStatus.SUCCESS) {
				this.#view.errorRender(result.fileName);
			} else {
				this.#view.successRender(result.fileName);
			}
		} catch (error) {
			console.error('Erro ao executar a validação:', error);
			this.#view.errorRender('Erro ao executar a validação');
		}
	}
}

export default MenuPresenter;
