valores = [];
for (let x = 0; x < 10; x++) {
    valores.push([2 ** x, 2 * x ** 2]);// primer valor: 2 elevado a la x, segundo valor 2 * x al cuadrado
}
console.table(valores);