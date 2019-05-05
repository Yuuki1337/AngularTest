import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HightlightDirective } from './hightlight.directive';
import { DisplayListDirective } from './display-list.directive';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component'
import { CocktailService } from './cocktail.service';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MovieListComponent,
    HightlightDirective,
    DisplayListDirective,
    MenuComponent,
    CocktailListComponent,
    SearchMovieComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
