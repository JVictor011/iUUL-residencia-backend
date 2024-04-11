import Converter from '../model/Converter';

class AddValueController {
	run(answer: string, converter: Converter): void {
		converter.addValue(answer);
	}
}

export default AddValueController;
