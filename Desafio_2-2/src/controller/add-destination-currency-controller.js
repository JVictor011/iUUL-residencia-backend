class addDestinationCurrencyController {
	async run(answer, converter) {
		await converter.addDestinationCurrency(answer);
	}
}

export default addDestinationCurrencyController;
