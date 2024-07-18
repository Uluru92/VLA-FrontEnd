/*Resuelto por el profe */
class PersonaCarro {
    nombre: string = "";
    cedula: number = 0;
    carros: Carro[] = [];

    constructor(pNombre: string, pCedula: number) {
        this.nombre = pNombre;
        this.cedula = pCedula;
    }
}

class Carro {
    placa: number;

    constructor(pPlaca: number) {
        this.placa = pPlaca;
    }
}

const carro1Per1 = new Carro(852963);
const carro2Per1 = new Carro(852963);
const carro3Per1 = new Carro(852963);
const PersonaCarro1 = new PersonaCarro("Adolfo", 123456789);
PersonaCarro1.carros.push(carro1Per1);
PersonaCarro1.carros.push(carro2Per1);
PersonaCarro1.carros.push(carro3Per1);
const carro1Per2 = new Carro(741852);
const carro2Per2 = new Carro(159753);
const carro3Per2 = new Carro(3579641);
const PersonaCarro2 = new PersonaCarro("Gerald", 987654321);
PersonaCarro2.carros.push(carro1Per2);
PersonaCarro2.carros.push(carro2Per2);
PersonaCarro2.carros.push(carro3Per2);

const carro1Per3 = new Carro(654789);
const carro2Per3 = new Carro(632458);
const carro3Per3 = new Carro(111223);
const PersonaCarro3 = new PersonaCarro("Jorddy", 987564231);
PersonaCarro3.carros.push(carro1Per3);
PersonaCarro3.carros.push(carro2Per3);
PersonaCarro3.carros.push(carro3Per3);

const listaPersonasCarro: PersonaCarro[] = [PersonaCarro1, PersonaCarro2, PersonaCarro3]

const placaBuscar: number = 852963;
let banderaExiste: boolean = false;

for (const personaActual of listaPersonasCarro) {
    for (const carroActual of personaActual.carros) {
        if (carroActual.placa == placaBuscar) {
            console.log(personaActual.nombre, '-', personaActual.cedula);
            banderaExiste = true;
            break;
        }
    }

    if (banderaExiste)
        break;
}