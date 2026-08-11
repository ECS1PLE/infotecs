import { AsyncPipe } from '@angular/common';
import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { CocktailsFacade } from '../../../core/cocktails/cocktails.facade';
import { CocktailPayload } from '../../../core/models/cocktail.model';
import { LoadingStateComponent } from '../../../shared/ui/loading-state/loading-state.component';
import { PageHeaderComponent } from '../../../shared/ui/page-header/page-header.component';
import { CocktailFormComponent } from '../components/cocktail-form.component';

@Component({
  selector: 'app-cocktail-editor-page',
  standalone: true,
  imports: [
    AsyncPipe,
    PageHeaderComponent,
    LoadingStateComponent,
    CocktailFormComponent
  ],
  template: `
    @if (viewModel$ | async; as vm) {
      <ui-page-header
        [eyebrow]="vm.isEdit ? 'редактирование' : 'новый'"
        [title]="vm.isEdit ? 'Редактирование' : 'Новый рецепт'"
        [description]="
          vm.isEdit
            ? 'Измените описание, шаги или изображения.'
            : 'Заполните карточку и добавьте шаги приготовления.'
        "
      />

      @if (vm.isEdit && (vm.status === 'loading' || !vm.cocktail)) {
        <ui-loading-state label="Загрузка рецепта..." />
      } @else {
        <app-cocktail-form
          [initialValue]="vm.cocktail"
          [saving]="vm.mutationStatus === 'loading'"
          [submitLabel]="vm.isEdit ? 'Сохранить' : 'Создать'"
          (saved)="save($event)"
          (cancel)="cancel()"
        />
      }
    }
  `
})
export class CocktailEditorPageComponent implements OnInit, OnDestroy {
  private readonly cocktailsFacade = inject(CocktailsFacade);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  readonly id = input<string>();

  readonly viewModel$ = combineLatest([
    this.cocktailsFacade.current$,
    this.cocktailsFacade.status$,
    this.cocktailsFacade.mutationStatus$
  ]).pipe(
    map(([cocktail, status, mutationStatus]) => ({
      cocktail,
      status,
      mutationStatus,
      isEdit: Boolean(this.id())
    }))
  );

  ngOnInit(): void {
    const id = this.id();
    if (id) {
      this.cocktailsFacade.loadOne(id);
    }
  }

  ngOnDestroy(): void {
    this.cocktailsFacade.clearCurrent();
    this.cocktailsFacade.resetMutation();
  }

  save(payload: CocktailPayload): void {
    const id = this.id();
    const request$ = id
      ? this.cocktailsFacade.update(id, payload)
      : this.cocktailsFacade.create(payload);

    request$.subscribe({
      next: (cocktail) => {
        this.snackBar.open(
          id ? 'Сохранено' : 'Рецепт создан',
          'Закрыть',
          { duration: 2500 }
        );
        void this.router.navigate(['/cocktails', cocktail.id]);
      }
    });
  }

  cancel(): void {
    const id = this.id();
    void this.router.navigate(id ? ['/cocktails', id] : ['/cocktails']);
  }
}
