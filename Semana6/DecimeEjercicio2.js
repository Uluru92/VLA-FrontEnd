/*
    Que me diga en cuales posiciones esta la letra A
*/
var resultado = "";
var vocales = ["A", "E", "I", "O", "U", "A", "E", "I", "O", "U"];

for (var i = 0; i < vocales.length; i++)
{
    if (vocales[i] == "A")
    {
        resultado = resultado +" "+ i;
    }
}

console.log("La A, esta en las posiciones:", resultado);
