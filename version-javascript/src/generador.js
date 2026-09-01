
//funciones para generar y manipular bioRobots
// la funcion crearContadorDiagnosticos crea un contador que mantiene el total de diagnósticos realizados.
export function crearContadorDiagnosticos() {
  let total = 0;

  return {
    registrar() {
      total += 1;
      return total;
    },
    obtenerTotal() {
      return total;
    },
  };
}


//la funcion filtrarPorEstado toma una lista de bioRobots y un estado específico, y devuelve una nueva lista que contiene solo los bioRobots que coinciden con ese estado.
export function filtrarPorEstado(lista, estado) {
  return lista.filter((robot) => robot.estado === estado);
}

//calcularEnergiaPromedio toma una lista de bioRobots y calcula la energía promedio de todos los bioRobots en la lista. Si la lista está vacía, devuelve 0. ya me estoy volando y me pica el pie :c
export function calcularEnergiaPromedio(lista) {
  if (lista.length === 0) return 0;
  const suma = lista.reduce((acumulado, robot) => acumulado + robot.energia, 0);
  return Math.round(suma / lista.length);
}


//la funcion combinarBioRobots toma dos bioRobots y devuelve un nuevo bioRobot que combina sus propiedades. Que miedo que estas cosas existan en la vida real pero bueno así es la vida, a veces negra, a veces color rosa :p
export function combinarBioRobots(robotA, robotB) {
  const { energia: energiaA, ...restoA } = robotA;
  const { energia: energiaB } = robotB;


  return {
    ...restoA,
    ...robotB,
    id: `${robotA.id}-${robotB.id}`,
    nombre: `${robotA.nombre}-${robotB.nombre}`,
    energia: Math.round((energiaA + energiaB) / 2),
    estado: robotA.estado, // conservamos el estado del primero
  };
}


//
function simularDiagnostico(robot) {
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


export async function cargarBioRobots(lista) {
  try {
    const robotsCargados = await Promise.all(
      lista.map((robot) => simularDiagnostico(robot))
    );
    return robotsCargados;
  } catch (error) {
    console.error("No se pudieron cargar los bioRobots:", error.message);
    return [];
  }
}