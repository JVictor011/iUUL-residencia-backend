import MainController from '../controller/mainController';
import { exibirMenu } from '../view/exibirMenu';
import { rl, question } from '../utils/readlineModule';
import erros from '../view/erros';
import { formataCPF, validarCpf } from '../utils/validaCpf';
import Pacientes from '../model/Pacientes';
import { validarDataNascimento } from '../utils/validarDataNascimento';
import { OperationErrors, OperationStatus } from '../controller/operation-code';

class PacientePresenter {
	private controller: any;

	constructor(controller: any) {
		this.controller = controller;
	}

	async adicionarDataNascimento(cpf: string, nome: string) {
		try {
			const data = await question('Data de Nascimento: ');
			const validacaoDataNascimento = validarDataNascimento(data);
			if (!validacaoDataNascimento) {
				erros.valorInvalida();
				this.adicionarDataNascimento(cpf, nome);
			} else {
				const resultado = await this.controller.run(
					cpf,
					nome,
					validacaoDataNascimento
				);
				if (resultado === OperationStatus.FAILURE) {
					erros.falha();
				}
			}
		} catch (erro) {
			erros.falha();
		}
	}

	async adicionarNome(cpf: string) {
		try {
			const paciente = new Pacientes();
			const nome = await question('Nome: ');
			const validarNome = paciente.validarNome(nome);
			if (!validarNome) {
				erros.valorInvalida();
				this.adicionarNome(cpf);
			} else {
				this.adicionarDataNascimento(cpf, nome);
			}
		} catch (erro) {
			erros.falha();
		}
	}

	async run() {
		try {
			const cpf = await question('CPF: ');
			const validaCpf = validarCpf(cpf);
			if (!validaCpf) {
				erros.valorInvalida();
				this.run();
			} else {
				this.adicionarNome(cpf);
			}
		} catch (erro) {
			erros.falha();
		}
	}
}

export default PacientePresenter;
