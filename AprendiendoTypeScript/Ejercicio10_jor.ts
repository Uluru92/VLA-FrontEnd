class personaCarro {
    nombre: string = "";
    cedula: number = 0;
    listaCarros: carro[] = [];
}

class carro {
    placa: number;
    constructor(pplaca: number) {
        this.placa = pplaca;
    }
}

const persona1 = new personaCarro();
persona1.nombre = "Jorddy";
persona1.cedula = 114980956;

const carro1persona1 = new carro (123456);
persona1.listaCarros.push(carro1persona1);

console.log("Nombre:", persona1.nombre, "Placa carro asosiado: ", carro1persona1.placa);