class Mascota{
    //Atributos
    nombre: string = '';
    edad: number =0;   
}

const mascota1 = new Mascota();
mascota1.edad = 5;
mascota1.nombre = 'Nancy';

let mascota2 = new Mascota();
mascota2.edad = 2;
mascota2.nombre = 'Lucia';

let mascota3 = new Mascota();
mascota3.edad = 3;
mascota3.nombre = 'Sultan';

let mascota4 = new Mascota();
mascota4.edad = 1;
mascota4.nombre = 'Nana';

//const vectorMascotas : Mascota[] = [mascota1,mascota2, mascota3, mascota4];
let vectorMascotas :Mascota[] =[];
vectorMascotas.push(mascota1);
vectorMascotas.push(mascota2);
vectorMascotas.push(mascota3);
vectorMascotas.push(mascota4);


//Recorrer un vector con un F
for(let i= 0; i<vectorMascotas.length; i++)
{
    console.log(vectorMascotas[i].nombre)
}

const nombresMascotas: string[] =vectorMascotas.map(p =>p.nombre);
console.log(nombresMascotas);

    