/*Escribe un programa que tome un número como entrada y muestre un mensaje indicando si es positivo, negativo o cero.*/

const prompt = require('prompt-sync')()
var number = NaN

while (isNaN(number))
{
    var number = parseFloat(prompt("Please enter a number so I can tell you if it is positive, negative or cero: "))
    if (number > 0) { console.log("The number",number,"is positive") }
    else if (number < 0) { console.log("The number",number,"is negative") }
    else if (number == 0) { console.log("The number",number,"is cero")}
    else { console.log("Please enter a NUMBER... lets try again!") }
} 