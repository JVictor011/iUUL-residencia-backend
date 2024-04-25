import InclusaoPacienteController from './inclusaoPacienteController';
import pacientePresenter from '../presenter/pacientePresenter';
import ExclusaoPacienteController from './exclusaoPacienteController';
import ExcluirPacientePresenter from '../presenter/excluirPaciente';
import ListagemPacienteController from './listagemPacienteController';
import ListarPaciente from '../presenter/listarPaciente';
import CancelamentoConsultaController from './cancelamentoConsultaController';
import ListagemAgendaController from './listagemAgendaController';
import ExcluirAgendamento from '../presenter/excluirAgendamento';
import ListarAgendamento from '../presenter/listarAgendamento';

class MainController {
	incluirPaciente() {
		const controller = new InclusaoPacienteController();

		const presenter = new pacientePresenter(controller);

		presenter.run();
	}

	excluirPaciente() {
		const controller = new ExclusaoPacienteController();

		const presenter = new ExcluirPacientePresenter(controller);

		presenter.run();
	}

	listarPacientes() {
		const controller = new ListagemPacienteController();

		const presenter = new ListarPaciente(controller);

		presenter.run();
	}

	// agendarConsulta() {
	// 	const controller = new AgendamentoConsultaController();

	// 	const presenter = new AgendamentoConsultaPresenter(controller);

	// 	presenter.run();
	// }

	cancelarConsulta() {
		const controller = new CancelamentoConsultaController();

		const presenter = new ExcluirAgendamento(controller);

		presenter.run();
	}

	listarAgenda() {
		const controller = new ListagemAgendaController();

		const presenter = new ListarAgendamento(controller);

		presenter.run();
	}
}

export default MainController;
