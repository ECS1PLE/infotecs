import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { CocktailsFacade } from '../../../core/cocktails/cocktails.facade';
import { CocktailSummary } from '../../../core/models/cocktail.model';
import {
  ConfirmDialogComponent,
  ConfirmDialogData
} from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';
import { LoadingStateComponent } from '../../../shared/components/loading-state/loading-state.component';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { CocktailTableComponent } from '../components/cocktail-table.component';

@Component({
  selector: 'app-cocktail-list-page',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    MatButtonModule,
    PageHeaderComponent,
    LoadingStateComponent,
    EmptyStateComponent,
    CocktailTableComponent
  ],
  template: `
    <app-page-header
      eyebrow="барная карта"
      title="Коллекция"
      description="Все рецепты в одном месте. Быстрый доступ к составу, шагам приготовления и визуальным референсам."
    >
      <a mat-flat-button routerLink="/cocktails/new" class="!h-11">
        Добавить рецепт
      </a>
    </app-page-header>

    @if (status$ | async; as status) {
      @if (status === 'loading' || status === 'idle') {
        <app-loading-state label="Собираем барную карту" />
      } @else if ((items$ | async); as items) {
        @if (items.length === 0) {
          <app-empty-state
            title="Пока пусто"
            description="Создайте первый рецепт и соберите личную коллекцию коктейлей."
          >
            <a mat-flat-button routerLink="/cocktails/new">Первый рецепт</a>
          </app-empty-state>
        } @else {
          <div class="mb-4 flex items-center justify-between">
            <div class="text-sm text-white/35">
              {{ items.length }} {{ items.length === 1 ? 'рецепт' : 'рецептов' }}
            </div>
          </div>
          <app-cocktail-table [items]="items" (remove)="confirmDelete($event)" />
        }
      }
    }
  `
})
export class CocktailListPageComponent implements OnInit {
  private readonly cocktailsFacade = inject(CocktailsFacade);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);

  readonly items$ = this.cocktailsFacade.items$;
  readonly status$ = this.cocktailsFacade.status$;

  ngOnInit(): void {
    this.cocktailsFacade.loadList();
  }

  confirmDelete(cocktail: CocktailSummary): void {
    const data: ConfirmDialogData = {
      title: `Удалить «${cocktail.name}»?`,
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

        this.cocktailsFacade.delete(cocktail.id).subscribe({
          next: () => {
            this.snackBar.open('Рецепт удален', 'Закрыть', { duration: 2500 });
          }
        });
      });
  }
}
