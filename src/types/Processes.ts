import { Alumno } from "./Alumno";
import { EstadosProceso } from "./EstadosProceso";
import { Organizacion } from "./Organization";
import { ProcesoInterno } from "./ProcesoInterno";
import { TypeProcesses } from "./TypeProcess";

export interface Processes {
  id: number;
  jefe_inmediato: string;
  area: string;
  comentario: string;
  eliminado: boolean;
  tipo_proceso: TypeProcesses;
  organizacion: Organizacion;
  alumno: Alumno;
  estado_proceso: EstadosProceso;
  procesos_internos?: ProcesoInterno[];
}
