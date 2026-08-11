import { DecimalPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TextareaComponent } from '../../../shared/ui/textarea/textarea.component';
import { ImageUploadComponent } from '../../../shared/ui/image-upload/image-upload.component';

export type CocktailStepFormGroup = FormGroup<{
  description: FormControl<string>;
  imageUrl: FormControl<string | null>;
}>;

@Component({
  selector: 'app-cocktail-step-form',
  standalone: true,
  imports: [MatButtonModule, TextareaComponent, ImageUploadComponent, DecimalPipe],
  host: { class: 'block' },
  template: `
    <article class="rounded-2xl border border-white/10 bg-black/15 p-4 md:p-5">
      <div class="mb-4 flex items-center justify-between">
        <div class="text-sm font-bold">
          <span class="mr-2 text-white/25">{{ index() + 1 | number: '2.0-0' }}</span>
          Шаг
        </div>
        @if (canRemove()) {
          <button mat-button type="button" (click)="remove.emit()">Удалить</button>
        }
      </div>

      <div class="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <ui-textarea
          label="Что сделать"
          [control]="group().controls.description"
          [rows]="7"
          [maxLength]="800"
          error="Опишите действие"
        />

        <ui-image-upload
          [label]="'Фото шага ' + (index() + 1)"
          [value]="group().controls.imageUrl.value"
          (valueChange)="group().controls.imageUrl.setValue($event)"
        />
      </div>
    </article>
  `
})
export class CocktailStepFormComponent {
  readonly group = input.required<CocktailStepFormGroup>();
  readonly index = input.required<number>();
  readonly canRemove = input(false);
  readonly remove = output<void>();
}
