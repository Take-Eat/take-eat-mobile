export type UserType =
  | "apoiador"
  | "doador"
  | "distribuidor"
  | "entregador"
  | "admin"
  | "guest";

export interface User {
  id: number;
  name: string;
  type: UserType;
  email: string;
  password: string;
  image: string;
  isActive: boolean;
  createdAt: string;
}

// export interface Apoiador {
//   razaoSocial: string;
//   cnpj: string;
//   endereco: string;
//   instagram: string;
//   user: iUser;
// }
