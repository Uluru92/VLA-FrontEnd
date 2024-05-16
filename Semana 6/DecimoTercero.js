var vectorNumeros = []
var vectorNegativos = [-1, -2, -3, -4]
var vectorPositivos = [1, 2, 3, 4]

/*
    Tercer Vector = -1 1 -2 2 -3 3 -4 4
    En un solo for
*/


for (var i = 0; i < vectorPositivos.length; i++)
{
    vectorNumeros.push(vectorNegativos[i])
    vectorNumeros.push(vectorNegativos[i])
}

for (var i = 0; i < vectorNumeros.length; i++)
{
    console.log("En la posicion",i,"esta en el valor",vectorNumeros[i]);
}

