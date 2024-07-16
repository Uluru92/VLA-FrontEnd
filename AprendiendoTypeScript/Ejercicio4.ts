class OperacionesMatematicas
{
    valorNumerico1: number = 0;
    valorNumerico2: number = 0;
    resultadoNumerico: number = 0;

    Sumar()
    {
        this.resultadoNumerico = this.valorNumerico1 + this.valorNumerico2;
        console.log("El resultado de la suma es:", this.resultadoNumerico);
    }

    Restar()
    {
        this.resultadoNumerico = this.valorNumerico1 - this.valorNumerico2;
        console.log("El resultado de la resta es:", this.resultadoNumerico);
    }

    Multiplicar()
    {
        this.resultadoNumerico = this.valorNumerico1 * this.valorNumerico2;
        console.log("El resultado de la multiplicacion es:", this.resultadoNumerico);
    }

    Dividir()
    {
        this.resultadoNumerico = this.valorNumerico1 / this.valorNumerico2;
        console.log("El resultado de la division es:", this.resultadoNumerico);
    }
}

var operacion1 = new OperacionesMatematicas();
operacion1.valorNumerico1 = 9;
operacion1.valorNumerico2 = 7;

var operacion : string = '+';

if(operacion==='+')
    operacion1.Sumar();
else if(operacion==='-')
    operacion1.Restar();
else if(operacion==='*')
    operacion1.Multiplicar();
else
    operacion1.Dividir();