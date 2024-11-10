export class Pais
{
    idPais : string = "";
    nombrePais: string = "";
    capital: string = "";
    moneda: string = "";
    poblacion: string = "";
    presidente: string = "";
    limitaCon: string = "";
    noticiasRelevantes: string = "";
    lugaresTuristicos: string = "";
    videoLink: string = ""

    constructor(
        pIdPais: string,
        pNombrePais: string,
        pCapital: string,
        pMoneda: string,
        pPoblacion: string,
        pPresidente: string,
        pLimitaCon: string,
        pNoticiasRelevantes: string,
        pLugaresTuristicos: string,
        pVideoLink: string,
    ) {
        this.idPais = pIdPais;
        this.nombrePais = pNombrePais;
        this.capital = pCapital;
        this.moneda = pMoneda;
        this.poblacion = pPoblacion;
        this.presidente = pPresidente;
        this.limitaCon = pLimitaCon;
        this.noticiasRelevantes = pNoticiasRelevantes;
        this.lugaresTuristicos = pLugaresTuristicos;
        this.videoLink = pVideoLink;
    }
}