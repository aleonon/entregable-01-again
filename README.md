# Laboratorio de BioRobots - Entregable 01

Proyecto académico de máquina de intenciones tipadas que explora conceptos fundamentales de programación a través de la simulación de robots biológicos.

## Descripción Creativa

En un futuro no lejano, se ha desarrollado la capacidad de crear robots con influencia biológica directa. El Laboratorio de BioRobots es un espacio de experimentación donde puedes:

- Registrar diagnósticos de robots en tiempo real
- Filtrar biorobots según su estado operativo (funcional, simulación, dañado, sobrecargado)
- Calcular métricas como energía promedio del laboratorio
- Combinar biorobots para crear híbridos únicos con propiedades emergentes

Cada biorobot tiene su propia identidad: nombre, clase (defensivo, médico, explorador), nivel de energía y estado actual.

---

## Criterios de Aceptación

- El proyecto compila sin errores en TypeScript
- Todos los archivos están correctamente tipados con interfaces y tipos
- La función cargarBioRobots simula diagnósticos asíncronos
- Se implementan closures, funciones de orden superior, destructuring y spread operator
- Promesas y async/await se manejan correctamente
- El código se ejecuta sin errores en JavaScript compilado
- Se proveen dos versiones: JavaScript y TypeScript

---

## Instalación y Ejecución

### Requisitos
- Node.js 16+ y npm 8+

### Instalación
```bash
cd Entregable_01
npm install
```

### Comandos

**JavaScript:**
```bash
npm start          # Ejecutar una sola vez
npm run dev        # Ejecutar con reinicio automático
```

**TypeScript:**
```bash
npm run build      # Compilar TypeScript
npm run start:ts   # Ejecutar código compilado
npm run dev:ts     # Compilar en modo watch
```

---

## Estructura del Proyecto

```
Entregable_01/
├── src/                    # Código TypeScript
│   ├── index.ts
│   ├── bioRobots.ts
│   ├── generador.ts
│   └── tiposNuevos.ts
├── version-javascript/     # Código JavaScript original
├── dist/                   # Código compilado
├── package.json
└── tsconfig.json
```

---

## Sistema de Tipos

**EstadoRobot** - Estados posibles de un biorobot
```typescript
type EstadoRobot = "funcional" | "simulacion" | "sobrecargado" | "dañado";
```

**ClaseRobot** - Especialidades del biorobot
```typescript
type ClaseRobot = "defensivo" | "medico" | "explorador";
```

**BioRobot** - Estructura principal
```typescript
interface BioRobot {
  id: number | string;
  nombre: string;
  estado: EstadoRobot;
  clase: ClaseRobot;
  energia: number;
}
```

**ContadorDiagnosticos** - Objeto closure para contar diagnósticos
```typescript
type ContadorDiagnosticos = {
  registrar: () => number;
  obtenerTotal: () => number;
};
```

---

## Conceptos Implementados

**Closures** - Variable privada mantenida en el ámbito de la función
```typescript
export function crearContadorDiagnosticos(): ContadorDiagnosticos {
  let total = 0;
  return {
    registrar(): number { return ++total; },
    obtenerTotal(): number { return total; }
  };
}
```

**Funciones de Orden Superior** - filtrarPorEstado() y cargarBioRobots()

**Destructuring y Spread Operator** - En combinarBioRobots()
```typescript
const { energia: energiaA, ...restoA } = robotA;
return { ...restoA, ...robotB, ... };
```

**Promesas y Async/Await** - Simulación asíncrona de diagnósticos
```typescript
async function cargarBioRobots(lista: BioRobot[]): Promise<BioRobot[]> {
  const robotsCargados = await Promise.all(...);
  return robotsCargados;
}
```

---

## BioRobots Predefinidos

| ID | Nombre | Estado | Clase | Energía |
|----|--------|--------|-------|---------|
| 1 | Micro-Duck | simulacion | explorador | 65 |
| 2 | Sensor-Smith | funcional | medico | 40 |
| 3 | Hero-Arm | funcional | medico | 95 |
| 4 | Camaleon | simulacion | defensivo | 80 |
| 5 | Whisperer | dañado | defensivo | 40 |

## Objetivo

Demostrar conceptos esenciales: tipado estricto con TypeScript, patrones funcionales, programación asíncrona, manipulación de objetos y manejo de errores.

---

Desarrollado como parte del curso de Desarrollo Web 3 - USFQ
Licencia: ISC
