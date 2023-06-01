import { Processes } from "./Processes";
import { TipoInterno } from "./TipoInterno";

export interface ProcesoInterno {
  id: number;
  tipo_interno: TipoInterno;
  proceso: Processes;
  horas_liberadas?: number;
  fecha_inicio?: string;
  fecha_termino?: string;
  file_id?: string;
  numero_reporte?: number;
  reporte_final?: boolean;
  firmado_cordinacion?: boolean;
  horario: object;
}
