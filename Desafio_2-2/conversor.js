import MainController from './src/controller/main-controller.js';
import MenuPresenter from './src/presenter/menu-presenter.js';

(function () {
	const controller = new MainController();
	const presenter = new MenuPresenter(controller);

	presenter.run();
})();
