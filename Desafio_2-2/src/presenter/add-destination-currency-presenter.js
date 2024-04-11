import { MenuOptions, MenuView } from '../view/menu-view.js';
import { rl, question } from '../utils/readlineModule.js';
import addCurrencyOfOriginView from '../view/errorView.js';
class addDestinationCurrencyPresenter {
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
				const answer = await question(
					this.#menuView.destinationCurrency()
				);
				const validate =
					await converter.validationDestinationCurrency(answer);
				if (validate) {
					await this.#controller.run(answer, converter);
					break;
				}
			} catch (error) {
				this.#view.errorRender();
				process.exit(1);
			}
		}
	}
}

export default addDestinationCurrencyPresenter;
