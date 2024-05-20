/*Crear un Array*/
let frutas = ["Manzana", "Banana"]; 
    console.log("El array es:",frutas,"y tiene una longitud de:",frutas.length);

/*Acceder a un elemento de Array mediante su índice*/
let primero = frutas[0];
    console.log("El primero es:",primero)
let lastOne = frutas[frutas.length - 1];
    console.log("El primero es:", lastOne)

/*Recorrer un Array*/
frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});

/*Añadir un elemento al final de un Array*/
let NewLength = frutas.push("Naranja"); // Añade "Naranja" al final
    console.log("Agregamos Naranja al final:", frutas, "y tiene una longitud de:", frutas.length);

/*Eliminar el último elemento de un Array*/
let ultimo = frutas.pop(); // Elimina "Naranja" del final
    console.log("Eliminamos Naranja al final:", frutas, "y tiene una longitud de:", frutas.length);

/*Añadir un elemento al principio de un Array*/
let nuevaLongitud = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
    console.log("Agregamos Fresa al inicio:", frutas, "y tiene una longitud de:", frutas.length);

/*Eliminar el primer elemento de un Array*/
let firstElement = frutas.shift(); // Elimina "Fresa" del inicio
    console.log("Eliminamos Fresa al inicio:", frutas, "y tiene una longitud de:", frutas.length);

/*Encontrar el índice de un elemento del Array*/
 console.log("La posicion de Banana es:", frutas.indexOf("Banana"));// (posicion) es la posición para abreviar

/*Eliminar un único elemento mediante su posición*/
let elementoEliminado = frutas.splice(frutas.indexOf("Banana"), 1); //en splice especificamos posicion y cantidad a eliminar a partir de esa posicion
    console.log("Eliminamos la posicion de la Banana, ahora el array es:", frutas);//

/*Eliminar varios elementos a partir de una posición*/
let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log("El array vegetales es:",vegetales);

let elementosEliminados = vegetales.splice(1, 2);
console.log("Eliminamos 2 elementos a partir de la posición 1,el nuevo array vegetales es:", vegetales);
console.log("Los elementos extraidos fueron guardados en el array elementosEliminados:", elementosEliminados)

/*Copiar un Array*/
let copiaArray = vegetales.slice();
console.log("Copiamos el array vegetales en el array copiaArray:",copiaArray)

/*Acceso a elementos de un array*/
let arr = [
    "este es el primer elemento",
    "este es el segundo elemento",
    "ASD",
    "XXX",
    "este es el último elemento",
];
console.log("El array arr es:",arr)
console.log(arr[0]); // escribe en consola 'este es el primer elemento'
console.log(arr["0"]); // es lo mismo escribir 0 o "0"
console.log(arr[1]); // escribe en consola 'este es el segundo elemento'
//console.log(arr[01]); // escribe en consola 'este es el segundo elemento'
console.log(arr["01"]); //OJO en este caso "01" es undefined, porque??
console.log(arr[arr.length - 1]); // escribe en consola 'este es el último elemento'

