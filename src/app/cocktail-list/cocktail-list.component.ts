import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  private service: CocktailService
  public cocktails = []


  constructor(public param_service: CocktailService) {

    this.service = param_service
  }
 

  initCocktail(): any {


  }


  ngOnInit() {

    this.service.getCocktails().subscribe((param_message) => {

      this.cocktails = param_message

    })
  }

}


