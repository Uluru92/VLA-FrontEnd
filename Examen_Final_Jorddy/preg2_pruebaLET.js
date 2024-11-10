console.log("PRUEBA CON LET")
let a = 10;
function pruebaLET(b) {
    let a = 2;
    let b = 20;
    let c = b + 1;
    let d = a;
    if (c == 21) { console.log(true); } //c es igual a 21 porque el parametro inicial a(10) se sobre escribe en linea 4
    else console.log(false)
    if (d == 2) {
        console.log(false);  //d es igual a 2 porque tenemos una nueva variable a dentro de la funcion
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);    }
    return (a, b, c, d)
}
console.log(a) //el valor de a se mantiene en 10 fuera de la funcion
pruebaLET(a)