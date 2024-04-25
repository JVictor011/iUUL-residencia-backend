import Listagem from '../model/Listagem';

class ListagemPacienteController {
	async run() {
		const listagem = new Listagem();
		const pacientes = await listagem.listarPacientes();
		return pacientes;
	}

	async listarAgendamentosdosDoPaciente(cpf: string) {
		const listagem = new Listagem();
		const agendamento = await listagem.listarAgendamentosdosDoPaciente(cpf);
		return agendamento;
	}
}
export default ListagemPacienteController;
