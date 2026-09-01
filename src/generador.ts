import type { BioRobot, EstadoRobot, ContadorDiagnosticos } from "./tiposNuevos.js";

// --- Concepto: Closures --------------------------------------------------
export function crearContadorDiagnosticos(): ContadorDiagnosticos {
  let total = 0;

  return {
    registrar(): number {
      total += 1;
      return total;
    },
    obtenerTotal(): number {
      return total;
    },
  };
}

// --- Concepto: Funciones de orden superior --------------------------------
export function filtrarPorEstado(lista: BioRobot[], estado: EstadoRobot): BioRobot[] {
  return lista.filter((robot) => robot.estado === estado);
}

export function calcularEnergiaPromedio(lista: BioRobot[]): number {
  if (lista.length === 0) return 0;
  const suma = lista.reduce((acumulado, robot) => acumulado + robot.energia, 0);
  return Math.round(suma / lista.length);
}

// --- Concepto: Destructuring + spread/rest --------------------------------
export function combinarBioRobots(robotA: BioRobot, robotB: BioRobot): BioRobot {
  const { energia: energiaA, ...restoA } = robotA;
  const { energia: energiaB } = robotB;

  return {
    ...restoA,
    ...robotB,
    id: `${robotA.id}-${robotB.id}`,
    nombre: `${robotA.nombre}-${robotB.nombre}`,
    energia: Math.round((energiaA + energiaB) / 2),
    estado: robotA.estado,
  };
}

// --- Concepto: Promesas, async/await y manejo de errores -----------------
function simularDiagnostico(robot: BioRobot): Promise<BioRobot> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!robot || !robot.estado) {
        reject(new Error(`BioRobot inválido: falta el campo "estado" (id: ${robot?.id})`));
        return;
      }
      resolve(robot);
    }, 200);
  });
}

export async function cargarBioRobots(lista: BioRobot[]): Promise<BioRobot[]> {
  try {
    const robotsCargados = await Promise.all(
      lista.map((robot) => simularDiagnostico(robot))
    );
    return robotsCargados;
  } catch (error) {
    console.error("No se pudieron cargar los bioRobots:", (error as Error).message);
    return [];
  }
}
