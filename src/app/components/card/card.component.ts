import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() heroe: Heroe = {
    nombre: '',
    bio: '',
    img: '',
    casa: '',
    aparicion: '',
  };
  @Input() index: number = 0;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private _router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {}

  verHeroe() {
    //this.heroeSeleccionado.emit(this.index);
    this._router.navigate(['/heroe', this.index]);
  }
}
