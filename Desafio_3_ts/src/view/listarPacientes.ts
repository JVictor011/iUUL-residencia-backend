import { calcularIdade } from '../utils/calcularIdade';

function viewPacientes() {
	console.log('------------------------------------------------');
	console.log('CPF\t\tNome\t\tDt.Nasc.\t\tIdade');
	console.log('------------------------------------------------');
}

function listarPacientes(cpf: string, nome: string, dataNascimento: Date) {
	const idade = calcularIdade(dataNascimento);
	console.log(`${cpf}\t${nome}\t${dataNascimento}\t${idade}`);
}

function listarAgendamentosPaciente(
	data: Date,
	horaInicio: string,
	horaFim: string
) {
	console.log(`\t\tAgendado para:${data}`);
	console.log(`\t\t${horaInicio} as ${horaFim}!`);
}

export default {
	viewPacientes,
	listarPacientes,
	listarAgendamentosPaciente,
};
