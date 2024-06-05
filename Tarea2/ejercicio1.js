/*Escribe un programa que tome un número como entrada y muestre un mensaje indicando si es positivo, negativo o cero.*/

const prompt = require('prompt-sync')()

var numero = prompt("Please enter a number so I can tell you if it is positive, negative or cero: ")

if (numero > 0) {
    console.log("The number is positive")
}
else if (numero = 0) {
    console.log("The number is cero")
}
else if (numero < 0) {
    console.log("The number is negative")
}


