import { DecimalPipe } from '@angular/common';
import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  Cocktail,
  CocktailPayload
} from '../../../core/models/cocktail.model';
import { ImageUploadComponent } from '../../../shared/components/image-upload/image-upload.component';

type StepForm = FormGroup<{
  description: FormControl<string>;
  imageUrl: FormControl<string | null>;
}>;

@Component({
  selector: 'app-cocktail-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ImageUploadComponent,
    DecimalPipe
  ],
  template: `
    <form [formGroup]="form" class="space-y-6" (ngSubmit)="submit()">
      <section class="glass-panel rounded-3xl p-5 md:p-7">
        <div class="mb-6">
          <div class="text-xs font-semibold uppercase tracking-[0.2em] text-[#72f6ff]">
            01 / Основа
          </div>
          <h2 class="mt-2 text-xl font-bold tracking-tight">Карточка коктейля</h2>
        </div>

        <div class="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div class="space-y-3">
            <mat-form-field appearance="outline">
              <mat-label>Название</mat-label>
              <input matInput formControlName="name" maxlength="100">
              @if (form.controls.name.invalid && form.controls.name.touched) {
                <mat-error>Укажите название</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Описание</mat-label>
              <textarea
                matInput
                formControlName="description"
                rows="8"
                maxlength="1200"
              ></textarea>
              @if (form.controls.description.invalid && form.controls.description.touched) {
                <mat-error>Добавьте описание</mat-error>
              }
            </mat-form-field>
          </div>

          <app-image-upload
            label="Итоговое изображение"
            [value]="form.controls.imageUrl.value"
            (valueChange)="form.controls.imageUrl.setValue($event)"
          />
        </div>
      </section>

      <section class="glass-panel rounded-3xl p-5 md:p-7">
        <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div class="text-xs font-semibold uppercase tracking-[0.2em] text-[#c6ff3d]">
              02 / Процесс
            </div>
            <h2 class="mt-2 text-xl font-bold tracking-tight">Шаги приготовления</h2>
          </div>
          <button mat-stroked-button type="button" (click)="addStep()">
            Добавить шаг
          </button>
        </div>

        <div formArrayName="steps" class="space-y-5">
          @for (step of steps.controls; track step; let index = $index) {
            <article
              [formGroupName]="index"
              class="rounded-2xl border border-white/10 bg-black/15 p-4 md:p-5"
            >
              <div class="mb-4 flex items-center justify-between">
                <div class="text-sm font-bold">
                  <span class="mr-2 text-white/25">{{ index + 1 | number: '2.0-0' }}</span>
                  Шаг
                </div>
                @if (steps.length > 1) {
                  <button mat-button type="button" (click)="removeStep(index)">
                    Удалить
                  </button>
                }
              </div>

              <div class="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <mat-form-field appearance="outline">
                  <mat-label>Что нужно сделать</mat-label>
                  <textarea
                    matInput
                    formControlName="description"
                    rows="7"
                    maxlength="800"
                  ></textarea>
                  @if (step.controls.description.invalid && step.controls.description.touched) {
                    <mat-error>Опишите действие</mat-error>
                  }
                </mat-form-field>

                <app-image-upload
                  [label]="'Изображение шага ' + (index + 1)"
                  [value]="step.controls.imageUrl.value"
                  (valueChange)="step.controls.imageUrl.setValue($event)"
                />
              </div>
            </article>
          }
        </div>
      </section>

      <div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button mat-button type="button" (click)="cancel.emit()">Отмена</button>
        <button
          mat-flat-button
          type="submit"
          class="!h-11"
          [disabled]="saving()"
        >
          {{ saving() ? 'Сохраняем...' : submitLabel() }}
        </button>
      </div>
    </form>
  `
})
export class CocktailFormComponent implements OnChanges {
  readonly initialValue = input<Cocktail | null>(null);
  readonly saving = input(false);
  readonly submitLabel = input('Сохранить рецепт');
  readonly saved = output<CocktailPayload>();
  readonly cancel = output<void>();

  readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(100)]
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(1200)]
    }),
    imageUrl: new FormControl<string | null>(null),
    steps: new FormArray<StepForm>([this.createStep()])
  });

  get steps(): FormArray<StepForm> {
    return this.form.controls.steps;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['initialValue']) {
      return;
    }

    const cocktail = this.initialValue();
    if (!cocktail) {
      return;
    }

    this.form.controls.name.setValue(cocktail.name);
    this.form.controls.description.setValue(cocktail.description);
    this.form.controls.imageUrl.setValue(cocktail.imageUrl);
    this.steps.clear();

    cocktail.steps.forEach((step) => {
      this.steps.push(this.createStep(step.description, step.imageUrl));
    });

    if (this.steps.length === 0) {
      this.steps.push(this.createStep());
    }
  }

  addStep(): void {
    this.steps.push(this.createStep());
  }

  removeStep(index: number): void {
    if (this.steps.length <= 1) {
      return;
    }

    this.steps.removeAt(index);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    this.saved.emit({
      name: value.name.trim(),
      description: value.description.trim(),
      imageUrl: value.imageUrl,
      steps: value.steps.map((step) => ({
        description: step.description.trim(),
        imageUrl: step.imageUrl
      }))
    });
  }

  private createStep(
    description = '',
    imageUrl: string | null = null
  ): StepForm {
    return new FormGroup({
      description: new FormControl(description, {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(800)]
      }),
      imageUrl: new FormControl<string | null>(imageUrl)
    });
  }
}
