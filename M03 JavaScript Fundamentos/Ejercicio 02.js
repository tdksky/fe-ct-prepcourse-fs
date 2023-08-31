/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x = 5, y = 12) {
   // Retorna el resultado de su suma.
   // Tu código:
   suma = x + y
   return suma;
}

function resta(x = 14, y = 9) {
   // Retorna el resultado de la resta.
   // Tu código:
   resta = x - y
   return resta;
}

function divide(x = 25, y = 7) {
   // Retorna el resultado de su división.
   // Tu código:
   divide = x / y
   return divide;
}

function multiplica(x = 19, y = 12) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   multiplica = x * y
   return multiplica;
}

function obtenerResto(x= 85, y = 7) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   obtenerResto = x % y
   return obtenerResto
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
