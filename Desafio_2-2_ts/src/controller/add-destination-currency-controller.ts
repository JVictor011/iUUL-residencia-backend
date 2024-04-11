import Converter from '../model/Converter';

class AddDestinationCurrencyController {
	run(answer: string, converter: Converter): void {
		converter.addDestinationCurrency(answer);
	}
}

export default AddDestinationCurrencyController;
