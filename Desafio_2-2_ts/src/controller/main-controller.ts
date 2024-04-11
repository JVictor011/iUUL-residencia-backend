import AddCurrencyOfOriginPresenter from '../presenter/add-currency-of-origin-presenter';
import AddCurrencyOfOriginController from './add-currency-of-origin-controller';
import AddDestinationCurrencyController from './add-destination-currency-controller';
import AddDestinationCurrencyPresenter from '../presenter/add-destination-currency-presenter';
import AddValueController from './add-value-controller';
import AddValuePresenter from '../presenter/add-value-presenter';
import ConvertCurrencyController from './convert-currency-controller';
import ConvertCurrencyPresenter from '../presenter/convert-currency-presenter';
import Converter from '../model/Converter';

class MainController {
	async addCurrencyOfOrigin(converter: Converter): Promise<void> {
		const controller = new AddCurrencyOfOriginController();
		const presenter = new AddCurrencyOfOriginPresenter(controller);
		await presenter.run(converter);
	}

	async addDestinationCurrency(converter: Converter): Promise<void> {
		const controller = new AddDestinationCurrencyController();
		const presenter = new AddDestinationCurrencyPresenter(controller);
		await presenter.run(converter);
	}

	async addValue(converter: Converter): Promise<void> {
		const controller = new AddValueController();
		const presenter = new AddValuePresenter(controller);
		await presenter.run(converter);
	}

	async convertCurrency(converter: Converter): Promise<void> {
		const controller = new ConvertCurrencyController();
		const presenter = new ConvertCurrencyPresenter(controller);
		await presenter.run(converter);
	}
}

export default MainController;
