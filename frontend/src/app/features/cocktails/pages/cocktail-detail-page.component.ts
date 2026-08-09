import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { CocktailsFacade } from '../../../core/cocktails/cocktails.facade';
import {
  ConfirmDialogComponent,
  ConfirmDialogData
} from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { LoadingStateComponent } from '../../../shared/components/loading-state/loading-state.component';
import { MediaUrlPipe } from '../../../shared/pipes/media-url.pipe';

@Component({
  selector: 'app-cocktail-detail-page',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    DecimalPipe,
    RouterLink,
    MatButtonModule,
    MediaUrlPipe,
    LoadingStateComponent
  ],
  template: `
    @if (cocktail$ | async; as cocktail) {
      <article>
        <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
          <a mat-button routerLink="/cocktails">← К коллекции</a>
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
                рецепт / {{ cocktail.createdAt | date: 'dd.MM.yyyy' }}
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

          <div class="min-h-80 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
            @if (cocktail.imageUrl) {
              <img
                [src]="cocktail.imageUrl | mediaUrl"
                [alt]="cocktail.name"
                class="h-full min-h-80 w-full object-cover"
              >
            } @else {
              <div class="grid h-full min-h-80 place-items-center px-8 text-center text-sm text-white/25">
                Итоговое изображение не добавлено
              </div>
            }
          </div>
        </section>

        <section class="mt-14">
          <div class="mb-7">
            <div class="text-xs font-semibold uppercase tracking-[0.22em] text-[#c6ff3d]">
              процесс
            </div>
            <h2 class="mt-2 text-3xl font-black tracking-[-0.045em]">
              Как приготовить
            </h2>
          </div>

          <div class="space-y-5">
            @for (step of cocktail.steps; track step.id; let index = $index) {
              <article class="glass-panel grid overflow-hidden rounded-3xl md:grid-cols-[1fr_0.78fr]">
                <div class="p-6 md:p-8">
                  <div class="mb-5 text-5xl font-black tracking-[-0.08em] text-white/10">
                    {{ index + 1 | number: '2.0-0' }}
                  </div>
                  <p class="max-w-2xl text-base leading-7 text-white/65">
                    {{ step.description }}
                  </p>
                </div>
                <div class="min-h-56 border-t border-white/10 bg-black/20 md:border-l md:border-t-0">
                  @if (step.imageUrl) {
                    <img
                      [src]="step.imageUrl | mediaUrl"
                      [alt]="'Шаг ' + (index + 1)"
                      class="h-full min-h-56 w-full object-cover"
                    >
                  } @else {
                    <div class="grid h-full min-h-56 place-items-center text-xs uppercase tracking-[0.18em] text-white/20">
                      visual pending
                    </div>
                  }
                </div>
              </article>
            }
          </div>
        </section>
      </article>
    } @else {
      <app-loading-state label="Загружаем рецепт" />
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
      description:
        'Рецепт будет удален из вашей коллекции. Это действие нельзя отменить.',
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
            this.snackBar.open('Рецепт удален', 'Закрыть', { duration: 2500 });
            void this.router.navigate(['/cocktails']);
          }
        });
      });
  }
}
