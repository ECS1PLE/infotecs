import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { CocktailsFacade } from '../../../core/cocktails/cocktails.facade';
import {
  ConfirmDialogComponent,
  ConfirmDialogData
} from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import { LoadingStateComponent } from '../../../shared/ui/loading-state/loading-state.component';
import { MediaUrlPipe } from '../../../shared/pipes/media-url.pipe';
import { CocktailStepCardComponent } from '../components/cocktail-step-card.component';

@Component({
  selector: 'app-cocktail-detail-page',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    RouterLink,
    MatButtonModule,
    MediaUrlPipe,
    LoadingStateComponent,
    CocktailStepCardComponent
  ],
  template: `
    @if (cocktail$ | async; as cocktail) {
      <article>
        <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
          <a mat-button routerLink="/cocktails">← Назад</a>
          <div class="flex gap-2">
            <a mat-stroked-button [routerLink]="['/cocktails', cocktail.id, 'edit']">
              Изменить
            </a>
            <button mat-button type="button" (click)="confirmDelete(cocktail.id, cocktail.name)">
              Удалить
            </button>
          </div>
        </div>

        <section class="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <div class="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-10">
            <div class="neon-orb -left-16 top-8 h-52 w-52 bg-[#7c5cff]"></div>
            <div class="relative">
              <div class="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#72f6ff]">
                {{ cocktail.createdAt | date: 'dd.MM.yyyy' }}
              </div>
              <h1 class="text-gradient max-w-3xl text-5xl font-black leading-[0.93] tracking-[-0.065em] md:text-7xl">
                {{ cocktail.name }}
              </h1>
              <p class="mt-7 max-w-2xl text-base leading-7 text-white/55">
                {{ cocktail.description }}
              </p>
              <div class="mt-10 text-xs uppercase tracking-[0.18em] text-white/25">
                Обновлено {{ cocktail.updatedAt | date: 'dd.MM.yyyy, HH:mm' }}
              </div>
            </div>
          </div>

          <div class="relative h-80 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:h-full lg:min-h-80">
            @if (cocktail.imageUrl) {
              <img
                [src]="cocktail.imageUrl | mediaUrl"
                [alt]="cocktail.name"
                class="absolute inset-0 h-full w-full object-cover"
              >
            } @else {
              <div class="grid h-full place-items-center px-8 text-center text-sm text-white/25">
                Нет изображения
              </div>
            }
          </div>
        </section>

        <section class="mt-14">
          <h2 class="mb-7 text-3xl font-black">Приготовление</h2>
          <div class="flex flex-col gap-5">
            @for (step of cocktail.steps; track step.id; let index = $index) {
              <app-cocktail-step-card [step]="step" [index]="index" />
            }
          </div>
        </section>
      </article>
    } @else {
      <ui-loading-state label="Загрузка рецепта..." />
    }
  `
})
export class CocktailDetailPageComponent implements OnInit, OnDestroy {
  private readonly cocktailsFacade = inject(CocktailsFacade);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);

  readonly id = input.required<string>();
  readonly cocktail$ = this.cocktailsFacade.current$;

  ngOnInit(): void {
    this.cocktailsFacade.loadOne(this.id());
  }

  ngOnDestroy(): void {
    this.cocktailsFacade.clearCurrent();
  }

  confirmDelete(id: string, name: string): void {
    const data: ConfirmDialogData = {
      title: `Удалить «${name}»?`,
      description: 'Рецепт будет удалён без возможности восстановления.',
      confirmLabel: 'Удалить'
    };

    this.dialog
      .open(ConfirmDialogComponent, { data, width: '440px' })
      .afterClosed()
      .subscribe((confirmed: boolean | undefined) => {
        if (!confirmed) {
          return;
        }

        this.cocktailsFacade.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Рецепт удалён', 'Закрыть', { duration: 2500 });
            void this.router.navigate(['/cocktails']);
          }
        });
      });
  }
}
