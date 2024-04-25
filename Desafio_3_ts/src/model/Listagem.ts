import Consulta from '../db/consulta';
import Paciente from '../db/paciente';
import { OperationErrors, OperationStatus } from '../controller/operation-code';
import { Op } from 'sequelize';

class Listagem {
	constructor() {}

	public async listarAgendamentos(
		dataInicio: string = '',
		dataFinal: string = ''
	): Promise<any> {
		try {
			if (dataInicio == '' || dataFinal == '') {
				const buscarConsultasAgendadas = await Consulta.findAll({
					order: ['dataConsulta', 'ASC'],
				});
				if (!buscarConsultasAgendadas) {
					return {
						status: OperationStatus.FAILURE,
						code: OperationErrors.NOT_FOUND,
					};
				}
				return {
					status: OperationStatus.SUCCESS,
					data: buscarConsultasAgendadas,
				};
			}
			const formatacaoData = /^\d{2}\/\d{2}\/\d{4}$/;
			if (
				!formatacaoData.test(dataInicio) ||
				formatacaoData.test(dataFinal)
			) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.INVALID_DATE_FORMAT,
				};
			}
			const [dia, mes, ano] = dataInicio.split('/');
			const [dia2, mes2, ano2] = dataFinal.split('/');
			const dataInicioFormatada = new Date(
				parseInt(ano),
				parseInt(mes) - 1,
				parseInt(dia)
			);
			const dataFinalFormatada = new Date(
				parseInt(ano2),
				parseInt(mes2) - 1,
				parseInt(dia2)
			);
			const buscarConsultasAgendadas = await Consulta.findAll({
				where: {
					dataConsulta: {
						[Op.between]: [dataInicioFormatada, dataFinalFormatada],
					},
				},
				order: ['dataConsulta', 'ASC'],
			});
			if (!buscarConsultasAgendadas) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.NOT_FOUND,
				};
			}
			return {
				status: OperationStatus.SUCCESS,
				data: buscarConsultasAgendadas,
			};
		} catch (erro) {
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.FAILURE_TO_LIST_SCHEDULED_APPOINTMENTS,
			};
		}
	}

	public async listarPacientes(): Promise<any> {
		try {
			const buscarPacientes = await Paciente.findAll();
			if (!buscarPacientes) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.NOT_FOUND,
				};
			}
			return {
				status: OperationStatus.SUCCESS,
				data: buscarPacientes,
			};
		} catch (erro) {
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.FAILURE_TO_LIST_PATIENTS,
			};
		}
	}

	public async buscaPaciente(cpf: string): Promise<any> {
		try {
			const buscarPacientes = await Paciente.findOne({
				where: {
					cpf: cpf,
				},
			});
			if (!buscarPacientes) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.NOT_FOUND,
				};
			}
			return {
				status: OperationStatus.SUCCESS,
				data: buscarPacientes,
			};
		} catch (erro) {
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.FAILURE_TO_LIST_PATIENTS,
			};
		}
	}

	public async listarAgendamentosdosDoPaciente(cpf: string): Promise<any> {
		try {
			const buscarAgendamento = await Consulta.findAll({
				where: {
					cpfPaciente: cpf,
				},
			});
			if (!buscarAgendamento) {
				return false;
			}
			return {
				status: OperationStatus.SUCCESS,
				data: buscarAgendamento,
			};
		} catch (erro) {
			return false;
		}
	}
}

export default Listagem;
