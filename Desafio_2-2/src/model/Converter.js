import axios from 'axios';
import { config as dotenvConfig } from 'dotenv';
import Dictionary from './Dictionary.js';

class Converter {
	#currencyOfOrigin;
	#destinationCurrency;
	#value;
	#valueDestinationCurrency;
	#fee;
	#currency_codes = new Dictionary().currency_codes;

	constructor() {
		this.#currencyOfOrigin = '';
		this.#destinationCurrency = '';
		this.#value = '';
		this.#valueDestinationCurrency = '';
		this.#fee = '';
	}

	validationCurrencyOfOrigin(answer) {
		return this.#currency_codes.includes(answer.toUpperCase());
	}

	validationDestinationCurrency(answer) {
		return this.#currency_codes.includes(answer.toUpperCase());
	}
	validationValue(answer) {
		if (answer.includes(',')) {
			answer = answer.replace(',', '.');
		}

		if (isNaN(answer) || parseFloat(answer) <= 0) {
			return false;
		}

		return answer;
	}

	addCurrencyOfOrigin(answer) {
		this.#currencyOfOrigin = answer.toUpperCase();
	}

	addDestinationCurrency(answer) {
		this.#destinationCurrency = answer.toUpperCase();
	}

	addValue(answer) {
		this.#value = answer;
	}

	async convertCurrency() {
		const response = await axios.get(
			`https://v6.exchangerate-api.com/v6/74f0ce3ac22fa2cec16bf5c8/latest/${this.#currencyOfOrigin}`
		);
		const conversionRate =
			response.data.conversion_rates[this.#destinationCurrency];
		const convertedAmount = this.#value * conversionRate;
		this.#valueDestinationCurrency = convertedAmount;
		this.#fee = conversionRate;
	}

	get currencyOfOrigin() {
		return this.#currencyOfOrigin;
	}

	get destinationCurrency() {
		return this.#destinationCurrency;
	}

	get value() {
		return this.#value;
	}

	get valueDestinationCurrency() {
		return this.#valueDestinationCurrency;
	}

	get fee() {
		return this.#fee;
	}

	get currency_codes() {
		return this.#currency_codes;
	}
}

export default Converter;
