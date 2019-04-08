import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

liste

  constructor(public cocktails: CocktailService) { }

  initCocktail(): any {
    this.liste = this.cocktails.getCocktails()
    console.log(this.liste)
    return this.liste;
    
  }
  ngOnInit() {
    this.initCocktail()

  }

}
