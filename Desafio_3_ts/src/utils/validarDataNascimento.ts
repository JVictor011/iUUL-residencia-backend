export function validarDataNascimento(dataNascimento: string): Date | false {
	const [dayStr, monthStr, yearStr] = dataNascimento.split('/');

	const day = parseInt(dayStr);
	const month = parseInt(monthStr) - 1;
	const year = parseInt(yearStr);

	if (isNaN(day) || isNaN(month) || isNaN(year)) {
		return false;
	}

	const date = new Date(year, month, day);

	if (isNaN(date.getTime())) {
		return false;
	}

	const currentDate = new Date();

	let age = currentDate.getFullYear() - date.getFullYear();
	const monthOfAge = currentDate.getMonth() - date.getMonth();

	if (
		monthOfAge < 0 ||
		(monthOfAge === 0 && currentDate.getDate() < date.getDate())
	) {
		age--;
	}

	if (age < 13) {
		return false;
	}

	return date;
}
