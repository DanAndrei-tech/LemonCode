import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO 1
//A)
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    if (paciente.especialidad === "Pediatra") {
      pacientesPediatria = [...pacientesPediatria, paciente];
    }
  }
  return pacientesPediatria;
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));

//B)
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatria: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    if (paciente.especialidad === "Pediatra" && paciente.edad < 10) {
      pacientesPediatria = [...pacientesPediatria, paciente];
    }
  }
  return pacientesPediatria;
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//Apartado 2-----------------------------------------------
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
    }
  }

  return activarProctolo;
};
console.log(activarProtocoloUrgencia(pacientes));

//Apartado 3-----------------------------------
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesReasignados: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    if (paciente.especialidad === "Pediatra") {
      const pacienteReasignado: Pacientes = {
        ...paciente,
        especialidad: "Medico de familia",
      };
      pacientesReasignados = [...pacientesReasignados, pacienteReasignado];
    }
  }
  return pacientesReasignados;
};
console.log(reasignaPacientesAMedicoFamilia(pacientes));

//Apartado 4--------------------------------------
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pacienteParaPediatra: boolean = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacienteParaPediatra = true;
      break;
    }
  }
  return pacienteParaPediatra;
};
console.log(HayPacientesDePediatria(pacientes));

//Apartado 5
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const contarPacientesPorEspecialidad = (
  pacientes: Pacientes[],
  especialidadObjetivo: string
): number => {
  let conteo = 0;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === especialidadObjetivo) {
      conteo++;
    }
  }

  return conteo;
};

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return {
    medicoDeFamilia: contarPacientesPorEspecialidad(
      pacientes,
      "Medico de familia"
    ),
    pediatria: contarPacientesPorEspecialidad(pacientes, "Pediatra"),
    cardiologia: contarPacientesPorEspecialidad(pacientes, "Cardiólogo"),
  };
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
