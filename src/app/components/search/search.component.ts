import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(
    private _heroesService: HeroesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.heroes = _heroesService.buscarHeroe(params['name']);
    });
  }

  ngOnInit(): void {
    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this._router.navigate(['heroe', idx]);
  }
}
