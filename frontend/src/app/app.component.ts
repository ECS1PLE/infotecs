import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthFacade } from './core/auth/auth.facade';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />'
})
export class AppComponent {
  private readonly authFacade = inject(AuthFacade);

  constructor() {
    this.authFacade.restoreSession();
  }
}
