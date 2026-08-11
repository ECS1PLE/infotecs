import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ui-textarea',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field appearance="outline">
      <mat-label>{{ label() }}</mat-label>
      <textarea
        matInput
        [formControl]="control()"
        [rows]="rows()"
        [attr.maxlength]="maxLength() || null"
      ></textarea>
      @if (control().invalid && control().touched && error()) {
        <mat-error>{{ error() }}</mat-error>
      }
    </mat-form-field>
  `
})
export class TextareaComponent {
  readonly control = input.required<FormControl<string>>();
  readonly label = input.required<string>();
  readonly rows = input(5);
  readonly maxLength = input<number | null>(null);
  readonly error = input('');
}
