import Consulta from '../db/consulta';
import Paciente from '../db/paciente';
import { OperationErrors, OperationStatus } from '../controller/operation-code';
import { Op } from 'sequelize';
import { DateTime } from 'luxon';
import { formataCPF, validarCpf } from '../utils/validaCpf';

class Agendamento {
	private dataConsulta: Date;
	private horaInicioConsulta: string;
	private horaFimConsulta: string;
	private cpfPaciente: string;

	constructor(
		dataConsulta: Date = new Date(),
		horaInicioConsulta: string = '',
		horaFimConsulta: string = '',
		cpfPaciente: string = ''
	) {
		this.dataConsulta = dataConsulta;
		this.horaInicioConsulta = horaInicioConsulta;
		this.horaFimConsulta = horaFimConsulta;
		this.cpfPaciente = cpfPaciente;
	}

	formataDataConsulta(dataConsulta: string) {
		const formatacaoData = /^\d{2}\/\d{2}\/\d{4}$/;
		if (!formatacaoData.test(dataConsulta)) {
			return false;
		}
		const [dia, mes, ano] = dataConsulta.split('/').map(Number);

		if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
			return false;
		}
		return new Date(ano, mes - 1, dia);
	}

	formataHoraConsulta(horaInicioConsulta: string, horaFimConsulta: string) {
		const formatacaoHora = /^\d{4}$/;

		if (
			!formatacaoHora.test(horaInicioConsulta) ||
			!formatacaoHora.test(horaFimConsulta)
		) {
			return false;
		}

		const horaInicio = {
			horas: parseInt(horaInicioConsulta.slice(0, 2)),
			minutos: parseInt(horaInicioConsulta.slice(2)),
		};
		const horaFim = {
			horas: parseInt(horaFimConsulta.slice(0, 2)),
			minutos: parseInt(horaFimConsulta.slice(2)),
		};

		if (
			horaInicio.horas < 8 ||
			horaInicio.horas > 18 ||
			horaFim.horas < 8 ||
			horaFim.horas > 18
		) {
			return false;
		}

		if (horaInicio.minutos % 15 !== 0 || horaFim.minutos % 15 !== 0) {
			return false;
		}

		if (
			horaFim.horas < horaInicio.horas ||
			(horaFim.horas === horaInicio.horas &&
				horaFim.minutos < horaInicio.minutos)
		) {
			return false;
		}

		return {
			horaInicio: `${horaInicio.horas}:${horaInicio.minutos}:00`,
			horaFim: `${horaFim.horas}:${horaFim.minutos}:00`,
		};
	}

	async agendarConsulta(
		dataConsulta: string,
		horaInicioConsulta: string,
		horaFimConsulta: string,
		cpfPaciente: string
	) {
		const buscarPaciente = await Paciente.findOne({
			where: {
				cpf: cpfPaciente,
			},
		});
		if (!buscarPaciente) {
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.PACIENTE_NOT_FOUND,
			};
		}

		const dataConsultaFormatada = this.formataDataConsulta(dataConsulta);
		const horaConsultaFormatada = this.formataHoraConsulta(
			horaInicioConsulta,
			horaFimConsulta
		);
		if (dataConsultaFormatada == false || horaConsultaFormatada == false) {
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.INVALID_DATE_OR_TIME,
			};
		}
		const agendamentoSobreposto = await Paciente.findOne({
			where: {
				cpf: cpfPaciente,
				dataConsulta: dataConsultaFormatada,
				horaInicioConsulta: horaConsultaFormatada.horaInicio,
				horaFimConsulta: horaConsultaFormatada.horaFim,
			},
		});
		if (agendamentoSobreposto) {
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.EXISTING_SCHEDULING,
			};
		}
		const agendamento = await Consulta.create({
			id: undefined,
			dataConsulta: dataConsultaFormatada,
			horaInicioConsulta: horaConsultaFormatada.horaInicio,
			horaFimConsulta: horaConsultaFormatada.horaFim,
			cpfPaciente: cpfPaciente,
		});
		return {
			status: OperationStatus.SUCCESS,
			data: agendamento,
		};
	}

	async removerAgendamentoGeral(cpfPaciente: string) {
		try {
			const buscarConsultasAgendadas = await Consulta.findAll({
				where: {
					cpfPaciente: cpfPaciente,
				},
			});
			if (!buscarConsultasAgendadas) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.NOT_FOUND,
				};
			}

			for (const agendamento of buscarConsultasAgendadas) {
				await agendamento.destroy();
			}

			return {
				status: OperationStatus.SUCCESS,
			};
		} catch (error) {
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.FAILURE_TO_REMOVE_SCHEDULED_APPOINTMENTS,
			};
		}
	}

	async cancelarAgendamento(
		cpfPaciente: string,
		dataConsulta: string,
		horaInicioConsulta: string
	) {
		try {
			const formatacaoData = this.formataDataConsulta(dataConsulta);
			if (!formatacaoData) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.INVALID_DATE,
				};
			}
			const formatacaoHora = /^\d{4}$/;
			if (!formatacaoHora.test(horaInicioConsulta)) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.INVALID_TIME,
				};
			}
			const horaInicio = {
				horas: parseInt(horaInicioConsulta.slice(0, 2)),
				minutos: parseInt(horaInicioConsulta.slice(2)),
			};

			const buscarAgendamento = await Consulta.findOne({
				where: {
					cpfPaciente: cpfPaciente,
					dataConsulta: formatacaoData,
					horaInicioConsulta: `${horaInicio.horas}:${horaInicio.minutos}:00`,
				},
			});
			if (!buscarAgendamento) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.NOT_FOUND,
				};
			}
			await buscarAgendamento.destroy();
		} catch (erro) {
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.FAILURE_TO_REMOVE_SCHEDULED_APPOINTMENTS,
			};
		}
	}
}

export default Agendamento;
