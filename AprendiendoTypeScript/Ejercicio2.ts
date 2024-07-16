class Persona
{
    //Forma en que se declara los atributos
    nombre: string;
    apellido1: string;
    apellido2: string;

    constructor(pNombre:string, pApellido1: string, pApellido2:string)
    {
        this.nombre = pNombre;
        this.apellido1 = pApellido1;
        this.apellido2 = pApellido2;
    }

    Saludar()
    {
        console.log("Hola mi nombre es:", this.nombre, this.apellido1, this.apellido2);
    }
}

const personaN1 = new Persona("Adolfo", "Vargas", "Sandoval");
const personaN2 = new Persona("Jordy", "Castro", "Araya");
personaN1.Saludar();
personaN2.Saludar()