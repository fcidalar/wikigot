import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.model';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent implements OnInit {

  @Input() dataInput:Personaje = {
    id: 0,
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: ""
  };
  @Output() selectedPersonaje: EventEmitter<any>;

  constructor(private router:Router) {
    this.selectedPersonaje = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verDetalles(){
    this.selectedPersonaje.emit(this.dataInput);
  }

}
