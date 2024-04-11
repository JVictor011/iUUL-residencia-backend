class addCurrencyOfOriginController {
	async run(answer, converter) {
		await converter.addCurrencyOfOrigin(answer);
	}
}

export default addCurrencyOfOriginController;
