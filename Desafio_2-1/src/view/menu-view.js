//Classe responsável pela impressão de status
class MenuView {
	render() {
		console.log('Arquivo recebido');
	}

	successRender(fileName) {
		console.log(
			`Sucesso: todos os valores são validos! Detalhes foram salvos no arquivo ${fileName}`
		);
	}

	errorRender(fileName) {
		console.log(
			`Erro(s) encontrado(s). Detalhes foram salvos no arquivo ${fileName}`
		);
	}
	failure() {
		console.log('Falha!!!!');
	}
}

export default MenuView;
