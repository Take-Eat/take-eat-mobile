export default function isValidCNPJ(cnpj: string): boolean {
	cnpj = cnpj.replace(/[^\d]+/g, ""); // Remove caracteres não numéricos

	if (cnpj.length !== 14) return false;

	// Elimina CNPJs com números repetidos, como "00000000000000"
	if (/^(\d)\1+$/.test(cnpj)) return false;

	// Validação dos dígitos verificadores
	const calculateVerifier = (cnpj: string, factor: number) => {
		let sum = 0;
		for (let i = 0; i < factor - 1; i++) {
			sum += parseInt(cnpj[i]) * (factor - i);
		}
		const remainder = sum % 11;
		return remainder < 2 ? 0 : 11 - remainder;
	};

	const firstVerifier = calculateVerifier(cnpj, 13);
	const secondVerifier = calculateVerifier(cnpj, 14);

	return (
		firstVerifier === parseInt(cnpj[12]) && secondVerifier === parseInt(cnpj[13])
	);
}
