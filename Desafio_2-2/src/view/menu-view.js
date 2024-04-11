import { rl, question } from '../utils/readlineModule.js';

class MenuOptions {
	static get CURRENCY_OF_ORIGIN() {
		return 1;
	}

	static get DESTINATION_CURRENCY() {
		return 2;
	}

	static get VALUE() {
		return 3;
	}

	static get OK() {
		return 4;
	}

	static get ERROR() {
		return 5;
	}
}

class MenuView {
	#menuId;
	#output;

	constructor() {
		this.#menuId = MenuOptions.CURRENCY_OF_ORIGIN;
		this.#output = rl;
	}

	errorRender() {
		console.log('Erro inesperado');
		this.#menuId = this.menuId(MenuOptions.CURRENCY_OF_ORIGIN);
	}

	get menuId() {
		return this.#menuId;
	}

	set menuId(value) {
		this.#menuId = value;
	}

	currencyOfOrigin() {
		return 'Moeda origem: ';
	}

	destinationCurrency() {
		return 'Moeda destino: ';
	}

	value() {
		return 'Valor: ';
	}
	print(
		currencyOfOrigin,
		destinationCurrency,
		value,
		valueDestinationCurrency,
		fee
	) {
		console.log(`
${currencyOfOrigin} ${value} => ${destinationCurrency} ${valueDestinationCurrency}

TAXA: ${fee}
		`);
	}
}

export { MenuOptions, MenuView };
