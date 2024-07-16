class Tarea
{
    titulo:string;
    completada: boolean;

    constructor(pT:string, pC:boolean)
    {
        this.titulo =pT;
        this.completada = pC;
    }
}

const tarea1 = new Tarea('Tarea1',true);
const tarea2 = new Tarea('Tarea2',true);
const tarea3 = new Tarea('Tarea3',false);
const tarea4 = new Tarea('Tarea4',true);
const tarea5 = new Tarea('Tarea5',false);
const todasTareas: Tarea[]= [tarea1,tarea2, tarea3, tarea4, tarea5];

let completadas: number = 0;
let noCompletadas: number=0;

todasTareas.forEach( (t) => 
{
    if(t.completada)
        completadas = completadas +1;        
    else
        noCompletadas++;
});

console.log("Tareas completadas", completadas);
console.log("Tareas no completadas", noCompletadas);