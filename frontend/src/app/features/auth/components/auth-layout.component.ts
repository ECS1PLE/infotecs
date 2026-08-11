import { Component, input } from '@angular/core';
import { BrandComponent } from '../../../shared/ui/brand/brand.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [BrandComponent],
  template: `
    <main class="relative h-screen overflow-hidden px-5 py-5 md:px-8 md:py-8">
      <div class="neon-orb -left-24 top-10 h-72 w-72 bg-[#7c5cff]"></div>
      <div class="neon-orb bottom-0 right-0 h-96 w-96 bg-[#35e8ff]"></div>

      <div class="mx-auto flex h-full max-w-7xl flex-col">
        <div class="flex shrink-0 items-center justify-between">
          <ui-brand />
        </div>

        <div class="grid min-h-0 flex-1 items-center gap-8 py-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-8">
          <section class="hidden lg:block">
            <div class="max-w-2xl">
              <h1 class="text-gradient text-7xl font-black leading-[0.88] tracking-[-0.075em] xl:text-8xl">
                Барная<br>карта
              </h1>
              <p class="mt-7 max-w-xl text-base leading-7 text-white/45">
                Рецепты коктейлей с шагами и фотографиями.
              </p>
            </div>
          </section>

          <section class="glass-panel mx-auto max-h-full w-full max-w-xl overflow-y-auto rounded-[2rem] p-6 shadow-neon sm:p-9">
            <div class="mb-8">
              <div class="text-xs font-semibold uppercase tracking-[0.2em] text-[#c6ff3d]">
                {{ eyebrow() }}
              </div>
              <h2 class="mt-3 text-3xl font-black tracking-[-0.045em]">
                {{ title() }}
              </h2>
              <p class="mt-3 text-sm leading-6 text-white/45">
                {{ description() }}
              </p>
            </div>
            <ng-content />
          </section>
        </div>
      </div>
    </main>
  `
})
export class AuthLayoutComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
