import { validarCpf } from '../utils/validaCpf';
import { DateTime } from 'luxon';
import Paciente from '../db/paciente';
import Consulta from '../db/consulta';
import { OperationErrors, OperationStatus } from '../controller/operation-code';
import { Op } from 'sequelize';
import Agendamento from '../model/Agendamento';

class Pacientes {
	private nome: string;
	private cpf: string;
	private dataNascimento: Date;

	constructor(
		nome: string = '',
		cpf: string = '',
		dataNascimento: Date = new Date()
	) {
		this.nome = nome;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
	}

	validarNome(nome: string) {
		if (nome.length < 5) {
			return false;
		}

		return true;
	}

	async registrarPaciente(cpf: string, nome: string, dataNascimento: Date) {
		try {
			//Verificar se o paciente ja esta cadastrado
			const pacienteExistente = await Paciente.findOne({
				where: {
					cpf: cpf,
				},
			});
			//Retorna um erro se ele ja estiver cadastrado
			if (pacienteExistente) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.PACIENTE_EXISTENTE,
				};
			}

			//Cadastra o novo paciente se ele não estiver cadastrado
			const novoPaciente = await Paciente.create({
				cpf: cpf,
				nome: nome,
				dataNascimento: dataNascimento,
			});

			return {
				status: OperationStatus.SUCCESS,
				data: novoPaciente,
			};
		} catch (error) {
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.PACIENTE_REGISTRATION_FAILED,
			};
		}
	}

	async removerPaciente(cpf: string) {
		try {
			//Procura o paciente no banco de dados
			const buscaPaciente = await Paciente.findOne({
				where: {
					cpf: cpf,
				},
			});
			//Se o paciente não existir retorna um erro
			if (!buscaPaciente) {
				return {
					status: OperationStatus.FAILURE,
					code: OperationErrors.PACIENTE_NOT_FOUND,
				};
			}

			/**Verifica se o paciente tem uma consulta 
			em que a data seja maior ou igual a data atual
			e pega a consulta com a maior data**/
			const consultaFutura = await Consulta.findOne({
				where: {
					cpfPaciente: cpf,
					dataConsulta: {
						[Op.gte]: new Date(),
					},
				},
				order: [
					['dataConsulta', 'DESC'],
					['horaInicioConsulta', 'DESC'],
				],
			});

			/**Verifica se a consulta ainda não aconteceu
			e caso não tenha acontecido verifica se a data da consulta e igual a data atual
			e depois verifica se ja passou do horario da consulta caso não retorna um erro**/
			if (consultaFutura) {
				const dataAtual = new Date();
				if (consultaFutura.dataConsulta == dataAtual) {
					const [hora, minutos, segundos] =
						consultaFutura.horaInicioConsulta.split(':');
					const horaConsulta = parseInt(hora);
					const minutosConsulta = parseInt(minutos);

					if (horaConsulta > dataAtual.getHours()) {
						return {
							status: OperationStatus.FAILURE,
							code: OperationErrors.PATIENT_HAS_FUTURE_APPOINTMENT,
						};
					}
					if (horaConsulta == dataAtual.getHours()) {
						if (minutosConsulta > dataAtual.getMinutes()) {
							return {
								status: OperationStatus.FAILURE,
								code: OperationErrors.PATIENT_HAS_FUTURE_APPOINTMENT,
							};
						}
					}
				}
			}
			/**Chama o Agendameto para remover as consultas agendadas 
			do paciente que vai ser removido**/
			const agendamento = new Agendamento();
			const removerAgendamento =
				await agendamento.removerAgendamentoGeral(cpf);
			if (removerAgendamento.status == OperationStatus.FAILURE) {
				return removerAgendamento;
			}
			await buscaPaciente.destroy();
			return {
				status: OperationStatus.SUCCESS,
				data: buscaPaciente,
			};
		} catch (error) {
			return {
				status: OperationStatus.FAILURE,
				code: OperationErrors.PATIENT_REMOVAL_FAILED,
			};
		}
	}

	get getNome(): string {
		return this.nome;
	}
	set setNome(value: string) {
		this.nome = value;
	}
	get getCpf(): string {
		return this.cpf;
	}
	set setCpf(value: string) {
		this.cpf = value;
	}
	get getDataNascimento(): Date {
		return this.dataNascimento;
	}
	set setDataNascimento(value: Date) {
		this.dataNascimento = value;
	}
}

export default Pacientes;
