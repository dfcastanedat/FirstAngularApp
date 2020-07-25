import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscarHeroe(nombre: string) {
    this._heroesService.buscarHeroe(nombre);
  }
}
