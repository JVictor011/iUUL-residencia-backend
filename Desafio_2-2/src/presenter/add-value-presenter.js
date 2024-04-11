import { MenuOptions, MenuView } from '../view/menu-view.js';
import { rl, question } from '../utils/readlineModule.js';
import addCurrencyOfOriginView from '../view/errorView.js';
class addValuePresenter {
	#controller;
	#view;
	#menuView;

	constructor(controller) {
		this.#controller = controller;
		this.#view = new addCurrencyOfOriginView();
		this.#menuView = new MenuView();
	}

	async run(converter) {
		var failure = true;
		while (failure) {
			try {
				const answer = await question(this.#menuView.value());
				const validate = await converter.validationValue(answer);
				if (validate) {
					await this.#controller.run(validate, converter);
					failure = false;
				}
			} catch (error) {
				this.#view.errorRender();
				process.exit(1);
			}
		}
	}
}

export default addValuePresenter;
