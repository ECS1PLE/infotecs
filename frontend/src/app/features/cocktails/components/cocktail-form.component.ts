import { Component, input, OnChanges, output, SimpleChanges } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  Cocktail,
  CocktailPayload
} from '../../../core/models/cocktail.model';
import { TextInputComponent } from '../../../shared/ui/text-input/text-input.component';
import { TextareaComponent } from '../../../shared/ui/textarea/textarea.component';
import { ImageUploadComponent } from '../../../shared/ui/image-upload/image-upload.component';
import {
  CocktailStepFormComponent,
  CocktailStepFormGroup
} from './cocktail-step-form.component';

@Component({
  selector: 'app-cocktail-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    TextInputComponent,
    TextareaComponent,
    ImageUploadComponent,
    CocktailStepFormComponent
  ],
  template: `
    <form [formGroup]="form" class="space-y-6" (ngSubmit)="submit()">
      <section class="glass-panel rounded-3xl p-5 md:p-7">
        <h2 class="mb-6 text-xl font-bold tracking-tight">Основное</h2>

        <div class="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div class="space-y-3">
            <ui-text-input
              label="Название"
              [control]="form.controls.name"
              [maxLength]="100"
              error="Укажите название"
            />

            <ui-textarea
              label="Описание"
              [control]="form.controls.description"
              [rows]="8"
              [maxLength]="1200"
              error="Добавьте описание"
            />
          </div>

          <ui-image-upload
            label="Итоговое изображение"
            [value]="form.controls.imageUrl.value"
            (valueChange)="form.controls.imageUrl.setValue($event)"
          />
        </div>
      </section>

      <section class="glass-panel rounded-3xl p-5 md:p-7">
        <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 class="text-xl font-bold tracking-tight">Шаги</h2>
          <button mat-stroked-button type="button" (click)="addStep()">
            Добавить шаг
          </button>
        </div>

        <div class="flex flex-col gap-5">
          @for (step of steps.controls; track step; let index = $index) {
            <app-cocktail-step-form
              [group]="step"
              [index]="index"
              [canRemove]="steps.length > 1"
              (remove)="removeStep(index)"
            />
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
          {{ saving() ? 'Сохранение...' : submitLabel() }}
        </button>
      </div>
    </form>
  `
})
export class CocktailFormComponent implements OnChanges {
  readonly initialValue = input<Cocktail | null>(null);
  readonly saving = input(false);
  readonly submitLabel = input('Сохранить');
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
    steps: new FormArray<CocktailStepFormGroup>([this.createStep()])
  });

  get steps(): FormArray<CocktailStepFormGroup> {
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

    for (const step of cocktail.steps) {
      this.steps.push(this.createStep(step.description, step.imageUrl));
    }

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
  ): CocktailStepFormGroup {
    return new FormGroup({
      description: new FormControl(description, {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(800)]
      }),
      imageUrl: new FormControl<string | null>(imageUrl)
    });
  }
}
