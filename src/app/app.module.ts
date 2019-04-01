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
import { ROUTES } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MovieListComponent,
    HightlightDirective,
    DisplayListDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
