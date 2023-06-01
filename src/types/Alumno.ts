import { Carrer } from "./Carrers";
import { Processes } from "./Processes";

export interface Alumno {
  id: number;
  matricula: string;
  ano_ingreso: string;
  email: string;
  email_personal: string;
  nombre: string;
  ape_pat: string;
  ape_mat: string;
  createdAt: string;
  updatedAt: string;
  licenciatura: Carrer;
  procesos: Processes[];
}
