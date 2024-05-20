/*Crear un Array*/
let frutas = ["Manzana", "Banana"]; 
console.log(frutas.length);

/*Acceder a un elemento de Array mediante su índice*/
primero = frutas[0];
console.log(primero)
// Manzana
ultimo = frutas[frutas.length - 1];
// Banana

/*Recorrer un Array*/
frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});
// Manzana 0
// Banana 1

/*Añadir un elemento al final de un Array*/
nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]

/*Eliminar el último elemento de un Array*/
let ultimo = frutas.pop(); // Elimina "Naranja" del final
// ["Manzana", "Banana"]

/*Añadir un elemento al principio de un Array*/
let nuevaLongitud = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
console.log(nuevaLongitud)
// ["Fresa" ,"Manzana", "Banana"]