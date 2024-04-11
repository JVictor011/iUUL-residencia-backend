import { MenuOptions, MenuView } from '../view/menu-view.js';
import addCurrencyOfOriginView from '../view/errorView.js';

class convertCurrencyPresenter {
	#controller;
	#view;
	#menuView;

	constructor(controller) {
		this.#controller = controller;
		this.#view = new addCurrencyOfOriginView();
		this.#menuView = new MenuView();
	}

	async run(converter) {
		try {
			await this.#controller.run(converter);
		} catch (error) {
			this.#view.errorRender();
			process.exit(1);
		}
	}
}

export default convertCurrencyPresenter;
