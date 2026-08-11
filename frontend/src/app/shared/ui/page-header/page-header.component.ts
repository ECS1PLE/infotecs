import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-page-header',
  standalone: true,
  template: `
    <header class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        @if (eyebrow()) {
          <div class="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#72f6ff]">
            {{ eyebrow() }}
          </div>
        }
        <h1 class="text-gradient text-4xl font-black tracking-[-0.055em] md:text-6xl">
          {{ title() }}
        </h1>
        @if (description()) {
          <p class="mt-4 max-w-2xl text-sm leading-6 text-white/50 md:text-base">
            {{ description() }}
          </p>
        }
      </div>
      <ng-content />
    </header>
  `
})
export class PageHeaderComponent {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly description = input('');
}
