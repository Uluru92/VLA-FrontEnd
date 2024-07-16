class Promedio 
{
    notaMate:number;
    notaProgra: number;
    notaIngles: number;
    notaPromedio: number = 0;

    constructor(pMate: number, pProgra: number, pIngles:number)
    {
        this.notaMate = pMate;
        this.notaProgra= pProgra;
        this.notaIngles = pIngles;
    }

    CalculePromedio()
    {
        this.notaPromedio = (this.notaMate+ this.notaProgra + this.notaIngles) / 3
    }
}

const promedioPersona1 = new Promedio(80,98,66);
const promedioPersona2 = new Promedio(87,80,91);
const promedioPersona3 = new Promedio(72,89,60);

const promedioGeneral : Promedio[] = [];
promedioGeneral.push(promedioPersona1);
promedioGeneral.push(promedioPersona2);
promedioGeneral.push(promedioPersona3);

let promedioGlobal: number = 0;
promedioGeneral.forEach( (persona) => {
    persona.CalculePromedio()
    console.log("El promedio de la persona 1 es:", persona.notaPromedio);
    promedioGlobal = promedioGlobal + persona.notaPromedio;
});

promedioGlobal = promedioGlobal / promedioGeneral.length;
console.log("El promedio del grupo es de: ", promedioGlobal);