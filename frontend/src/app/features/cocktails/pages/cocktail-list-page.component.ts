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
} from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import { EmptyStateComponent } from '../../../shared/ui/empty-state/empty-state.component';
import { LoadingStateComponent } from '../../../shared/ui/loading-state/loading-state.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
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
    <ui-page-header
      eyebrow="каталог"
      title="Коктейли"
      description="Список сохранённых рецептов."
    >
      <a mat-flat-button routerLink="/cocktails/new" class="!h-11">
        Добавить
      </a>
    </ui-page-header>

    @if (status$ | async; as status) {
      @if (status === 'loading' || status === 'idle') {
        <ui-loading-state label="Загрузка..." />
      } @else if ((items$ | async); as items) {
        @if (items.length === 0) {
          <ui-empty-state
            title="Пока пусто"
            description="Добавьте первый рецепт."
          >
            <a mat-flat-button routerLink="/cocktails/new">Создать</a>
          </ui-empty-state>
        } @else {
          <div class="mb-4 text-sm text-white/35">
            {{ items.length }} {{ items.length === 1 ? 'рецепт' : 'рецептов' }}
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

        this.cocktailsFacade.delete(cocktail.id).subscribe({
          next: () => {
            this.snackBar.open('Рецепт удалён', 'Закрыть', { duration: 2500 });
          }
        });
      });
  }
}
