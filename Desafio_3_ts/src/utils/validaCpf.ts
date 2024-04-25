function validarCpfPrimeiraParte(cpf: string) {
	try {
		let sumValidate = 0;
		for (let i = 0; i < 9; i++) {
			sumValidate += parseInt(cpf[i]) * (10 - i);
		}
		let restOfDivision = sumValidate % 11;
		restOfDivision = restOfDivision < 2 ? 0 : 11 - restOfDivision;
		return restOfDivision;
	} catch (error) {
		return false;
	}
}
function validarCpfSegundaParte(cpf: string) {
	try {
		let sumValidate = 0;
		for (let i = 0; i < 10; i++) {
			sumValidate += parseInt(cpf[i]) * (11 - i);
		}
		let restOfDivision = sumValidate % 11;
		restOfDivision = restOfDivision < 2 ? 0 : 11 - restOfDivision;
		return restOfDivision;
	} catch (error) {
		return false;
	}
}
function validaTamCPF(cpf: string) {
	if (cpf.length != 11) {
		return false;
	}
}
function validarCpf(cpf: string) {
	try {
		if (!validaTamCPF(cpf)) {
			return false;
		}
		let primeiraParte = validarCpfPrimeiraParte(cpf);
		let segundaParte = validarCpfSegundaParte(cpf);
		if (
			!(
				parseInt(cpf[9]) == primeiraParte &&
				parseInt(cpf[10]) == segundaParte
			)
		) {
			return false;
		}
		return cpf;
	} catch (error) {
		return false;
	}
}

function formataCPF(cpf: string) {
	if (!validarCpf(cpf)) return cpf.toString();

	const str = cpf.toString().padStart(11, '0');

	return str.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}

export { formataCPF, validarCpf };
