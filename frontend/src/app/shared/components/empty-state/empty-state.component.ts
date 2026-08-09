import { Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  template: `
    <div
      class="relative overflow-hidden rounded-3xl border border-dashed border-white/15 bg-white/[0.025] px-6 py-20 text-center"
    >
      <div class="neon-orb left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 bg-[#7c5cff]"></div>
      <div class="relative mx-auto max-w-lg">
        <div class="text-5xl font-black tracking-[-0.08em] text-white/15">00</div>
        <h2 class="mt-4 text-2xl font-bold tracking-tight">{{ title() }}</h2>
        <p class="mx-auto mt-3 max-w-md text-sm leading-6 text-white/45">
          {{ description() }}
        </p>
        <div class="mt-7">
          <ng-content />
        </div>
      </div>
    </div>
  `
})
export class EmptyStateComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
