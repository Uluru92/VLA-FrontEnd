class PersonaBancaria
{
    nombre:string ="";
    listaTarjetas: TarjetaBancaria[] =[];
}

class TarjetaBancaria
{
    numeroTarjeta: number;
    saldoDisponible: number;
    saldoUtilizado: number;

    constructor(pNumTar:number, pSaldoDis: number, pSaldoUtilizado:number)
    {
        this.numeroTarjeta = pNumTar;
        this.saldoDisponible = pSaldoDis;
        this.saldoUtilizado = pSaldoUtilizado;
    }
}

const persona1 = new PersonaBancaria();
persona1.nombre = "Adolfo";
const tarjeta1Persona1 = new TarjetaBancaria(345678912,500,100);
persona1.listaTarjetas.push(tarjeta1Persona1);

const persona2 = new PersonaBancaria();
persona2.nombre = "Sophia";

const tarjeta1Persona2 = new TarjetaBancaria(123456789,10000,6500);
const tarjeta2Persona2 = new TarjetaBancaria(234567891,2000,900);
persona2.listaTarjetas.push(tarjeta1Persona2);
persona2.listaTarjetas.push(tarjeta2Persona2);

const personasRegistradas: PersonaBancaria[] =[];
personasRegistradas.push(persona1);
personasRegistradas.push(persona2);


/*Recorrer a las persoans*/
personasRegistradas.forEach((persona) => {
    console.log("Nombre de la persona", persona.nombre);
    /*foreach para las tarjetas*/
    persona.listaTarjetas.forEach((tarjeta) =>
    {
        console.log("Nombre:", persona.nombre, "Tarjeta asociada: ", tarjeta.numeroTarjeta);
    })
});