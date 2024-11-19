export default function isValidCarPlate(plate: string): boolean {
    const oldPlatePattern = /^[A-Z]{3}-\d{4}$/; // Formato antigo
    const mercosulPlatePattern = /^[A-Z]{3}\d[A-Z]\d{2}$/; // Formato Mercosul
  
    plate = plate.toUpperCase().trim(); // Garante que está em maiúsculas e sem espaços
  
    return oldPlatePattern.test(plate) || mercosulPlatePattern.test(plate);
  }
  