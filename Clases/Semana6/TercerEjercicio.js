/*
    Contar hasta los 25 anios

    0 y 3 - Es un bebe
    De los 4 a 11 es un nino
    De los 12 a los 18 es un adolescente
    Y de los 18 > es un adulto

    0 es un bebe
    1 es un bebe 
    2 es un bebe
    3 es un bebe
    4 es un nino
*/

var annioActual = 0;

while(annioActual <=25)
{
    if(annioActual>=0 && annioActual<=3)
    {
        console.log("La edad es:", annioActual, " y es un bebe");
    }
    else if(annioActual>=4 && annioActual<=11)
    {
        console.log("La edad es:", annioActual, " y es un nino");
    }
    else if(annioActual >=12 && annioActual<=18)
    {
        console.log("La edad es:", annioActual, " y es un adolescente");
    }
    else
    {
        console.log("La edad es:", annioActual, " y es un adulto");
    }

    annioActual= annioActual+1;
}


console.log("Hola mundo, aqui sigue mas codigo")






