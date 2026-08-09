import { Routes } from '@angular/router';

export const COCKTAIL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/cocktail-list-page.component').then(
        (module) => module.CocktailListPageComponent
      )
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./pages/cocktail-editor-page.component').then(
        (module) => module.CocktailEditorPageComponent
      )
  },
  {
    path: ':id/edit',
    loadComponent: () =>
      import('./pages/cocktail-editor-page.component').then(
        (module) => module.CocktailEditorPageComponent
      )
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/cocktail-detail-page.component').then(
        (module) => module.CocktailDetailPageComponent
      )
  }
];
