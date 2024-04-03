import { initialize } from './app.js';

(function () {
	const filePath = process.argv[2];

	if (!filePath) {
		console.error(
			'Por favor, forneça o caminho do arquivo JSON de entrada como argumento.'
		);
		process.exit(1);
	}

	initialize(filePath);
})();
