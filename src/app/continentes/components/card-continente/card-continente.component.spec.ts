import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContinenteComponent } from './card-continente.component';

describe('CardContinenteComponent', () => {
  let component: CardContinenteComponent;
  let fixture: ComponentFixture<CardContinenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContinenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContinenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
