import Converter from '../model/Converter';

class ConvertCurrencyController {
    async run(converter: Converter): Promise<void> {
        await converter.convertCurrency();
    }
}

export default ConvertCurrencyController;
