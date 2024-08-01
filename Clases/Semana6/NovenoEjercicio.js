/* Calcular el promedio*/

var resultado = 0;
var vectorNumeros = [80, 30, 2, 7, 78, 96, 35];

for (var indice = 0; indice < vectorNumeros.length; indice++)
{
    resultado = resultado + vectorNumeros[indice];
}

var promedio = resultado / vectorNumeros.length;

console.log("La suma de los numeros es:", resultado);
console.log("El promedio es:", resultado / vectorNumeros.length)

