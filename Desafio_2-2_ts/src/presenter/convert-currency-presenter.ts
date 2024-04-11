import { MenuOptions, MenuView } from '../view/menu-view';
import AddCurrencyOfOriginView from '../view/errorView';

class ConvertCurrencyPresenter {
    #controller: any;
    #view: AddCurrencyOfOriginView;
    #menuView: MenuView;

    constructor(controller: any) {
        this.#controller = controller;
        this.#view = new AddCurrencyOfOriginView();
        this.#menuView = new MenuView();
    }

    async run(converter: any): Promise<void> {
        try {
            await this.#controller.run(converter);
        } catch (error) {
            this.#view.errorRender();
            process.exit(1);
        }
    }
}

export default ConvertCurrencyPresenter;
