export default function isValidCPF(cpf: string): boolean {
	cpf = cpf.replace(/[^\d]+/g, ""); // Remove caracteres não numéricos

	if (cpf.length !== 11) return false;

	// Elimina CPFs com números repetidos, como "00000000000"
	if (/^(\d)\1+$/.test(cpf)) return false;

	// Validação dos dígitos verificadores
	const calculateVerifier = (cpf: string, factor: number) => {
		let sum = 0;
		for (let i = 0; i < factor - 1; i++) {
			sum += parseInt(cpf[i]) * (factor - i);
		}
		const remainder = (sum * 10) % 11;
		return remainder === 10 ? 0 : remainder;
	};

	const firstVerifier = calculateVerifier(cpf, 10);
	const secondVerifier = calculateVerifier(cpf, 11);

	return (
		firstVerifier === parseInt(cpf[9]) && secondVerifier === parseInt(cpf[10])
	);
}
