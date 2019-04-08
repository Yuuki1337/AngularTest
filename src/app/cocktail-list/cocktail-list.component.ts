import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

public cocktails

  constructor(public cocktail: CocktailService) { }

  initCocktail(): any {
    this.cocktails = this.cocktail.getCocktails()
    console.log(this.cocktails)
    return this.cocktails;
    
  }
  ngOnInit() {
    this.initCocktail()

  }

}
