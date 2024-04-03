import MainController from './src/controller/main-controller.js';
import MenuPresenter from './src/presenter/menu-presenter.js';
import FileReader from './src/utils/file-reader.js';

//Responsável por inicializar o programa inicializando o controller e o presenter e recebendo o arquivo json
export function initialize(filePath) {
	const controller = new MainController();
	const menuPresenter = new MenuPresenter(controller);

	FileReader.readFile(filePath, (err, data) => {
		if (err) {
			console.error(`Erro ao ler o arquivo de entrada: ${err.message}`);
			process.exit(1);
		}

		try {
			const jsonData = JSON.parse(data);
			menuPresenter.run(jsonData);
		} catch (error) {
			console.error(`Erro ao analisar o arquivo JSON: ${error.message}`);
			process.exit(1);
		}
	});
}
