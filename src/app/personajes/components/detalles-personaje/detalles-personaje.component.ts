import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Personaje } from 'src/app/interfaces/personaje.model';

@Component({
  selector: 'app-detalles-personaje',
  templateUrl: './detalles-personaje.component.html',
  styleUrls: ['./detalles-personaje.component.css']
})

export class DetallesPersonajeComponent implements OnInit {
  @ViewChild("modalDetallePersonaje") modalDetallePersonaje: ElementRef | undefined;

    personaje:Personaje = {
    id: 0,
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: ""
  };

  public formularioDatosPersonaje : FormGroup =  this.formBuild.group({
    nombre: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
    apellido: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
    titulo: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
    familia: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
  });

  constructor(
    private modalService: NgbModal,
    private formBuild:FormBuilder
  ) { }

  ngOnInit(): void {
  }


  public verModalDetallePersonaje(personajeRecibido:Personaje): void {
    console.log("Personaje recibido: ", personajeRecibido);
    this.personaje = personajeRecibido;
    this.modalService.open(this.modalDetallePersonaje, {
      size: "md",
      backdrop: "static",
      keyboard: false,
    });

  }

  public cerrarModalDetallePersonaje(): void {
    this.modalService.dismissAll();
  }

}
