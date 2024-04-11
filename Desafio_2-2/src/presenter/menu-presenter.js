import { MenuOptions, MenuView } from '../view/menu-view.js';
import Converter from '../model/Converter.js';
class MenuPresenter {
	#controller;
	#view;
	constructor(controller) {
		this.#controller = controller;
		this.#view = new MenuView();
	}

	async run() {
		while (true) {
			const converter = new Converter();

			await this.#controller.addCurrencyOfOrigin(converter);
			await this.#controller.addDestinationCurrency(converter);
			await this.#controller.addValue(converter);
			await this.#controller.convertCurrency(converter);

			this.#view.print(
				converter.currencyOfOrigin,
				converter.destinationCurrency,
				converter.value,
				converter.valueDestinationCurrency,
				converter.fee
			);
		}
	}
}

export default MenuPresenter;
