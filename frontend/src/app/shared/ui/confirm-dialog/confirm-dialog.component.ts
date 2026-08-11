import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface ConfirmDialogData {
  title: string;
  description: string;
  confirmLabel: string;
}

@Component({
  selector: 'ui-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      <p class="max-w-md text-sm leading-6 text-white/55">
        {{ data.description }}
      </p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Отмена</button>
      <button mat-flat-button color="warn" [mat-dialog-close]="true">
        {{ data.confirmLabel }}
      </button>
    </mat-dialog-actions>
  `
})
export class ConfirmDialogComponent {
  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);
}
