import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { CocktailStep } from '../../../core/models/cocktail.model';
import { MediaUrlPipe } from '../../../shared/pipes/media-url.pipe';

@Component({
  selector: 'app-cocktail-step-card',
  standalone: true,
  imports: [DecimalPipe, MediaUrlPipe],
  host: { class: 'block' },
  template: `
    <article class="glass-panel grid overflow-hidden rounded-3xl md:grid-cols-[1fr_0.78fr]">
      <div class="p-6 md:p-8">
        <div class="mb-5 text-5xl font-black tracking-[-0.08em] text-white/10">
          {{ index() + 1 | number: '2.0-0' }}
        </div>
        <p class="max-w-2xl text-base leading-7 text-white/65">
          {{ step().description }}
        </p>
      </div>
      <div class="relative h-[16rem] border-t border-white/10 bg-black/20 md:h-full md:min-h-[16.75rem] md:border-l md:border-t-0">
        @if (step().imageUrl) {
          <img
            [src]="step().imageUrl | mediaUrl"
            [alt]="'Шаг ' + (index() + 1)"
            class="absolute inset-0 h-full w-full object-cover"
          >
        } @else {
          <div class="grid h-full place-items-center text-xs uppercase tracking-[0.18em] text-white/20">
            нет фото
          </div>
        }
      </div>
    </article>
  `
})
export class CocktailStepCardComponent {
  readonly step = input.required<CocktailStep>();
  readonly index = input.required<number>();
}
