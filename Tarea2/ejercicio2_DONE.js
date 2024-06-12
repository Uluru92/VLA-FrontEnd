/*Desarrolla un programa que solicite la edad de una persona como entrada y 
clasifique su categoría de edad en "niño", "adolescente", "adulto joven" o "adulto".
Niño es menor estricto que 13,
adolescente es entre los 13 y los 20,
adulto joven es entre los 20 y los 35,
y mayor a 35 es un adulto.
*/

const prompt = require('prompt-sync')()
var age = NaN

while (isNaN(age))
{
    var age = parseFloat(prompt("Please enter your age: "))
    if (0 < age && age < 13) { console.log("You are", age, "years old, you are a child") }                /*Niño*/
    else if (13 <= age && age < 20) { console.log("You are", age, "years old, you are a teenager") }      /*adolescente*/
    else if (20 <= age && age <= 35) { console.log("You are", age, "years old, you are a young adult") }  /*adulto joven*/
    else if (age > 35) { console.log("You are", age, "years old, you are an adult") }                     /*adulto*/
    else { console.log("lets try again!... make sure you enter your age in numbers, not words") }               
}