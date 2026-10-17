import { Routes } from '@angular/router';
import { birthdayGuard } from './guards/birthday.guard';
import { LandingComponent } from './pages/landing.component';
import { WishesComponent } from './pages/wishes.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'wishes/:who', component: WishesComponent, canActivate: [birthdayGuard] },
  { path: '**', redirectTo: '' }
];
