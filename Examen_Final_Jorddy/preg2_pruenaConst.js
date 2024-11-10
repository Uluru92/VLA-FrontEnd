const a = 1
const b = true

if (b == true) {
    const a = 2000;
    if (a == 2000)
    {
        console.log("Dentro del bloque a es igual a 2000")
    }
}

console.log("Fuera del bloque a es igual a " + a) // a es igual a 1 fuera del bloque

//Además, si intentamos en esta línea volver a declarar const a = 2,
// nos dará un error ya que esta constante es inmutable