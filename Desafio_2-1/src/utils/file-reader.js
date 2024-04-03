import fs from 'fs';

//A classe FileReader e responsavel pela manipulação de arquivos
class FileReader {
	static readFile(filePath, callback) {
		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) {
				callback(err);
			} else {
				callback(null, data);
			}
		});
	}

	//O Método responsável pela criação de um arquivo json com os dados e os erros de cada validação
	static async writeErrorsToFile(errors) {
		const timestamp = new Date().toISOString().replace(/[-:]/g, '');
		const fileName = `erros-${timestamp}.json`;

		await fs.promises.writeFile(fileName, JSON.stringify(errors, null, 2));
		return fileName;
	}

	//Método responsável pela criação de um arquivo JSON com apenas '[]'. Ele é chamado quando não for detectado nenhum erro de validação
	static async writeFileEmpty() {
		const timestamp = new Date().toISOString().replace(/[-:]/g, '');
		const fileName = `erros-${timestamp}.json`;

		await fs.promises.writeFile(fileName, JSON.stringify([], null, 2));
		return fileName;
	}
}

export default FileReader;
