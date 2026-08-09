import { Component, input } from '@angular/core';

@Component({
  selector: 'app-brand',
  standalone: true,
  template: `
    <div class="flex items-center gap-3">
      <div
        class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-black tracking-tight shadow-neon"
      >
        VB
      </div>
      <div>
        <div class="font-display text-lg font-black leading-none tracking-tight">
          Vavilov<span class="text-[#7c5cff]">.Bar</span>
        </div>
      </div>
    </div>
  `
})
export class BrandComponent {
  readonly showCaption = input(true);
}
