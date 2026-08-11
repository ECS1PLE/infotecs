import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-alert',
  standalone: true,
  template: `
    <div class="rounded-xl border border-[#ff4d73]/25 bg-[#ff4d73]/10 px-4 py-3 text-sm text-[#ff8da6]">
      {{ message() }}
    </div>
  `
})
export class AlertComponent {
  readonly message = input.required<string>();
}
