import MainController from './src/controller/mainController';
import MenuPresenter from './src/presenter/menuPresenter';
import sequelize from './src/db/db';
import Paciente from './src/db/paciente';
import Consulta from './src/db/consulta';

(async () => {
	const paciente = Paciente;
	const consulta = Consulta;
	await sequelize.sync();

	const mainController = new MainController();
	const menuPresenter = new MenuPresenter(mainController);
	menuPresenter.run();
})();
