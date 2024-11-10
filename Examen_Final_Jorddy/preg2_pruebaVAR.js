console.log("PRUEBA CON VAR")

var a = 10;
function pruebaVAR(b) {
    var a = 2;
    var b = 20;
    var c = b + 1;
    var d = a;
    if (c==21) {console.log(true);} //c es igual a 21 porque el parametro inicial a(10) se sobre escribe en linea 4
    else console.log(false)
    if (d == 2) {
        console.log(false);  //d es igual a 2 porque tenemos una nueva variable a dentro de la funcion
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
    } 
    return(a,b,c,d)
}
console.log(a) //el valor de a se mantiene en 10 fuera de la funcion
pruebaVAR(a)

