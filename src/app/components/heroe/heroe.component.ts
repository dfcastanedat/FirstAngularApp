import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  heroe: Heroe = { nombre: '', bio: '', img: '', casa: '', aparicion: '' };

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.heroe = _heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit(): void {
    console.log(this.heroe);
  }
}
