import { rl, question } from '../utils/readlineModule';

class MenuOptions {
	static get CURRENCY_OF_ORIGIN(): number {
		return 1;
	}

	static get DESTINATION_CURRENCY(): number {
		return 2;
	}

	static get VALUE(): number {
		return 3;
	}

	static get OK(): number {
		return 4;
	}

	static get ERROR(): number {
		return 5;
	}
}

class MenuView {
	#menuId: number;
	#output: any; // Você pode definir o tipo mais específico aqui

	constructor() {
		this.#menuId = MenuOptions.CURRENCY_OF_ORIGIN;
		this.#output = rl;
	}

	errorRender() {
		console.log('Erro inesperado');
		this.#menuId = MenuOptions.CURRENCY_OF_ORIGIN;
	}

	get menuId(): number {
		return this.#menuId;
	}

	set menuId(value: number) {
		this.#menuId = value;
	}

	currencyOfOrigin(): string {
		return 'Moeda origem: ';
	}

	destinationCurrency(): string {
		return 'Moeda destino: ';
	}

	value(): string {
		return 'Valor: ';
	}

	print(
		currencyOfOrigin: string,
		destinationCurrency: string,
		value: string,
		valueDestinationCurrency: string,
		fee: string
	) {
		console.log(`
${currencyOfOrigin} ${value} => ${destinationCurrency} ${valueDestinationCurrency}

TAXA: ${fee}
        `);
	}
}

export { MenuOptions, MenuView };
