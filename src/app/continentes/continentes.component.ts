import { Component, OnInit } from '@angular/core';
import { Continente } from '../interfaces/continente.model';
import { ContinentesService } from '../services/continentes.service';

@Component({
  selector: 'app-continentes',
  templateUrl: './continentes.component.html',
  styleUrls: ['./continentes.component.css']
})
export class ContinentesComponent implements OnInit {
  continentes: Continente[] = [];

  constructor(private continenteService: ContinentesService) { }

  ngOnInit(): void {
    this.getContinentes();
  }

  getContinentes(){
    this.continenteService.getContinentes().subscribe((resp) => {

      console.log(resp);
      this.continentes = resp;
    });
  }

}
