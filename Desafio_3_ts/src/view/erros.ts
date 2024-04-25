function opcaoInvalida() {
	console.log('Opção inválida!');
}

function encerrarPrograma() {
	console.log('Até a próxima!');
	process.exit();
}

function valorInvalida() {
	console.log('Valor inválido!');
}

function falha() {
	console.log('Ocorreu um erro tente mais tarde!');
	process.exit();
}

function pacienteNaoExiste() {
	console.log('Paciente não encontrado!');
}

function existeUmaConsultaFutura() {
	console.log('Já existe uma consulta futura para esse paciente!');
}

function erro() {
	console.log('Ocorreu um erro tente novamente!');
}

export default {
	opcaoInvalida,
	encerrarPrograma,
	valorInvalida,
	falha,
	pacienteNaoExiste,
	existeUmaConsultaFutura,
	erro,
};
