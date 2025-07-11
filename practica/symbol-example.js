// Ejemplo básico de Symbol
console.log("=== SÍMBOLOS EN JAVASCRIPT ===");

// 1. Crear símbolos
const sym1 = Symbol();
const sym2 = Symbol("descripción");
const sym3 = Symbol("descripción");

console.log("\n1. Creación de símbolos:");
console.log("sym1:", sym1);
console.log("sym2:", sym2);
console.log("sym3:", sym3);
console.log("sym2 === sym3:", sym2 === sym3); // false - son únicos

// 2. Uso en objetos
const ID = Symbol("id");
const SECRET = Symbol("secret");

const usuario = {
    nombre: "Ana",
    email: "ana@email.com",
    [ID]: 12345,
    [SECRET]: "contraseña-secreta"
};

console.log("\n2. Uso en objetos:");
console.log("usuario.nombre:", usuario.nombre);
console.log("usuario[ID]:", usuario[ID]);
console.log("usuario[SECRET]:", usuario[SECRET]);

// 3. Los símbolos no aparecen en iteraciones normales
console.log("\n3. Propiedades visibles:");
console.log("Object.keys(usuario):", Object.keys(usuario));
console.log("for...in loop:");
for (let key in usuario) {
    console.log(key + ":", usuario[key]);
}

// 4. Para ver símbolos usamos getOwnPropertySymbols
console.log("\n4. Símbolos del objeto:");
console.log("Object.getOwnPropertySymbols(usuario):", Object.getOwnPropertySymbols(usuario));

// 5. Symbol.for() - crear símbolos globales
const globalSym1 = Symbol.for("miSymbol");
const globalSym2 = Symbol.for("miSymbol");
console.log("\n5. Símbolos globales:");
console.log("globalSym1 === globalSym2:", globalSym1 === globalSym2); // true 