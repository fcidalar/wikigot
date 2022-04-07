import { Component, Input, OnInit } from '@angular/core';
import { Continente } from 'src/app/interfaces/continente.model';

@Component({
  selector: 'app-card-continente',
  templateUrl: './card-continente.component.html',
  styleUrls: ['./card-continente.component.css']
})
export class CardContinenteComponent implements OnInit {

  @Input() dataInput:Continente = {
    id: 0,
    name: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
