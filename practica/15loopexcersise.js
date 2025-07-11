/*
Ejercicios de Bucles - Práctica Personal
Contexto: Sistema de conexión Pacientes-Psicólogos en Perú
*/

// 1. Crea un bucle que muestre los números de sesión del 1 al 10
// Ejemplo: "Sesión 1", "Sesión 2", etc.

for (let i = 1; i <= 10; i++) {
    console.log(`Sesión ${i}`)
}


// 2. Calcula el costo total de 12 sesiones de terapia a S/80 cada una
// Usa un bucle para sumar sesión por sesión

// Método 1: for loop
let costoTotal = 0
const precioPorSesion = 80

for (let sesion = 1; sesion <= 12; sesion++) {
    costoTotal += precioPorSesion
    console.log(`Sesión ${sesion} Total acumulado: S/${costoTotal}`)
}
console.log(`\nCosto total de 12 sesiones: S/${costoTotal}`)



// 3. Muestra solo los días pares del mes (2, 4, 6, 8... hasta 30)
// Para mostrar disponibilidad de citas

for (let i=2; i<=30; i+=2){
    console.log(i)
}   

// 4. Dado un array de nombres de psicólogos, imprime cada uno con "Dr./Dra."
const psicologos = ["Ana García", "Carlos Mendoza", "María López", "José Rodríguez"]

// Forma tradicional (más larga)
for (let i = 0; i < psicologos.length; i++) {
    console.log(`Dr./Dra. ${psicologos[i]}`)
}


// 6. Calcula el promedio de calificaciones de un psicólogo
// Multiplica todas las calificaciones y divide entre el total
const calificaciones = [4.5, 4.8, 4.2, 4.9, 4.7]

let suma = 0
for (let i = 0; i < calificaciones.length; i++){
    suma = suma + calificaciones[i]
}

let promedio = (suma / calificaciones.length).toFixed(2)
console.log(`Calificación promedio del psicólogo: ${promedio} estrellas`)

// 7. Muestra los horarios disponibles de 9:00 AM a 6:00 PM
// Ejemplo: "9:00 AM disponible", "10:00 AM disponible", etc.

// Forma MÁS SIMPLE: for loop básico
for (let hora = 9; hora <= 18; hora++) {
    if (hora <= 12) {
        console.log(`${hora}:00 AM disponible`)
    } else {
        console.log(`${hora - 12}:00 PM disponible`)
    }
}



// 9. Genera los primeros 10 números de expediente
// Secuencia Fibonacci para IDs únicos: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55



// 10. Filtra psicólogos con más de 4.5 estrellas de calificación
const psicologosConCalificacion = [
    { nombre: "Dr. García", calificacion: 4.8 },
    { nombre: "Dra. López", calificacion: 4.2 },
    { nombre: "Dr. Mendoza", calificacion: 4.9 },
    { nombre: "Dra. Silva", calificacion: 4.0 }
]