import addCurrencyOfOriginPresenter from '../presenter/add-currency-of-origin-presenter.js';
import addCurrencyOfOriginController from './add-currency-of-origin-controller.js';
import addDestinationCurrencyController from './add-destination-currency-controller.js';
import addDestinationCurrencyPresenter from '../presenter/add-destination-currency-presenter.js';
import addValueController from './add-value-controller.js';
import addValuePresenter from '../presenter/add-value-presenter.js';
import convertCurrencyController from './convert-currency-controller.js';
import convertCurrencyPresenter from '../presenter/convert-currency-presenter.js';
class MainController {
	async addCurrencyOfOrigin(converter) {
		const controller = new addCurrencyOfOriginController();

		const presenter = new addCurrencyOfOriginPresenter(controller);

		await presenter.run(converter);
	}

	async addDestinationCurrency(converter) {
		const controller = new addDestinationCurrencyController();

		const presenter = new addDestinationCurrencyPresenter(controller);

		await presenter.run(converter);
	}

	async addValue(converter) {
		const controller = new addValueController();

		const presenter = new addValuePresenter(controller);

		await presenter.run(converter);
	}

	async convertCurrency(converter) {
		const controller = new convertCurrencyController();

		const presenter = new convertCurrencyPresenter(controller);

		await presenter.run(converter);
	}
}

export default MainController;
