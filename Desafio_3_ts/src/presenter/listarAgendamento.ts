import MainController from '../controller/mainController';
import { exibirMenu } from '../view/exibirMenu';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';
import { formataCPF, validarCpf } from '../utils/validaCpf';
import Pacientes from '../model/Pacientes';
import { validarDataNascimento } from '../utils/validarDataNascimento';
import { OperationErrors, OperationStatus } from '../controller/operation-code';
import Listagem from '../model/Listagem';
import viewListaAgenda from '../view/listarAgendamentos';

class ListarAgendamento {
	private controller: any;

	constructor(controller: any) {
		this.controller = controller;
	}
	async run() {
		try {
			const cpf = await question('CPF: ');
			const opcao = await question(
				'Apresentar a agenda T-Toda ou P-Periodo: '
			);
			if (opcao == 'P') {
				const dataInicio = await question('Data Inicio: ');
				const dataFim = await question('Data Fim: ');
				const resultado = await this.controller.run(
					dataInicio,
					dataFim
				);
				if (resultado.status === OperationStatus.FAILURE) {
					if (
						resultado.code ===
						OperationErrors.FAILURE_TO_LIST_SCHEDULED_APPOINTMENTS
					) {
						erros.falha();
					}
					erros.erro();
				}
				viewListaAgenda.viewAgendamento();
				for (const consulta of resultado) {
					if (consulta.status === OperationStatus.SUCCESS) {
						const resultadoPaciente =
							await this.controller.resultadoPaciente(
								consulta.data.cpfPaciente
							);
						if (
							resultadoPaciente.status === OperationStatus.SUCCESS
						) {
							viewListaAgenda.listarAgendamentos(
								consulta.data.dataConsulta,
								consulta.data.horaInicioConsulta,
								consulta.data.horaFimConsulta,
								resultadoPaciente.data.nome,
								resultadoPaciente.data.dataNascimento
							);
						}
					}
				}
			} else {
				const resultado = await this.controller.run();
				if (resultado.status === OperationStatus.FAILURE) {
					if (
						resultado.code ===
						OperationErrors.FAILURE_TO_LIST_SCHEDULED_APPOINTMENTS
					) {
						erros.falha();
					}
					erros.erro();
				}
				viewListaAgenda.viewAgendamento();
				for (const consulta of resultado) {
					if (consulta.status === OperationStatus.SUCCESS) {
						const resultadoPaciente =
							await this.controller.resultadoPaciente(
								consulta.data.cpfPaciente
							);
						if (
							resultadoPaciente.status === OperationStatus.SUCCESS
						) {
							viewListaAgenda.listarAgendamentos(
								consulta.data.dataConsulta,
								consulta.data.horaInicioConsulta,
								consulta.data.horaFimConsulta,
								resultadoPaciente.data.nome,
								resultadoPaciente.data.dataNascimento
							);
						}
					}
				}
			}
		} catch (erro) {
			erros.falha();
		}
	}
}

export default ListarAgendamento;
