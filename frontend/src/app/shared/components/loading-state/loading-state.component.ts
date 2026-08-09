import { Component, input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-state',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: `
    <div class="grid min-h-72 place-items-center rounded-3xl border border-white/10 bg-white/[0.025]">
      <div class="flex flex-col items-center gap-5 text-center">
        <mat-spinner diameter="36" />
        <div class="text-sm text-white/45">{{ label() }}</div>
      </div>
    </div>
  `
})
export class LoadingStateComponent {
  readonly label = input('Загружаем');
}
