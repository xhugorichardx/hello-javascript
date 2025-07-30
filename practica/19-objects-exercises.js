/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto psicólogo con 3 propiedades (nombre, especialidad, ciudad)

let psicologo = {
    nombre: "Hugo",
    edad: 30,
    ciudad: "Arequipa",
    atenderPaciente: function() {
        console.log("Atendiendo paciente")
    }
}

// 2. Accede y muestra su valor usando ambas notaciones (punto y corchetes)

console.log(psicologo.nombre);
console.log(psicologo["edad"]);

// 3. Agrega una nueva propiedad (teléfono)

psicologo.telefono = 982769412
console.log(typeof psicologo.telefono)

// 4. Elimina una de las 3 primeras propiedades

delete psicologo.edad
console.log(psicologo)  

// 5. Agrega una función para atender pacientes e invócala

psicologo.atenderPaciente()
// 6. Itera las propiedades del objeto psicólogo

for (let key in psicologo) {
    console.log(key + ": " + psicologo[key])
}

// 7. Crea un objeto paciente con historial médico anidado

let psicologo2 = {
    nombre: "Hugo",
    edad: 30,
    ciudad: "Arequipa",
    atenderPaciente: function() {
        console.log("Atendiendo paciente")
    },
    historial: {
        diagnostico: "Ansiedad",
        fechaInicio: "2024-01-15",
        tratamiento: "Terapia cognitivo-conductual"
    }
}

console.log(psicologo2.historial.diagnostico)
// 8. Accede y muestra el valor de las propiedades anidadas del historial

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales (ej: nombres)