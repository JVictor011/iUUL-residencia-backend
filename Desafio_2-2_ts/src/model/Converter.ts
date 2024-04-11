import axios from 'axios';
import { config as dotenvConfig } from 'dotenv';
import Dictionary from './Dictionary';

class Converter {
    #currencyOfOrigin: string;
    #destinationCurrency: string;
    #value: string;
    #valueDestinationCurrency: string;
    #fee: string;
    #currency_codes: string[];

    constructor() {
        this.#currencyOfOrigin = '';
        this.#destinationCurrency = '';
        this.#value = '';
        this.#valueDestinationCurrency = '';
        this.#fee = '';
        this.#currency_codes = new Dictionary().currency_codes;
    }

    validationCurrencyOfOrigin(answer: string): boolean {
        return this.#currency_codes.includes(answer.toUpperCase());
    }

    validationDestinationCurrency(answer: string): boolean {
        return this.#currency_codes.includes(answer.toUpperCase());
    }

    validationValue(answer: string): string | false {
        if (answer.includes(',')) {
            answer = answer.replace(',', '.');
        }

        if (isNaN(parseFloat(answer)) || parseFloat(answer) <= 0) {
            return false;
        }

        return answer;
    }

    addCurrencyOfOrigin(answer: string): void {
        this.#currencyOfOrigin = answer.toUpperCase();
    }

    addDestinationCurrency(answer: string): void {
        this.#destinationCurrency = answer.toUpperCase();
    }

    addValue(answer: string): void {
        this.#value = answer;
    }

    async convertCurrency(): Promise<void> {
        const response = await axios.get(
            `https://v6.exchangerate-api.com/v6/74f0ce3ac22fa2cec16bf5c8/latest/${this.#currencyOfOrigin}`
        );
        const conversionRate = response.data.conversion_rates[this.#destinationCurrency];
        const convertedAmount = parseFloat(this.#value) * conversionRate;
        this.#valueDestinationCurrency = convertedAmount.toString();
        this.#fee = conversionRate.toString();
    }

    get currencyOfOrigin(): string {
        return this.#currencyOfOrigin;
    }

    get destinationCurrency(): string {
        return this.#destinationCurrency;
    }

    get value(): string {
        return this.#value;
    }

    get valueDestinationCurrency(): string {
        return this.#valueDestinationCurrency;
    }

    get fee(): string {
        return this.#fee;
    }

    get currency_codes(): string[] {
        return this.#currency_codes;
    }
}

export default Converter;
