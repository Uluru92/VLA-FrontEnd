class PersonaEmpresa
{
    //Forma en que se declara los atributos
    nombre: string = '';
    apellido1: string = '';
    apellido2: string = '';   

    Saludar()
    {
        console.log("Hola mi nombre es:", this.nombre, this.apellido1, this.apellido2);
    }
}

const personaE1 = new PersonaEmpresa();
personaE1.nombre = "Adolfo";
personaE1.apellido1 = "Vargas";
personaE1.apellido2 = "Sandoval";

const personaE2 = new PersonaEmpresa();
personaE2.nombre = "Gerald";
personaE2.apellido1 = "Corrales";
personaE2.apellido2 = "Vindas";

personaE1.Saludar();
personaE2.Saludar()