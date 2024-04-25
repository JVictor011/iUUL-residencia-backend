function viewAgendamento() {
	console.log('------------------------------------------------');
	console.log('Data\t\tH.Ini\t\tH.Fim\t\tNome\t\t\tDt.Nasc.');
	console.log('------------------------------------------------');
}

function listarAgendamentos(
	data: Date,
	horaInicio: string,
	horaFim: string,
	nome: string,
	dataNascimento: Date
) {
	console.log(
		`${data}\t${horaInicio}\t${horaFim}\t${nome}\t${dataNascimento}`
	);
}

export default {
	viewAgendamento,
	listarAgendamentos,
};
