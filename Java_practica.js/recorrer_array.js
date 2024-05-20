let frutas = ["Manzana", "Banana"]; 
console.log(frutas.length);

let primero = frutas[0];
// Manzana

let ultimo = frutas[frutas.length - 1];
// Banana

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});
// Manzana 0
// Banana 1