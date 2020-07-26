import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _heroesService: HeroesService, private _router: Router) {}

  ngOnInit(): void {}

  buscarHeroe(nombre: string) {
    this._router.navigate(['search', nombre]);
  }
}
