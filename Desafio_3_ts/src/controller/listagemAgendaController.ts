import Listagem from '../model/Listagem';

class ListagemAgendaController {
	async run(dataInicio: string = '', dataFim: string = '') {
		const listagemAgendamento = new Listagem();
		if (dataInicio == '' || dataFim == '') {
			const resultado = await listagemAgendamento.listarAgendamentos();
			return resultado;
		} else {
			const resultado = await listagemAgendamento.listarAgendamentos(
				dataInicio,
				dataFim
			);
			return resultado;
		}
	}

	async resultadoPaciente(cpf: string) {
		const listagemAgendamento = new Listagem();
		const resultadoPaciente = await listagemAgendamento.buscaPaciente(cpf);
		return resultadoPaciente;
	}
}
export default ListagemAgendaController;
