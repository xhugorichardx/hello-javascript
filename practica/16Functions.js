// 1. Crea una función que calcule el precio total de las sesiones de un paciente

const precioSesion = 100;
const precioTotal = (a) => console.log(a * precioSesion);
precioTotal(5);

// 2. Crea una función que reciba un array de pacientes y devuelva el nombre del paciente más joven

const pacientes = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Maria", edad: 30 },
    { nombre: "Pedro", edad: 20 },
]

const edades = pacientes.map(paciente => paciente.edad);
console.log(edades);

const pacienteJoven = Math.min(...edades)
console.log(pacienteJoven);

// 3. Crea una función que valide si un email de paciente es válido (debe contener @ y .)

const email = "hugo@gmail.com";
const validacion = (email) => {
if (email.includes("@") && email.includes(".")) {
    console.log("Email válido");
}
else {
    console.log("Email inválido");
}
}

// 4. Crea una función que reciba un array de especialidades y devuelva solo las que empiecen con "T" (Terapia)

const especialidades = ["Cognitivo-Comportamental", "Terapia de Sistemas", "Terapia Familiar", "Psicología Clínica"];
const especialidadesConT = (array) => {
    const filtradas = array.filter(especialidad => especialidad.startsWith("T"));
    console.log(filtradas);
    return filtradas;
};

especialidadesConT(especialidades);

// 5. Crea una función que reciba los años de experiencia de un psicólogo y devuelva su nivel: "Principiante" (< 2 años), "Intermedio" (2-5 años), "Experto" (> 5 años)

const experiencia = 0;
const nivel = (anosExperiencia) => {
    if (anosExperiencia <2) {
        console.log("Principiante");
    }
    else if (anosExperiencia >= 2 && anosExperiencia <= 5) {
        console.log("Intermedio");
    }
    else {
        console.log("Experto");
    }
}
nivel(5);

// 6. Crea una función que reciba dos arrays: horarios disponibles del psicólogo y horarios preferidos del paciente, y devuelva los horarios que coinciden


// 7. Crea una función que reciba un array de calificaciones (1-5 estrellas) y devuelva el promedio de calificaciones
const calificaciones = [1, 5, 4, 3, 2, 5, 5, 1, 2, 3, 4, 5];

const suma = (array) => 
    
    {
    const resultado = array.reduce((acumulador, calificacion) => { 
        acumulador += calificacion;
        return acumulador;
    }, 0);
    
   
    console.log(resultado);
    return resultado;
};




suma(calificaciones);