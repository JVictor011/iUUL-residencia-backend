import MainController from '../controller/mainController';
import { exibirMenu } from '../view/exibirMenu';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';
import { formataCPF, validarCpf } from '../utils/validaCpf';
import Pacientes from '../model/Pacientes';
import { validarDataNascimento } from '../utils/validarDataNascimento';
import { OperationErrors, OperationStatus } from '../controller/operation-code';
import Listagem from '../model/Listagem';
import viewListarPaciente from '../view/listarPacientes';

class ListarPaciente {
	private controller: any;

	constructor(controller: any) {
		this.controller = controller;
	}
	async run() {
		try {
			const listagem = new Listagem();
			const pacientes = await listagem.listarPacientes();
			viewListarPaciente.viewPacientes();
			for (const pacienteAtual of pacientes) {
				viewListarPaciente.listarPacientes(
					pacienteAtual.data.cpf,
					pacienteAtual.data.nome,
					pacienteAtual.data.dataNascimento
				);
				const agendamento =
					await listagem.listarAgendamentosdosDoPaciente(
						pacienteAtual.data.cpf
					);
				if (agendamento) {
					for (const listaAgendamento of agendamento) {
						viewListarPaciente.listarAgendamentosPaciente(
							listaAgendamento.data.dataConsulta,
							listaAgendamento.data.horaInicioConsulta,
							listaAgendamento.data.horaFimConsulta
						);
					}
				}
			}
		} catch (erro) {
			erros.falha();
		}
	}
}

export default ListarPaciente;
