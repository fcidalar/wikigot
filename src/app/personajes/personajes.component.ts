import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.model';
import { PersonajesService } from '../services/personajes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: Personaje[] = [];
  personajesSinFiltrar: Personaje[] = [];

  public buscadorForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private personajesService: PersonajesService) {
    this.buscadorForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes(){
    this.personajesService.getPersonajes().subscribe((resp) => {

      console.log(resp);
      this.personajesSinFiltrar = resp;
      this.personajes = this.personajesSinFiltrar;
    });
  }

  buscar(){

    console.log(this.buscadorForm)
    this.personajes = this.personajesSinFiltrar.filter(personaje =>{
      return personaje.fullName.toLowerCase().includes(this.buscadorForm.get('fullName')?.value.toLowerCase());
    })
  }

  reestablecerFiltros(){
    this.buscadorForm.get('fullName')?.setValue('');
    this.personajes = this.personajesSinFiltrar;
  }

}
