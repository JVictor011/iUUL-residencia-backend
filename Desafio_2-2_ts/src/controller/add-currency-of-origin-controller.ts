import Converter from '../model/Converter';

class AddCurrencyOfOriginController {
	run(answer: string, converter: Converter): void {
		converter.addCurrencyOfOrigin(answer);
	}
}

export default AddCurrencyOfOriginController;
