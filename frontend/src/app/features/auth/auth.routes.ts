import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login-page.component').then(
        (module) => module.LoginPageComponent
      )
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register-page.component').then(
        (module) => module.RegisterPageComponent
      )
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];
