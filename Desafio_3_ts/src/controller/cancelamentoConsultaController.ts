import Agendamento from '../model/Agendamento';

class CancelamentoConsultaController {
	async run(cpf: string, data: string, hora: string) {
		const agendamento = new Agendamento();
		const resposta = await agendamento.cancelarAgendamento(cpf, data, hora);
		return resposta;
	}
}
export default CancelamentoConsultaController;
