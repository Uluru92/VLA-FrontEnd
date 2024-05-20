//Relación entre length y las propiedades numéricas

const frutas = [];
frutas.push("banana", "manzana", "pera");
console.log("array frutas:",frutas)
console.log("la longitud del array frutas es:", frutas.length);

frutas[4] = "queso"; // agrega "queso" al espacio 4
frutas[5] = "fresa"; // agrega "fresa" al espacio 5
console.log("array frutas:", frutas)
console.log("la longitud del array frutas es:",frutas.length);
console.log("el espacio 5 en frutas es:",frutas[5]); // accesa y llama al espacio 5: 'fresa'

console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log("la nueva longitud del array frutas es:", frutas.length); // 6
console.log(frutas) // deja el espacio 3 en blanco...undefined

console.log("el espacio 0 en frutas es:", frutas[0]);
console.log("el espacio 1 en frutas es:", frutas[1]);
console.log("el espacio 2 en frutas es:", frutas[2]);
console.log("el espacio 3 en frutas es:", frutas[3]);
console.log("el espacio 4 en frutas es:", frutas[4]);
console.log("el espacio 5 en frutas es:", frutas[5]);

frutas.length = 10; //aumentamos la longitud del array... se crearán espacios vacíos
console.log("array frutas:", frutas); // ['banana', 'manzana', 'pera', …, 'fresa', …,]
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log("la nueva longitud del array frutas es:", frutas.length); // 10
console.log(frutas[8]); // undefined ya que este espacio se creo vacío

frutas.length = 2; // disminuimos la longitud del array... se eliminan espacios y perdemos información
console.log("array frutas:", frutas);// ['banana', 'manzana]
console.log(Object.keys(frutas)); // ['0', '1']
console.log("la nueva longitud del array frutas es:", frutas.length); // 2

