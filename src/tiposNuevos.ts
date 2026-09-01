// Unión literal: estados posibles de un bioRobot
export type EstadoRobot = "funcional" | "simulacion" | "sobrecargado" | "dañado";

// Unión literal: clases de bioRobot
export type ClaseRobot = "defensivo" | "medico" | "explorador";

// Interface: forma de un bioRobot
export interface BioRobot {
  id: number | string;
  nombre: string;
  estado: EstadoRobot;
  clase: ClaseRobot;
  energia: number;
}

// Type alias: contador de diagnósticos (objeto que devuelve el closure)
export type ContadorDiagnosticos = {
  registrar: () => number;
  obtenerTotal: () => number;
};
