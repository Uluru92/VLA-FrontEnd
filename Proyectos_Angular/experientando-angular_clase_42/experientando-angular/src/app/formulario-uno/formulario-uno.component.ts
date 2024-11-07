import { Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../models/Persona';
import { PersonaEliminar } from '../models/PersonaEliminar';
import { PersonasService } from '../services/persona/personas-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulario-uno',
  templateUrl: './formulario-uno.component.html',
  styleUrl: './formulario-uno.component.scss'
})

export class FormularioUnoComponent implements OnInit
{
  personas : Persona[] = [];
  nombrePersona: string = "";
  correoPersona:string = "";
  userNamePersona:string="";
  passWordPersona:string="";
  codigoRespuestaApi:number=0;
  descripcionRespuestaApi:string="";
  mostrarMensajeError: boolean= false;
  mensajeNombrePersona : string = "El campo de nombre es requerido";
  mensajeCorreoPersona : string = "El campo de correo es requerido";
  mensajeUserNamePersona : string = "El campo de nombre de usuario es requerido";
  mensajePasswordPersona : string = "El campo de contrasena es requerido";

  @ViewChild('ContenedorRespuesta',{ static: true}) modalRespuesta :any;

  constructor(private personasServices: PersonasService,
              private modalService: NgbModal)
  {    
  }

  ngOnInit(): void 
  {
    this.VerTodasLasPersonas();
  }

  VerTodasLasPersonas() : void
  {
    this.personasServices.ObtenerTodasLasPersonas().subscribe(
      data=>{
        this.personas = data.DetalleRespuesta;
      },
      error =>
      {
        this.personas =[];
      }
    );   
  }

  GuardarPersona(): void
  {
    let nuevaPersona = new Persona(this.nombrePersona, this.correoPersona,
                                  this.userNamePersona, this.passWordPersona);

    this.mostrarMensajeError = this.ValidarCampos();    
      
      if(!this.mostrarMensajeError){
        this.personasServices.GuardarNuevaPersona(nuevaPersona).subscribe(
      data=>
        {
          this.codigoRespuestaApi = data.Codigo;
          this.descripcionRespuestaApi = data.Descripcion;

          if(this.codigoRespuestaApi==0)
          {
            this.VerTodasLasPersonas()   
          }        
          this.modalService.open(this.modalRespuesta);
        },
        error=>
        {
          console.log("Hubo un error al guardar persona", error);
        }
        )       
      }else
      {
        this.modalService.dismissAll(this.modalRespuesta);
      }
  }

  AbrirModal(content:any):void{
    this.modalService.open(content, {ariaLabelledBy:'modal-basic-title'});

  }

  ValidarCampos(): boolean
  {
    if(this.nombrePersona =="" || this.correoPersona==""|| this.userNamePersona==""
      || this.passWordPersona == "")
    return true;

    return false;
  }

  EliminarPersona(indice : number):void
  {
    let personaEnPosicion = this.personas[indice];
    const personaEliminar = new PersonaEliminar(personaEnPosicion.userName);

    this.personasServices.EliminarPersona(personaEliminar).subscribe(
      data => {
        this.codigoRespuestaApi = data.Codigo;
        this.descripcionRespuestaApi = data.Descripcion;

        if (this.codigoRespuestaApi == 0)
        {
          this.VerTodasLasPersonas()
        }
        this.modalService.open(this.modalRespuesta);
      },
      error => {
        console.log("Hubo un error al guardar persona", error);
      }
    )      
  }
}
