import { Component, inject, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UploadService } from '../../../core/uploads/upload.service';
import { MediaUrlPipe } from '../../pipes/media-url.pipe';

@Component({
  selector: 'ui-image-upload',
  standalone: true,
  imports: [MatButtonModule, MatProgressBarModule, MediaUrlPipe],
  template: `
    <div class="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      @if (value()) {
        <div class="relative aspect-[16/9] overflow-hidden bg-black/30">
          <img
            [src]="value() | mediaUrl"
            [alt]="label()"
            class="h-full w-full object-cover"
          >
          <div class="absolute inset-x-0 bottom-0 flex justify-end gap-2 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
            <button mat-stroked-button type="button" (click)="fileInput.click()">
              Заменить
            </button>
            <button mat-stroked-button type="button" (click)="remove()">
              Удалить
            </button>
          </div>
        </div>
      } @else {
        <button
          type="button"
          class="flex min-h-40 w-full flex-col items-center justify-center gap-2 px-5 py-8 text-center transition hover:bg-white/[0.035]"
          (click)="fileInput.click()"
        >
          <span class="text-sm font-semibold">{{ label() }}</span>
          <span class="text-xs text-white/40">PNG, JPG или WEBP до 8 МБ</span>
        </button>
      }

      @if (uploading()) {
        <mat-progress-bar mode="indeterminate" />
      }

      <input
        #fileInput
        hidden
        type="file"
        accept="image/png,image/jpeg,image/webp"
        (change)="onFileSelected($event)"
      >
    </div>
  `
})
export class ImageUploadComponent {
  private readonly uploadService = inject(UploadService);

  readonly value = input<string | null>(null);
  readonly label = input('Добавить изображение');
  readonly valueChange = output<string | null>();
  readonly uploading = signal(false);

  onFileSelected(event: Event): void {
    const el = event.target as HTMLInputElement;
    const file = el.files?.[0];
    if (!file) {
      return;
    }

    this.uploading.set(true);
    this.uploadService.upload(file).subscribe({
      next: ({ url }) => {
        this.valueChange.emit(url);
        this.uploading.set(false);
        el.value = '';
      },
      error: () => {
        this.uploading.set(false);
        el.value = '';
      }
    });
  }

  remove(): void {
    this.valueChange.emit(null);
  }
}
