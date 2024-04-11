import { MenuOptions, MenuView } from '../view/menu-view';
import { rl, question } from '../utils/readlineModule';
import AddCurrencyOfOriginView from '../view/errorView';

class AddValuePresenter {
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
				const answer = await question(this.#menuView.value());
				const validate = await converter.validationValue(answer);
				if (validate) {
					await this.#controller.run(validate, converter);
					failure = false;
				}
			} catch (error) {
				this.#view.errorRender();
				process.exit(1);
			}
		}
	}
}

export default AddValuePresenter;
