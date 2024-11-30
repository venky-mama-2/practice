import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"",
    loadComponent: () => import('./components/menu-bar/menu-bar.component').then( c => c.MenuBarComponent)
  }
];
