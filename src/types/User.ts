import { Carrer } from "./Carrers";
import { Role } from "./Role";

export interface User {
  id?: string;
  email: string;
  nombre: string;
  ape_pat: string;
  ape_mat: string;
  role: Role;
  password?: string;
  licenciaturas?: Carrer[];
}
