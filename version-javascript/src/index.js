import { bioRobots } from './biorobots.js';
import {
    crearContadorDiagnosticos,
    filtrarPorEstado,
    calcularEnergiaPromedio,
    combinarBioRobots,
    cargarBioRobots
} from "./generador.js";

async function main() {
    console.log("=== Repertorio de Robots Biológicos ===");

    const contador = crearContadorDiagnosticos();
    contador.registrar();
    contador.registrar();
    console.log(`Diagnósticos registrados: ${contador.registrar()}`);

    const robotsCargados = await cargarBioRobots(bioRobots);
    console.log(`\nBioRobots cargados: ${robotsCargados.length}`);

    const funcionales = filtrarPorEstado(robotsCargados, "funcional");
    console.log(`\nBioRobots funcionales: ${funcionales.map((r) => r.nombre).join(", ")}`);

    const promedio = calcularEnergiaPromedio(robotsCargados);
    console.log(`Energía promedio del laboratorio: ${promedio}`);

    const hibrido = combinarBioRobots(robotsCargados[0], robotsCargados[2]);
    console.log("\nBioRobot híbrido generado:");
    console.log(hibrido);
}

main();
