import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const question = (query) => {
	return new Promise((resolve, reject) => {
		rl.question(query, (answer) => {
			resolve(answer);
		});
	});
};

export { rl, question };
