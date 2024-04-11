import MainController from './src/controller/main-controller';
import MenuPresenter from './src/presenter/menu-presenter';

(() => {
    const controller = new MainController();
    const presenter = new MenuPresenter(controller);

    presenter.run();
})();
