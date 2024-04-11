class addValueController {
	async run(answer, converter) {
		await converter.addValue(answer);
	}
}

export default addValueController;
