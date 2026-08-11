import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-empty-state',
  standalone: true,
  template: `
    <div class="rounded-3xl border border-dashed border-white/15 bg-white/[0.025] px-6 py-16 text-center">
      <h2 class="text-2xl font-bold tracking-tight">{{ title() }}</h2>
      <p class="mx-auto mt-3 max-w-md text-sm leading-6 text-white/45">
        {{ description() }}
      </p>
      <div class="mt-7">
        <ng-content />
      </div>
    </div>
  `
})
export class EmptyStateComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
