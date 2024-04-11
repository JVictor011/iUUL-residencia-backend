import { MenuOptions, MenuView } from '../view/menu-view';
import { rl, question } from '../utils/readlineModule';
import AddCurrencyOfOriginView from '../view/errorView';

class AddCurrencyOfOriginPresenter {
    #controller: any;
    #view: AddCurrencyOfOriginView;
    #menuView: MenuView;

    constructor(controller: any) {
        this.#controller = controller;
        this.#view = new AddCurrencyOfOriginView();
        this.#menuView = new MenuView();
    }

    async run(converter: any): Promise<void> {
        let failure = true;
        while (failure) {
            try {
                const answer = await question(this.#menuView.currencyOfOrigin());
                const validate = await converter.validationCurrencyOfOrigin(answer);
                if (validate) {
                    await this.#controller.run(answer, converter);
                    failure = false;
                }
            } catch (error) {
                this.#view.errorRender();
                process.exit(1);
            }
        }
    }
}

export default AddCurrencyOfOriginPresenter;
