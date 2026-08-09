import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadChildren: () =>
      import('./features/auth/auth.routes').then((module) => module.AUTH_ROUTES)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./shell/app-shell.component').then((module) => module.AppShellComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cocktails'
      },
      {
        path: 'cocktails',
        loadChildren: () =>
          import('./features/cocktails/cocktails.routes').then(
            (module) => module.COCKTAIL_ROUTES
          )
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
