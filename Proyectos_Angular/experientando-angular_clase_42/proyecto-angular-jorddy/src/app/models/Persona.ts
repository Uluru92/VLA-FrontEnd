export class Persona
{
    nombre:string;
    correo:string;
    userName:string;
    passWord:string;

    constructor(nombre:string, correo:string,
                userName:string, passWord:string)
    {
        this.nombre = nombre; 
        this.correo = correo;
        this.userName = userName;
        this.passWord = passWord;
    }
    
}