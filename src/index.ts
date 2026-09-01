import { bioRobots } from "./bioRobots.js";
import {
    crearContadorDiagnosticos,
    filtrarPorEstado,
    calcularEnergiaPromedio,
    combinarBioRobots,
    cargarBioRobots,
} from "./generador.js";

async function main(): Promise<void> {
    console.log("=== Laboratorio de BioRobots (versión TypeScript) ===\n");

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

    const primero = robotsCargados[0];
    const tercero = robotsCargados[2];

    if (!primero || !tercero) {
        throw new Error("No hay suficientes bioRobots cargados para combinar.");
    }

    const hibrido = combinarBioRobots(primero, tercero);
    console.log("\nBioRobot híbrido generado:");
    console.log(hibrido);
}

main();
