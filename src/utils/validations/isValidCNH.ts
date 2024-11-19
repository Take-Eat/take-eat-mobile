export default function isValidCNH(cnh: string): boolean {
	cnh = cnh.replace(/[^\d]+/g, ""); // Remove caracteres não numéricos

	if (cnh.length !== 11) return false;

	// Elimina CNHs com números repetidos, como "00000000000"
	if (/^(\d)\1+$/.test(cnh)) return false;

	// Primeiro dígito verificador
	let sum1 = 0;
	for (let i = 0; i < 9; i++) {
		sum1 += parseInt(cnh[i]) * (9 - i);
	}
	const remainder1 = sum1 % 11;
	const digit1 = remainder1 === 10 ? 0 : remainder1;

	// Segundo dígito verificador
	let sum2 = 0;
	for (let i = 0; i < 9; i++) {
		sum2 += parseInt(cnh[i]) * (1 + i);
	}
	sum2 += digit1 * 9;
	const remainder2 = sum2 % 11;
	const digit2 = remainder2 === 10 ? 0 : remainder2;

	// Verifica se os dígitos calculados batem com os informados
	return parseInt(cnh[9]) === digit1 && parseInt(cnh[10]) === digit2;
}
