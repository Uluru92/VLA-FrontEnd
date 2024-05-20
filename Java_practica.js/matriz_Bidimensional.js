//Creación de una matriz de dos dimensiones
let tablero = [
    ["T", "C", "A", "D", "R", "A", "C", "T"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "X", "p", "p", "p"],
    ["t", "c", "a", "d", "r", "a", "c", "t"],
];

console.log(tablero[6][4]) //[fila][columna]
console.log(tablero[0][0])
console.log(tablero[0][1])
console.log(tablero[0][2])

console.log(tablero.join("\n") + "\n\n");

// Adelantar dos posiciones el peón de rey
tablero[4][4] = tablero[6][4];
tablero[6][4] = " ";
console.log(tablero.join("\n"));