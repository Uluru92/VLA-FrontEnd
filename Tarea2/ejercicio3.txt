/*Escribe un programa que tome tres números como entrada, 
que representan las longitudes de los lados de un triángulo, 
y determine si es equilátero (todos los lados iguales), 
isósceles (dos lados iguales) o escaleno (ningún lado igual).*/

const prompt = require('prompt-sync')()
var length1 = NaN
var length2 = NaN
var length3 = NaN

console.log("Please enter the length of the 3 sides of the triangle...")

while (isNaN(length1)) {
    var length1 = parseFloat(prompt("length 1: "))
    if (isNaN(length1))
    {
        console.log("lets try again!... make sure you enter the first lenght using only numbers")
    }
} 
while (isNaN(length2)) {
    var length2 = parseFloat(prompt("length 2: "))
    if (isNaN(length2)) {
        console.log("lets try again!... make sure you enter the second lenght using only numbers")
    }
} 
while (isNaN(length3)) {
    var length3 = parseFloat(prompt("length 3: "))
    if (isNaN(length3)) {
        console.log("lets try again!... make sure you enter the third lenght using only numbers")
    }
} 

console.log("side 1:", length1)
console.log("side 2:", length2)
console.log("side 3:", length3)

console.log("...now let's calculate if the triangulo is Equilateral, Isosceles or Scalene...")
console.log("...loading...")
console.log("...loading...")
console.log("...loading...")

if (length1 == length2 && length1 == length3 && length2 == length3)
{
    console.log("...Result: the triangule is Equilateral")
}
if (length1 == length2 && length1 != length3 && length2 != length3) {
    console.log("...Result: the triangule is Isosceles")
}
if (length1 != length2 && length1 == length3 && length2 != length3) {
    console.log("...Result: the triangule is Isosceles")
}
if (length1 != length2 && length1 != length3 && length2 == length3) {
    console.log("...Result: the triangule is Isosceles")
}
if (length1 != length2 && length1 != length3 && length2 != length3) {
    console.log("...Result: the triangule is Scalene")
}