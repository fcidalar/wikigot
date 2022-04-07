import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.model';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: Personaje[] = [];


  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes(){
    this.personajesService.getPersonajes().subscribe((resp) => {

      console.log(resp);
      this.personajes = resp;
    });
  }

}
