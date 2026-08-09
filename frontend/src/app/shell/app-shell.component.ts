import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthFacade } from '../core/auth/auth.facade';
import { BrandComponent } from '../shared/components/brand/brand.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    AsyncPipe,
    BrandComponent
  ],
  template: `
    <div class="min-h-screen">
      <header class="sticky top-0 z-40 border-b border-white/[0.07] bg-[#08080d]/80 backdrop-blur-2xl">
        <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a routerLink="/cocktails" aria-label="BAR/21">
            <app-brand [showCaption]="false" />
          </a>

          <nav class="hidden items-center gap-1 md:flex">
            <a
              routerLink="/cocktails"
              routerLinkActive="!bg-white/[0.07] !text-white"
              [routerLinkActiveOptions]="{ exact: true }"
              class="rounded-full px-4 py-2 text-sm text-white/45 transition hover:bg-white/[0.04] hover:text-white"
            >
              Каталог
            </a>
            <a
              routerLink="/cocktails/new"
              routerLinkActive="!bg-white/[0.07] !text-white"
              class="rounded-full px-4 py-2 text-sm text-white/45 transition hover:bg-white/[0.04] hover:text-white"
            >
              Новый рецепт
            </a>
          </nav>

          <div class="flex items-center gap-3">
            @if (user$ | async; as user) {
              <div class="hidden text-right sm:block">
                <div class="text-sm font-semibold">{{ user.name }}</div>
                <div class="text-[11px] text-white/35">{{ user.email }}</div>
              </div>
            }
            <button mat-stroked-button type="button" (click)="logout()">Выйти</button>
          </div>
        </div>
      </header>

      <main class="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <router-outlet />
      </main>
    </div>
  `
})
export class AppShellComponent {
  private readonly authFacade = inject(AuthFacade);
  private readonly router = inject(Router);

  readonly user$ = this.authFacade.user$;

  logout(): void {
    this.authFacade.logout();
    void this.router.navigate(['/auth/login']);
  }
}
