import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';

const ROUTES: Routes = [
  {path: '', component: UserProfileComponent},
  { path: 'signup', component: SignUpComponent },
  { path: 'userprofile', component: UserProfileComponent },
];

export { ROUTES };