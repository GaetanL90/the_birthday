import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing.component';
import { WishesComponent } from './pages/wishes.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'wishes/:who', component: WishesComponent },
  { path: '**', redirectTo: '' }
];
