import { MenuOptions, MenuView } from '../view/menu-view';
import Converter from '../model/Converter';

class MenuPresenter {
    #controller: any;
    #view: MenuView;

    constructor(controller: any) {
        this.#controller = controller;
        this.#view = new MenuView();
    }

    async run(): Promise<void> {
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
